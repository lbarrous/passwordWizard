import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button, Wrapper } from "./styles";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = useCallback(
    (language: string) => {
      i18n.changeLanguage(language);
    },
    [t]
  );

  return (
    <Wrapper>
      <Button onClick={() => changeLanguage("es")}>{"ES"}</Button>
      <Button onClick={() => changeLanguage("en")}>{"EN"}</Button>
    </Wrapper>
  );
};

export default LanguageSelector;
