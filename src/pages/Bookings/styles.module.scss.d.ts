export type Styles = {
  bookingsContainer: string;
  container: string;
  titleHeader: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
