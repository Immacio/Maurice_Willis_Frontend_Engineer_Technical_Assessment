export type Styles = {
  divider: string;
  logoContainer: string;
  menuContainer: string;
  menuItem: string;
  selectedMenuItem: string;
  sidebar: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
