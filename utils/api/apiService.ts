import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { toast } from "react-toastify";

const BASE_URL = 'https://api.songa.app';

// Define a custom response type that represents both success and failure cases
type CustomResponse<T> = AxiosResponse<T> | { error: string };

// Function to check if sessionToken and userId are already present in local storage
function hasSession(): boolean {
  const sessionToken = localStorage.getItem('sessionToken');
  const userId = localStorage.getItem('userId');
  return sessionToken !== null && userId !== null;
}

export async function createRiderAccount(data: CreateRiderData): Promise<CustomResponse<any>> {
  // Check if sessionToken and userId already exist in local storage
  if (hasSession()) {
    toast.error('You already have an account.');
    return { error: 'You already have an account.' };
  }

  const endpoint = `${BASE_URL}/api/riders/auth/create-rider-account`;

  const requestOptions: AxiosRequestConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data,
  };

  try {
    const response = await axios(endpoint, requestOptions);
    toast.success(response.data.message);

    const sessionToken = response.data.rider.sessionToken;
    const userId = response.data.rider.id;

    console.log("Res: ", response.data)

    localStorage.setItem('sessionToken', sessionToken);
    localStorage.setItem('userId', userId);

    return response;
  } catch (e: any) {
    if (e.response && e.response.data && e.response.data.message === 'Forbiden. Rider already exists') {
      // Show a custom toast message for "rider exists" error
      toast.error('The rider already exists. Please use a different phone no.');
      return { error: 'The rider already exists. Please use a different phone no.' };
    } else {

      // Show a generic error message for other errors
      toast.error('An error occurred while registering the user.');
      return { error: 'An error occurred while registering the user.' };
    }
  }
}

export async function uploadDocuments(files: FormData): Promise<CustomResponse<any>> {
    // Check if the user has an active session
    if (!hasSession()) {
      toast.error('You need to have an account to upload documents.');
      return { error: 'You need to have an account to upload documents.' };
    }

    const endpoint = `${BASE_URL}/api/riders/documents/upload/${ localStorage.getItem('userId')}`;
  
    const requestOptions: AxiosRequestConfig = {
      method: 'POST',
      maxBodyLength: Infinity,
      headers: {
        'Content-Type': 'multipart/form-data', // Important for file uploads
        'Authorization':`Bearer ${localStorage.getItem('sessionToken')}`, // Attach the session token to the request
      },
      data: files,
    };
  
    try {
      const response = await axios(endpoint, requestOptions);
      toast.success('Documents uploaded successfully!');
      return response;
    } catch (e: any) {
      if(e.response && e.response.data &&e.response.data.message){
        toast.error(e.response.data.message)

        return { error: e.response.data.message }
      }
      // Show a generic error message for any upload errors
      toast.error('An error occurred while uploading the documents.');
      return { error: 'An error occurred while uploading the documents.' };
    }
  }