import { mount } from "enzyme";
import React from "react";
import store from "../../store";
import { ReduxProvider } from "../../TestUtils";
import { PasswordField } from "./PasswordField";

describe("PasswordField", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = mount(
      <ReduxProvider>
        <PasswordField minLength={3} isConfirmation={false} />
      </ReduxProvider>
    );
  });
  it("renders", () => {
    expect(wrapper).toBeDefined();
  });

  it("changes the password", () => {
    const input = wrapper.find("input").first();
    input.simulate('change', { target: { value: 'Hello' } })
    expect(store.getState().password.password.pass).toBe("Hello");
  });
});
