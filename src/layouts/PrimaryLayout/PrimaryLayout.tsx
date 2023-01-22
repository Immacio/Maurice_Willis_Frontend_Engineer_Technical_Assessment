import { memo } from 'react';
import { MenuSidebar } from '../../components/MenuSidebar';
import IPrimaryLayoutProps from './PrimaryLayout.types';
import styles from './styles.module.scss';

export const PrimaryLayout = memo<IPrimaryLayoutProps>(({ children }) => (
  <div className={styles.layoutOuterContainer}>
    <main className={styles.layoutInnerContainer}>
      <MenuSidebar />
      <div className={styles.primaryContentContainer}>{children}</div>
    </main>
  </div>
));

PrimaryLayout.displayName = 'PrimaryLayout';

export default PrimaryLayout;
