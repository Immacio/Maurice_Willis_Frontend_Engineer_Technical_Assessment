export type Styles = {
  doctorContainer: string;
  titleHeader: string;
  wrapper: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
