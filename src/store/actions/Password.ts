import { Password } from './../types.d';
export const STORE_PASSWORD = 'STORE_PASSWORD';

interface StorePasswordActionType {
  type: typeof STORE_PASSWORD;
  payload: Password;
}
export type PasswordActionTypes = StorePasswordActionType;

export const storePassword = (password: Password): PasswordActionTypes => {
  return {
    type: STORE_PASSWORD,
    payload: password
  };
};