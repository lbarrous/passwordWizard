import { Provider } from 'react-redux';
import React from "react";
import store from './store';
import configureMockStore from 'redux-mock-store';

export const ReduxProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export const ReduxProviderCustom = ({ children, reduxStore }) => (
    <Provider store={reduxStore}>{children}</Provider>
  )

const middlewares = [];
export const mockStore = configureMockStore(middlewares);