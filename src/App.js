import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import WebLinkConfig from './navigation/WebLinkConfig';

export default function App() {
  return (
    <NavigationContainer linking={WebLinkConfig}>
      <AppNavigator />
    </NavigationContainer>
  );
}
