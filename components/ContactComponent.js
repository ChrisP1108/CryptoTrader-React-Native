import React from 'react';
import { View, FlatList, Text, TextInput, Alert, 
    Animated, TouchableOpacity, ImageBackground, Button } from 'react-native';
import { useContext, useState } from 'react';
import { State } from '../state/State';
import { ListItem, Tile, Card, Image, Input, Rating } from 'react-native-elements';
import { mainStyles } from '../styles/MainStylesComponent';

const Contact = (props) => {

    const contactimport = useContext(State);
    const contactpagecontent = contactimport.contactuspagecontent;
    
    const { navigate } = props.navigation;

    const renderContactItem = ({item}) => {
        return (
            <View style={item.inverted ? mainStyles.section2 : mainStyles.section1}>
                <Text style={mainStyles.sectionHeading}>
                    {item.heading}
                </Text>
                <Image 
                    style={mainStyles.sectionImage}
                    source={require('../assets/images/14.jpg')}                   
                />
                <Text style={mainStyles.sectionText}>
                    {item.content1 + ' ' + item.content2}
                </Text>
            </View>
        )
    }

    const ContactForm = () => {

        const resetForm = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            agree: false,
            contactType: 'By Phone',
            feedback: ''
        }
        
        const [form, setForm] = useState(resetForm);
    
        const onSubmit = () => {
            Alert.alert(JSON.stringify(form));
            setForm(resetForm);
        }

        return (
            <View>
                <Text>First Name</Text>
                <Input 
                    placeholder='First Name'
                    name='firstName'
                    onChangeText={firstName => setForm({firstName: firstName})}
                    value={form.firstName}
                />
                <Text>Last Name</Text>
                <Input 
                    placeholder='Last Name'
                    name='lastName'
                    onChangeText={lastName => setForm({lastName: lastName})}
                    value={form.lastName}
                />
                <TouchableOpacity
                    style={mainStyles.button2}
                    onPress={() => onSubmit()}
                >
                    <Text style={mainStyles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return( 
        <ImageBackground 
            source={require('../assets/images/2.jpg')}
            style={{resizeMode: 'cover', justifyContent: 'center'}}
        >
            <FlatList
                data={contactpagecontent}
                renderItem={renderContactItem}
                keyExtractor={item => item.id.toString()}
            />
            <ContactForm />
        </ImageBackground>
    )
}

export default Contact
