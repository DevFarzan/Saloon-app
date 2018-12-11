import React, { Component } from 'react';
const {height, width} = Dimensions.get("window");
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    View,
    Text,
    StyleSheet, Dimensions,Image,ScrollView,TouchableOpacity
} from 'react-native';
import {HttpUtils} from "../Services/HttpUtils";
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

    static navigationOptions = ({ navigation }) => {
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
    constructor(props){
        super(props);
        this.state = {
            services : [],
            employees: []
        };
        this.detailService = this.detailService.bind(this);
    }

    componentDidMount(){
        this.getServices();
    }

    async getServices(){
        let res = await HttpUtils.get('getServices');
        this.setState({services: res.content});
        this.getEmployees();
    }

    async getEmployees(){
        let res = await HttpUtils.get('getEmployees');
        this.setState({employees: res.content});
    }

    detailService(heading){
        const { services, employees } = this.state;
        let arr = [];
        services.map((elem) => {
            if(elem.heading === heading){
                arr = employees.filter((elem) => elem.activity.includes(heading));
            }
        })
        console.log(arr, 'arrrrrrrrrrr')
        this.props.navigation.navigate('EmployeesNav', {arr, ...{heading}});
    }

	render(){
        const { services } = this.state;
		return(
				<ScrollView>
                    <Image source={require('../../assets/Dark/signup/dashboard.jpg')} style={{width:width,height:height,position:'relative'}}></Image>
                    <View style={{position:'absolute', backgroundColor: 'rgba(0, 0, 0, 0.9)'}}>
					    {services && services.map((elem) => {
                            return (
                                <Content padder style={{width:width}}>
                                    <Card >
                                        <TouchableOpacity style={styles.cardbackground} onPress={()=> this.detailService(elem.heading)}>
                                        <View style={{flex:1}} >
                                            <Image  source={{uri : elem.image}} style={{width:'100%',height:'100%'}}></Image>
                                        </View>
                                        <View style={{flex:2}}>
                                            <ScrollView>
                                            <Text style={{marginLeft:10,fontWeight:'bold',fontSize:16,color:'black'}}>{elem.heading}</Text>
                                            <Text style={{marginLeft:10,flex:2,color:'black'}}>{elem.description}</Text>
                                            </ScrollView>
                                        </View>
                                        </TouchableOpacity>
                                    </Card>
                                </Content>
                            )
                       })
                   }
                    </View>
				</ScrollView>
			)
	}
}

export default HomeScreen;
