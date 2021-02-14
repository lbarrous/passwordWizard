import { Step, StepValues } from './../store/types.d';

const getStepFromNumber = (stepNumber: number) => Object.values(StepValues)[stepNumber];

const getTriangleCSSClassFromStep = (step: Step) => Object.keys(StepValues)[step].toString().toLowerCase();

export { getStepFromNumber, getTriangleCSSClassFromStep };
