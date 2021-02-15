import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import StyledContentLoader from "styled-content-loader";
import { AppState } from "../../store";
import { fetchServerResponse, LoadingActionTypes } from "../../store/actions/Loading";
import { LoadingState } from "../../store/types";
import "./styles.scss";

const renderOKResponse = () => {
  return (
    <div className="success-message">
      <h2>Tu password manager esta creado</h2>
      <span>bal bla bla</span>
    </div>
  );
};

const renderKOResponse = () => {
  return (
    <div className="failed-message">
      <h2>Ha habido un error</h2>
      <span>bal bla bla</span>
    </div>
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
      <article className="step-wrapper">
        {responseFromServer === 200 ? renderOKResponse() : renderKOResponse()}
      </article>
    </StyledContentLoader>
  );
};

export default FeedbackStep;
