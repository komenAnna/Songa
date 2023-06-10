/* eslint-disable react/jsx-key */
"use client"
import { useMultistepForm } from '@/app/hooks/useMultistepForm'
import React, { FormEvent, useState } from 'react'
import RiderDetails from './Forms/RiderDetails'
import Upload from './Forms/Upload'
import Preview from './Preview'
import BikeDetails from './Forms/BikeDetails'

type FormData = {
  first_name: string,
  last_name: string,
  password: string,
  confirmPassword: string,
  phone_no: string,
  id_photo: string,
  dl_photo: string,
  bike_type: string,
  plate_no: string,
  insuarance_provider: string,
  insuarance_policy_no: string,
}

const INITAL_DATA: FormData = {
  first_name: "",
  last_name: "",
  password: "",
  confirmPassword: "",
  phone_no: "",
  id_photo: "",
  dl_photo: "",
  bike_type: "",
  plate_no: "",
  insuarance_provider: "",
  insuarance_policy_no: "",
}

export default function RegistrationForm() {
  const [data, setData] = useState(INITAL_DATA)

  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }

  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } = useMultistepForm([
    <RiderDetails {...data} updateFields={updateFields} />,
    <Upload {...data} updateFields={updateFields} />,
    <BikeDetails {...data} updateFields={updateFields} />,
    <Preview {...data} updateFields={updateFields} />
  ])

  function onSubmitHandler(e: FormEvent) {
    e.preventDefault()

    next()
  }

  return (
    <div className='relative text-white py-5 px-3 border md:mx-20 w-[86vw] md:w-auto md:my-10 rounded-lg shadow-md'>
      <form onSubmit={onSubmitHandler} className='p-5'>
        <div className="flex my-4 justify-center h-full">
          <div className="flex flex-col items-end">
            <div className="flex space-x-3 items-center">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`relative flex items-center justify-center h-8 w-8 rounded-full ${index === currentStepIndex ? 'bg-[#FB4552] text-white' : 'bg-gray-300'
                    }`}
                >
                  {index + 1}
                  {index !== steps.length - 1 && (
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 left-8 h-0.5 ${index <= currentStepIndex ? 'bg-[#FB4552]' : 'bg-gray-300'
                        }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex space-x-2 mt-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`h-0.5 w-12 ${index <= currentStepIndex ? 'bg-[#FB4552]' : 'bg-gray-300'
                    }`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {step}

        {/* Navigation */}
        <div className='mt-[1rem] flex gap-[.5rem] justify-end'>
          {!isFirstStep && <button type='button' onClick={back}>Back</button>}
          <button type='submit' className='rounded-lg border-[#FB4552] px-4 py-2 border-2 flex items-center justify-center space-x-3
              hover:bg-[#FB4552]
            '>
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  )
}



