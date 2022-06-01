import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import FirstScreen from './screens/First';
import SecondScreen from './screens/Second';
import HomeScreen from './screens/Home';
import FourthScreen from './screens/Fourth';
import FifthScreen from './screens/Fifth';

//Screen names
const firstName = "액티비티";
const secondName = "동네모임";
const homeName = "메인";
const fourthName = "동네피드";
const fifthName = "프로필";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={ ({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'aperture' : 'aperture-outline';
            } else if (rn === firstName) {
              iconName = focused ? 'caret-down-circle' : 'caret-down-circle-outline';
            } else if (rn === secondName) {
              iconName = focused ? 'people' : 'people-outline';
            } else if (rn === fourthName) {
              iconName = focused ? 'chatbubble' : 'chatbubble-outline';
            } else if (rn === fifthName) {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey',
          tabBarStyle: {height: 70, alignItems: 'center', justifyContent: 'center'}  
        })
        }>

        <Tab.Screen name={firstName} component={FirstScreen} />
        <Tab.Screen name={secondName} component={SecondScreen} />
        <Tab.Screen name={homeName} component={HomeScreen} />      
        <Tab.Screen name={fourthName} component={FourthScreen} />
        <Tab.Screen name={fifthName} component={FifthScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;