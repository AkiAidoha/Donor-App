import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import NewsScreen from '../screens/NewsScreen';
import AddressScreen from '../screens/AddressScreen';
import BloodScreen from '../screens/BloodScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HistoryScreen from '../screens/HistoryScreen';

const NewsStack = createStackNavigator({
  News: NewsScreen,
});

NewsStack.navigationOptions = {
  tabBarLabel: 'Новости',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

const AddressStack = createStackNavigator({
  Address: AddressScreen,
});

AddressStack.navigationOptions = {
  tabBarLabel: 'Адрес',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-navigate${focused ? '' : '-outline'}` : 'md-navigate'}
    />
  ),
};

const BloodStack = createStackNavigator({
  Blood: BloodScreen,
});

BloodStack.navigationOptions = {
  tabBarLabel: 'Сдать кровь',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-heart${focused ? '' : '-outline'}` : 'md-heart'}
    />
  ),
};



const HistoryStack = createStackNavigator({
    History: HistoryScreen,
});

HistoryStack.navigationOptions = {
    tabBarLabel: 'История',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `ios-time${focused ? '' : '-outline'}` : 'md-time'}
        />
    ),
};



const ProfileStack = createStackNavigator({
    Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
    tabBarLabel: 'Мои данные',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `ios-person${focused ? '' : '-outline'}` : 'md-person'}
        />
    ),
};



export default createBottomTabNavigator({
  NewsStack,
  AddressStack,
  BloodStack,
  HistoryStack,
  ProfileStack
});
