import React from 'react';
import { Provider } from 'react-redux';
import Router from '@app/routes';
import { store } from './store';

export const App: React.FC = () => (
  <>
    <Provider store={store}>
      <Router />
    </Provider>
  </>
);
