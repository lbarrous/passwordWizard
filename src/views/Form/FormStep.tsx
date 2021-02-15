import React, { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PasswordField } from "../../components/PasswordField/PasswordField";
import { AppState } from "../../store";
import { PasswordActionTypes, storeHint } from "../../store/actions/Password";
import { PasswordState } from "../../store/types";
import "./styles.scss";

const handleHintChange = (dispatcher: Dispatch<PasswordActionTypes>, hint: string) => {
  dispatcher(storeHint(hint));
};

const FormStep = () => {
  const dispatcher = useDispatch<Dispatch<PasswordActionTypes>>();
  const { password }: PasswordState = useSelector(
    (state: AppState) => state.password
  );
  return (
    <article className="step-wrapper">
      <h1>Crea tu Password Manager</h1>
      <section className="step-wrapper-form">
        <p>
          En primer lugar, debes crear una contrasea diferente para sus
          pertenencias electronicas. No podras recuperar tu contrasea, aqui que
          guardala bien.
        </p>
        <div className="password-input-wrapper">
          <PasswordField minLength={8} isConfirmation={false} />
          <PasswordField minLength={8} isConfirmation={true} />
        </div>
        <p className="password-error">Las contraseas deben ser iguales.</p>
        <p>
          Tambien puedes crear una pista que te ayude a recordar tu contrasea
          maestra.
        </p>
        <span className="FormStep-label">Crea tu pista para recordar tu contrasena (Opcional).</span>
        <div className={"FormStep"}>
          <input className={"FormStep-input"} value={password.hint} onChange={(e) => handleHintChange(dispatcher, e.target.value)} />
        </div>
      </section>
    </article>
  );
};

export default FormStep;
