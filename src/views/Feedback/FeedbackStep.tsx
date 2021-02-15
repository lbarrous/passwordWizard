import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import StyledContentLoader from "styled-content-loader";
import { StyledStepWrapper } from "../../components/StyledStepWrapper/StyledStepWrapper";
import { AppState } from "../../store";
import { fetchServerResponse, LoadingActionTypes } from "../../store/actions/Loading";
import { LoadingState } from "../../store/types";
import { FailedMessage, SuccessMessage } from "./styles";

const renderOKResponse = () => {
  return (
    <SuccessMessage>
      <h2>Tu password manager esta creado</h2>
      <span>bal bla bla</span>
    </SuccessMessage>
  );
};

const renderKOResponse = () => {
  return (
    <FailedMessage>
      <h2>Ha habido un error</h2>
      <span>bal bla bla</span>
    </FailedMessage>
  );
};
const FeedbackStep = () => {
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
        {responseFromServer === 200 ? renderOKResponse() : renderKOResponse()}
      </StyledStepWrapper>
    </StyledContentLoader>
  );
};

export default FeedbackStep;
