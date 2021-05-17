import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import WebLinkConfig from './navigation/WebLinkConfig';
import GloablSupensionButtonView from './button/GloablSupensionButtonView';

export default function App() {
  const menu = [
    {name : 'notice', image : require('./resource/notice_v2.png'), action : 'ac://notice/view'},
    {name : 'customer', image : require('./resource/customer_v2.png'), action : ''},
    {name : 'attendance', image : require('./resource/kaoqing_v2.png'), action : ''},
    {name : 'sales', image : require('./resource/memberManage.png'), action : ''},
    {name : 'approval', image : require('./resource/shenpi_v2.png'), action : ''},
    {name : 'sign', image : require('./resource/wqqd_v2.png'), action : ''},
    {name : 'trace', image : require('./resource/yingyanguanli.png'), action : ''},
    {name : 'finance', image : require('./resource/finance.png'), action : ''},
    {name : 'add', allowEdit : false,image : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559124896260&di=d0fb3718e90a0fc0a4d90e78ab5711cb&imgtype=0&src=http%3A%2F%2Fpic28.photophoto.cn%2F20130710%2F1190119794154806_b.jpg', action : 'add'},
  ];

  return (
    <NavigationContainer linking={WebLinkConfig}>
      <AppNavigator />
      <GloablSupensionButtonView
        buttonInitializeTop={600}
        buttonInitializeLeft={0}
        menus={menu}
        title={'GlobalFloatButton'}/>
    </NavigationContainer>
  );
}
