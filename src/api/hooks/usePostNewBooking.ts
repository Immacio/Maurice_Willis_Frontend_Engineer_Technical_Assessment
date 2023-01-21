import { useMutation, UseMutationResult } from 'react-query';
import { postNewBooking } from '..';
import { IBooking } from '../../types';

interface Props {
  onSuccess?: (res: IBooking) => void;
  onError?: (err: string) => void;
}

export const usePostNewBooking = ({
  onSuccess,
  onError,
}: Props): UseMutationResult<IBooking, string, Omit<IBooking, 'id'>, unknown> => {
  const mutation = useMutation((props: Omit<IBooking, 'id'>) => postNewBooking(props), {
    onSuccess,
    onError,
  });

  return mutation;
};

export default usePostNewBooking;
