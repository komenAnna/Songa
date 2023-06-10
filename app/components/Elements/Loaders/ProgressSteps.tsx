import React from 'react';

type Step = {
  number: number;
  label: string;
};

type ProgressStepsProps = {
  steps: Step[];
  currentStepIndex: number;
};

const ProgressSteps: React.FC<ProgressStepsProps> = ({ steps, currentStepIndex }) => {
  return (
    <div className="w-full max-w-600px mx-auto px-4 my-20">
      <div className="flex justify-between mt-14 relative step-container">
        {steps.map((step, index) => (
          <div key={step.number} className="relative">
            <div
              className={`w-10 h-10 bg-primary border-4 rounded-full transition duration-400 ease-in-out flex justify-center items-center ${
                index === currentStepIndex ? 'border-[#FB4552]' : 'border-[#f3e7f3]'
              }`}
            >
              <span className={`text-[19px] ${index === currentStepIndex ? 'text-white' : 'text-white'}`}>
                {step.number}
              </span>
            </div>
            <div className="absolute top-14 left-1/2 transform -translate-x-1/2">
              <span
                className={`text-sm ${index === currentStepIndex ? 'text-white' : 'text-white'}`}
              >
                {step.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressSteps;
