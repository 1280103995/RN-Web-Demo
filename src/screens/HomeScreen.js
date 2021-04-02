import {useLinkTo} from '@react-navigation/native';
import {Button, View} from 'react-native';
import React from 'react';

export default function HomeScreen({navigation}) {
  const linkTo = useLinkTo();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="Go to Wojciech's profile"
        onPress={() => linkTo('/user/Wojciech/22')}
      />
      <Button
        title="Go to unknown profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}
