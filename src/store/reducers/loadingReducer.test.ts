import { SET_LOADING, SET_RESPONSE } from "../actions/Loading";
import reducer, { initialState } from "./loadingReducer";

describe("loading reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      isLoading: false,
      responseFromServer: 0
    });
  });

  it("should handle SET_LOADING", () => {
    expect(
      reducer(initialState, {
        type: SET_LOADING,
        payload: true
      })
    ).toEqual({
      isLoading: true,
      responseFromServer: 0
    });
  });
  it("should handle SET_RESPONSE", () => {
    expect(
      reducer(initialState, {
        type: SET_RESPONSE,
        payload: 200
      })
    ).toEqual({
      isLoading: false,
      responseFromServer: 200
    });
  });
});
