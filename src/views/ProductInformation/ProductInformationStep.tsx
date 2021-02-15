import React from "react";
import image2 from "../../assets/img/group-3.svg";
import image from "../../assets/img/group.svg";

const ProductInformationStep = () => {
  return (
    <article className="StepWrapper">
      <h1>Crea tu Password Manager</h1>
      <section className="StepWrapper__Info">
        <div className="image-container">
          <img src={image} alt="Password" />
          <p>Guarda aqui todas tus contraseas, datos o cualquier informacion, olvida las notas de papel y las aplicaciones no protegidas.</p>
        </div>
        <div className="image-container">
          <img src={image2} alt="Password2" />
          <p>Crea tu clave maestra: Solo tu podras acceder a sus secretos con ella.</p>
        </div>
      </section>
      <h3>Como funciona</h3>
      <p>bla bla...</p>
      <h3>Que datos puedes guardar</h3>
      <p>Bla bla...</p>
    </article>
  );
};

export default ProductInformationStep;
