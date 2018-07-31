import React from 'react';
import {
    ActivityIndicator,
    ScrollView, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    StyleSheet, 
    ImageBackground,
    View,
    StatusBar
} from 'react-native';

import SvgUri from 'react-native-svg-uri';
import styles from './Style';
import { KeyboardAvoidingView } from 'react-native';
import * as firebase from 'firebase'


const firebaseConfig = {
    apiKey: 'AIzaSyAa6Sf-V1938UWYwtDW6iLOubUxJ9Y4FJ8',
    authDomain: 'donorapp-dc0b7.firebaseapp.com',
    databaseURL: 'https://donorapp-dc0b7.firebaseio.com/',
    projectId: 'donorapp-dc0b7',
    storageBucket: 'donorapp-dc0b7.appspot.com',
    messagingSenderId: '386131022415'
}

firebase.initializeApp(firebaseConfig)

export default class LoginScreen extends React.Component{

    state = {
        email: '',
        password: '',
    }

    handleChangeUsername = (email) => {
        this.setState({email})
    }
    handleChangePassword = (password) => {
        this.setState({password})
    }

    signUpUser = (email, password) => {

    }

    loginUser = (email, password) => {
        console.log(email)
        console.log(password)
        try {
            firebase.auth().signInWithEmailAndPassword(email, password).then(function(user) {
                console.log("Success")
            })
            this.props.navigation.navigate("Main")
        }catch(error) {
            console.log(error.toString())
        }
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

                <View style={styles.logoView}>
                    <SvgUri
                        width="70"
                        height="70"
                        source={require('../assets/images/hospital.svg')}
                    />
                </View>

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
                            <TextInput  placeholder={"Email"} 
                                        style={styles.textinput}
                                        placeholderTextColor="white"
                                        value={this.state.email}
                                        onChangeText={this.handleChangeUsername}
                                        underlineColorAndroid='transparent'
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
                                        underlineColorAndroid='transparent'
                            />
                        </View>     
                    </View>  

                    <Text style={styles.forgotPassword}>Забыли пароль?</Text>

                     <View style={styles.buttonView}>
                        <TouchableOpacity 
                            style={styles.button}
                            onPress={() => this.loginUser(this.state.email, this.state.password)}
                         >
                            <Text style={styles.buttonText}>Войти</Text>        
                        </TouchableOpacity>
                        <Text style={styles.noAccount} 
                            onPress={()=> this.props.navigation.navigate("Registration", {
                                firebase: firebase
                            })}>
                                Нет учетной записи?
                        </Text>
                    </View>

                </View>
            </ImageBackground>        
            </View>
        </KeyboardAvoidingView>
        );
    }
}