import { mount } from "enzyme";
import React from "react";
import store from "../../store";
import { NEXT_STEP } from "../../store/actions/Step";
import { ReduxProvider } from "../../TestUtils";
import StepProgressBar from "./ProgressBar";

describe("StepProgressBar", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = mount(
      <ReduxProvider>
        <StepProgressBar />
      </ReduxProvider>
    );
  });
  it("renders", () => {
    expect(wrapper).toBeDefined();
  });
  it("shows three steps", () => {
    expect(wrapper.find("li")).toHaveLength(3);
  });
  it("shows completed step", () => {
    store.dispatch({
      type: NEXT_STEP
    });
    wrapper.update();
    expect(wrapper.find("svg")).toHaveLength(1);
  });
});
