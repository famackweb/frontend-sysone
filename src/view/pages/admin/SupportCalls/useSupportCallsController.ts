import { useState } from "react";
import { useStepperController } from "../../../components/Stepper/useStepperController";

export function useSupportCallsController() {
  const [isOpenCalledModal, setIsOpenCalledModal] = useState(false);
  const { currentStep, nextStep, backStep } = useStepperController(2);

  function toggleOpenCalledModal() {
    if (isOpenCalledModal) {
      backStep();
    }

    setIsOpenCalledModal((prevState) => !prevState);
  }

  return {
    isOpenCalledModal,
    toggleOpenCalledModal,
    currentStep,
    nextStep,
  };
}
