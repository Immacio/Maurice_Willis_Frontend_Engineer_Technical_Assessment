export type Styles = {
  clipLoader: string;
  container: string;
  containerOuter: string;
  label: string;
  modInvert: string;
  wrapper: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
