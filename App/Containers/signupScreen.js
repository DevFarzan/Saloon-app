import React, { Component } from 'react';
const {height, width} = Dimensions.get("window");
import Modal from "react-native-modal";
//import { Text, TouchableOpacity, View } from "react-native";

import {
    View,
    Text,
    ScrollView,
    TouchableOpacity, Dimensions
} from 'react-native';
import MainLogin_backimage from "../Components/mainlogo_backimage";
import styles from './styles/loginScreen'
import {Input, Item, CheckBox, Body, Button} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";



class SignupScreen extends Component {

    constructor(props){
        super(props);
        this.state ={
            boo:false,
            isModalVisible: false
        }
    }
    toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });

    static navigationOptions = {
        headerTitle:'Sign up',
        headerStyle: {backgroundColor: '#F7941E'},
        headerTitleStyle: {fontSize:20,  color: 'white',alignSelf:'center', textAlign: 'center',flex:1},
        headerRight: (
            <View>

            </View>
        )
    };


    render(){
        return(
            <View>
            <View><MainLogin_backimage /></View>
            <ScrollView>
            <View>
                <View style={{marginTop:200}}></View>
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

                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center',marginTop:10}}>
                    <View style={{}}>
                        {this.state.boo && <Icon name="check-square" size={19} color="black" style={{marginLeft:10}} onPress={() => {this.setState({boo: false})}} />}
                        {this.state.boo === false && <CheckBox checked={false} onPress={() => {this.setState({boo: true})}} style={{marginLeft:10}} />}
                    </View>
                    {/*<View>
                        <TouchableOpacity onPress={this.toggleModal}>
                            <Text>Show Modal</Text>
                        </TouchableOpacity>
                        <Modal isVisible={this.state.isModalVisible} style={{backgroundColor:'white',width:width*0.9,height:height,marginRight:30}}>
                            <View style={{ flex: 1 }}>
                                <Text style={{backgroundColor:'#F7941E',color:'white',height:50,}}>Hello!</Text>
                                <TouchableOpacity onPress={this.toggleModal}>
                                    <Text>Hide me!</Text>
                                </TouchableOpacity>
                            </View>
                        </Modal>
                    </View>*/}
                    <View>
                        <Text onPress={() => this.props.navigation.navigate('term')} style={{marginLeft:30}}>I agree to saloon <Text style={{color:'#27AAE1'}}>Term & condition</Text></Text>
                    </View>
                </View>
                <View>
                    <Button warning style={styles.buttonSignup}>
                        <Text style={{color:'white'}}>Sign Up</Text>
                    </Button>
                </View>
            </View>
            </ScrollView>
            </View>
        )
    }
}

export default SignupScreen;


