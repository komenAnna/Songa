/* eslint-disable react/jsx-key */
"use client"
import { useMultistepForm } from '@/app/hooks/useMultistepForm'
import React from 'react'

export default function RegistrationForm() {
  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } = useMultistepForm([
    <div>One</div>,
    <div>Two</div>
  ])

  return (
    <div className='relative text-white py-5 border md:mx-20 md:my-10 rounded-lg'>
        <form action="" className='p-5'>
          <div className='absolute top-5 right-5'>
            {currentStepIndex + 1}/ {steps.length}
          </div>
          {step}

          {/* Navigation */}
          <div className='mt-[1rem] flex gap-[.5rem] justify-end'>
            {!isFirstStep && <button type='button' onClick={back}>Back</button>}
            <button type='button' onClick={next}>
              {isLastStep ? "Finish" : "Next"}
            </button>
          </div>
        </form>
    </div>
  )
}
