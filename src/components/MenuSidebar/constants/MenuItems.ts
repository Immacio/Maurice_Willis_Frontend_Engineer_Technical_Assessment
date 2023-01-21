import { LocalHospital, AccessTime } from '@mui/icons-material';

export const MenuItems = [
  {
    pathname: '/',
    name: 'Available Doctors',
    Icon: LocalHospital,
  },
  {
    pathname: '/bookings',
    name: 'Your Bookings',
    Icon: AccessTime,
  },
];

export default MenuItems;
