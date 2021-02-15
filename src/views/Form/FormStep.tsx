import React, { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PasswordField } from "../../components/PasswordField/PasswordField";
import { PASSWORD_MIN_LENGTH } from "../../constants";
import { AppState } from "../../store";
import { PasswordActionTypes, storeHint } from "../../store/actions/Password";
import { PasswordState } from "../../store/types";
import { FormStepProps } from "./models";
import "./styles.scss";

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
    <article className="StepWrapper">
      <h1>Crea tu Password Manager</h1>
      <section className="FormStep">
        <p>
          En primer lugar, debes crear una contrasea diferente para sus
          pertenencias electronicas. No podras recuperar tu contrasea, aqui que
          guardala bien.
        </p>
        <form className="FormStep__Password">
          <PasswordField minLength={PASSWORD_MIN_LENGTH} isConfirmation={false} />
          <PasswordField minLength={PASSWORD_MIN_LENGTH} isConfirmation={true} />
        </form>
        {validationObject.associatedErrors &&
          validationObject.associatedErrors.includes(
            "passwords_not_equals"
          ) && (
            <p className="FormStep__Error--password">
              Las contraseas deben ser iguales.
            </p>
          )}
        <p>
          Tambien puedes crear una pista que te ayude a recordar tu contrasea
          maestra.
        </p>
        <span className="FormStep__Label">
          Crea tu pista para recordar tu contrasena (Opcional).
        </span>
        <div className={"FormStep__Hint"}>
          <input
            className={"FormStep__Input"}
            value={password.hint}
            onChange={e => handleHintChange(dispatcher, e.target.value)}
          />
        </div>
        {validationObject.associatedErrors &&
          validationObject.associatedErrors.includes("hint_exceeds_length") && (
            <p className="FormStep__Error--hint">
              La pista no puede exceder en 255 caracteres
            </p>
          )}
      </section>
    </article>
  );
};

export default FormStep;
