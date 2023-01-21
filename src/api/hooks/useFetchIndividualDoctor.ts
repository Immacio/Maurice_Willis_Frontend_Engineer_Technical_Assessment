import { useMemo } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { fetchIndividualDoctor } from '..';
import { IDoctor } from '../../types';

export const useFetchIndividualDoctor = (
  id: string,
): {
  query: UseQueryResult<IDoctor, unknown>;
  doctor: IDoctor;
} => {
  const query = useQuery(['useFetchIndividualDoctor', id], () => fetchIndividualDoctor(id), {
    onSuccess: (res: IDoctor) => res,
    onError: (err: unknown) => err,
  });

  const doctor = useMemo(() => query.data || ({} as IDoctor), [query.data]);

  return { query, doctor };
};

export default useFetchIndividualDoctor;
