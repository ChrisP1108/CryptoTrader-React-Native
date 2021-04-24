import React from 'react';

// Component Imports
import Home from './HomeComponent';
import Software from './SoftwareComponent';
import Order from './OrderComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Login from './LoginComponent';

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
                backgroundColor: '#791515'
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

export const OrderNavigator = createStackNavigator(
    {
        Order: { screen: Order },
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            title: 'Ordering',
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

export const AboutNavigator = createStackNavigator(
    {
        About: { screen: About },
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            title: 'About Us',
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

export const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact },
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            title: 'Contact Us',
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

export const LoginNavigator = createStackNavigator(
    {
        Login: { screen: Login },
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            title: 'Login',
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
                        name='download'
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
        Order: { 
            screen: OrderNavigator,
            navigationOptions: {
                drawerLabel: 'Ordering',
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
        About: { 
            screen: AboutNavigator,
            navigationOptions: {
                drawerLabel: 'About Us',
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
        Contact: { 
            screen: ContactNavigator,
            navigationOptions: {
                drawerLabel: 'Contact Us',
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
        Login: { 
            screen: LoginNavigator,
            navigationOptions: {
                drawerLabel: 'Login',
                drawerIcon: ({tintColor}) => (
                    <Icon   
                        name='download'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        }
    }
)