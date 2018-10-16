import React, { Component } from "react";

import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView
} from "react-native";
import {Container, Content, Card, CardItem, Body } from "native-base";
import {HttpUtils} from "../Services/HttpUtils";
import Icon from 'react-native-vector-icons/FontAwesome';
//styles
import styles from './styles/ouerservices';
const {height, width} = Dimensions.get("window");
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

class Employees extends Component {

    componentDidMount = () =>{
        const data = this.props.navigation.state.params;
        alert(data)
        this.getEmployees()
    }

    async getEmployees(){
        let res = await HttpUtils.get('getEmployees');
        console.log(res, 'responseeeeeeeee');
    }


    static navigationOptions = ({ navigation }) => {
        console.log((navigation, 'navigation'))
        return {
            headerTitle: <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><LogoTitle /></View>,
            headerStyle: {backgroundColor: 'white'},  
            headerRight:(
                <View>
                </View>
            )
        }
    }


    render() {
        return (
            <View>
            <Image source={require('../../assets/Dark/signup/dashboard.jpg')} style={{width:width,height:height,position:'relative'}}></Image>
                <View style={{position:'absolute'}}>
                       <Content padder style={{width:width}}>
                              <Card style={styles.cardbackground}>
                                    <View style={{flex:1}}>
                                        <Image source={require('../../assets/Dark/signup/services1.jpg')} style={{width:'80%',height:'70%',borderRadius: 64,marginTop:20,marginLeft:20}}></Image>

                                    </View>
                                    <View style={{flex:2}} onPress={()=>this.props.navigation.navigate('EmployeesNav')}>
                                        <ScrollView>
                                        
                                        </ScrollView>
                                    </View>
                                    
                                    <Text></Text>
                              </Card>
                        </Content>
                </View>        
            </View>
        );
    }
}
export default Employees;

