/* eslint-disable react/jsx-one-expression-per-line */
import { AccessTime } from '@mui/icons-material';
import { useFetchBookingsList } from '../../api/hooks';
import { AppointmentCard } from '../../components/AppointmentCard';
import styles from './styles.module.scss';

const Home = (): JSX.Element => {
  const {
    query: { refetch },
    bookings,
  } = useFetchBookingsList();

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleHeader}>
        <AccessTime />
        Your Bookings ({bookings.length})
      </div>
      <div className={styles.bookingsContainer}>
        {bookings.map(({ date, id, doctorId, start, status, name }) => (
          <AppointmentCard
            refetch={refetch}
            key={id}
            date={date}
            id={id}
            doctorId={doctorId}
            name={name}
            start={start}
            status={status}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
