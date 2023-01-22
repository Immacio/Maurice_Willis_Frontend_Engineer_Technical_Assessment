export type Styles = {
  container: string;
  ctaButton: string;
  infoContainers: string;
  innerContainer: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
