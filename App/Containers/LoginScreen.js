import React, { Component } from 'react';
import {View, StyleSheet, Image, Dimensions, TextInput, ScrollView} from 'react-native';
import MainLogin_backimage from '../Components/mainlogo_backimage';
import { Container, Header, Content, Item, Input,Button,Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import InputCompoent from '../Components/InputCompoent';
//import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles/loginScreen'

const {height, width} = Dimensions.get("window");

const remote = './images/bg_screen.png';

class LoginScreen extends Component {
    constructor(props){
        super(props);
        this.state ={
            email: '',
            password: '',
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
        this.handleUserInput = this.handleUserInput.bind(this)
    }
    static navigationOptions = {
        headerTitle:'Login',
        headerStyle: {backgroundColor: '#F7941E'},
        headerTitleStyle: {fontSize: height*0.035 ,  color: 'white', textAlign: 'center', alignSelf: "center", flex: 1},
    }

    handleUserInput(val, e ) {
        const name = e;
        const value = val;
        console.log(name)
        console.log(value)
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': ' is too short';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }

    render(){
        return(
            <View>
                <MainLogin_backimage />
                <ScrollView>
                    <View style={{marginTop:150}}></View>
                    <View>
                        <View style={styles.inputComponent}>
                            <Item regular style={{borderRadius:25}}>
                                <Icon name="user" size={19} color="#900" style={{marginLeft:10,color:'black'}} />
                                <Input name='email' placeholder='Email' onChangeText={(text) => this.handleUserInput(text, 'email')} />
                            </Item>
                        </View>
                        <View style={styles.inputComponent}>
                            <Item regular style={{borderRadius:25}}>
                                <Icon name="unlock-alt" size={19} color="black" style={{marginLeft:10}} />
                                <Input name='password' placeholder='Password' secureTextEntry={true} onChangeText={(text) => this.handleUserInput(text, 'password')}/>
                            </Item>
                        </View>
                        <View>
                            <Button warning disabled={!this.state.formValid} style={styles.buttonComponent} onPress={() => this.props.navigation.navigate('DrawerNavigator')}>
                                <Text> Login </Text>
                            </Button>
                        </View>
                        <View>
                            <Button primary style={styles.buttonFacebook}>
                                <Text>Facebook</Text>
                            </Button>
                        </View>
                        <Button warning style={styles.buttonNewuser} onPress={() => this.props.navigation.navigate('SignUpScreen')}>
                            <Text>New User</Text>
                        </Button>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default LoginScreen;


