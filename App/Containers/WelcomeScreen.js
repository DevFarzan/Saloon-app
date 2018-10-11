import React, { Component } from "react";
import { Button,Text } from 'native-base';
import {
    View,
    StyleSheet,
    Dimensions,
    Image
} from "react-native";
import styles from './styles/WelcomeScreen';
const {height, width} = Dimensions.get("window");

class WelcomeScreen extends Component {

    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{marginTop:250}}></View>
                <View>
                    <Image source={require('../../assets/Dark/logof-14.png')} style={{width:width*0.7,height:height*0.1}}></Image>
                </View>
                {/*<View style={{ width: width*0.7 }}>
                    <Button title="Log in"
                        onPress={() => this.props.navigation.navigate('LoginScreen')} />
                </View>
                <View style={{height: height*0.01}}>
                </View>
                <View style={{ width: width*0.7 }}>
                    <Button title="Sign Up"
                        onPress={() => this.props.navigation.navigate('SignUpScreen')} />
                </View>*/}
                <View style={{marginTop:200}}></View>
                <View>
                    <Button bordered dark onPress={() => this.props.navigation.navigate('SignUpScreen')} style={{ width: width*0.7,justifyContent:'center'}}>
                        <Text>Create your Account</Text>
                    </Button>
                </View>
                <View style={{marginTop:30}}>
                    <Text onPress={() => this.props.navigation.navigate('LoginScreen')}>You already have a <Text style={{color:'blue'}}>login</Text>?</Text>
                </View>
            </View>
        );
    }
}
export default WelcomeScreen;

