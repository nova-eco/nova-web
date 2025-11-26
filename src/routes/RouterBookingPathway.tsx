import React from 'react';
import { Route, Routes } from 'react-router';
import BaseLayout from '@app/layouts/BaseLayout';
import BookingPathway from '@app/pages/BookingPathway';
import BookingPathwaySalons from '@app/pages/BookingPathwaySalons';

export const RouterBookingPathway = () => (
  <React.Fragment>
    <Routes>
      <Route path="/booking/pathway" element={<BaseLayout />}></Route>
      <Route index element={<BookingPathway />} />
      <Route path="salons" element={<BookingPathwaySalons />} />
    </Routes>
  </React.Fragment>
);
