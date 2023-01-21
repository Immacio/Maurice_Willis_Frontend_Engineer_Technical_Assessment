import { IBooking, IDoctor, IUpdateIndividualBookingStatus } from '../types';
import axios from './axios';

// API Calls for Doctor
export const fetchDoctorList = (): Promise<IDoctor[]> =>
  axios.get('/v1/users/me').then(({ data }) => data);

export const fetchIndividualDoctor = (id: string): Promise<IDoctor> =>
  axios.get(`/doctor/${id}`).then(({ data }) => data);

// API Calls for Bookings
export const fetchBookingsList = (): Promise<IBooking[]> =>
  axios.get('/booking').then(({ data }) => data);

export const fetchIndividualBooking = (id: string): Promise<IBooking> =>
  axios.get(`/booking/${id}`).then(({ data }) => data);

export const updateIndividualBooking = (
  id: string,
  payload: IUpdateIndividualBookingStatus,
): Promise<IBooking> => axios.put(`/booking/${id}`, payload).then(({ data }) => data);

export const postNewBooking = (body: Omit<IBooking, 'id'>): Promise<IBooking> =>
  axios.post('/booking', body).then(({ data }) => data);
