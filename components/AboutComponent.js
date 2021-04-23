import React, { Component } from 'react';
import { View, FlatList, Text, Animated, TouchableOpacity, ImageBackground } from 'react-native';
import { useContext } from 'react';
import { State } from '../state/State';
import { ListItem, Tile, Card, Image } from 'react-native-elements';
import { mainStyles } from '../styles/MainStylesComponent';

const About = (props) => {

    const homeimport = useContext(State);
    const homepagecontent = homeimport.homepagecontent;
    
    const { navigate } = props.navigation;

    const renderHomeItem = ({item}) => {
        console.log('refreshed')
        return (
            <View style={item.inverted ? mainStyles.section2 : mainStyles.section1}>
                <Text style={mainStyles.sectionHeading}>
                    {item.heading}
                </Text>
                <Image 
                    style={mainStyles.sectionImage}
                    source={require('../assets/images/11.jpg')}                   
                />
                <Text style={mainStyles.sectionText}>
                    {item.content1 + ' ' + item.content2}
                </Text>
                <TouchableOpacity 
                    style={item.inverted ? mainStyles.button2 : mainStyles.button1}
                    onPress={() => navigate(item.link)}
                >
                    <Text style={mainStyles.buttonText}>{item.button}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return( 
        <ImageBackground 
            source={require('../assets/images/5.jpg')}
            style={{resizeMode: 'cover', justifyContent: 'center'}}
        >
            <FlatList
                data={homepagecontent}
                renderItem={renderHomeItem}
                keyExtractor={item => item.id.toString()}
            />
        </ImageBackground>
    )
}

export default About
