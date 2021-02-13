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
  STEP1: 0,
  STEP2: 1,
  STEP3: 2
} as const;

export type Step = typeof StepValues[keyof typeof StepValues];

export type StepState = {
  currentStep: Step;
};

export type StepAction = {
  type: string;
  step: Step;
};
