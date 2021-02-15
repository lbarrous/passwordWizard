export interface Password {
  pass: string;
  confirmation_pass: string;
  hint?: string;
}

export type PasswordState = {
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
  isValidated: boolean;
};

export type LoadingState = {
  isLoading: boolean;
  responseFromServer: number;
};

export interface responseFromServer {
  status: number
}