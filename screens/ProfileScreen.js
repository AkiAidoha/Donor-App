import React from 'react';
import { 
    View,
    StatusBar,
    Text,
    TouchableOpacity, 
    TextInput, 
    TouchableWithoutFeedback, 
    Keyboard, 
    ScrollView,
    Switch,
    StyleSheet
} from 'react-native';
import styles from './Style';
import SvgUri from 'react-native-svg-uri';
import DatePicker from 'react-native-datepicker';
import { KeyboardAvoidingView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAa6Sf-V1938UWYwtDW6iLOubUxJ9Y4FJ8",
    authDomain: "donorapp-dc0b7.firebaseapp.com",
    databaseURL: "https://donorapp-dc0b7.firebaseio.com",
    projectId: "donorapp-dc0b7",
    storageBucket: "donorapp-dc0b7.appspot.com",
    messagingSenderId: "386131022415"
}

firebase.initializeApp(firebaseConfig);

const rootRef = firebase.database().ref();
const personRef = rootRef.child('persons');

export default class ProfileScreen extends React.Component {
    
    static navigationOptions = {
        title: 'Мои данные',
        headerStyle: {
        backgroundColor: '#40E0D0',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        // fontFamily: 'Avenir Next',
        fontWeight: '500'
        },
    };

    constructor(props) {
        super(props);
        
        this.inputRefs = {};
    
        this.state = {
            persons: [],
            gender: '',
            name: '',
            height: '',
            weight: '',
            bdate: '',
            city: undefined,
            items: [
                {
                    label: 'Астана',
                    value: 'astana'
                },
                {
                    label: 'Алматы',
                    value: 'almaty'
                },
                {
                    label: 'Шымкент',
                    value: 'shymkent'
                },
                {
                    label: 'Караганды',
                    value: 'karagandy'
                },
                {
                    label: 'Актобе',
                    value: 'aktobe'
                },
                {
                    label: 'Тараз',
                    value: 'taraz'
                },
                {
                    label: 'Павлодар',
                    value: 'pavlodar'
                },
                {
                    label: 'Усть-Каменогорск',
                    value: 'oskemen'
                },
                {
                    label: 'Семей',
                    value: 'semey'
                },
                {
                    label: 'Уральск',
                    value: 'Oral'
                },
                {
                    label: 'Костанай',
                    value: 'kostanay'
                },
                {
                    label: 'Атырау',
                    value: 'atyrau'
                },
                {
                    label: 'Кызылорда',
                    value: 'kyzylorda'
                },
                {
                    label: 'Петропавловск',
                    value: 'piter'
                },
                {
                    label: 'Актау',
                    value: 'aktau'
                },
                {
                    label: 'Туркестан',
                    value: 'turkestan'
                },
                {
                    label: 'Темиртау',
                    value: 'temirtau'
                },
                {
                    label: 'Кокшетау',
                    value: 'kokshetau'
                },
                {
                    label: 'Талдыкорган',
                    value: 'taldykorgan'
                },
                {
                    label: 'Экибастуз',
                    value: 'ekibastuz'
                },
                {
                    label: 'Рудный',
                    value: 'rudnyi'
                }
            ],
            items2: [
                {
                    label: 'Мужской',
                    value: 'male'
                },
                {
                    label: 'Женский',
                    value: 'female'
                }
            ]
        };
    }

    handleDate = (bdate) => {
        this.setState({bdate})
    }

    handleHeight = (height) => {
        this.setState({height})
    }

    handleWeight = (weight) => {
        this.setState({weight})
    }

    handleName = (name) =>{
        this.setState({name})
    }

    onPressAddPerson = () => {
        if(this.state.name.trim() === ''){
            alert("name is empty");
            return;
        }
        personRef.push({
            name: this.state.name
        })    
    }

    componentDidMount() {
        personRef.on('value', (childSnapShot) => {
            const persons = [];
            childSnapShot.forEach((doc)=> {
                persons.push({
                    key: doc.key,
                    name: doc.toJSON().name
                });
                this.setState({
                    persons: persons.sort((a,b)=>{
                        return (a.name < b.name);
                    })
                })
            });
        });
    }



