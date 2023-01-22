/* eslint-disable react/jsx-one-expression-per-line */
import { LocalHospital } from '@mui/icons-material';
import { useFetchDoctorList } from '../../api/hooks';
import { DoctorProfileCard } from '../../components';
import styles from './styles.module.scss';

const AvailableDoctors = (): JSX.Element => {
  const { query, doctors } = useFetchDoctorList();

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleHeader}>
        <LocalHospital />
        Available Doctors ({doctors.length})
      </div>
      <div className={styles.doctorContainer}>
        {doctors.map(({ id, name, address, opening_hours: openingHours }) => (
          <DoctorProfileCard key={id} name={name} address={address} opening_hours={openingHours} />
        ))}
      </div>
    </div>
  );
};

export default AvailableDoctors;
