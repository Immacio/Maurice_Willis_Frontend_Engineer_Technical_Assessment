/* eslint-disable react/jsx-one-expression-per-line */
import { memo, useState } from 'react';
import doctorPlaceholder from '../../assets/images/doctorPlaceholderImage.jpg';
import { IDoctor } from '../../types';
import { BookingModal } from '../BookingModal';
import { CTAButton } from '../CTAButton';
import styles from './styles.module.scss';

export const DoctorProfileCard = memo<Partial<IDoctor>>(
  ({ address, name, opening_hours: openingHours, id: doctorId }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { district, line_1: line1, line_2: line2 } = address || {};
    return (
      <>
        {isModalOpen && (
          <BookingModal
            doctorId={doctorId}
            openingHours={openingHours}
            isOpen={isModalOpen}
            name={name}
            setModalOpen={setIsModalOpen}
          />
        )}
        <div className={styles.container}>
          <div className={styles.doctorProfileContent}>
            <img
              className={styles.doctorImage}
              src={doctorPlaceholder}
              alt="doctorPlaceholderImage"
            />
            <h2>Dr. {name}</h2>
          </div>

          <div className={styles.addressContainer}>
            <h2>Address:</h2>
            <span>{line1}</span>
            <span>{line2}</span>
            <span>{district}</span>
          </div>
          <CTAButton
            onClick={() => setIsModalOpen(true)}
            className={styles.ctaButton}
            buttonText="Make An Appointment"
          />
        </div>
      </>
    );
  },
);

DoctorProfileCard.displayName = 'DoctorProfileCard';

export default DoctorProfileCard;
