import { StyleSheet, Dimensions } from 'react-native';
const {height, width} = Dimensions.get("window");
const numColumns = 3;
const size = (width*0.8)/numColumns;

export default StyleSheet.create({
    yourbookingrow:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'yellow'
    },list: {
	    flex: 1,
	    marginTop:20,
	},
  	modalMain: {
    	height: height, 
    	width: width, 
    	backgroundColor: 'rgba(0, 0, 0, 0.9)', 
    	flexDirection: 'column', 
    	justifyContent: 'center', 
    	alignItems: 'center'
    },
	calendarStyle: {
    	height: height*0.6, 
    	width: width*0.8
    },
    itemContainer: {
        width: size,
        height: height*0.07,
        justifyContent: 'center', 
        // alignItems: 'center'
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15
    },
    selectedItemContainer: {
        width: size,
        height: height*0.07,
        justifyContent: 'center', 
        borderRadius: 20,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: 'blue',
        paddingLeft: 15
    },
    item: {
      	flex: 1,
        margin: 3,
        color: 'white',
        fontSize: 16,
    },
    selectedItem: {
        flex: 1,
        margin: 3,
        color: 'gray',
        fontSize: 16,
    }

});