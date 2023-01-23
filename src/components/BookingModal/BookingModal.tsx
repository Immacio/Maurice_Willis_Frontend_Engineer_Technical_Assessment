/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
import Modal from 'react-modal';
import { useStep } from 'usehooks-ts';
import { memo, useMemo, useState } from 'react';
import { Close } from '@mui/icons-material';
import dayjs from 'dayjs';
import classNames from 'classnames';
import doctorPlaceholder from '../../assets/images/doctorPlaceholderImage.jpg';
import SuccessTick from '../../assets/images/successTick.png';
import { IBookingModalProps } from './BookingModal.types';
import styles from './styles.module.scss';
import getWeekDays from '../../utils/getWeekDays';
import { BookingStatus, IBooking } from '../../types';
import convertFloatToTime from '../../utils/convertFloatToTime';
import { CTAButton } from '../CTAButton';
import { usePostNewBooking } from '../../api/hooks';

const BookingModal = memo<IBookingModalProps>(
  ({ openingHours, doctorId, isOpen, name, setModalOpen }) => {
    const [currentStep, helpers] = useStep(2);
    const { goToNextStep } = helpers;
    const currentWeekDays = getWeekDays(new Date());

    const { mutate, isLoading } = usePostNewBooking({
      onSuccess: () => goToNextStep(),
      onError: (error) => alert(error),
    });

    const [bookingApiData, setBookingApiData] = useState<Omit<IBooking, 'id'>>({
      doctorId: doctorId || '',
      date: dayjs(currentWeekDays[0]).format('YYYY-MM-DD'),
      start: NaN,
      name: '',
      status: BookingStatus.CONFIRMED,
    });

    const disabledButton = !bookingApiData.name || !bookingApiData.start || !bookingApiData.date;

    const step1 = useMemo(
      () => (
        <>
          <div className={styles.step1Wrapper}>
            <div className={styles.doctorProfileContent}>
              <img
                className={styles.doctorImage}
                src={doctorPlaceholder}
                alt="doctorPlaceholderImage"
              />
              <h2>Dr. {name}</h2>
            </div>
            <div className={styles.infoContainer}>
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
            <div className={styles.infoContainer}>
              <h2>Current Availability Schedule:</h2>
              <div className={styles.weekDaysContainer}>
                {currentWeekDays.map((day, index) => (
                  <div
                    role="button"
                    tabIndex={index}
                    onKeyDown={() => null}
                    onClick={() => {
                      if (!isOpen) return;
                      setBookingApiData({
                        ...bookingApiData,
                        date: dayjs(day).format('YYYY-MM-DD'),
                        start: NaN,
                      });
                    }}
                    key={day.toDateString()}
                    className={classNames(styles.weekDay, {
                      [styles.modSelectedDate]:
                        dayjs(day).format('YYYY-MM-DD') === bookingApiData.date,
                      [styles.modBlockedDate]: !isOpen,
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
              {/* Match the opening hours with the current day */}
              {openingHours
                ?.filter((openingHour) => {
                  const day = dayjs(bookingApiData.date).format('ddd').toUpperCase();
                  return openingHour.day === day;
                })
                .map(({ start, end }) => {
                  const startHour = parseFloat(start);
                  const endHour = parseFloat(end);

                  const timeSlots = Array.from(
                    { length: endHour - startHour },
                    (_, i) => i + startHour,
                  ).map((time) => time);

                  return (
                    <div key={start} className={styles.timeSlotsContainer}>
                      {timeSlots.map((timeSlot, index) => (
                        <div
                          role="button"
                          tabIndex={index}
                          onKeyDown={() => null}
                          onClick={() => {
                            setBookingApiData({
                              ...bookingApiData,
                              start: timeSlot,
                            });
                          }}
                          key={timeSlot}
                          className={classNames(styles.timeSlot, {
                            [styles.modSelectedDate]: timeSlot === bookingApiData.start,
                          })}
                        >
                          <span>{convertFloatToTime(timeSlot)}</span>
                        </div>
                      ))}
                    </div>
                  );
                })}
            </div>
          </div>
          <CTAButton
            className={classNames(styles.ctaButton, styles.modPaddingTop)}
            onClick={() => mutate(bookingApiData)}
            isLoading={isLoading}
            buttonText="Confirm Appointment"
            disabled={disabledButton}
          />
        </>
      ),
      [
        bookingApiData,
        currentWeekDays,
        disabledButton,
        isLoading,
        isOpen,
        mutate,
        name,
        openingHours,
      ],
    );

    const step2 = useMemo(
      () => (
        <div className={styles.successContainer}>
          <img src={SuccessTick} alt="" />
          <h2>Appointment Confirmed!</h2>
          <CTAButton
            buttonText="Close"
            className={styles.ctaButton}
            onClick={() => setModalOpen(false)}
          />
        </div>
      ),
      [setModalOpen],
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
        {currentStep === 1 && step1}
        {currentStep === 2 && step2}
      </Modal>
    );
  },
);

BookingModal.displayName = 'BookingModal';

export default BookingModal;
