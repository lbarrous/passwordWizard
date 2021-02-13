import * as React from "react";
import "./styles.scss";

const ButtonsGroup = (): JSX.Element => {
  return (
    <footer className={`buttons-group-wrapper`}>
<button className="buttons-group-wrapper-button">Cancelar </button>
<button className="buttons-group-wrapper-button">Siguiente {'>'}</button>
    </footer>
  );
};

export default ButtonsGroup;
