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
                              <Card >
                                    <TouchableOpacity style={styles.cardbackground} onPress={()=>this.props.navigation.navigate('EmployeesNav')}>
                                    <View style={{flex:1}} >
                                        <Image source={require('../../assets/Dark/signup/services1.jpg')} style={{width:'100%',height:'100%'}}></Image>
                                    </View>
                                    <View style={{flex:2}} onPress={()=>this.props.navigation.navigate('EmployeesNav')}>
                                        <ScrollView>
                                        <Text style={{marginLeft:10,fontWeight:'bold',fontSize:16,color:'black'}}>Styling</Text>
                                        <Text style={{marginLeft:10,flex:2,color:'black'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</Text>
                                        </ScrollView>
                                    </View>
                                    </TouchableOpacity>
                                    <Text></Text>
                              </Card>
                        </Content>
                </View>        
            </View>
        );
    }
}
export default Employees;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});