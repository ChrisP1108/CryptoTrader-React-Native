import React, { Component } from 'react';
import { View, FlatList, Text, Animated, TouchableOpacity, ImageBackground } from 'react-native';
import { useContext } from 'react';
import { State } from '../state/State';
import { ListItem, Tile, Card, Image } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { mainStyles } from '../styles/MainStylesComponent';

const Software = (props) => {

    const softwareimport = useContext(State);
    const softwarepagecontent = softwareimport.softwarepagecontent;
    
    const { navigate } = props.navigation;

    const renderHomeItem = ({item}) => {
        return (
            <View style={mainStyles.section2}>
                <Image 
                    style={mainStyles.sectionImageFluid}
                    source={require('../assets/images/6.jpg')}                   
                />
                <Text style={styles.headingOverImage}>
                    {item.heading}
                </Text>
                <Text style={mainStyles.sectionText}>
                    {item.content1 + ' ' + item.content2}
                </Text>
                <TouchableOpacity 
                    style={mainStyles.button2}
                    onPress={() => navigate(item.link)}
                >
                    <Text style={mainStyles.buttonText}>{item.button}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return( 
        <ImageBackground 
            source={require('../assets/images/9.jpg')}
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

const styles = StyleSheet.create({
    headingOverImage: {
        position: 'absolute',
        top: 40,
        color: 'white', 
        fontSize: 28,
        fontWeight: '800', 
        margin: 20, 
        textAlign: 'center'
    }
});

export default Software

