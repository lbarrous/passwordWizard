import { STORE_CONFIRMATION_PASSWORD, STORE_HINT, STORE_PASSWORD } from "./../actions/Password";
import reducer, { initialState } from "./storePasswordReducer";

describe("password reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      password: {
        pass: "",
        confirmation_pass: "",
        hint: ""
      }
    });
  });

  it("should handle STORE_PASSWORD", () => {
    expect(
      reducer(initialState, {
        type: STORE_PASSWORD,
        payload: "password"
      })
    ).toEqual({
      password: {
        pass: "password",
        confirmation_pass: "",
        hint: ""
      }
    });
  });
  it("should handle STORE_CONFIRMATION_PASSWORD", () => {
    expect(
      reducer(initialState, {
        type: STORE_CONFIRMATION_PASSWORD,
        payload: "confirmation_password"
      })
    ).toEqual({
      password: {
        pass: "",
        confirmation_pass: "confirmation_password",
        hint: ""
      }
    });
  });
  it("should handle STORE_CONFIRMATION_PASSWORD", () => {
    expect(
      reducer(initialState, {
        type: STORE_HINT,
        payload: "hint"
      })
    ).toEqual({
      password: {
        pass: "",
        confirmation_pass: "",
        hint: "hint"
      }
    });
  });
});
