import {
  ProgressStep,
  StepStates
} from "./components/ProgressBar/models/index";
import { StepValues } from "./store/types.d";
import { validateFormStep } from "./utils";

export const wizardSteps: ProgressStep[] = [
  {
    stepId: StepValues.STEP1,
    label: "1"
  },
  {
    stepId: StepValues.STEP2,
    label: "2",
    validator: validateFormStep
  },
  {
    stepId: StepValues.STEP3,
    label: "3"
  }
];

export const MIN_NUMBER_OF_STEPS = 0;
export const MAX_NUMBER_OF_STEPS = wizardSteps.length - 1;
export const PASSWORD_MIN_LENGTH = 8;

export const PasswordStrengthLevelsCSS: { [key: number]: string } = {
  0: `background: #d1462f;
  width: 20%;`,
  1: `background: #d1462f;
  width: 40%;`,
  2: `background: #57b8ff;
  width: 60%;`,
  3: `background: #57b8ff;
  width: 80%;`,
  4: `background: #2fbf71;
  width: calc(100% + 2px);`
};

export const StepCommonCss = `background-color: #e7eaf3;
color: var(--text-normal);
border-radius: 50%;
height: 2.5rem;
width: 2.5rem;
line-height: 2.5rem;
display: inline-flex;
transform-origin: center;
align-items: center;
justify-content: center;
transition: background-color 250ms ease;
@keyframes spring-up {
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.975);
  }
  40% {
    transform: scale(1.4);
  }
  50%,
  100% {
    transform: scale(1.2);
  }
}
@keyframes spring-down {
  0% {
    transform: scale(1.2);
  }
  35%,
  100% {
    transform: scale(1);
  }
}
@keyframes shake {
  0% {
    transform: translateX(0);
  }
  15% {
    transform: translateX(0.2rem);
  }
  30%,
  60% {
    transform: translateX(-0.4rem);
  }
  45%,
  75% {
    transform: translateX(0.4rem);
  }
  90% {
    transform: translateX(-0.2rem);
  }
  100% {
    transform: translateX(0);
  }
}`;

export const StepIndexCSS: { [key: string]: string } = {
  [StepStates.CURRENT]: `background-color: #387cf6;
  color: white;
  animation: spring-up 400ms ease forwards;
  &:hover {
    background-color: #316ddb;
  }`
};

export const StepIconCSS: { [key: string]: string } = {
  [StepStates.COMPLETED]: `background-color: #4db193;
  color: white;
  animation: spring-down 400ms ease-in-out forwards;
  &:hover {
    background-color: #42997f;
  }`,
  [StepStates.ERROR]: `color: white;
  background-color: #bb392d;
  animation: shake 350ms ease-in-out forwards;`
};

export const TriangleStepCSS: { [key: string]: string } = {
  [StepValues.STEP1]: `margin-left: 45%;`,
  [StepValues.STEP2]: `margin-left: 50%;`,
  [StepValues.STEP3]: `margin-left: 55%;`
};

export const primaryColor = "#ff0049";
export const secondaryColor = "#002b45";
export const terciaryColor = "#fff1e5";
export const whiteColor = "#ffffff";
export const blackColor = "#000000";
