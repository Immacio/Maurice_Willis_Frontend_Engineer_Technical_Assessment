import { useMutation, UseMutationResult } from 'react-query';
import { updateIndividualBooking } from '..';
import { IBooking, IUpdateIndividualBookingStatus } from '../../types';

interface Props {
  id: string;
  onSuccess?: (res: IBooking) => void;
  onError?: (err: string) => void;
}

export const useUpdateIndividualBooking = ({
  id,
  onSuccess,
  onError,
}: Props): UseMutationResult<IBooking, string, IUpdateIndividualBookingStatus, unknown> => {
  const mutation = useMutation(
    (payload: IUpdateIndividualBookingStatus) => updateIndividualBooking(id, payload),
    {
      onSuccess,
      onError,
    },
  );

  return mutation;
};

export default useUpdateIndividualBooking;
