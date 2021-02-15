import { mount } from "enzyme";
import React from "react";
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
  it("has one buttonn if it is step 3", () => {
    /* const state = {
      currentStep: StepValues.STEP3
    };

    const store = mockStore(() => state);
    wrapper = mount(
      <ReduxProviderCustom reduxStore={store}>
        <ButtonsGroup stepsValidated={true} />
      </ReduxProviderCustom>
    );
    expect(wrapper.find("button")).toHaveLength(1); */
  });
});
