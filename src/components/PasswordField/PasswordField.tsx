import React, { Dispatch, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  PasswordActionTypes,
  storeConfirmationPassword,
  storePassword
} from "../../store/actions/Password";
import { AppState } from "../../store/reducers/rootReducer";
import { PasswordState } from "../../store/types";
import { usePassword } from "./hooks/usePassword";
import { PasswordFieldProps } from "./models";
import {
  GlobalWrapper,
  Label,
  PasswordInput,
  PasswordWrapper,
  StrengthBar
} from "./styles";

export const PasswordField = (props: PasswordFieldProps) => {
  const { t } = useTranslation();
  const passwordState: PasswordState = useSelector(
    (state: AppState) => state.password
  );

  const dispatcher = useDispatch<Dispatch<PasswordActionTypes>>();
  const { minLength, isConfirmation } = props;
  const currentPassword = isConfirmation
    ? passwordState.password.confirmation_pass
    : passwordState.password.pass;

  const { handleChange, password, score } = usePassword(
    currentPassword,
    minLength
  );

  const handlePasswordChange = useCallback(
    (value: string) => {
      handleChange(value);
      dispatcher(
        isConfirmation ? storeConfirmationPassword(value) : storePassword(value)
      );
    },
    [dispatcher, handleChange, isConfirmation]
  );

  return (
    <GlobalWrapper>
      <Label>
        {t(
          `${
            isConfirmation ? "repeat_master_password" : "create_master_password"
          }`
        )}
      </Label>
      <PasswordWrapper score={score}>
        <PasswordInput
          autoComplete={isConfirmation ? "confirm-password" : "password"}
          type="password"
          onChange={e => handlePasswordChange(e.target.value)}
          value={password}
        />
        <StrengthBar password={password} score={score} />
      </PasswordWrapper>
    </GlobalWrapper>
  );
};
