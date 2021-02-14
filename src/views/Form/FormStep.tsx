import React from "react";
import { PasswordField } from "../../components/PasswordField/PasswordField";
import "./styles.scss";

const FormStep = () => {
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
          <PasswordField minLength={3} />
          <PasswordField minLength={3} />
        </div>
        <p>
          Tambien puedes crear una pista que te ayude a recordar tu contrasea
          maestra.
        </p>
        <span className="FormStep-label">Crea tu pista para recordar tu contrasena (Opcional).</span>
        <div className={"FormStep"}>
          <input className={"FormStep-input"} />
        </div>
        <span className="FormStep-counter">0/60</span>
      </section>
    </article>
  );
};

export default FormStep;
