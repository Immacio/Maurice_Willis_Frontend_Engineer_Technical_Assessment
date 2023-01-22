import { useMemo } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { fetchBookingsList } from '..';
import { IBooking } from '../../types';

export const useFetchBookingsList = (): {
  query: UseQueryResult<IBooking[], unknown>;
  bookings: IBooking[];
} => {
  const query = useQuery('useFetchBookingsList', () => fetchBookingsList(), {
    onSuccess: (res: IBooking[]) => res,
    onError: (err: unknown) => err,
    staleTime: 10 * 1000,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });

  const bookings = useMemo(() => query.data || ([] as IBooking[]), [query.data]);

  return { query, bookings };
};

export default useFetchBookingsList;
