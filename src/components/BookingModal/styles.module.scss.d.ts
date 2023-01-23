export type Styles = {
  closeContainer: string;
  ctaButton: string;
  doctorImage: string;
  doctorProfileContent: string;
  infoContainer: string;
  inputField: string;
  inputFieldInput: string;
  inputFieldLabel: string;
  modalContentContainer: string;
  modalOverlay: string;
  modBlockedDate: string;
  modPaddingTop: string;
  modSelectedDate: string;
  patientDetailsContainer: string;
  step1Wrapper: string;
  successContainer: string;
  timeSlot: string;
  timeSlotsContainer: string;
  weekDay: string;
  weekDaysContainer: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
