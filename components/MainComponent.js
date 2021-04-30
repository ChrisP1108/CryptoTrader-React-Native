import React from 'react';

// Navigation Imports
    import { MainNavigator } from './NavigationComponent';

// Styles Import
    import { mainStyles } from '../styles/MainStylesComponent';

// Package Imports
    import { View } from 'react-native';
    import { createAppContainer } from 'react-navigation';

    

const AppNavigator = createAppContainer(MainNavigator);

const Main = () => {

    return (
        <View style={mainStyles.container}>
            <AppNavigator />
        </View>
    )
}

export default Main;