import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Group from './fragmenthome/group';
import List from './fragmenthome/list';
import Myprofile from './fragmenthome/myprofile';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MyProfile" component={Myprofile} options={{headerShown:false}}/>
      <Tab.Screen name="Group" component={Group} options={{headerShown:false}}/>
      <Tab.Screen name="List" component={List} options={{headerShown:false}}/>
    </Tab.Navigator>
  );
}