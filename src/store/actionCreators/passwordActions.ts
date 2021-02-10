import { PasswordActionTypes, STORE_PASSWORD } from "../actions/Password";

const storePassword = (password: Password): PasswordActionTypes => {
    return {
      type: STORE_PASSWORD,
      payload: password
    };
  };

  export default storePassword;