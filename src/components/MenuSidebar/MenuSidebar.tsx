import classNames from 'classnames';
import { memo } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/icons/logo.png';
import MenuItems from './constants/MenuItems';
import styles from './styles.module.scss';

interface Props {
  foo?: string;
}

export const MenuSidebar = memo<Props>(() => {
  const location = useLocation();

  return (
    <Sidebar className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Necktie_Logo" />
        <h3>Doctor Booking Page</h3>
      </div>
      <div className={styles.divider} />
      <Menu className={styles.menuContainer}>
        {MenuItems.map(({ pathname, name, Icon }) => (
          <MenuItem
            className={classNames({ [styles.selectedMenuItem]: pathname === location.pathname })}
            key={pathname}
            component={<Link to={pathname} />}
          >
            <div className={styles.menuItem}>
              <Icon fontSize="large" />
              <span>{name}</span>
            </div>
          </MenuItem>
        ))}
      </Menu>
    </Sidebar>
  );
});

MenuSidebar.displayName = 'MenuSidebar';

export default MenuSidebar;
