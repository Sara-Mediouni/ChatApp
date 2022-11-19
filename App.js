import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from './screens/Auth';
import Signup from './screens/Signup'; 
import Home from './screens/Home';
const Stack = createNativeStackNavigator();
export default function App() {
 
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
    <Stack.Screen name="Signin" component={Auth} options={{headerShown:false}}/>
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown:false}}
      />
      
    </Stack.Navigator>
  </NavigationContainer>);
}

