import React from 'react';
import { View, FlatList, Text, TextInput, Alert, 
    Animated, TouchableOpacity, ImageBackground, StyleSheet, Button } from 'react-native';
import { useContext, useState } from 'react';
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
                    Fill Out All Fields And Provide A Rating
                </Text>
                <Rating
                    showRating
                    startingValue={form.rating}
                    imageSize={33}
                    ratingCount={10}
                    type='star'
                    ratingTextColor='white'
                    tintColor={'#454545'}
                    onFinishRating={input => setForm({...form, rating: input})} 
                    style={styles.ratingSection}
                    value={form.rating}
                />
                <Input 
                    style={styles.inputSection}
                    placeholder='First Name'
                    leftIcon={{type: 'font-awesome', name: 'user-o'}}
                    name='firstName'
                    onChangeText={text => setForm({...form, firstName: text})}
                    value={form.firstName}
                />
                <Input 
                    style={styles.inputSection}
                    placeholder='Last Name'
                    leftIcon={{type: 'font-awesome', name: 'comment'}}
                    name='lastName'
                    onChangeText={text => setForm({...form, lastName: text})}
                    value={form.lastName}
                />
                <Input 
                    style={styles.inputSection}
                    placeholder='Your feedback'
                    leftIcon={{type: 'font-awesome', name: 'comment'}}
                    name='feedback'
                    onChangeText={text => setForm({...form, feedback: text})}
                    value={form.feedback}
                />
                <TouchableOpacity
                    style={mainStyles.button1}
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
        color: '#fff',
        backgroundColor: '#fff'
    },
});

export default Contact
