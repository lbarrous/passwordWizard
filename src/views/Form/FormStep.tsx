import React, { Dispatch } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { PasswordField } from "../../components/PasswordField/PasswordField";
import { StyledStepWrapper } from "../../components/StyledStepWrapper/StyledStepWrapper";
import { PASSWORD_MIN_LENGTH } from "../../constants";
import { AppState } from "../../store";
import { PasswordActionTypes, storeHint } from "../../store/actions/Password";
import { PasswordState } from "../../store/types";
import { FormStepProps } from "./models";
import { FormLabel, Hint, HintErrorLabel, HintInput, PasswordErrorLabel, PasswordForm } from "./styles";

const handleHintChange = (
  dispatcher: Dispatch<PasswordActionTypes>,
  hint: string
) => {
  dispatcher(storeHint(hint));
};

const FormStep = (props: FormStepProps) => {
  const { t } = useTranslation();
  const { validationObject } = props;
  const dispatcher = useDispatch<Dispatch<PasswordActionTypes>>();
  const { password }: PasswordState = useSelector(
    (state: AppState) => state.password
  );
  return (
    <StyledStepWrapper>
      <h1>{t("title")}</h1>
      <section>
        <p>
          {t("how_it_works_content")}
        </p>
        <PasswordForm>
          <PasswordField
            minLength={PASSWORD_MIN_LENGTH}
            isConfirmation={false}
          />
          <PasswordField
            minLength={PASSWORD_MIN_LENGTH}
            isConfirmation={true}
          />
        </PasswordForm>
        {validationObject.associatedErrors &&
          validationObject.associatedErrors.includes(
            "passwords_not_equals"
          ) && (
            <PasswordErrorLabel>
              {t("passwords_not_equals")}
            </PasswordErrorLabel>
          )}
        {validationObject.associatedErrors &&
          validationObject.associatedErrors.includes("regex_failed") && (
            <PasswordErrorLabel>
              {t("regex_failed")}
            </PasswordErrorLabel>
          )}
        {validationObject.associatedErrors &&
          validationObject.associatedErrors.includes(
            "password_not_min_length"
          ) && (
            <PasswordErrorLabel>
              {t("password_not_min_length")}
            </PasswordErrorLabel>
          )}
        <p>
          {t("hint")}
        </p>
        <FormLabel>
          {t("hint_label")}
        </FormLabel>
        <Hint>
          <HintInput
            value={password.hint}
            onChange={e => handleHintChange(dispatcher, e.target.value)}
          />
        </Hint>
        {validationObject.associatedErrors &&
          validationObject.associatedErrors.includes("hint_exceeds_length") && (
            <HintErrorLabel>
              {t("hint_error")}
            </HintErrorLabel>
          )}
      </section>
    </StyledStepWrapper>
  );
};

export default FormStep;
