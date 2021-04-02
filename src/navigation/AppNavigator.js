import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import TabStack from './TabStack';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      {/* App Screens */}
      <Stack.Screen name={'Splash'} component={SplashScreen} />
      <Stack.Screen name={'Main'} component={TabStack} />
      <Stack.Screen name={'Profile'} component={ProfileScreen} />
    </Stack.Navigator>
  );
}
