import { StyleSheet, Dimensions } from 'react-native';
const {height, width} = Dimensions.get("window");




export default StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        position:'relative',
    },
    searchSection: {
        flex: 1,
        height:height*0.9,
        flexDirection: 'row',
        borderRadius:9

    },
    searchIcon: {

    },
    logo:{
        flex:1,
        width:width,
        height:height,
        justifyContent:'center'
    },
    backgroundImage: {
        flex:1,
        position:'absolute',
        height:height,
        width:width,
        resizeMode: 'cover'

    },
    usernamebox: {
        flex:1,
        position:'absolute',
        width:width*0.9,
        alignSelf:'center',
    },
    textInputColor:{
        backgroundColor:'white',
        marginTop:18,
        paddingBottom:14
    },
    inputComponent: {
        width:width*0.9,
        alignSelf: 'center',
        backgroundColor: 'white',
        marginTop:16
    },
    buttonComponent:{
        width:width*0.7,
        alignSelf:'center',
        marginTop:16,
        justifyContent: 'center'
    },
    buttonFacebook:{
        width:width*0.7,
        alignSelf:'center',
        marginTop:50,
        justifyContent:'center'
    },
    buttonNewuser:{
        width:width*0.7,
        alignSelf:'center',
        marginTop:25,
        justifyContent:'center'
    }


});