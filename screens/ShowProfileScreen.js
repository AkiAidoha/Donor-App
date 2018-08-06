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
    StyleSheet,
    Alert
} from 'react-native';
import styles from './Style';
import SvgUri from 'react-native-svg-uri';
import DatePicker from 'react-native-datepicker';
import { KeyboardAvoidingView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import firebase from '../FireBase/FireBase'



export default class ProfileScreen extends React.Component {
    
    static navigationOptions = ({navigation}) => {
        return ({
        title: 'Мои данные',
        headerStyle: {
        backgroundColor: '#40E0D0',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: '500'
        },
        headerLeft:null,
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <SvgUri
                    width="30"
                    height="30"
                    style={styles.headerRight}
                    source={require('../assets/images/edit.svg')}
                />
            </TouchableOpacity>
        )
    })
    };

    

    render() {

        return (
            <KeyboardAvoidingView style={styles.container2} behavior="padding" enabled>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <ScrollView>
                        <StatusBar
                            backgroundColor="white"
                            barStyle="light-content"
                        />      
                        <View style={styles.userData}>
                            <View style={styles.seperator}>
                                <View style={styles.userIcon}> 
                                    <SvgUri
                                        width="30"
                                        height="30"
                                        source={require('../assets/images/profile.svg')}
                                    /> 
                                </View>    
                                <Text style={styles.leftSide}>Имя: </Text>
                                <Text style={styles.rightSide}>Передаешь что-то сюда</Text>
                            </View>
                            <View style={styles.seperator2}>
                                <View style={styles.userIcon}> 
                                    <SvgUri
                                        width="30"
                                        height="30"
                                        source={require('../assets/images/genderBlack.svg')}
                                    /> 
                                </View> 
                                <Text style={styles.leftSide}>Пол: </Text>
                                <Text style={styles.rightSide}>Передаешь что-то сюда</Text>
                            </View>
                            <View style={styles.seperator2}>
                                <View style={styles.userIcon}> 
                                    <SvgUri
                                        width="30"
                                        height="30"
                                        source={require('../assets/images/calendarBlack.svg')}
                                    /> 
                                </View> 
                                <Text style={styles.leftSide}>Дата рождения: </Text>
                                <Text style={styles.rightSide}>Передаешь что-то сюда</Text>
                            </View>
                            <View style={styles.seperator2}>
                                <View style={styles.userIcon}> 
                                    <SvgUri
                                        width="30"
                                        height="30"
                                        source={require('../assets/images/heightBlack.svg')}
                                    /> 
                                </View> 
                                <Text style={styles.leftSide}>Рост: </Text>
                                <Text style={styles.rightSide}>Передаешь что-то сюда</Text>
                            </View>
                            <View style={styles.seperator2}>
                                <View style={styles.userIcon}> 
                                    <SvgUri
                                        width="30"
                                        height="30"
                                        source={require('../assets/images/weightBlack.svg')}
                                    /> 
                                </View> 
                                <Text style={styles.leftSide}>Вес: </Text>
                                <Text style={styles.rightSide}>Передаешь что-то сюда</Text>
                            </View>
                            <View style={styles.seperator2}>
                                <View style={styles.userIcon}> 
                                    <SvgUri
                                        width="30"
                                        height="30"
                                        source={require('../assets/images/enterpriseBlack.svg')}
                                    /> 
                                </View> 
                                <Text style={styles.leftSide}>Город: </Text>
                                <Text style={styles.rightSide}>Передаешь что-то сюда</Text>
                            </View>
                        </View>            
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
          );
    }
}