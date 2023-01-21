import { useMemo } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { fetchIndividualBooking } from '..';
import { IBooking } from '../../types';

export const useFetchIndividualBooking = (
  id: string,
): {
  query: UseQueryResult<IBooking, unknown>;
  booking: IBooking;
} => {
  const query = useQuery(['useFetchIndividualBooking', id], () => fetchIndividualBooking(id), {
    onSuccess: (res: IBooking) => res,
    onError: (err: unknown) => err,
  });

  const booking = useMemo(() => query.data || ({} as IBooking), [query.data]);

  return { query, booking };
};

export default useFetchIndividualBooking;
