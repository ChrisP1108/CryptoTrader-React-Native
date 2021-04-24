import React, { Component } from 'react';
import { View, FlatList, Text, Animated, TouchableOpacity, ImageBackground } from 'react-native';
import { useContext } from 'react';
import { State } from '../state/State';
import { ListItem, Tile, Card, Image } from 'react-native-elements';
import { mainStyles } from '../styles/MainStylesComponent';

const Software = (props) => {

    const softwareimport = useContext(State);
    const softwarepagecontent = softwareimport.softwarepagecontent;
    
    const { navigate } = props.navigation;

    const renderHomeItem = ({item}) => {
        return (
            <View style={item.inverted ? mainStyles.section2 : mainStyles.section1}>
                <Image 
                    style={mainStyles.sectionImageFluid}
                    source={require('../assets/images/6.jpg')}                   
                />
                <Text style={mainStyles.sectionHeadingOverImage}>
                    {item.heading}
                </Text>
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
            style={mainStyles.imageBackground, {paddingBottom: 119}}
        >
            <FlatList
                data={softwarepagecontent}
                renderItem={renderHomeItem}
                keyExtractor={item => item.id.toString()}
            />
        </ImageBackground>
    )
}

export default Software

