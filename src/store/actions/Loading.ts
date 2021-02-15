import { Dispatch } from 'react';
import { PRUEBA_KO, PRUEBA_OK, submitForm } from '../../services/api';
export const SET_LOADING = 'SET_LOADING';
export const SET_RESPONSE = 'SET_RESPONSE';

interface SetLoadingActionType {
  type: typeof SET_LOADING;
  payload: boolean;
}
interface SetStatusActionType {
  type: typeof SET_RESPONSE;
  payload: number;
}
export type LoadingActionTypes = SetLoadingActionType | SetStatusActionType;

/* Action creators */

export const fetchServerResponse = () => {
  return (dispatch: Dispatch<LoadingActionTypes>) => {
    dispatch(setIsLoading(true));
    submitForm(Math.round(Math.random()) === 0 ? PRUEBA_KO : PRUEBA_OK, {}, {}).then((response: any) => {
      dispatch(setResponseFromServer(response.status));
    }).catch((response) => {
      dispatch(setResponseFromServer(response.status));
    }).finally(() => {
      dispatch(setIsLoading(false));
    });
  };
}

export const setIsLoading = (isLoading: boolean): LoadingActionTypes => {
  return {
    type: SET_LOADING,
    payload: isLoading
  };
};

export const setResponseFromServer = (responseFromServer: number): LoadingActionTypes => {
  return {
    type: SET_RESPONSE,
    payload: responseFromServer
  };
};
