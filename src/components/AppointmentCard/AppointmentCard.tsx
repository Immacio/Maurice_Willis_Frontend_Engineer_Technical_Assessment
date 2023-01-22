/* eslint-disable react/jsx-one-expression-per-line */
import { InfoOutlined } from '@mui/icons-material';
import { memo } from 'react';
import { useFetchIndividualDoctor, useUpdateIndividualBooking } from '../../api/hooks';
import { BookingStatus, IBooking } from '../../types';
import convertFloatToTime from '../../utils/convertFloatToTime';
import { CTAButton } from '../CTAButton';
import styles from './styles.module.scss';

interface IAppointmentCardProps extends IBooking {
  refetch: () => void;
}

export const AppointmentCard = memo<IAppointmentCardProps>(
  ({ date, status, name, start, doctorId, id, refetch }) => {
    const { doctor } = useFetchIndividualDoctor(doctorId);
    const { mutate, isLoading } = useUpdateIndividualBooking({
      id,
      onSuccess: () => {
        refetch();
      },
    });
    const { name: doctorName, address } = doctor;

    const handleCancelBooking = () => {
      mutate({ status: BookingStatus.CANCELLED });
    };

    return (
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.infoContainers}>
            <div>
              <InfoOutlined fontSize="large" />
              <h2>Appointment Info:</h2>
            </div>
            <span>Patient Name: {name}</span>
            <span>Date: {date}</span>
            <span>Appointment Time: {convertFloatToTime(start)}</span>
            <span>Booking Status: {status}</span>
          </div>
          <div className={styles.infoContainers}>
            <div>
              <InfoOutlined fontSize="large" />
              <h2>Doctor Info:</h2>
            </div>
            <span>Dr. {doctorName}</span>
            <span>{address?.line_1}</span>
            <span>{address?.line_2}</span>
            <span>{address?.district}</span>
          </div>
        </div>

        <CTAButton
          className={styles.ctaButton}
          disabled={status === BookingStatus.CANCELLED}
          onClick={handleCancelBooking}
          isLoading={isLoading}
          buttonText="Cancel"
        />
      </div>
    );
  },
);

AppointmentCard.displayName = 'AppointmentCard';

export default AppointmentCard;
