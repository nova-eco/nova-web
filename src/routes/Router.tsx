import { BrowserRouter } from 'react-router-dom';
import { RouterBookingPathway } from './RouterBookingPathway';
import { RouterHome } from './RouterHome';
import { RouterLogin } from './RouterLogin';

export const Router = () => (
  <BrowserRouter>
    <RouterLogin />
    <RouterBookingPathway />
    <RouterHome />
  </BrowserRouter>
);
