import React from "react";
import image2 from "../../assets/img/group-3.svg";
import image from "../../assets/img/group.svg";
import { StyledStepWrapper } from "../../components/StyledStepWrapper/StyledStepWrapper";
import { ImageContainer, Info } from "./styles";

const ProductInformationStep = () => {
  return (
    <StyledStepWrapper>
      <h1>Crea tu Password Manager</h1>
      <Info>
        <ImageContainer>
          <img src={image} alt="Password" />
          <p>
            Guarda aqui todas tus contraseas, datos o cualquier informacion,
            olvida las notas de papel y las aplicaciones no protegidas.
          </p>
        </ImageContainer>
        <ImageContainer>
          <img src={image2} alt="Password2" />
          <p>
            Crea tu clave maestra: Solo tu podras acceder a sus secretos con
            ella.
          </p>
        </ImageContainer>
      </Info>
      <h3>Como funciona</h3>
      <p>bla bla...</p>
      <h3>Que datos puedes guardar</h3>
      <p>Bla bla...</p>
    </StyledStepWrapper>
  );
};

export default ProductInformationStep;
