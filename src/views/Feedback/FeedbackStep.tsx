import { TFunction } from "i18next";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import StyledContentLoader from "styled-content-loader";
import { StyledStepWrapper } from "../../components/StyledStepWrapper/StyledStepWrapper";
import { AppState } from "../../store";
import { fetchServerResponse, LoadingActionTypes } from "../../store/actions/Loading";
import { LoadingState } from "../../store/types";
import { FailedMessage, SuccessMessage } from "./styles";

const renderOKResponse = (t: TFunction) => {
  return (
    <SuccessMessage>
      <h2>{t("success_title")}</h2>
      <span>{t("success_content")}</span>
    </SuccessMessage>
  );
};

const renderKOResponse = (t: TFunction) => {
  return (
    <FailedMessage>
      <h2>{t("error_title")}</h2>
      <span>{t("error_content")}</span>
    </FailedMessage>
  );
};
const FeedbackStep = () => {
  const { t } = useTranslation();
  const { isLoading, responseFromServer }: LoadingState = useSelector(
    (state: AppState) => state.loading
  );
  const dispatcher = useDispatch<
    ThunkDispatch<AppState, any, LoadingActionTypes>
  >();
  useEffect(() => {
    dispatcher(fetchServerResponse());
  }, [dispatcher]);

  return (
    <StyledContentLoader isLoading={isLoading}>
      <StyledStepWrapper>
        {responseFromServer === 200 ? renderOKResponse(t) : renderKOResponse(t)}
      </StyledStepWrapper>
    </StyledContentLoader>
  );
};

export default FeedbackStep;
