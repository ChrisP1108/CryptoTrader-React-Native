import React from 'react';
import { View, FlatList, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { State } from '../state/State';
import { Image } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { mainStyles } from '../styles/MainStylesComponent';

const About = (props) => {

    const aboutpagecontent = State.aboutpagecontent;
    
    const { navigate } = props.navigation;

    const renderAboutItem = ({item}) => {
        console.log('refreshed')
        return (
            <View style={item.inverted ? mainStyles.section2 : mainStyles.section1}>
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
                    style={styles.button}
                    onPress={() => navigate(item.link1)}
                >
                    <Text style={mainStyles.buttonText}>{item.button1}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigate(item.link2)}
                >
                    <Text style={mainStyles.buttonText}>{item.button2}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigate(item.link3)}
                >
                    <Text style={mainStyles.buttonText}>{item.button3}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return( 
        <ImageBackground 
            source={require('../assets/images/7.jpg')}
            style={{resizeMode: 'cover', justifyContent: 'center'}}
        >
            <FlatList
                data={aboutpagecontent}
                renderItem={renderAboutItem}
                keyExtractor={item => item.id.toString()}
            />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    headingOverImage: {
        position: 'absolute',
        top: 70,
        color: 'white', 
        fontSize: 28,
        fontWeight: '800', 
        margin: 20, 
        textAlign: 'center'
    },
    button: {
        backgroundColor: 'hsla(0, 70%, 30%, .8)',
        color: 'white', 
        padding: 15,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15, 
        width: 300, 
        alignItems: 'center'       
    },
});

export default About
