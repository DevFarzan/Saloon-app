
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';
import LoginScreen from './App/Containers/LoginScreen';
import HomeScreen from './App/Containers/HomeScreen';
import signUpScreen from './App/Containers/signupScreen';



export default class App extends Component {
    render() {
        return (
            <AppStackNavigator />
        )
    }
}

const AppStackNavigator = createStackNavigator({
    login:LoginScreen,
    signup:signUpScreen,
    home:HomeScreen

}, {
    transitionConfig: getSlideFromRightTransition

});

