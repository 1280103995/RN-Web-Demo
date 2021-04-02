import React, {useRef} from 'react';
import WebView from 'react-native-webview';
import {Platform} from 'react-native';

export default function ProfileScreen({route}) {
  const webview = useRef(null);

  const handleInjectJavascript = data => {
    const injectJavascriptStr = `(function() {
      window.WebViewBridge.onMessage(${JSON.stringify(data)});
    })()`;
    if (webview) {
      webview.current.injectJavaScript(injectJavascriptStr);
    }
  };

  const _onMessage = event => {
    if (!event.nativeEvent?.data) {
      return;
    }
    const data = JSON.parse(event.nativeEvent?.data);
    if (!data) {
      return;
    }
    alert(data.name);
  };

  const post = () => {
    const platform = Platform.OS === 'ios' ? 'iOS' : 'Android';
    handleInjectJavascript(platform);
  };

  return (
    <WebView
      bounces={false}
      source={{uri: 'http://192.168.20.25:3000/user/Native/99'}}
      ref={webview}
      onMessage={_onMessage}
      onLoadEnd={post}
    />
  );
}
