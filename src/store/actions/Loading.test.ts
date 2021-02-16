import {
  setIsLoading,
  setResponseFromServer,
  SET_LOADING,
  SET_RESPONSE
} from "./Loading";
describe("loading actions", () => {
  it("should create an action to set loading status", () => {
    const isLoading = true;
    const expectedAction = {
      type: SET_LOADING,
      payload: isLoading
    };
    expect(setIsLoading(isLoading)).toEqual(expectedAction);
  });
  it("should create an action to set the response from api", () => {
    const responseFromServer = 200;
    const expectedAction = {
      type: SET_RESPONSE,
      payload: responseFromServer
    };
    expect(setResponseFromServer(responseFromServer)).toEqual(expectedAction);
  });
});
