import { useState } from "react";

export function useStepperController(numberOfSteps: number) {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < numberOfSteps) {
      setCurrentStep((prevState) => prevState + 1);
    }
  };

  const backStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prevState) => prevState - 1);
    }
  };

  return { currentStep, nextStep, backStep };
}
