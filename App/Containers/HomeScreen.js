import React, { Component } from 'react';
const {height, width} = Dimensions.get("window");

import {
    View,
    Text,
    StyleSheet, Dimensions
} from 'react-native';



class HomeScreen extends Component {

    static navigationOptions = {
        headerTitle:'Dashboard',
        headerStyle: {backgroundColor: '#F7941E'},
        headerTitleStyle: {fontSize: height*0.035 ,  color: 'white', textAlign: 'center', alignSelf: "center", flex: 1},
    }


	render(){
		return(
				<View style={styles.container}>
					<Text>HomeScreen</Text>
				</View>
			)
	}
}

export default HomeScreen;


const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems:'center',
		justifyContent:'center'
	}
});