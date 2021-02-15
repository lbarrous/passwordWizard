import { mount } from "enzyme";
import React from "react";
import { ReduxProvider } from "../../TestUtils";
import { TriangleStep } from "./TriangleStep";

describe("TriangleStep", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = mount(
      <ReduxProvider>
        <TriangleStep/>
      </ReduxProvider>
    );
  });
  it("renders", () => {
    expect(wrapper).toBeDefined();
  });
});
