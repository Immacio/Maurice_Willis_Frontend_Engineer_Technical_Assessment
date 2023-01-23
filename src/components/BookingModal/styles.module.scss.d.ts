export type Styles = {
  availabilityContainer: string;
  closeContainer: string;
  doctorImage: string;
  doctorProfileContent: string;
  inputField: string;
  inputFieldInput: string;
  inputFieldLabel: string;
  modalContentContainer: string;
  modalOverlay: string;
  modSelectedDate: string;
  patientDetailsContainer: string;
  weekDay: string;
  weekDaysContainer: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
