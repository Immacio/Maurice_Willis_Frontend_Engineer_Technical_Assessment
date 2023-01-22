import { useFetchDoctorList } from '../../api/hooks';
import styles from './styles.module.scss';

const AvailableDoctors = (): JSX.Element => {
  const { query, doctors } = useFetchDoctorList();

  return (
    <div>
      <h1 className={styles.titleHeader}>Available Doctors</h1>
    </div>
  );
};

export default AvailableDoctors;
