import React, { Component } from 'react';
const {height, width} = Dimensions.get("window");
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    View,
    Text,
    StyleSheet, Dimensions,Image,ScrollView
} from 'react-native';

import {Container, Content, Card, CardItem, Body } from "native-base";

//styles

import styles from './styles/ouerservices';


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




class HomeScreen extends Component {

    // static navigationOptions = {
    //     headerTitle:'Dashboard',
    //     headerStyle: {backgroundColor: '#F7941E'},
    //     headerTitleStyle: {fontSize: height*0.035 ,  color: 'white', textAlign: 'center', alignSelf: "center", flex: 1},
    // }
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

	render(){
		return(
				<View>
                    <Image source={require('../../assets/Dark/signup/dashboard.jpg')} style={{width:width,height:height,position:'relative'}}></Image>
                    <View style={{position:'absolute'}}>
					   <Content padder style={{width:width}}>
                              <Card style={styles.cardbackground}>
                                
                                    <View style={{flex:1}}>
                                        <Image source={require('../../assets/Dark/signup/services1.jpg')} style={{width:'100%',height:'100%'}}></Image>
                                    </View>
                                    <View style={{flex:2}}>
                                        <ScrollView>
                                        <Text style={{marginLeft:10,fontWeight:'bold',fontSize:16,color:'black'}}>Styling</Text>
                                        <Text style={{marginLeft:10,flex:2,color:'black'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</Text>
                                        </ScrollView>
                                    </View>
                                
                              </Card>
                        </Content>

                        <Content padder style={{width:width}}>
                              <Card style={styles.cardbackground}>
                                
                                    <View style={{flex:1}}>
                                        <Image source={require('../../assets/Dark/signup/services2.jpg')} style={{width:'100%',height:'100%'}}></Image>
                                    </View>
                                    <View style={{flex:2}}>
                                        <ScrollView>
                                        <Text style={{marginLeft:10,fontWeight:'bold',fontSize:16,color:'black'}}>Treatments</Text>
                                        <Text style={{marginLeft:10,flex:2,color:'black'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</Text>
                                        </ScrollView>
                                    </View>
                                
                              </Card>
                        </Content>

                        <Content padder style={{width:width}}>
                              <Card style={styles.cardbackground}>
                                
                                    <View style={{flex:1}}>
                                        <Image source={require('../../assets/Dark/signup/services3.jpg')} style={{width:'100%',height:'100%'}}></Image>
                                    </View>
                                    <View style={{flex:2}}>
                                        <ScrollView>
                                        <Text style={{marginLeft:10,fontWeight:'bold',fontSize:16,color:'black'}}>Texture</Text>
                                        <Text style={{marginLeft:10,flex:2,color:'black'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</Text>
                                        </ScrollView>
                                    </View>
                              </Card>
                        </Content>
                    </View>
				</View>
			)
	}
}

export default HomeScreen;
