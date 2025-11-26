import React from 'react';
import { Route, Routes } from 'react-router';
import BaseLayout from '@app/layouts/BaseLayout';
import HomePage from '@app/pages/Home';

export const RouterHome = () => (
  <React.Fragment>
    <Routes>
      <Route path="/home" element={<BaseLayout />}></Route>
      <Route index element={<HomePage />} />
    </Routes>
  </React.Fragment>
);
