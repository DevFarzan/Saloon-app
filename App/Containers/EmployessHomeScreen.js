import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView
} from "react-native";
import {Container,Header,Left, Body, Right,Button, Title, Content, Card, CardItem,Thumbnail,Tab, Tabs} from "native-base";
import {HttpUtils} from "../Services/HttpUtils";
import Icon from 'react-native-vector-icons/FontAwesome';
const {height, width} = Dimensions.get("window");

class Tab1 extends React.Component {
	render(){
		return(
				<View style={{justifyContent:'center',alignItems:'center',height:'90%',width:width}}>
					<Image source={require('../../assets/schedule.png')} style={{width:200,height:200}}></Image>
					<Text style={{fontSize:20}}>There is no booking yet!</Text>
				</View>
			)
	}
}

class Tab2 extends React.Component {
	render(){
		return(
				<View>
					<View style={{flexDirection:'row'}}>
						<View><Text style={{color:'black',fontSize:20,fontFamily:'bold',marginLeft:10,marginTop:10}}>7 Oct,7:55 PM</Text></View>
						<View style={{flex:2}}><Text style={{color:'black',fontSize:20,fontFamily:'bold',marginRight:15,marginTop:10,textAlign:'right'}}>PKR 1000</Text></View>
					</View>
					<View>
						<Text style={{color:'gray',marginLeft:10,fontSize:15,marginTop:20}}>By:Zainab Ansari</Text>
					</View>
					<View style={{borderWidth:1,borderColor:'#80808052',width:width,marginTop:10}}></View>
					<View style={{flexDirection:'row'}}>
						<View><Text style={{color:'black',fontSize:20,fontFamily:'bold',marginLeft:10,marginTop:10}}>7 Oct,7:55 PM</Text></View>
						<View style={{flex:2}}><Text style={{color:'black',fontSize:20,fontFamily:'bold',marginRight:15,marginTop:10,textAlign:'right'}}>PKR 789</Text></View>
					</View>
					<View>
						<Text style={{color:'gray',marginLeft:10,fontSize:15,marginTop:20}}>By:Kashaf Gul</Text>
					</View>
					<View style={{borderWidth:1,borderColor:'#80808052',width:width,marginTop:10}}></View>

					<View style={{flexDirection:'row'}}>
						<View><Text style={{color:'black',fontSize:20,fontFamily:'bold',marginLeft:10,marginTop:10}}>7 Oct,7:55 PM</Text></View>
						<View style={{flex:2}}><Text style={{color:'black',fontSize:20,fontFamily:'bold',marginRight:15,marginTop:10,textAlign:'right'}}>PKR 550</Text></View>
					</View>
					<View>
						<Text style={{color:'gray',marginLeft:10,fontSize:15,marginTop:20}}>By:Musarat kazmi</Text>
					</View>
					<View style={{borderWidth:1,borderColor:'#80808052',width:width,marginTop:10}}></View>
				</View>	
				)
	}
}





class EmployeesHomeScreen extends Component{
	static navigationOptions = ({ navigation }) => {
        console.log((navigation, 'navigation'))
        return {
            header:null
        }
    }
	render(){
		return(
		<Container>	
	        <Header style={{backgroundColor:'white'}}>
	          <Left style={{flex: 1}}>
	          	<View></View>
	          </Left>
	          <Body style={{flex: 2}}>
	            <Title style={{color:'black',alignSelf:'center'}}>Bookings</Title>
	          </Body>
	          <Right style={{flex:1}}>
	          	<View></View>
	          </Right>
	        </Header>
			<Tabs>
				<Tab heading="SCHEDULED">
				<Tab1/>
				</Tab>
				<Tab heading="HISTORY">
			 		<Tab2/>
				</Tab>
			</Tabs>
		</Container>
			)
	}
}


export default EmployeesHomeScreen;