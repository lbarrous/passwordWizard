import { mount } from "enzyme";
import React from "react";
import store from "../store";
import { NEXT_STEP } from "../store/actions/Step";
import { ReduxProvider } from "../TestUtils";
import FeedbackStep from "../views/Feedback/FeedbackStep";
import FormStep from "../views/Form/FormStep";
import ProductInformationStep from "../views/ProductInformation/ProductInformationStep";
import { PasswordWizardContainer } from "./PasswordWizardContainer";

describe("PasswordWizardContainer", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = mount(
      <ReduxProvider>
        <PasswordWizardContainer />
      </ReduxProvider>
    );
  });
  it("renders", () => {
    expect(wrapper).toBeDefined();
  });
  it("shows information step", () => {
    expect(wrapper.find(ProductInformationStep)).toHaveLength(1);
  });
  it("shows information step", () => {
    store.dispatch({
      type: NEXT_STEP
    });
    wrapper.update();
    expect(wrapper.find(FormStep)).toHaveLength(1);
  });
  it("shows information step", () => {
    store.dispatch({
      type: NEXT_STEP
    });
    store.dispatch({
      type: NEXT_STEP
    });
    wrapper.update();
    expect(wrapper.find(FeedbackStep)).toHaveLength(1);
  });
});
