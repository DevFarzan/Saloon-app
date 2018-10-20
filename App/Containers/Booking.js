import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    TouchableOpacity,
    Dimensions,
    FlatList
} from "react-native";
const {height, width} = Dimensions.get("window");
import styles from './styles/bookingStyles';
import { Item, Input } from 'native-base';
import RNPickerSelect from 'react-native-picker-select';
import { Calendar } from 'react-native-calendars';
import ModalView from '../Components/ModalView';
import moment from 'moment';

const _format = 'YYYY-MM-DD';
const _today = moment().format(_format);
const _maxDate = moment().add(15, 'days').format(_format);
const data = [
  {id: '1', value: '11:00 AM', },
  {id: '2', value: '11:30 AM'},
  {id: '3', value: '12:00 PM'},
  {id: '4', value: '12:30 PM'},
  {id: '5', value: '1:00 PM'},
  {id: '6', value: '1:30 PM'},
  {id: '7', value: '2:00 PM'},
  {id: '8', value: '2:30 PM'},
  {id: '9', value: '3:00 PM'},
  {id: '10', value: '3:30 PM'},
  {id: '11', value: '4:00 PM'},
  {id: '12', value: '4:30 PM'},
  {id: '13', value: '5:00 PM'},
  {id: '14', value: '5:30 PM'},
  {id: '15', value: '6:00 PM'},
  {id: '16', value: '6:30 PM'},
  {id: '17', value: '7:00 PM'},
  {id: '18', value: '7:30 PM'},
  {id: '19', value: '8:00 PM'},
  {id: '20', value: '8:30 PM'},
  {id: '21', value: '9:00 PM'},
];

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

class Booking extends Component {
    constructor(props){
        super(props);
        this.state = {
            yesOrNo: ['Yes', 'No'],
            yesNoValue: '',
            modal: false,
            modal2: false,
            selectedDate: '',
            _markedDates: {
                        '2018-10-23': {disabled: true},
                        '2018-10-08': {textColor: '#666'},
                        '2018-10-09': {textColor: '#666'},
                        // '2018-10-14': {startingDay: true, color: 'blue', endingDay: true},
                        '2018-10-21': {startingDay: true, color: 'gray', textColor: 'black', disabled: true},
                        '2018-10-22': {endingDay: true, color: 'gray'},
                        '2018-10-24': {startingDay: true, color: 'gray'},
                        '2018-10-25': {color: 'gray'},
                        '2018-10-26': {endingDay: true, color: 'gray'}
                    }
        }
        this.onDayPress = this.onDayPress.bind(this);
    }

