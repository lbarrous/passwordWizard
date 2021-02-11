/* Used to refactor reducer using Strategy pattern: https://en.wikipedia.org/wiki/Strategy_pattern */
export const createReducer = <T extends { [type: string]: any }, P>(
  strategyMap: T,
  initialState: P
) => (state = initialState, action: any) => {
  return strategyMap.hasOwnProperty(action.type)
    ? strategyMap[action.type](state, action)
    : state;
};
