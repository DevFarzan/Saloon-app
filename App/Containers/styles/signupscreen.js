import { StyleSheet, Dimensions } from 'react-native';
const {height, width} = Dimensions.get("window");




export default StyleSheet.create({
	container:{
        flex:1,
        backgroundColor:'black'
    },
	signupheadingview:{
		alignSelf:'center'
	},
	signupheadeing:{
		fontWeight:'bold',
		fontSize:30,
		color:'black',
		paddingTop:30
	},
	inputComponent: {
        width:width*0.8,
        alignSelf: 'center',
        marginTop:15,
        color:'white'
    }





});