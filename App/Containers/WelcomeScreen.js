import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Dimensions,
    Image
} from "react-native";
const {height, width} = Dimensions.get("window");

class WelcomeScreen extends Component {

    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/bg_screen.png')} style={styles.backgroundImage}></Image>
                <View style={{ width: width*0.7 }}>
                    <Button title="Log in"
                        onPress={() => this.props.navigation.navigate('LoginScreen')} />
                </View>
                <View style={{height: height*0.01}}>
                </View>
                <View style={{ width: width*0.7 }}>
                    <Button title="Sign Up"
                        onPress={() => this.props.navigation.navigate('SignUpScreen')} />
                </View>
            </View>
        );
    }
}
export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backgroundImage: {
        position:'absolute',
        height:height,
        width:width
    }
});