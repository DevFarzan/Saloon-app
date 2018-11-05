
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';
import WelcomeScreen from './App/Containers/WelcomeScreen'
import LoginScreen from './App/Containers/LoginScreen';
import EmployeesScreen from './App/Containers/Employees';
import ProfileScreen from './App/Containers/Profile';
import SignUpScreen from './App/Containers/SignUpScreen';
import DrawerNavigator from './App/Containers/DrawerNavigator'
import TermCondition from './App/Containers/termCondition';
import YourBookingScreen from './App/Containers/yourbooking';
import EmployeesHomeScreen from './App/Containers/EmployessHomeScreen';

export default class App extends Component {
    render() {
        return (
            <AppStackNavigator />
        )
    }
}

const AppStackNavigator = createStackNavigator({
    EmployeesHomeScreen:{screen:EmployeesHomeScreen},
    // ProfileScreen: {screen: ProfileScreen},
    // EmployeesScreen: { screen: EmployeesScreen},
    //YourBookingScreen:{screen:YourBookingScreen},
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

