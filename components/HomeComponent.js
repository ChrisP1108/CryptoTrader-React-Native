import React from 'react';
import { View, FlatList, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { State } from '../state/State';
import { Image } from 'react-native-elements';
import { mainStyles } from '../styles/MainStylesComponent';

const Home = (props) => {

    const homepagecontent = State.homepagecontent;

    const { navigate } = props.navigation;

    const renderHomeItem = ({item}) => {

        return (
            <View style={item.inverted ? mainStyles.section2 : mainStyles.section1}>
                <Text style={mainStyles.sectionHeading}>
                    {item.heading}
                </Text>
                <Image 
                    style={mainStyles.sectionImage}
                    source={item.id === 1 ? require('../assets/images/11.jpg') : 
                            item.id === 2 ? require('../assets/images/8.jpg') : 
                            require('../assets/images/13.jpg')}
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
            style={mainStyles.imageBackground}
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
