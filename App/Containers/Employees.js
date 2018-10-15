import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../../assets/Dark/logof-14.png')}
        style={{ width: 120, height: 50 }}
      />
    );
  }
}

class Employees extends Component {
    static navigationOptions = ({ navigation }) => {
        console.log((navigation, 'navigation'))
        return {
            headerTitle: <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><LogoTitle /></View>,
            headerStyle: {backgroundColor: 'white'},  
            headerLeft: (
                <View style={{ padding: 10 }}>
                    <Icon name="bars" size={24} onPress={() => navigation.openDrawer()} />
                </View>
            ),
            headerRight:(
                <View>
                </View>
            )
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <Button title="Employees" onPress={() => this.props.screenProps.navigation.navigate('WelcomeScreen')} />
            </View>
        );
    }
}
export default Employees;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});