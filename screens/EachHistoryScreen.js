import React from 'react';
import { 
    View, 
    StyleSheet,
    StatusBar, 
    ScrollView,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import styles from './Style'
import firebase from '../FireBase/FireBase'

export default class EachHistoryScreen extends React.Component {
    static navigationOptions = {
        title: '',
        headerStyle: {
        backgroundColor: '#40E0D0',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: '500'
        },
    };

    

    render() {  

        return (
            <View style={styles.containerHistory}>
                <StatusBar
                    backgroundColor="white"
                    barStyle="light-content"
                />
                {/* <Text>{list}</Text> */}
                <View style={styles.historyList}>
                    <View style={styles.userData}>
                        <View style={styles.seperator}>
                            <Text style={styles.leftDateHistory}>Дата донации: </Text>
                            <Text style={styles.rightDateHistory}>Передаешь что-то сюда</Text>
                        </View>
                        <View style={styles.seperator2}>
                            <Text style={styles.leftDateHistory}>Компонент: </Text>
                            <Text style={styles.rightDateHistory}>Передаешь что-то сюда</Text>
                        </View>
                        <View style={styles.seperator2}>
                            <Text style={styles.leftDateHistory}>Объем, мл: </Text>
                            <Text style={styles.rightDateHistory}>Передаешь что-то сюда</Text>
                        </View>
                        <View style={styles.seperator2}>
                            <Text style={styles.leftDateHistory}>Продукты, которые вы употребляли за последние 3 дня: </Text>
                            <Text style={styles.rightDateHistory}>Передаешь что-то сюда</Text>
                        </View>
                    </View> 
                </View>
                <View style={styles.submitView}>
                    <TouchableOpacity 
                        style={styles.delete}
                        >
                        <Text style={styles.buttonText}>Удалить историю</Text>        
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
