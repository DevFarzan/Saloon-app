
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';
import WelcomeScreen from './App/Containers/WelcomeScreen'
import LoginScreen from './App/Containers/LoginScreen';
import BookingScreen from './App/Containers/Booking';
import SignUpScreen from './App/Containers/SignUpScreen';
import DrawerNavigator from './App/Containers/DrawerNavigator'
import TermCondition from './App/Containers/termCondition';


export default class App extends Component {
    render() {
        return (
            <AppStackNavigator />
        )
    }
}

const AppStackNavigator = createStackNavigator({
    BookingScreen: { screen: BookingScreen},
    WelcomeScreen: { screen: WelcomeScreen },
    LoginScreen: { screen: LoginScreen },
    SignUpScreen: { screen: SignUpScreen },
    TermCondition: { screen: TermCondition },
    DrawerNavigator: {
        screen: DrawerNavigator,
        navigationOptions: {
            header: null
        }
    }

},{
    navigationOptions: {
        gesturesEnabled: false
    },
    transitionConfig: getSlideFromRightTransition

});

