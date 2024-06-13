import { useState } from "react";

const useStepForm = (initialStep = 0) => {
  const [step, setStep] = useState(initialStep);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const goToStep = (stepIndex) => setStep(stepIndex);

  return {
    step,
    nextStep,
    prevStep,
    goToStep,
  };
};

export default useStepForm;
