interface Password {
  pass: string;
  hint?: string;
}

type PasswordState = {
  password: Password;
};

type PasswordAction = {
  type: string;
  password: Password;
};

enum Step {
  STEP1 = "STEP1",
  STEP2 = "STEP2",
  STEP3 = "STEP3"
}

type StepState = {
  currentStep: Step;
};

type StepAction = {
  type: string;
  step: Step;
};
