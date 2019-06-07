import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import OverviewScreen from './screens/OverviewScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';

const AuthSwitch = createAppContainer(
  createStackNavigator({
    AuthLoading: { screen: AuthLoadingScreen, path: 'auth' },
    LoginScreen: { screen: LoginScreen, path: 'login' },
    RegisterScreen: { screen: RegisterScreen, path: 'register' },
    HomeScreen: { screen: HomeScreen, path: 'home' },
    ChatScreen: { screen: ChatScreen, path: 'chat' },
    OverviewScreen: { screen: OverviewScreen, path: 'overview' },
  }),
);

// const AuthSwitch = createAppContainer(
//   createStackNavigator({
//     AuthLoading: { screen: AuthLoadingScreen },
//     // App: AppStack,
//     App: {
//       screen: AppStack,
//       path: '',
//     },
//     Auth: { screen: AuthStack },
//   }),
// );

// const AuthStack = createStackNavigator({
//   Login: { screen: LoginScreen },
//   Register: { screen: RegisterScreen },
// });

// const AppStack = createStackNavigator({
//   Home: { screen: HomeScreen },
//   Friends: {
//     screen: FriendsScreen,
//     path: 'friends',
//   },
//   // Friends: FriendsScreen,
// });

// const FriendsScreen = createStackNavigator({
//   Overview: { screen: OverviewScreen },
//   Chat: {
//     screen: ChatScreen,
//     path: 'chat/:user',
//   },
// });

const prefix = Expo.Linking.makeUrl('/');

const MainApp = () => <AuthSwitch uriPrefix={prefix} />;

export default MainApp;
