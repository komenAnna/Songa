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

type FormData = {
  first_name: string;
  last_name: string;
  password: string;
  confirmPassword: string;
  phone_no: string;
  id_front_photo: string;
  id_back_photo: string;
  dl_front_photo: string;
  dl_back_photo: string;
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
  id_front_photo: '',
  id_back_photo: '',
  dl_front_photo: '',
  dl_back_photo: '',
  bike_type: '',
  plate_no: '',
  insurance_provider: '',
  insurance_policy_no: '',
};



export default function RegistrationForm() {
  const [data, setData] = useState(INITIAL_DATA);
  const [isLoading, setIsLoading] = useState(false);
  const [isuploadComplete, setIsUploadComplete] = useState(false);
  const { currentStepIndex, step, steps, isFirstStep, isLastStep, goTo, next, back } = useMultistepForm([
    { component: <RiderDetails {...data} updateFields={updateFields} />, step: { number: 1, label: 'Rider Details' } },
    { component: <Upload {...data} updateFields={updateFields} />, step: { number: 2, label: 'Upload' } },
    { component: <BikeDetails {...data} updateFields={updateFields} />, step: { number: 3, label: 'Bike Details' } },
    { component: <Preview {...data} updateFields={updateFields} />, step: { number: 4, label: 'Preview' } },
  ]);

  const showBackButton = !isFirstStep && currentStepIndex !== 1;

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

      // Prepare the FormData for document upload
      const formData = new FormData();
      formData.append('id_front_photo', data.id_front_photo);
      formData.append('id_back_photo', data.id_back_photo);
      formData.append('dl_front_photo', data.dl_front_photo);
      formData.append('dl_back_photo', data.dl_back_photo);

      // Upload documents
      await uploadDocuments(formData);

      setIsUploadComplete(true);

      next();
    } catch (error) {
      toast.error('An unknown error occurred!');
    } finally {
      setIsLoading(false);
    }
  }

  const progressPercentage = ((currentStepIndex + 1) / steps.length) * 100;

  return (
    <div className="frosted-glass relative text-white py-5 px-3 border-transparent md:mx-20 w-[86vw] bg-primary md:w-auto md:my-10 rounded-lg shadow-md">
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
            <button
              type="button"
              disabled={!isuploadComplete}
              onClick={() => console.log('Upload button clicked')}
              className="rounded-lg border-[#FB4552] px-4 py-2 border-2 flex items-center justify-center space-x-3 hover:bg-[#FB4552]"
            >
              Upload
            </button>
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
