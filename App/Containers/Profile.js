import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image
} from "react-native";
import { Item, Input } from 'native-base';

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



class Profile extends Component {
    

    render() {
        return (
            <View style={{flex: 1}}>
                <Input name='email' placeholder='Email' placeholderTextColor='black'
                           value='Email'
                           underlineColorAndroid={'black'}
                            style={{color:'black', flex: 1}} />
                <Input name='email' placeholder='Email' placeholderTextColor='black'
               value='Email'
               underlineColorAndroid={'black'}
                style={{color:'black', flex: 3}} />
                <Input name='email' placeholder='Email' placeholderTextColor='black'
               value='Email'
               underlineColorAndroid={'black'}
                style={{color:'black'}} />
                <Input name='email' placeholder='Email' placeholderTextColor='black'
               value='Email'
               underlineColorAndroid={'black'}
                style={{color:'black'}} />
            </View>
        );
    }
}
export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 5,
        alignItems: 'center',
        // justifyContent: 'center'
    }
});

Profile.navigationOptions = ({ navigation }) => ({
    headerTitle: <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><LogoTitle /></View>,
    headerStyle: {backgroundColor: 'white'},  
    headerRight:(
        <View>
        </View>
    )
});