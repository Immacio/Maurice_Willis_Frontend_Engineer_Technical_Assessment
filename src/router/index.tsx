import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Bookings } from '../pages/Bookings';
import { AvailableDoctors } from '../pages/AvailableDoctors';

const Router = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route index element={<AvailableDoctors />} />
      <Route path="/bookings" element={<Bookings />} />
    </Routes>
  </BrowserRouter>
);
export default Router;
