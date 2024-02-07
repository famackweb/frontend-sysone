import { Step } from "./Step";
import { cn } from "../../../app/utils/cn";
// import { useStepperController } from "./useStepperController";

interface StepperProps {
  steps: [string, string, string?] | [string, string];
  currentStep: number;
}

export function Stepper({ steps, currentStep }: StepperProps) {
  // const { currentStep } = useStepperController(steps.length);

  return (
    <div className="flex w-full items-center justify-between gap-3">
      <Step currentStep={currentStep} label={steps[0]} value={1} />

      <div
        className={cn(
          "h-0.5 flex-1 rounded-full bg-[#E8E8E8]",
          currentStep >= 2 && "bg-green-600"
        )}
      />

      <Step currentStep={currentStep} label={steps[1]} value={2} />

      {steps.length === 3 && (
        <div
          className={cn(
            "h-0.5 flex-1 rounded-full bg-[#E8E8E8]",
            currentStep === 3 && "bg-green-600"
          )}
        />
      )}

      {steps.length === 3 && (
        <Step currentStep={currentStep} label={steps[2]} value={3} />
      )}
    </div>
  );
}
