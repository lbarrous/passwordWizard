import {
  storeConfirmationPassword,
  storeHint,
  storePassword,
  STORE_CONFIRMATION_PASSWORD,
  STORE_HINT,
  STORE_PASSWORD
} from "./Password";
describe("password actions", () => {
  it("should create an action to store password", () => {
    const password = "password";
    const expectedAction = {
      type: STORE_PASSWORD,
      payload: password
    };
    expect(storePassword(password)).toEqual(expectedAction);
  });
  it("should create an action to store confirmed password", () => {
    const confirmation_password = "confirmation_password";
    const expectedAction = {
      type: STORE_CONFIRMATION_PASSWORD,
      payload: confirmation_password
    };
    expect(storeConfirmationPassword(confirmation_password)).toEqual(
      expectedAction
    );
  });
  it("should create an action to store hint", () => {
    const hint = "hint";
    const expectedAction = {
      type: STORE_HINT,
      payload: hint
    };
    expect(storeHint(hint)).toEqual(expectedAction);
  });
});
