import React, { Component } from 'react';
import { View, FlatList, Text, Animated, Button, ImageBackground } from 'react-native';
import { useContext } from 'react';
import { State } from '../state/State';
import { ListItem, Tile, Card, Image } from 'react-native-elements';
import { mainStyles } from '../styles/MainStylesComponent';

const Home = (props) => {

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
                <Button
                    color={item.inverted ? mainStyles.button2.color : mainStyles.button1.color}
                    width={160}
                    onPress={() => navigate(item.link)}
                    title={item.button}
                />
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

export default Home
