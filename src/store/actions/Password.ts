export const STORE_PASSWORD = 'STORE_PASSWORD';
export const STORE_CONFIRMATION_PASSWORD = 'STORE_CONFIRMATION_PASSWORD';
export const STORE_HINT = 'STORE_HINT';

interface StorePasswordActionType {
  type: typeof STORE_PASSWORD;
  payload: string;
}
interface StoreConfirmationPasswordActionType {
  type: typeof STORE_CONFIRMATION_PASSWORD;
  payload: string;
}
interface StoreHintdActionType {
  type: typeof STORE_HINT;
  payload: string;
}
export type PasswordActionTypes = StorePasswordActionType | StoreConfirmationPasswordActionType | StoreHintdActionType;

/* Action creators */

export const storePassword = (password: string): PasswordActionTypes => {
  return {
    type: STORE_PASSWORD,
    payload: password
  };
};

export const storeConfirmationPassword = (confirmationPassword: string): PasswordActionTypes => {
  return {
    type: STORE_CONFIRMATION_PASSWORD,
    payload: confirmationPassword
  };
};

export const storeHint = (hint: string): PasswordActionTypes => {
  return {
    type: STORE_HINT,
    payload: hint
  };
};