import { useMemo } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { fetchDoctorList } from '..';
import { IBooking } from '../../types';

export const useFetchBookingsList = (): {
  query: UseQueryResult<IBooking[], unknown>;
  bookings: IBooking[];
} => {
  const query = useQuery('useFetchBookingsList', () => fetchDoctorList(), {
    onSuccess: (res: IBooking[]) => res,
    onError: (err: unknown) => err,
  });

  const bookings = useMemo(() => query.data || ([] as IBooking[]), [query.data]);

  return { query, bookings };
};

export default useFetchBookingsList;
