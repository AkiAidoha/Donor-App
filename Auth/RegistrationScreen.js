import React from 'react';
import {
    ActivityIndicator,
    ScrollView, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    StyleSheet, 
    View,
    ImageBackground,
    StatusBar
} from 'react-native';

import SvgUri from 'react-native-svg-uri';
import DatePicker from 'react-native-datepicker';
import styles from './Style';
import { KeyboardAvoidingView } from 'react-native';

export default class RegistrationScreen extends React.Component{
    

    state = {
        username: '',
        password: '',
        bdate: '',
        height: '',
        weight: '',
        city: ''
    }

    handleChangeUsername = (username) => {
        this.setState({username})
    }
    handleChangePassword = (password) => {
        this.setState({password})
    }
    handleDate = (bdate) => {
        this.setState({bdate})
    }
    handleHeight = (height) =>{
        this.setState({height})
    }
    handleWeight = (weight) => {
        this.setState({weight})
    }
    handleCity = (city) => {
        this.setState({city})
    }


    render(){
        return(
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
    
            <View style={styles.container}>
                    <ImageBackground
                        style={{
                        backgroundColor: '#ccc',
                        flex: 1,
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#fff'
                        }}
                        source={require('../assets/images/32-649_4.jpg')}
                    >
                <View style={styles.inputs}>
                    <View style={styles.inputRectangle}>
                        <View style={styles.rectangleOne}>
                            <SvgUri
                                width="30"
                                height="30"
                                source={require('../assets/images/user.svg')}
                            />
                        </View>
                        <View style={styles.rectangleTwo}>
                            <TextInput  placeholder={"Имя пользователя"} 
                                        style={styles.textinput}
                                        placeholderTextColor="white"
                                        value={this.state.username}
                                        onChangeText={this.handleChangeUsername}
                            />
                        </View>    
                    </View> 
                                
                    <View style={styles.inputRectangle}>
                        <View style={styles.rectangleOne}>
                            <SvgUri
                                width="30"
                                height="30"
                                source={require('../assets/images/padlock.svg')}
                            />
                        </View>
                        <View style={styles.rectangleTwo}>
                            <TextInput  placeholder={"Пароль"} 
                                        style={styles.textinput}
                                        placeholderTextColor="white"
                                        value={this.state.password}
                                        onChangeText={this.handleChangePassword}
                                        secureTextEntry
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
                                        style={styles.textinput}
                                        placeholderTextColor="white"
                                        value={this.state.height}
                                        onChangeText={this.handleHeight}
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
                                        style={styles.textinput}
                                        placeholderTextColor="white"
                                        value={this.state.weight}
                                        onChangeText={this.handleWeight}
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
                            <TextInput  placeholder={"Город"} 
                                        style={styles.textinput}
                                        placeholderTextColor="white"
                                        value={this.state.city}
                                        onChangeText={this.handleCity}
                            /> 
                        </View> 
                    </View>

                     <View style={styles.buttonView}>
                        <TouchableOpacity 
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>Зарегистрироваться</Text>        
                        </TouchableOpacity>
                        <Text style={styles.noAccount} 
                            onPress={()=> this.props.navigation.navigate("Login")}>
                                Есть аккаунт?
                        </Text>
                    </View>

                </View>
                </ImageBackground>    
            </View>
        </KeyboardAvoidingView>
        );
    }
}