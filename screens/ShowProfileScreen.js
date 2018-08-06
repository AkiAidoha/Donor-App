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
    
    static navigationOptions = {
        title: 'Мои данные',
        headerStyle: {
        backgroundColor: '#40E0D0',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: '500'
        },
        headerLeft:null
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