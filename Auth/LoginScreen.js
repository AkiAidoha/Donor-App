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

export default class LoginScreen extends React.Component{

    state = {
        username: '',
        password: '',
    }

    handleChangeUsername = (username) => {
        this.setState({username})
    }
    handleChangePassword = (password) => {
        this.setState({password})
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

                    <Text style={styles.forgotPassword}>Забыли пароль?</Text>

                     <View style={styles.buttonView}>
                        <TouchableOpacity 
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>Войти</Text>        
                        </TouchableOpacity>
                        <Text style={styles.noAccount} 
                            onPress={()=> this.props.navigation.navigate("Registration")}>
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