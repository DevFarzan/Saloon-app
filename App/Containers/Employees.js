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
import {Container, Content, Card, CardItem, Body,Thumbnail } from "native-base";
import StarRating from 'react-native-star-rating';
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
    constructor(props){
        super(props);
        this.state = {
            data : [],
            starCount: 3.5
        };
    }

    onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
    componentDidMount = () =>{
        const data = this.props.navigation.state.params;
        console.log(data, 'dataaaaaaaaaaa')
        this.setState({data})
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
        const { data } = this.state;
        const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
        return (
            <View>
            <Image source={require('../../assets/Dark/signup/dashboard.jpg')} style={{width:width,height:height,position:'relative'}}></Image>
                <View style={{position:'absolute'}}>
                    <Content padder style={{width:width, marginBottom: 50}}>
                        <Card style={styles.cardbackground}>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Thumbnail large source={{uri: uri}} />
                            </View>
                            <View style={{flex:2,flexDirection: 'column'}}>
                                <Text style={{marginTop:30,fontSize:22,color:'white'}}>Zainab Ansari</Text>
                                <Text>Hair Style,Threatning,Styling...</Text>
                                <View style={{width:20}}>
                                    <StarRating
                                        disabled={false}
                                        maxStars={5}
                                        starSize={12}
                                        fullStarColor={'yellow'}
                                        rating={this.state.starCount}
                                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                                  />
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <View style={{marginTop:5,flexDirection:'column',marginRight:10}}>
                                        <Button title="Show Profile" onPress={() => this.props.navigation.navigate('ProfileNav')}></Button>
                                    </View>

                                    <View style={{marginTop:5,flexDirection:'column'}}>
                                        <Button title="Booking Now" onPress={() => this.props.navigation.navigate('BookingNav')}></Button>
                                    </View>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.cardbackground}>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Thumbnail large source={{uri: uri}} />
                            </View>
                            <View style={{flex:2,flexDirection: 'column'}}>
                                <Text style={{marginTop:30,fontSize:22,color:'white'}}>Zainab Ansari</Text>
                                <Text>Hair Style,Threatning,Styling...</Text>
                                <View style={{width:20}}>
                                    <StarRating
                                        disabled={false}
                                        maxStars={5}
                                        starSize={12}
                                        fullStarColor={'yellow'}
                                        rating={this.state.starCount}
                                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                                    />
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <View style={{marginTop:10,width:width*0.3,flexDirection:'column',alignItems:'flex-start'}}>
                                        <Button title="Show Profile" onPress={() => this.props.navigation.navigate('ProfileNav')}></Button>
                                    </View>

                                    <View style={{marginTop:10,width:width*0.3,flexDirection:'column'}}>
                                        <Button title="Booking Now" onPress={() => this.props.navigation.navigate('BookingNav')}></Button>
                                    </View>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.cardbackground}>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Thumbnail large source={{uri: uri}} />
                            </View>
                            <View style={{flex:2,flexDirection: 'column'}}>
                                <Text style={{marginTop:30,fontSize:22,color:'white'}}>Zafar Ansari</Text>
                                <Text>Hair Style,Threatning,Styling...</Text>
                                <View style={{width:20}}>
                                    <StarRating
                                        disabled={false}
                                        maxStars={5}
                                        starSize={12}
                                        fullStarColor={'yellow'}
                                        rating={this.state.starCount}
                                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                                  />
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <View style={{marginTop:10,width:width*0.3,flexDirection:'column',alignItems:'flex-start'}}>
                                        <Button title="Show Profile" onPress={() => this.props.navigation.navigate('ProfileNav')}></Button>
                                    </View>

                                    <View style={{marginTop:10,width:width*0.3,flexDirection:'column'}}>
                                        <Button title="Booking Now" onPress={() => this.props.navigation.navigate('BookingNav')}></Button>
                                    </View>
                                </View>
                            </View>
                        </Card>
                    </Content>
            </View>
            </View>
        );
    }
}
export default Employees;

