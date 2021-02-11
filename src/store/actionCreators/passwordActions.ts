import { PasswordActionTypes, STORE_PASSWORD } from "../actions/Password";
import { Password } from "../types";

const storePassword = (password: Password): PasswordActionTypes => {
    return {
      type: STORE_PASSWORD,
      payload: password
    };
  };

  export default storePassword;