import React, { Dispatch, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PasswordActionTypes, storeConfirmationPassword, storePassword } from "../../store/actions/Password";
import { AppState } from "../../store/reducers/rootReducer";
import { PasswordState } from "../../store/types";
import { usePassword } from "./hooks/usePassword";
import { PasswordFieldProps } from "./models";
import "./styles.scss";

export const PasswordField = (props: PasswordFieldProps) => {

  const passwordState: PasswordState = useSelector(
    (state: AppState) => state.password
  );

  const dispatcher = useDispatch<Dispatch<PasswordActionTypes>>();
  const { minLength, isConfirmation } = props;
  const currentPassword = isConfirmation ? passwordState.password.confirmation_pass : passwordState.password.pass;

  const {
    handleChange,
    password,
    score,
    isValid
  } = usePassword(currentPassword, minLength);

  const handlePasswordChange = useCallback(
    (value: string) => {
      handleChange(value);
      dispatcher(isConfirmation ? storeConfirmationPassword(value) : storePassword(value))
    },
    [password]
  );

  const inputClasses = [`PasswordField-input`];
  const wrapperClasses = [
    "PasswordField",
    password.length > 0 ? `is-strength-${score}` : ""
  ];

  if (isValid === true) {
    inputClasses.push("is-password-valid");
  } else if (password.length > 0) {
    inputClasses.push("is-password-invalid");
  }

  return (
    <div className="PasswordField-container">
      <span className="PasswordField-label">Crea tu contrasena maestra</span>
      <div className={wrapperClasses.join(" ")}>
        <input
          type="password"
          className={inputClasses.join(" ")}
          onChange={e => handlePasswordChange(e.target.value)}
          value={password}
        />
        <div className={`PasswordField-strength-bar`} />
      </div>
    </div>
  );
};
