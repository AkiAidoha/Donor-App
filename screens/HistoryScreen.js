import React from 'react';
import { View, StyleSheet,StatusBar, ScrollView,Text,TouchableOpacity } from 'react-native';
import styles from './Style'
import firebase from '../FireBase/FireBase'

const list = readBloodData = () => {
    let dateRef = firebase.database().ref('donation');
    dateRef.on("child_added", (snapshot) => {
        <Text>{snapshot.val().bdate}</Text>;
    });
}

export default class HistoryScreen extends React.Component {
    static navigationOptions = {
        title: 'История',
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
            <ScrollView>
                <View style={styles.container}>
                    <StatusBar
                        backgroundColor="white"
                        barStyle="light-content"
                    />
                    <Text>{list}</Text>
                </View>
            </ScrollView>
        );
    }
}
