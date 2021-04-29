import React from 'react';

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