import React from 'react';
import { View, StyleSheet,StatusBar } from 'react-native';

export default class BloodScreen extends React.Component {
  static navigationOptions = {
    title: 'Сдать кровь',
    headerStyle: {
      backgroundColor: '#40E0D0',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontFamily: 'Avenir Next',
      fontWeight: '500'
    },
  };

  render() {
    return(
      <View>
        <StatusBar
          backgroundColor="white"
          barStyle="light-content"
        />
      </View>        
    );
  }
}