/* eslint-disable react/jsx-wrap-multilines */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Bookings } from '../pages/Bookings';
import { AvailableDoctors } from '../pages/AvailableDoctors';
import { PrimaryLayout } from '../layouts';

// @NOTE: Wrap layout around pages from element prop to prevent the sidebar from re-rendering

const Router = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        index
        element={
          <PrimaryLayout>
            <AvailableDoctors />
          </PrimaryLayout>
        }
      />
      <Route
        path="/bookings"
        element={
          <PrimaryLayout>
            <Bookings />
          </PrimaryLayout>
        }
      />
    </Routes>
  </BrowserRouter>
);
export default Router;
