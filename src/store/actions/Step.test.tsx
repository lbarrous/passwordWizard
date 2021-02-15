import { nextStep, NEXT_STEP, previousStep, PREVIOUS_STEP } from "./Step";
describe("step actions", () => {
  it("should create an action to go to the next step", () => {
    const expectedAction = {
        type: NEXT_STEP,
    };
    expect(nextStep()).toEqual(expectedAction);
  });
  it("should create an action to go to the previous step", () => {
    const expectedAction = {
      type: PREVIOUS_STEP,
    };
    expect(previousStep()).toEqual(expectedAction);
  });
});