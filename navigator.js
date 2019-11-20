import React from 'react';
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import OtherScreen from './screens/OtherScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';

import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

 const AppStack = createStackNavigator({ 
    Home: {
        screen: HomeScreen, 
    },
    Other: {
        screen: OtherScreen,
    }
});

 const AuthStack = createStackNavigator({ 
    SignIn: {
        screen: SignInScreen,
    }
});

  const AppNavigator = createSwitchNavigator(
    {
        AuthLoading: {
            screen: AuthLoadingScreen,
        },
        App: {
            screen: AppStack,
        },
        Auth: {
            screen: AuthStack,
        }
    },
    {
        initialRouteName: 'AuthLoading',
    }
);

export default createAppContainer(AppNavigator);