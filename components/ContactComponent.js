import React from 'react';
import { View, FlatList, Text, TextInput, Alert, 
    Animated, TouchableOpacity, ImageBackground, StyleSheet, Button } from 'react-native';
import { useContext, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { State } from '../state/State';
import { ListItem, Tile, Card, Image, Input, Rating } from 'react-native-elements';
import { mainStyles } from '../styles/MainStylesComponent';

const Contact = (props) => {

    const contactimport = useContext(State);
    const contactpagecontent = contactimport.contactuspagecontent;

    const ContactForm = () => {

        const resetForm = {
            firstName: '',
            lastName: '',
            feedback: '',
            rating: 0
        }
        
        const [form, setForm] = useState(resetForm);
    
        const onSubmit = () => {
            if (form.firstName === '' || form.lastName === '' 
                || form.feedback === '' || form.rating === 0) {
                    Alert.alert(
                        'Not All Fields Have Been Filled Out',
                        'Please go back and fill out all fields before submitting.',
                        [
                            {
                                text: 'Ok',
                                style: 'cancel',
                                onPress: () => console.log('Cancel Pressed')
                            }
                        ]
                    )
                return;
            }
            console.log(form)
            setForm(resetForm);
        }

        return (
            <View style={mainStyles.section1}>
                <Text style={mainStyles.sectionHeading}>
                    Provide A Rating And Fill Out All Fields
                </Text>
                <Rating
                    showRating
                    startingValue={form.rating}
                    imageSize={33}
                    ratingCount={10}
                    type='star'
                    ratingTextColor='white'
                    tintColor={mainStyles.section1.backgroundColor}
                    onFinishRating={input => setForm({...form, rating: input})} 
                    style={styles.ratingSection}
                    value={form.rating}
                />
                <Input 
                    style={styles.inputSection}
                    inputStyle={styles.whiteText}
                    placeholder='First Name'
                    leftIcon={
                        <Icon
                            style={styles.icon}
                            name='user'
                            size={30}
                            color='white'
                        />
                    }
                    name='firstName'
                    onChangeText={text => setForm({...form, firstName: text})}
                    value={form.firstName}
                />
                <Input 
                    style={styles.inputSection}
                    inputStyle={styles.whiteText}
                    placeholder='Last Name'
                    leftIcon={
                        <Icon
                            style={styles.icon}
                            name='user'
                            size={30}
                            color='white'
                        />
                    }
                    name='lastName'
                    onChangeText={text => setForm({...form, lastName: text})}
                    value={form.lastName}
                />
                <Input 
                    style={styles.inputSection}
                    inputStyle={styles.whiteText}
                    placeholder='Your feedback'
                    leftIcon={
                        <Icon
                            style={styles.icon}
                            name='comment'
                            size={22}
                            color='white'
                        />
                    }
                    name='feedback'
                    onChangeText={text => setForm({...form, feedback: text})}
                    value={form.feedback}
                />
                <TouchableOpacity
                    style={styles.button1}
                    onPress={() => onSubmit()}
                >
                    <Text style={mainStyles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return( 
        <View>
            <ImageBackground 
                source={require('../assets/images/2.jpg')}
                style={mainStyles.imageBackground, {paddingBottom: 119}}
            >
                <ContactForm />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    ratingSection: {
        backgroundColor: '#00000000',
        marginBottom: 30, 
        margin: 15, 
        alignItems: 'center', 
        paddingBottom: 30
    },
    inputSection: {
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        backgroundColor: '#fff'
    },
    button1: {
        backgroundColor: 'hsla(0, 0%, 30%, 0.8)',
        color: 'white', 
        padding: 24, 
        width: 300, 
        alignItems: 'center' ,
        marginTop: 20      
    },
    icon: {
        marginRight: 20,
    },
    whiteText: {
        color: 'white'
    }
});

export default Contact