    render() {

        return (
            <KeyboardAvoidingView style={styles.container2} behavior="padding" enabled>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <ScrollView>
                            <StatusBar
                                backgroundColor="white"
                                barStyle="light-content"
                            />
                            <View style={styles.personData}>
                                <Text style={styles.formTitle}>Заполните форму</Text>
                                <View style={styles.inputRectangle}>
                                    <View style={styles.rectangleOne}>
                                        <SvgUri
                                            width="30"
                                            height="30"
                                            source={require('../assets/images/user.svg')}
                                        />
                                    </View>
                                    <View style={styles.rectangleTwo}>
                                        <TextInput  placeholder={"ФИО"} 
                                                    style={styles.textinput}
                                                    placeholderTextColor="white"
                                                    value={this.state.name}
                                                    onChangeText={this.handleName}
                                                    underlineColorAndroid='transparent'
                                        />  
                                    </View> 
                                </View>

                                <View style={styles.inputRectangle}>
                                    <View style={styles.rectangleOne}>
                                        <SvgUri
                                            width="30"
                                            height="30"
                                            source={require('../assets/images/gender.svg')}
                                        />
                                    </View>
                                    <View style={styles.rectangleTwo}>
                                        <RNPickerSelect
                                            placeholder={{
                                                label: 'Ваш пол...',
                                                value: null,
                                            }}
                                            
                                            items={this.state.items2}
                                            onValueChange={(value) => {
                                                this.setState({
                                                    gender: value,
                                                });
                                            }}
                                            style={pickerSelectStyles}
                                            value={this.state.gender}
                                            ref={(el) => {
                                                this.inputRefs.picker2 = el;
                                            }}
                                        />
                                    </View> 
                                </View>

                                <View style={styles.inputRectangle}>
                                    <View style={styles.rectangleOne}>
                                        <SvgUri
                                            width="30"
                                            height="30"
                                            source={require('../assets/images/calendar.svg')}
                                        />
                                    </View>
                                    <View style={styles.rectangleTwo}>
                                        <DatePicker
                                            date={this.state.bdate}
                                            mode="date"
                                            placeholder="Дата рождения"
                                            format="YYYY-MM-DD"
                                            showIcon = {false}
                                            customStyles={{
                                                dateInput:{
                                                    borderWidth: 0,
                                                },
                                                placeholderText: {
                                                    fontSize: 14,
                                                    color: 'white',
                                                }
                                            }}
                                            confirmBtnText="Подтвердить"
                                            cancelBtnText="Отмена"
                                            onDateChange={this.handleDate}
                                        />
                                    </View> 
                                </View> 

                                <View style={styles.inputRectangle}>
                                    <View style={styles.rectangleOne}>
                                        <SvgUri
                                            width="30"
                                            height="30"
                                            source={require('../assets/images/height.svg')}
                                        />
                                    </View>
                                    <View style={styles.rectangleTwo}>
                                        <TextInput  placeholder={"Рост, см"} 
                                                    keyboardType = 'numeric'
                                                    maxLength = {3}
                                                    style={styles.textinput}
                                                    placeholderTextColor="white"
                                                    value={this.state.height}
                                                    onChangeText={this.handleHeight}
                                                    underlineColorAndroid='transparent'
                                        /> 
                                    </View> 
                                </View>


                                <View style={styles.inputRectangle}>
                                    <View style={styles.rectangleOne}>
                                        <SvgUri
                                            width="30"
                                            height="30"
                                            source={require('../assets/images/weighing.svg')}
                                        />
                                    </View>
                                    <View style={styles.rectangleTwo}>
                                        <TextInput  placeholder={"Вес, кг"} 
                                                    keyboardType = 'numeric'
                                                    maxLength = {3}
                                                    style={styles.textinput}
                                                    placeholderTextColor="white"
                                                    value={this.state.weight}
                                                    onChangeText={this.handleWeight}
                                                    underlineColorAndroid='transparent'
                                        />  
                                    </View> 
                                </View>

                                <View style={styles.inputRectangle}>
                                    <View style={styles.rectangleOne}>
                                        <SvgUri
                                            width="30"
                                            height="30"
                                            source={require('../assets/images/enterprise.svg')}
                                        />
                                    </View>
                                    <View style={styles.rectangleTwo}>
                                        <RNPickerSelect
                                            placeholder={{
                                                label: 'Ваш город...',
                                                value: null,
                                            }}
                                            
                                            items={this.state.items}
                                            onValueChange={(value) => {
                                                this.setState({
                                                    city: value,
                                                });
                                            }}
                                            style={pickerSelectStyles}
                                            value={this.state.city}
                                            ref={(el) => {
                                                this.inputRefs.picker = el;
                                            }}
                                        />
                                    </View> 
                                </View>
                               
                                <View style={styles.submitView}>
                                    <TouchableOpacity 
                                        style={styles.submit}
                                        onPress={this.onPressAddPerson}
                                        >
                                        <Text style={styles.buttonText}>Изменить</Text>        
                                    </TouchableOpacity>
                                </View>
                            
                            </View>                    
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
          );
    }
}

const pickerSelectStyles = {
    inputIOS: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        color: 'white',
        paddingLeft: 20
    },
    placeholderColor: 'white',
    
};