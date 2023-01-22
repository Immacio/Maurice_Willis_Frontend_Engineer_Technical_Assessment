import { useMemo } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { fetchDoctorList } from '..';
import { IDoctor } from '../../types';

export const useFetchDoctorList = (): {
  query: UseQueryResult<IDoctor[], unknown>;
  doctors: IDoctor[];
} => {
  const query = useQuery('useFetchDoctorList', () => fetchDoctorList(), {
    onSuccess: (res: IDoctor[]) => res,
    onError: (err: unknown) => err,
    staleTime: 10 * 1000,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });

  const doctors = useMemo(() => query.data || ([] as IDoctor[]), [query.data]);

  return { query, doctors };
};

export default useFetchDoctorList;
