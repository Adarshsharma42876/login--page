import LoginScreen from "../screens/auth/LoginScreen";
import SignUpScreen from "../screens/auth/RegisterScreen";
import HomeScreen from "../screens/dashboard/HomeScreen";
import BottomTab from "./BottomTab";


export const authStack = [
  {
    name: 'Login',
    component: LoginScreen,
  },
  {
    name: 'SignUp',
    component: SignUpScreen,
  },
];

export const dashboardStack = [
  {
    name: 'BottomTab',
    component: BottomTab,
  },
  {
    name: 'Home',
    component: HomeScreen,
  },
];

export const mergeStack = [...dashboardStack];
