import React, { Dispatch } from "react";
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
  const { validationObject } = props;
  const dispatcher = useDispatch<Dispatch<PasswordActionTypes>>();
  const { password }: PasswordState = useSelector(
    (state: AppState) => state.password
  );
  return (
    <StyledStepWrapper>
      <h1>Crea tu Password Manager</h1>
      <section>
        <p>
          En primer lugar, debes crear una contrasea diferente para sus
          pertenencias electronicas. No podras recuperar tu contrasea, aqui que
          guardala bien.
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
              Las contraseas deben ser iguales.
            </PasswordErrorLabel>
          )}
        {validationObject.associatedErrors &&
          validationObject.associatedErrors.includes("regex_failed") && (
            <PasswordErrorLabel>
              La contrasena debe tener al menos una letra mayuscula y un numero
            </PasswordErrorLabel>
          )}
        {validationObject.associatedErrors &&
          validationObject.associatedErrors.includes(
            "password_not_min_length"
          ) && (
            <PasswordErrorLabel>
              La contrasena debe tener al menos 8 caracteres
            </PasswordErrorLabel>
          )}
        <p>
          Tambien puedes crear una pista que te ayude a recordar tu contrasea
          maestra.
        </p>
        <FormLabel>
          Crea tu pista para recordar tu contrasena (Opcional).
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
              La pista no puede exceder en 255 caracteres
            </HintErrorLabel>
          )}
      </section>
    </StyledStepWrapper>
  );
};

export default FormStep;
