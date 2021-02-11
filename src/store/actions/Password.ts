import { Password } from './../types.d';
export const STORE_PASSWORD = 'STORE_PASSWORD';

interface StorePasswordActionType {
  type: typeof STORE_PASSWORD;
  payload: Password;
}
export type PasswordActionTypes = StorePasswordActionType;