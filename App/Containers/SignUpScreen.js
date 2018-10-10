import React, { Component } from 'react';
const {height, width} = Dimensions.get("window");
import Modal from "react-native-modal";
import { AsyncStorage } from "react-native";

import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    ActivityIndicator
} from 'react-native';
import MainLogin_backimage from "../Components/mainlogo_backimage";
import styles from './styles/loginScreen'
import {Input, Item, CheckBox, Body, Button} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import {HttpUtils} from '../Services/HttpUtils';


class SignUpScreen extends Component {
    constructor(props){
        super(props);
        this.state ={
            name: 'Siddiq',
            number: '3113826477',
            email: 'siddiqabbasi0@gmail.com',
            password: '123456',
            formErrors: {name: '', number: '' , email: '', password: ''},
            boo:true,
            nameValid: false,
            numberValid: false,
            emailValid: false,
            passwordValid: false,
            formValid: false,
            loader: false
        }
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static navigationOptions = {
        headerTitle:'Sign up',
        headerStyle: {backgroundColor: '#F7941E'},
        headerTitleStyle: {fontSize:20,  color: 'white',alignSelf:'center', textAlign: 'center',flex:1},
        headerRight: (
            <View>

            </View>
        )
    };

    handleUserInput(val, e ) {
        const name = e;
        const value = val;
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let nameValid = this.state.nameValid;
        let numberValid = this.state.numberValid;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName) {
            case 'name':
                nameValid = value.length >= 6;
                fieldValidationErrors.name = nameValid ? '' : ' is too short';
                break;
            case 'number':
                numberValid = value.length >= 10;
                fieldValidationErrors.number = numberValid ? '': ' is too short';
                break;
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
            nameValid: nameValid,
            numberValid: numberValid,
            emailValid: emailValid,
            passwordValid: passwordValid,
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.nameValid && this.state.numberValid && this.state.emailValid && this.state.passwordValid});
    }

    async handleSubmit(){
        const { name, number, email, password, loader } = this.state;
        if(!loader) {
            try {
                this.setState({loader: true, formValid: false});
                let obj = {
                    name,
                    number: 0 + number,
                    email,
                    password
                };
                let res = await HttpUtils.post('users', obj);
                if (res.code === 200) {
                    AsyncStorage.setItem('user', JSON.stringify(res.content))
                        .then((response) => {
                            this.props.navigation.navigate('DrawerNavigator');
                        })
                }
            } catch {
                console.log('errorrrrrrrrrrr')
            }
        }
    }

    render(){
        const { formErrors } = this.state;
        let error = '';
        if(!!formErrors.name){
            error = 'name' + formErrors.name;
        }else if(!!formErrors.number){
            error = 'number' + formErrors.number;
        }else if(!!formErrors.email){
            error = 'email' + formErrors.email;
        }else if(!!formErrors.password){
            error = 'password' + formErrors.password;
        }
        return(
            <View>
            <View><MainLogin_backimage /></View>
            <ScrollView>
            <View>
                <View style={error.length ? {marginTop:130} : {marginTop: 150}}>
                    {!!error && <Text>{error}</Text>}
                </View>
                <View style={styles.inputComponent}>
                    <Item regular style={{borderRadius:25}}>
                        <Icon name="user" size={19} color="#900" style={{marginLeft:10,color:'black'}} />
                        <Input placeholder='Name'
                               value={this.state.name}
                               onChangeText={(text) => this.handleUserInput(text, 'name')}/>
                    </Item>
                </View>
                <View style={styles.inputComponent}>
                    <Item regular style={{borderRadius:25}}>
                        <Icon name="phone" size={19} color="#900" style={{marginLeft:10,color:'black'}} />
                        <Text style={{marginLeft:10,color:'gray'}}>+92 |</Text>
                        <Input placeholder='Number'
                               value={this.state.number}
                               onChangeText={(text) => this.handleUserInput(text, 'number')}/>
                    </Item>
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
                        <Input name='password' placeholder='Password'
                               value={this.state.password}
                               secureTextEntry={true}
                               onChangeText={(text) => this.handleUserInput(text, 'password')}/>
                    </Item>
                </View>
                <View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center',marginTop:10}}>
                    <View style={{}}>
                        {this.state.boo && <Icon name="check-square" size={19} color="black" style={{marginLeft:10}} onPress={() => {this.setState({boo: false})}} />}
                        {this.state.boo === false && <CheckBox checked={false} onPress={() => {this.setState({boo: true})}} style={{marginLeft:10}} />}
                    </View>
                    <View>
                        <Text onPress={() => this.props.navigation.navigate('TermCondition')} style={{marginLeft:30}}>I agree to saloon <Text style={{color:'#27AAE1'}}>Term & condition</Text></Text>
                    </View>
                </View>
                <View>
                    <Button warning style={styles.buttonSignup} disabled={!(this.state.formValid && this.state.boo) }>
                        {this.state.loader && <ActivityIndicator size="small" color="#00ff00" />}
                        <Text style={{color:'white'}} onPress={() => this.handleSubmit()}>Sign Up</Text>
                    </Button>
                </View>
            </View>
            </ScrollView>
            </View>
        )
    }
}

export default SignUpScreen;
