import React, {useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'Main'}],
      });
    }, 1000);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator color={'red'} size={'large'} />
    </View>
  );
}
