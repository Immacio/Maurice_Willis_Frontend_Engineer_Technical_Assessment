import { IOpeningHours } from '../../types';

export interface IBookingModalProps {
  isOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
  openingHours: IOpeningHours[] | undefined;
  doctorId: string | undefined;
  name: string | undefined;
}
