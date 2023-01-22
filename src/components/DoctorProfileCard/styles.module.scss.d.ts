export type Styles = {
  addressContainer: string;
  container: string;
  ctaButton: string;
  doctorImage: string;
  doctorProfileContent: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
