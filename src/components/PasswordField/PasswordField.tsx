import React from "react";
import { usePassword } from "./hooks/usePassword";
import { PasswordFieldProps } from "./models";
import "./styles.scss";

export const PasswordField = (props: PasswordFieldProps) => {
  const { minLength } = props;

  const scoreWords = ["weak", "okay", "good", "strong", "stronger"];

  const {
    clear,
    handleChange,
    isTooShort,
    password,
    score,
    isValid
  } = usePassword("", 2, 4);

  const inputClasses = [`input`];
  const wrapperClasses = [password.length > 0 ? `is-strength-${score}` : ""];
  const strengthDesc = isTooShort(password, minLength)
    ? "too short"
    : scoreWords[score];

  if (isValid === true) {
    inputClasses.push("is-password-valid");
  } else if (password.length > 0) {
    inputClasses.push("is-password-invalid");
  }

  return (
    <div className={"password-wrapper"}>
      <input type="password" onChange={() => {}} value={""} />

      <div className={`strength-bar`} />
      <span className={`strength-desc`}>{""}</span>
    </div>
  );
};
