import { mount } from "enzyme";
import React from "react";
import { ReduxProvider } from "../../TestUtils";
import LanguageSelector from "./LanguageSelector";

jest.mock("react-i18next", () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str: any) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {})
      }
    };
  }
}));

describe("LanguageSelector", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = mount(
      <ReduxProvider>
        <LanguageSelector />
      </ReduxProvider>
    );
  });
  it("renders", () => {
    expect(wrapper).toBeDefined();
  });
  it("has two buttons", () => {
    expect(wrapper.find("button")).toHaveLength(2);
  });
  it("changes language", () => {
    wrapper
      .find("button")
      .first()
      .simulate("click");
    expect(
      wrapper
        .find("button")
        .first()
        .text()
    ).toBe("es");
    wrapper
      .find("button")
      .at(1)
      .simulate("click");
    expect(
      wrapper
        .find("button")
        .at(1)
        .text()
    ).toBe("en");
  });
});
