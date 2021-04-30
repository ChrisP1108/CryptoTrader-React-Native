import React from 'react';
import { View, Text, Alert, 
    TouchableOpacity, ImageBackground, StyleSheet} from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, CheckBox } from 'react-native-elements';
import { mainStyles } from '../styles/MainStylesComponent';

const Login = (props) => {

    const ContactForm = () => {

        const resetForm = {
            userName: '',
            password: '',
            remember: false
        }

        const { navigate } = props.navigation;
        
        const [form, setForm] = useState(resetForm);
    
        const onLogin = () => {
            if (form.userName === '' || form.password === '') {
                    Alert.alert(
                        'Not All Fields Have Been Filled Out',
                        'Please Go Back And Fill Out All Fields Before Logging In.',
                        [
                            {
                                text: 'Ok',
                                style: 'cancel',
                                onPress: () => console.log('Cancel Pressed')
                            }
                        ]
                    )
                return;
            } else {
                Alert.alert(
                    'Login Successful!',
                    'You Will Now Be Redirected.',
                    [
                        {
                            text: 'Ok',
                            style: 'cancel',
                            onPress: () => setForm(resetForm)
                        }
                    ]
                )          
                navigate('Home');
            }
        }

        return (
            <View style={mainStyles.section2}>
                <Text style={mainStyles.sectionHeading}>
                    Enter Login Credentials
                </Text>
                <Input 
                    style={styles.inputSection}
                    inputStyle={styles.whiteText}
                    placeholder='Username'
                    leftIcon={
                        <Icon
                            style={styles.icon}
                            name='user'
                            size={30}
                            color='white'
                        />
                    }
                    name='userName'
                    onChangeText={text => setForm({...form, userName: text})}
                    value={form.userName}
                />
                <Input 
                    style={styles.inputSection}
                    inputStyle={styles.whiteText}
                    placeholder='Password'
                    leftIcon={
                        <Icon
                            style={styles.icon}
                            name='key'
                            size={22}
                            color='white'
                        />
                    }
                    secureTextEntry={true}
                    name='password'
                    onChangeText={text => setForm({...form, password: text})}
                    value={form.password}
                />
                <CheckBox
                    title='Remember Me'
                    center
                    size={34}
                    checkedColor='white'
                    checked={form.remember}
                    onPress={() => setForm({...form, remember: !form.remember})}
                    containerStyle={styles.checkbox}
                />
                <TouchableOpacity
                    style={styles.button1}
                    onPress={() => onLogin()}
                >
                    <Text style={mainStyles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return( 
        <View>
            <ImageBackground 
                source={require('../assets/images/10.jpg')}
                style={mainStyles.imageBackground, {paddingBottom: 280}}
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
    checkbox: {
        backgroundColor: '#999999'
    },
    inputSection: {
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        backgroundColor: '#fff'
    },
    button1: {
        backgroundColor: 'hsla(0, 70%, 30%, .8)',
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

export default Login
