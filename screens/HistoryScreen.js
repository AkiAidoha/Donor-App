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

// const list = readBloodData = () => {
//     let dateRef = firebase.database().ref('donation');
//     dateRef.on("child_added", (snapshot) => {
//         <Text>{snapshot.val().bdate}</Text>;
//     });
// }

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
            <ScrollView contentContainerStyle={styles.containerHistory}>
                <View style={styles.containerHistory}>
                    <StatusBar
                        backgroundColor="white"
                        barStyle="light-content"
                    />
                    {/* <Text>{list}</Text> */}
                    <View style={styles.historyList}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('EachHistory')}>
                            <View style={styles.seperator}>
                                <Text style={styles.leftDateHistory}>Название компонента</Text> 
                                <Text style={styles.rightDateHistory}>29.09.2017</Text>                
                            </View>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </ScrollView>
        );
    }
}
