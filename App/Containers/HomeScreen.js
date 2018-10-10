import React, { Component } from 'react';
const {height, width} = Dimensions.get("window");
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    View,
    Text,
    StyleSheet, Dimensions
} from 'react-native';

class HomeScreen extends Component {

    // static navigationOptions = {
    //     headerTitle:'Dashboard',
    //     headerStyle: {backgroundColor: '#F7941E'},
    //     headerTitleStyle: {fontSize: height*0.035 ,  color: 'white', textAlign: 'center', alignSelf: "center", flex: 1},
    // }
    static navigationOptions = ({ navigation }) => {
        console.log((navigation, 'navigation'))
        return {
            headerLeft: (
                <View style={{ padding: 10 }}>
                    <Icon name="rocket" size={24} onPress={() => navigation.openDrawer()} />
                </View>
            )
        }
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