import React from 'react';
import { ScrollView, View, Image, Text } from 'react-native';


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
import { SafeAreaView } from 'react-native-safe-area-view';

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

export const CustomDrawerContentComponent = props => (
    <ScrollView>
        <View
            style={mainStyles.container}
            forceInset={{top: 'always', horizontal: 'never'}}
        >
            <View style={mainStyles.drawerHeader}>
                {/* <View style={{flex: 2}}>
                    <Text style={mainStyles.drawerLogo}>CRYPTOTRADER</Text>
                </View> */}
                <Image
                    style={mainStyles.drawerImage}
                    source={require('../assets/images/logo.png')}
                />
            </View>
            <DrawerItems {...props} />
        </View>
    </ScrollView>
)

export const MainNavigator = createDrawerNavigator(
    {
        Home: { 
            screen: HomeNavigator,
            navigationOptions: {
                drawerLabel: 'Home',
                drawerIcon: () => (
                    <Icon   
                        name='arrow-right'
                        type='font-awesome'
                        size={24}
                        color='#791515'
                    />
                )
            }
        },
        Software: { 
            screen: SoftwareNavigator,
            navigationOptions: {
                drawerLabel: 'Software',
                drawerIcon: () => (
                    <Icon   
                        name='arrow-right'
                        type='font-awesome'
                        size={24}
                        color='#791515'
                    />
                )
            }
        },
        Order: { 
            screen: OrderNavigator,
            navigationOptions: {
                drawerLabel: 'Ordering',
                drawerIcon: () => (
                    <Icon   
                        name='arrow-right'
                        type='font-awesome'
                        size={24}
                        color='#791515'
                    />
                )
            }
        },
        About: { 
            screen: AboutNavigator,
            navigationOptions: {
                drawerLabel: 'About Us',
                drawerIcon: () => (
                    <Icon   
                        name='arrow-right'
                        type='font-awesome'
                        size={24}
                        color='#791515'
                    />
                )
            }
        },
        Contact: { 
            screen: ContactNavigator,
            navigationOptions: {
                drawerLabel: 'Contact Us',
                drawerIcon: () => (
                    <Icon   
                        name='arrow-right'
                        type='font-awesome'
                        size={24}
                        color='#791515'
                    />
                )
            }
        },
        Login: { 
            screen: LoginNavigator,
            navigationOptions: {
                drawerLabel: 'Login',
                colorControlHighlight: 'white',
                drawerIcon: () => (
                    <Icon   
                        name='arrow-right'
                        type='font-awesome'
                        size={24}
                        color='#791515'
                    />
                )
            }
        }
    },
    {
        initialRouteName: 'Home',
        drawerBackgroundColor: '#929292',
        contentComponent: CustomDrawerContentComponent
    }
)