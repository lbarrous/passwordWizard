import { mount } from "enzyme";
import React from "react";
import store from "../../store";
import { NEXT_STEP } from "../../store/actions/Step";
import { ReduxProvider } from "../../TestUtils";
import ButtonsGroup from "./ButtonsGroup";

describe("ButtonGroup", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = mount(
      <ReduxProvider>
        <ButtonsGroup stepsValidated={true} />
      </ReduxProvider>
    );
  });
  it("renders", () => {
    expect(wrapper).toBeDefined();
  });
  it("has two buttons if it is not step 3", () => {
    expect(wrapper.find("button")).toHaveLength(2);
  });
  it("has one button if it is step 3", () => {
    store.dispatch({
      type: NEXT_STEP
    });
    store.dispatch({
      type: NEXT_STEP
    });
    wrapper.update();
    expect(wrapper.find("button")).toHaveLength(1);
  });
});
