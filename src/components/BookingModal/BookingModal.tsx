/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
import Modal from 'react-modal';
import { memo, useMemo, useState } from 'react';
import { Close } from '@mui/icons-material';
import dayjs from 'dayjs';
import classNames from 'classnames';
import doctorPlaceholder from '../../assets/images/doctorPlaceholderImage.jpg';
import { IBookingModalProps } from './BookingModal.types';
import styles from './styles.module.scss';
import getWeekDays from '../../utils/getWeekDays';
import { BookingStatus, IBooking } from '../../types';

const BookingModal = memo<IBookingModalProps>(
  ({ openingHours, doctorId, isOpen, name, setModalOpen }) => {
    const currentWeekDays = getWeekDays(new Date());
    const [bookingApiData, setBookingApiData] = useState<Omit<IBooking, 'id'>>({
      doctorId: doctorId || '',
      date: dayjs(currentWeekDays[0]).format('YYYY-MM-DD'),
      start: NaN,
      name: '',
      status: BookingStatus.CONFIRMED,
    });

    console.log(bookingApiData);

    const step1 = useMemo(
      () => (
        <>
          <div className={styles.doctorProfileContent}>
            <img
              className={styles.doctorImage}
              src={doctorPlaceholder}
              alt="doctorPlaceholderImage"
            />
            <h2>Dr. {name}</h2>
          </div>
          <div className={styles.availabilityContainer}>
            <h2>Patient Name</h2>
            <div className={styles.inputField}>
              <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setBookingApiData({ ...bookingApiData, name: e.target.value });
                }}
                className={styles.inputFieldInput}
              />
            </div>
          </div>
          <div className={styles.availabilityContainer}>
            <h2>Current Availability Schedule:</h2>
            <div className={styles.weekDaysContainer}>
              {currentWeekDays.map((day, index) => (
                <div
                  role="button"
                  tabIndex={index}
                  onKeyDown={() => null}
                  onClick={() =>
                    setBookingApiData({ ...bookingApiData, date: dayjs(day).format('YYYY-MM-DD') })
                  }
                  key={day.toDateString()}
                  className={classNames(styles.weekDay, {
                    [styles.modSelectedDate]:
                      dayjs(day).format('YYYY-MM-DD') === bookingApiData.date,
                  })}
                >
                  <span style={{ fontWeight: 'bold', paddingBottom: '0.3rem' }}>
                    {dayjs(day).format('ddd')}
                  </span>
                  <span>{dayjs(day).format('MMM')}</span>
                  <span>{dayjs(day).format('DD')}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      ),
      [bookingApiData, currentWeekDays, name],
    );

    return (
      <Modal
        overlayClassName={styles.modalOverlay}
        className={styles.modalContentContainer}
        ariaHideApp={false}
        isOpen={isOpen}
      >
        <div className={styles.closeContainer}>
          <h1>Schedule your appointment</h1>
          <Close onClick={() => setModalOpen(false)} />
        </div>
        {step1}
      </Modal>
    );
  },
);

BookingModal.displayName = 'BookingModal';

export default BookingModal;
