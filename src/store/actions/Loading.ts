export const SET_LOADING = 'SET_LOADING';

interface SetLoadingActionType {
  type: typeof SET_LOADING;
  payload: boolean;
}
export type LoadingActionTypes = SetLoadingActionType;

export const setLoading = (isLoading: boolean): LoadingActionTypes => {
  return {
    type: SET_LOADING,
    payload: isLoading
  };
};
