import React from 'react';

// Component Imports
import Home from './HomeComponent';
import Software from './SoftwareComponent';
//import Order from './OrderComponent';
//import About from './AboutComponent';
//import Contact from './ContactComponent';
//import Login from './LoginComponent';

// Package Imports
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { Icon } from 'react-native-elements';

// Styles Import
import { mainStyles } from '../styles/MainStylesComponent';

export const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home },
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            title: 'Home',
            headerStyle: {
                backgroundColor: '#454545'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='bars'
                type='font-awesome'
                iconStyle={mainStyles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

export const SoftwareNavigator = createStackNavigator(
    {
        Software: { screen: Software },
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            title: 'Software',
            headerStyle: {
                backgroundColor: '#454545'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='bars'
                type='font-awesome'
                iconStyle={mainStyles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

export const MainNavigator = createDrawerNavigator(
    {
        Home: { 
            screen: HomeNavigator,
            navigationOptions: {
                drawerLabel: 'Home',
                drawerIcon: ({tintColor}) => (
                    <Icon   
                        name='home'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Software: { 
            screen: SoftwareNavigator,
            navigationOptions: {
                drawerLabel: 'Software',
                drawerIcon: ({tintColor}) => (
                    <Icon   
                        name='download'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
    }
)