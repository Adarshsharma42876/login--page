import LoginScreen from '../screens/auth/LoginScreen';
import BottomTab from './BottomTab';

export const authStack = [
  {
    name: 'Loginscreen',
    component: LoginScreen,
  },
];

export const dashboardStack = [
  {
    name: 'BottomTab',
    component: BottomTab,
  },
];

export const mergeStack = [...dashboardStack, ...authStack];
