import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../src/screens/auth/LoginScreen";
import SignUpScreen from "../src/screens/auth/RegisterScreen";


const Stack = createStackNavigator();

const  StackNaviagtor=()=>{
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
}


export default StackNaviagtor;