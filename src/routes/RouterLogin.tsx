import React from 'react';
import { Route, Routes } from 'react-router';
import BaseLayout from '@app/layouts/BaseLayout';
import LoginPage from '@app/pages/Login';

export const RouterLogin = () => (
  <React.Fragment>
    <Routes>
      <Route path="/" element={<BaseLayout />}></Route>
      <Route index element={<LoginPage />} />
    </Routes>
  </React.Fragment>
);
