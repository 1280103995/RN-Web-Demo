import {Button, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';

export default function ProfileScreen({route}) {
  const [platformName, setPlatformName] = useState(null);

  useEffect(() => {
    window.WebViewBridge = {
      onMessage: _onMessage,
    };
    const event = new Event('WebViewBridge');
    window.dispatchEvent(event);
  }, []);

  const _onMessage = data => {
    setPlatformName(data);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Hello {route.params?.id || 'Unknown'}!</Text>
      <Text>
        Type of age parameter is{' '}
        {route.params?.age ? typeof route.params.age : 'undefined'}
      </Text>
      <Text
        style={{
          fontSize: 20,
          marginVertical: 10,
        }}>{`The value come from: ${platformName}`}</Text>
      <Button
        title="Send value to Native"
        onPress={() => {
          const data = {name: 'The value come from web'};
          window.ReactNativeWebView.postMessage(JSON.stringify(data));
        }}
      />
    </View>
  );
}
