/* eslint-disable react/jsx-one-expression-per-line */
import { memo, useState } from 'react';
import doctorPlaceholder from '../../assets/images/doctorPlaceholderImage.jpg';
import { IDoctor } from '../../types';
import { CTAButton } from '../CTAButton';
import styles from './styles.module.scss';

interface IDoctorProfileCardProps extends IDoctor {
  refetch: () => void;
}

export const DoctorProfileCard = memo<Partial<IDoctorProfileCardProps>>(
  ({ address, name, opening_hours: openingHours, id: doctorId }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { district, line_1: line1, line_2: line2 } = address || {};

    return (
      <div className={styles.container}>
        <div className={styles.doctorProfileContent}>
          <img
            className={styles.doctorImage}
            src={doctorPlaceholder}
            alt="doctorPlaceholderImage"
          />
          <h2>{name}</h2>
        </div>

        <div className={styles.addressContainer}>
          <h2>Address:</h2>
          <span>{line1}</span>
          <span>{line2}</span>
          <span>{district}</span>
        </div>
        <CTAButton className={styles.ctaButton} buttonText="Make An Appointment" />
      </div>
    );
  },
);

DoctorProfileCard.displayName = 'DoctorProfileCard';

export default DoctorProfileCard;
