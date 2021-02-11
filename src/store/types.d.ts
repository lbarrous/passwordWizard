export interface Password {
  pass: string;
  hint?: string;
}

export type PasswordState = {
  password: Password;
};

export type PasswordAction = {
  type: string;
  password: Password;
};

export const StepValues = {
  STEP1: "STEP1",
  STEP2: "STEP2",
  STEP3: "STEP3"
} as const;

export type Step = typeof StepValues[keyof typeof StepValues];

export type StepState = {
  currentStep: Step;
};

export type StepAction = {
  type: string;
  step: Step;
};
