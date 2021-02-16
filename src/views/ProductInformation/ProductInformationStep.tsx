import React from "react";
import { useTranslation } from "react-i18next";
import image2 from "../../assets/img/group-3.svg";
import image from "../../assets/img/group.svg";
import { StyledStepWrapper } from "../../components/StyledStepWrapper/StyledStepWrapper";
import { ImageContainer, Info } from "./styles";

const ProductInformationStep = () => {
  const { t } = useTranslation();
  return (
    <StyledStepWrapper>
      <h1>{t("title")}</h1>
      <Info>
        <ImageContainer>
          <img src={image} alt="Password" />
          <p>{t("info_1")}</p>
        </ImageContainer>
        <ImageContainer>
          <img src={image2} alt="Password2" />
          <p>{t("info_2")}</p>
        </ImageContainer>
      </Info>
      <h3>{t("how_it_works_title")}</h3>
      <p>{t("how_it_works_content")}</p>
      <h3>{t("what_can_be_saved_title")}</h3>
      <p>{t("what_can_be_saved_content")}</p>
    </StyledStepWrapper>
  );
};

export default ProductInformationStep;
