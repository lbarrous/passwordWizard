import { NEXT_STEP, PREVIOUS_STEP } from "./../actions/Step";
import reducer, { initialState } from "./stepReducer";

describe("step reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      currentStep: 0
    });
  });

  it("should handle NEXT_STEP", () => {
    expect(
      reducer(initialState, {
        type: NEXT_STEP
      })
    ).toEqual({
      currentStep: 1
    });
  });
  it("should handle PREVIOUS_STEP", () => {
    expect(
      reducer(
        {
          currentStep: 1
        },
        {
          type: PREVIOUS_STEP
        }
      )
    ).toEqual({
      currentStep: 0
    });
  });
});
