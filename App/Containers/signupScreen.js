import React, { Component } from 'react';
const {height, width} = Dimensions.get("window");

import {
    View,
    Text,
    StyleSheet, Dimensions
} from 'react-native';
import MainLogin_backimage from "../Components/mainlogo_backimage";
import styles from './styles/loginScreen'
import { Input, Item,CheckBox,Body } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";



class SignupScreen extends Component {

    static navigationOptions = {
        headerTitle:'Sign up',
        headerStyle: {backgroundColor: '#F7941E'},
        headerTitleStyle: {fontSize:20,  color: 'white',alignSelf:'center', textAlign: 'center',flex:1},
        headerRight: (
            <View>

            </View>
        ),
        headerLeftStyle:{
          fontColor:'white'
        }
    }


    render(){
        return(
            <View>
                <MainLogin_backimage />
                <View style={{marginTop:250}}></View>
                <View style={styles.inputComponent}>
                    <Item regular style={{borderRadius:25}}>
                        <Icon name="user" size={19} color="#900" style={{marginLeft:10,color:'black'}} />
                        <Input placeholder='Name' />
                    </Item>
                </View>
                <View style={styles.inputComponent}>
                    <Item regular style={{borderRadius:25}}>
                        <Icon name="phone" size={19} color="#900" style={{marginLeft:10,color:'black'}} />
                        <Text style={{marginLeft:10,color:'gray'}}>+92 |</Text>
                        <Input placeholder='Number' />
                    </Item>
                </View>
                <View style={styles.inputComponent}>
                    <Item regular style={{borderRadius:25}}>
                        <Icon name="user" size={19} color="#900" style={{marginLeft:10,color:'black'}} />
                        <Input placeholder='Email' />
                    </Item>
                </View>
                <View style={styles.inputComponent}>
                    <Item regular style={{borderRadius:25}}>
                        <Icon name="unlock-alt" size={19} color="black" style={{marginLeft:10}} />
                        <Input placeholder='Password' />
                    </Item>
                </View>
                <View>
                    <CheckBox checked={true} />
                    <Body>
                    <Text>I agree Term and condition</Text>
                    </Body>
                </View>
            </View>
        )
    }
}

export default SignupScreen;


