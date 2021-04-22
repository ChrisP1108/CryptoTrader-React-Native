import React from 'react';

// Component Imports
    import Home from './HomeComponent';
    import Software from './SoftwareComponent';
    import Order from './OrderComponent';
    import About from './AboutComponent';
    import Contact from './ContactComponent';
    import Login from './LoginComponent';
    
// Stack Navigation Imports    
    import HomeNavigator from './NavigationComponent';
    import SoftwareNavigator from './NavigationComponent';
    import OrderNavigator from './NavigationComponent';
    import AboutNavigator from './NavigationComponent';
    import ContactNavigator from './NavigationComponent';
    import LoginNavigator from './NavigationComponent';

// Navigation Imports
    import { MainNavigator } from './NavigationComponent';

// Styles Import
    import { mainStyles } from '../styles/MainStylesComponent';

// Package Imports
    import { View, Platform, StyleSheet, Text, ScrollView, Image } from 'react-native';
    import { createStackNavigator } from 'react-navigation-stack';
    import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
    import { createAppContainer } from 'react-navigation';
    import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
    import { Icon } from 'react-native-elements';
    import SafeAreaView from 'react-native-safe-area-view';

const AppNavigator = createAppContainer(MainNavigator);

const Main = () => {

    return (
        <View style={mainStyles.container}>
            <AppNavigator />
        </View>
    )
}

export default Main;