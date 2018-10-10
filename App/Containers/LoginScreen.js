import React, { Component } from 'react';
import {View, StyleSheet, Image, Dimensions, ActivityIndicator, ScrollView, AsyncStorage} from 'react-native';
import MainLogin_backimage from '../Components/mainlogo_backimage';
import { Container, Header, Content, Item, Input,Button,Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import InputCompoent from '../Components/InputCompoent';
//import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles/loginScreen'
import {HttpUtils} from "../Services/HttpUtils";

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
            formValid: false,
            loader: false
        }
        this.handleUserInput = this.handleUserInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
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

    async handleSubmit(){
        const { email, password, loader } = this.state;
        if(!loader) {
            try {
                this.setState({loader: true, formValid: false});
                let obj = {
                    email,
                    password
                };
                let res = await HttpUtils.post('auth', obj);
                console.log(res, 'ressssssssssss')
                if (res.code === 200) {
                    AsyncStorage.setItem('user', JSON.stringify(res.content))
                        .then((response) => {
                            this.setState({loader: false});
                            this.props.navigation.navigate('DrawerNavigator');
                        });
                }
            } catch {
                console.log('errorrrrrrrrrrr')
            }
        }
    }

    render(){
        const { formErrors } = this.state;
        let error = '';
        if(!!formErrors.email){
            error = 'email' + formErrors.email;
        }else if(!!formErrors.password){
            error = 'password' + formErrors.password;
        }
        return(
            <View>
                <MainLogin_backimage />
                <ScrollView>
                    <View>
                        <View style={error.length ? {marginTop:130} : {marginTop: 150}}>
                            {!!error && <Text>{error}</Text>}
                        </View>
                        <View style={styles.inputComponent}>
                            <Item regular style={{borderRadius:25}}>
                                <Icon name="user" size={19} color="#900" style={{marginLeft:10,color:'black'}} />
                                <Input name='email' placeholder='Email'
                                       value={this.state.email}
                                       onChangeText={(text) => this.handleUserInput(text, 'email')} />
                            </Item>
                        </View>
                        <View style={styles.inputComponent}>
                            <Item regular style={{borderRadius:25}}>
                                <Icon name="unlock-alt" size={19} color="black" style={{marginLeft:10}} />
                                <Input name='password' placeholder='Password' secureTextEntry={true}
                                       value={this.state.password}
                                       onChangeText={(text) => this.handleUserInput(text, 'password')}/>
                            </Item>
                        </View>
                        <View>
                            <Button warning disabled={!this.state.formValid} style={styles.buttonComponent}
                                    onPress={() => this.handleSubmit()}>
                                {this.state.loader && <ActivityIndicator size="small" color="#00ff00" />}
                                <Text> Login </Text>
                            </Button>
                        </View>
                        <View>
                            <Button primary style={styles.buttonFacebook}>
                                <Text>Facebook</Text>
                            </Button>
                        </View>
                        <Button warning style={styles.buttonNewuser}
                                onPress={() => this.props.navigation.navigate('SignUpScreen')}>
                            <Text>New User</Text>
                        </Button>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default LoginScreen;