    openTimer(){
        const numColumns = 3;
        return(
            <View style={styles.modalMain}>
                    <View style={{width: width, flex: 1}}></View>
                <View style={{width: width*0.8, flex: 4, flexDirection: 'column'}}>
                    <View style={{width: width*0.8, flex: 0.8, backgroundColor: 'white', flexDirection: 'row'}}>
                        <View style={{width: width*0.1}}></View>
                        <View style={{width: width*0.6}}></View>
                        <View style={{width: width*0.1, justifyContent: 'center', alignItems: 'center'}}>
                            <TouchableOpacity onPress={this.closeModal.bind(this)}>
                                <Text style={{fontSize: 30, color: 'black'}}>X</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{width: width*0.8, flex: 4}}>
                        <FlatList 
                            data={data}
                            renderItem={({item}) => (
                                <View style={styles.itemContainer}>
                                    <Text style={styles.item}>{item.value}</Text>
                                </View>
                            )}
                            keyExtractor={item => item.id}
                            numColumns={numColumns} />
                        </View>
                </View>
                    <View style={{width: width, flex: 1}}></View>
                
            </View>
        )
    }

    openCalender(){
        const { selectedDate, _markedDates } = this.state;
        return (
            <View style={styles.modalMain}>
                <Calendar 
                    onDayPress={this.onDayPress}
                    current={'2018-10-16'}
                    minDate={_today}
                    maxDate={_maxDate}
                    firstDay={1}
                    markingType={'period'}
                    markedDates={_markedDates}
                    theme={{
                        calendarBackground: 'white',
                        textSectionTitleColor: 'white',
                        dayTextColor: 'black',
                        todayTextColor: '#333248',
                        selectedDayTextColor: '#333248',
                        monthTextColor: '#333248',
                        selectedDayBackgroundColor: 'black',
                        arrowColor: '#333248',
                        // textDisabledColor: 'gray',
                        'stylesheet.calendar.header': {
                          week: {
                            marginTop: 5,
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                          }
                        }
                      }}
                    style={styles.calendarStyle}/>
                <TouchableOpacity onPress={this.closeModal.bind(this)}>
                    <Text style={{fontSize: 30, color: 'white'}}>X</Text>
                </TouchableOpacity>
            </View>
        )
    }

    closeModal(){
        this.setState({modal: false, modal2: false})
    }

    onDayPress(day) {
        const { _markedDates } = this.state;
        console.log(_markedDates, 'marked Datessssssssss')
        const _selectedDay = moment(day.dateString).format(_format);
      
          let marked = true;
          if (this.state._markedDates[_selectedDay]) {
            // Already in marked dates, so reverse current marked state
            marked = !this.state._markedDates[_selectedDay].marked;
          }
          
          // Create a new object using object property spread since it should be immutable
          // Reading: https://davidwalsh.name/merge-objects
          const updatedMarkedDates = {...this.state._markedDates, ...{ [_selectedDay]: { marked } } }
          console.log(updatedMarkedDates, '44444444444444')
          
          // Triggers component to render again, picking up the new state
          this.closeModal();
          this.setState({ _markedDates: updatedMarkedDates, modal2:true });
    }

    render() {
        const { modal, modal2 } = this.state;
        return (
            <View>
            <Image source={require('../../assets/Dark/signup/dashboard.jpg')} style={styles.mainImage}></Image>
            <View style={styles.overlay}>
                <View style={styles.inputView}>
                    <Input name='email' placeholder='Name' placeholderTextColor='white'
                           value=''
                           underlineColorAndroid={'white'}
                            style={styles.inputStyle} />
                </View>
                <View  style={styles.inputView}>            
                    <Input name='email' placeholder='Phone Number' placeholderTextColor='white'
                           value=''
                           underlineColorAndroid={'white'}
                            style={styles.inputStyle} />
                </View>
                <View style={styles.inputView}>    
                    <Input name='email' placeholder='Email' placeholderTextColor='white'
                           value=''
                           underlineColorAndroid={'white'}
                            style={styles.inputStyle} />
                </View>
                <View style={styles.pickerView}>
                    <RNPickerSelect
                        placeholder={{
                            label: '- CHOOSE SERVICE -',
                            value: '',
                            key: ''
                        }}
                        items={this.state.yesOrNo.map((el)=>{
                            return {label: el, value: el}
                        })}
                        onValueChange={(value) => {
                            this.setState({yesNoValue: value});
                        }}
                        value={this.state.yesNoValue}
                        hideIcon={true}
                        style={pickerStyle}
                    />
                </View>  
                <View style={styles.pickerView}>
                    <RNPickerSelect
                        placeholder={{
                            label: '- CHOOSE BRANCHES -',
                            value: '',
                            key: ''
                        }}
                        items={this.state.yesOrNo.map((el)=>{
                            return {label: el, value: el}
                        })}
                        onValueChange={(value) => {
                            this.setState({yesNoValue: value});
                        }}
                        value={this.state.yesNoValue}
                        hideIcon={true}
                        style={pickerStyle}
                    />
                </View>
                <TouchableOpacity style={styles.scheduleView} onPress={() => {this.setState({modal: true})}}>
                    <View>
                        <Text style={styles.scheduleViewText}>- Schedule -</Text>
                    </View>  
                </TouchableOpacity>   
                {this.state.modal && <View>
                    <ModalView modalContent = {this.openCalender.bind(this)}/>
                </View>}
                {this.state.modal2 && <View>
                    <ModalView modalContent = {this.openTimer.bind(this)}/>
                </View>}           
                <View style={{flex: 5}}></View>
            </View>    
                
            </View>
        );
    }
}

export default Booking;

const pickerStyle = {
    flex: 1,
    placeholderColor: 'white',
    inputAndroid: {
        color: 'white',
    },
    underline: { borderTopWidth: 0 },
    alignItems: 'center'
}

Booking.navigationOptions = ({ navigation }) => ({
    headerTitle: <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><LogoTitle /></View>,
    headerStyle: {backgroundColor: 'white'},  
    headerRight:(
        <View>
        </View>
    )
});
