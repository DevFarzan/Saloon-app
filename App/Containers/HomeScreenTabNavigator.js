import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';

import ScreenOne from './TabNavigator/ScreenOne'
import ScreenTwo from './TabNavigator/ScreenTwo'


export default class AppTabNavigator extends Component {

    static navigationOptions = ({ navigation }) => {
        console.log((navigation, 'navigation'))
        return {
            headerLeft: (
                <View style={{ padding: 10 }}>
                    <Icon name="rocket" size={24} onPress={() => navigation.openDrawer()} />
                </View>
            )
        }
    }
    render() {
        return (
            <HomeScreenTabNavigator screenProps={{ navigation: this.props.navigation }} />
        )
    }
}

const HomeScreenTabNavigator = new TabNavigator({
    ScreenOne: {
        screen: ScreenOne,
        navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon: () => (
                <Icon name="rocket" size={24} />
            )
        }
    },
    ScreenTwo: {
        screen: ScreenTwo,
        navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon: () => (
                <Icon name="rocket" size={24} />
            )
        }
    }
},{
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showIcon: true
    },
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});