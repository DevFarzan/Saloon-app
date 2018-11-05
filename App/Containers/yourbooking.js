import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    ScrollView,
    Image,
    Dimensions
} from "react-native";
const {height, width} = Dimensions.get("window");
import StarRating from 'react-native-star-rating';
import Timeline from 'react-native-timeline-listview'
import {Container, Content, Card, CardItem, Body,Thumbnail,Tab, Tabs } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from './styles/yourbooking';


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

class Tab3 extends React.Component {
	render(){
		return(
				<Text>Tabs1</Text>
			)
	}
}

class Yourbooking extends React.Component {
	

	render(){
		return(
				
			<Container>
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

export default Yourbooking;

Yourbooking.navigationOptions = ({ navigation }) => ({
    headerTitle: <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text style={{color:'black'}}>YOUR Bookings</Text></View>,
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
});