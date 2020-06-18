// Core
import React, { FC } from 'react';
import { Provider } from 'react-redux';

// Store
import { store } from './init/store';

export const App: FC = () => (
  <Provider store={store}>

  </Provider>
);
