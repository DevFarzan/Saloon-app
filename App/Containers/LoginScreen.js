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

 static navigationOptions = {
     headerTitle:'Login',
     headerStyle: {backgroundColor: '#F7941E'},
     headerTitleStyle: {fontSize: height*0.035 ,  color: 'white', textAlign: 'center', alignSelf: "center", flex: 1},
 }



	render(){
		return(
            <View>
                <MainLogin_backimage />

            <ScrollView>
                   <View style={{marginTop:200}}></View>
					<View>
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
                            <Button warning style={styles.buttonComponent} onPress={() => this.props.navigation.navigate('home')}>
                                <Text> Login </Text>
                            </Button>
                        </View>
                        <View>
                            <Button primary style={styles.buttonFacebook}>
                                <Text>Facebook</Text>
                            </Button>
                        </View>
                        <View>
                        <Button warning style={styles.buttonNewuser} onPress={() => this.props.navigation.navigate('signup')}>
                            <Text>New User</Text>
                        </Button>

                    </View>
					</View>
            </ScrollView>
            </View>
			)
	}
}

export default LoginScreen;


