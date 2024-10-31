import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const nextStep = () => {
    setCurrentStepIndex((prev) => {
      if (prev >= steps.length - 1) return prev;
      return prev + 1;
    });
  };
  const previousStep = () => {
    setCurrentStepIndex((prev) => {
      if (prev <= 0) return prev;
      return prev - 1;
    });
  };

  const goto = (index: number) => {
    setCurrentStepIndex(index);
  };

  return {
    steps,
    currentStepIndex,
    step: steps[currentStepIndex],
    previousStep,
    nextStep,
    goto,
    isLastStep: currentStepIndex === steps.length - 1,
    isFirstStep: currentStepIndex === 0,
  };
}
