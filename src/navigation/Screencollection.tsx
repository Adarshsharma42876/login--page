import LoginScreen from '../screens/auth/LoginScreen'
import SignUpScreen from '../screens/auth/RegisterScreen'
import BottomTab from './BottomTab'

export const authStack = [
  {
    name: 'Login',
    component: LoginScreen,
  },
]

export const dashboardStack = [
  {
    name: 'SignUp',
    component: SignUpScreen,
  },
]

export const mergeStack = [...dashboardStack, ...authStack]
