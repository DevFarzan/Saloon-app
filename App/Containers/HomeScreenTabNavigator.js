import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';

import ScreenOne from './TabNavigator/ScreenOne'
import ScreenTwo from './TabNavigator/ScreenTwo'
import ScreenThree from './TabNavigator/ScreenThree'
import ScreenFour from './TabNavigator/ScreenFour'

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../../assets/Dark/name.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}
// headerTitle: (
//               <Image
//                 source={require('../../assets/Dark/loginuser.png')}
//                 style={{ width: 30, height: 30 }}
//               />
//             ),

class AppTabNavigator extends Component {

    static navigationOptions = ({ navigation }) => {
        console.log((navigation, 'navigation'))
        return {
            headerTitle: <LogoTitle />,
            headerLeft: (
                <View style={{ padding: 10 }}>
                    <Icon name="bars" size={24} onPress={() => navigation.openDrawer()} />
                </View>
            ),

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
    },
    ScreenThree: {
        screen: ScreenThree,
        navigationOptions: {
            tabBarLabel: '',
            tabBarIcon: () => (
                <Icon name="rocket" size={24} />
            )
        }
    },
    ScreenFour: {
        screen: ScreenFour,
        navigationOptions: {
            tabBarLabel: '',
            tabBarIcon: () => (
                <Icon name="rocket" size={24} />
            )
        }
    }
},{
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showIcon: true,
        showLabel: false
    },
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default AppTabNavigator;