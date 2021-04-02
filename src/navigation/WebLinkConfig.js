import {LinkingOptions} from '@react-navigation/native';

const WebLinkConfig: LinkingOptions = {
  prefixes: ['https://mychat.com', 'mychat://'],
  config: {
    screens: {
      //参考AppNavigator中的name
      Main: {
        path: 'stack', //替换Main
        initialRouteName: 'Home',
        screens: {
          Home: 'Home',
          Settings: 'Settings', //http://localhost:3000/stack/Settings
        },
      },
      Profile: {
        path: 'user/:id/:age',
        parse: {
          id: id => `there, ${id}`,
          age: Number,
        },
        stringify: {
          id: id => id.replace('there, ', ''),
        },
      },
    },
  },
};

export default WebLinkConfig;
