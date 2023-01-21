export type Styles = {
  layoutInnerContainer: string;
  layoutOuterContainer: string;
  primaryContentContainer: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
