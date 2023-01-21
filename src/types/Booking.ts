import BookingStatus from './Status';

export interface IUpdateIndividualBookingStatus {
  status: BookingStatus;
}

export interface IBooking {
  id: string;
  name: string;
  start: number;
  doctorId: string;
  date: string;
  status: BookingStatus;
}
