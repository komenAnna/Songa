"use client"
import { useMultistepForm } from '@/app/hooks/useMultistepForm';
/* eslint-disable react/jsx-key */
import React, { FormEvent, useState } from 'react';
import ProgressSteps from '../Elements/Loaders/ProgressSteps';
import BikeDetails from './Forms/BikeDetails';
import RiderDetails from './Forms/RiderDetails';
import Upload from './Forms/Upload';
import Preview from './Preview';

type FormData = {
  first_name: string;
  last_name: string;
  password: string;
  confirmPassword: string;
  phone_no: string;
  id_photo: string;
  dl_photo: string;
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
  id_photo: '',
  dl_photo: '',
  bike_type: '',
  plate_no: '',
  insurance_provider: '',
  insurance_policy_no: '',
};



export default function RegistrationForm() {
  const [data, setData] = useState(INITIAL_DATA);
  const { currentStepIndex, step, steps, isFirstStep, isLastStep, goTo, next, back } = useMultistepForm([
    { component: <RiderDetails {...data} updateFields={updateFields} />, step: { number: 1, label: 'Rider Details' } },
    { component: <Upload {...data} updateFields={updateFields} />, step: { number: 2, label: 'Upload' } },
    { component: <BikeDetails {...data} updateFields={updateFields} />, step: { number: 3, label: 'Bike Details' } },
    { component: <Preview {...data} updateFields={updateFields} />, step: { number: 4, label: 'Preview' } },
  ]);
  

  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return { ...prev, ...fields };
    });
  }

  function onSubmitHandler(e: FormEvent) {
    e.preventDefault();

    next();
  }

  const progressPercentage = ((currentStepIndex + 1) / steps.length) * 100;

  return (
    <div className="relative text-white py-5 px-3 border md:mx-20 w-[86vw] md:w-auto md:my-10 rounded-lg shadow-md">
      <form onSubmit={onSubmitHandler} className="p-5">
        {/* Custom Progress Bar */}
        <ProgressSteps steps={steps} currentStepIndex={currentStepIndex} />

        {step}

        {/* Navigation */}
        <div className="mt-[1rem] flex gap-[.5rem] justify-end">
          {!isFirstStep && (
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
              onClick={() => console.log('Upload button clicked')}
              className="rounded-lg border-[#FB4552] px-4 py-2 border-2 flex items-center justify-center space-x-3 hover:bg-[#FB4552]"
            >
              Upload
            </button>
          )}
          <button
            type="submit"
            className="rounded-lg border-[#FB4552] px-4 py-2 border-2 flex items-center justify-center space-x-3 hover:bg-[#FB4552]"
          >
            {isLastStep ? 'Finish' : 'Next'}
          </button>
        </div>
      </form>
    </div>
  );
}
