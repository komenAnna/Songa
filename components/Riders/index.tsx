"use client"
import { useMultistepForm } from '@/hooks/useMultistepForm';
/* eslint-disable react/jsx-key */
import React, { FormEvent, useState } from 'react';
import ProgressSteps from '../Elements/Loaders/ProgressSteps';
import BikeDetails from './Forms/BikeDetails';
import RiderDetails from './Forms/RiderDetails';
import Upload from './Forms/Upload';
import Preview from './Preview';
import { createRiderAccount, uploadDocuments } from '@/utils';
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';
import RiderProfile from "@/components/Riders/Forms/RiderProfile";

type FormData = {
  first_name: string;
  last_name: string;
  password: string;
  confirmPassword: string;
  phone_no: string;
  location: string;
  stage: string;
  address: string;
  gender: string;
  ID_front: any;
  ID_back: any;
  license_front: any;
  license_back: any;
  bike_type: string;
  plate_no: string;
  insurance_provider: string;
  insurance_policy_no: string;
};

const INITIAL_DATA: FormData = {
  first_name: '',
  last_name: '',
  password: '',
  confirmPassword: '',
  phone_no: '',
  location: '',
  stage: '',
  address: '',
  gender: '',
  ID_front: '',
  ID_back: '',
  license_front: '',
  license_back: '',
  bike_type: '',
  plate_no: '',
  insurance_provider: '',
  insurance_policy_no: '',
};



export default function RegistrationForm() {
  const [data, setData] = useState(INITIAL_DATA);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isuploadComplete, setIsUploadComplete] = useState(false);
  const { currentStepIndex, step, steps, isFirstStep, isLastStep, goTo, next, back } = useMultistepForm([
    { component: <RiderDetails {...data} updateFields={updateFields} />, step: { number: 1, label: 'Rider Details' } },
    { component: <RiderProfile {...data} updateFields={updateFields} />, step: { number: 2, label: 'Profile' } },
    { component: <Upload {...data} updateFields={updateFields} />, step: { number: 3, label: 'Upload' } },
    { component: <BikeDetails {...data} updateFields={updateFields} />, step: { number: 4, label: 'Bike Details' } },
    { component: <Preview {...data} updateFields={updateFields} />, step: { number: 5, label: 'Preview' } },
  ]);

  const showBackButton = !isFirstStep && currentStepIndex !== 0;

  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return { ...prev, ...fields };
    });
  }

  async function onSubmitHandler(e: FormEvent) {
    e.preventDefault();

    try {
      setIsLoading(true);

      await createRiderAccount({
        first_name: data.first_name,
        last_name: data.last_name,
        phone: data.phone_no,
        password: data.password
      })



      next();
    } catch (error) {
      toast.error('An unknown error occurred!');
    } finally {
      setIsLoading(false);
    }
  }

  async function onUploadHandler(e: FormEvent){
    e.preventDefault();

    try {

      setIsUploading(true);
      // Prepare the FormData for document upload

      const formData = new FormData();
      formData.append('images', data.ID_front);
      formData.append('images', data.ID_back);
      if(data.license_front) {
        formData.append('images', data.license_front);
      }
      if(data.license_back){
        formData.append('images', data.license_back);
      }

      // Upload documents
      const res = await uploadDocuments(formData);
      if(res){ //handle success res status
        setIsUploadComplete(true);
      }


    } catch(e){
      console.log({e})
      toast.error('An unknown error occurred!');
    } finally {
      setIsUploading(false);
    }
  }

  const progressPercentage = ((currentStepIndex + 1) / steps.length) * 100;

  return (
    <div id="rider_reg"  className="frosted-glass relative text-white py-5 px-3 border-transparent md:mx-20 w-[86vw] bg-primary md:w-auto md:my-10 rounded-lg shadow-md">
      <form autoComplete='off' onSubmit={onSubmitHandler} className="p-5">
        {/* Custom Progress Bar */}
        <ProgressSteps steps={steps} currentStepIndex={currentStepIndex} />

        {step}

        {/* Navigation */}
        <div className="mt-[1rem] flex gap-[.5rem] justify-end">
          {showBackButton && (
            <button
              type="button"
              onClick={back}
              className="rounded-lg border-[#FB4552] px-4 py-2 border-2 flex items-center justify-center space-x-3 hover:bg-[#FB4552]"
            >
              Back
            </button>
          )}
          {currentStepIndex === 1 && (
            isLoading? 
            (
              <div className="flex items-center justify-center">
                <ClipLoader color="#FB4552" loading={isLoading} size={35} />
              </div>
            ): (
            <button
              type="button"
              disabled={isUploading} //||isuploadComplete
              onClick={onUploadHandler}
              className="rounded-lg border-[#FB4552] px-4 py-2 border-2 flex items-center justify-center space-x-3 hover:bg-[#FB4552]"
            >
              Upload
            </button>)
          )}
          {isLoading ? (
            <div className="flex items-center justify-center">
              <ClipLoader color="#FB4552" loading={isLoading} size={35} />
            </div>
          ) : (
            <button
              type="submit"
              disabled={isLoading}
              className="rounded-lg border-[#FB4552] px-4 py-2 border-2 flex items-center justify-center space-x-3 hover:bg-[#FB4552]"
            >
              {isLastStep ? 'Finish' : 'Next'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}