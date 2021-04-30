import React from 'react';
import { View, FlatList, Text, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { useContext, useState } from 'react';
import { State } from '../state/State';
import { StyleSheet } from 'react-native';
import { mainStyles } from '../styles/MainStylesComponent';

const Order = (props) => {

    const orderimport = useContext(State);
    const orderpagecontent = orderimport.orderpagecontent;
    
    const { navigate } = props.navigation;

    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    const itemSelect = (item, price) => {
        if (cartItems.includes(item)) {
            setCartItems(cartItems.filter(list => list !== item));
            setCartTotal(cartTotal - price);
        } else {
        setCartItems([...cartItems, item]);
        setCartTotal(cartTotal + price);
        }
    }

    const renderOrderItem = ({item}) => {
        return(         
            <TouchableOpacity 
                style={styles.button}
                onPress={() => itemSelect(item.title, item.price)}
            >
                <Text style={styles.buttonText}>{item.title} - ${item.price}</Text>
            </TouchableOpacity>     
        )
    }

    const renderCartItem = ({item}) => {
        return(
            <Text style={styles.cartText}>{item}</Text>
        )
    }

    const SubmitButton = () => {
        if (cartTotal === 0) {
            return(
                <Text style={styles.nothingHeading}>
                    Nothing Has Been Selected
                </Text>
            )
        } else {
            return(
                <TouchableOpacity 
                    style={styles.button2}
                    onPress={() => {
                        Alert.alert(
                            'Thank You For Your Order',
                            `Your Price Total: $${cartTotal}`,
                            [
                                {
                                    text: 'Ok',
                                    style: 'cancel',
                                    onPress: () => {
                                        setCartItems([]);
                                        setCartTotal(0);
                                    }
                                }
                            ]
                        )            
                        navigate('Home');
                    }}
                >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity> 
            )
        }
    }

    return( 
        <ImageBackground 
            source={require('../assets/images/4.jpg')}
            style={mainStyles.imageBackground, {paddingBottom: 230}}
        >
            <View style={styles.section1}>
                <Text style={styles.sectionHeading}>
                    Select Or Deselect Items To Order
                </Text>
                <FlatList
                    data={orderpagecontent}
                    renderItem={renderOrderItem}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
            <View style={styles.section2}>
                <Text style={styles.sectionHeading}>
                    {cartTotal === 0 ? '' : `Product Cart Total: $${cartTotal}`}
                </Text>
                <FlatList
                    data={cartItems}
                    renderItem={renderCartItem}
                    keyExtractor={() => Math.ceil(Math.random() * 1000).toString()}
                />
                <SubmitButton />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    section1: {
        backgroundColor: 'hsla(0, 79%, 17%, 0.9)', 
        marginBottom: 30, 
        margin: 15, 
        alignItems: 'center', 
        paddingBottom: 5
    },
    section2: {
        backgroundColor: 'hsla(0, 0%, 19%, .92)',  
        marginLeft: 15, 
        marginRight: 15,
        alignItems: 'center', 
        paddingBottom: 15
    },
    sectionHeading: {
        fontSize: 22,
        color: 'white',
        margin: 5,
        textAlign: 'center'
    },
    button: {
        backgroundColor: 'hsla(0, 0%, 30%, 0.8)',
        color: 'white', 
        padding: 15,
        margin: 10, 
        width: 300, 
        alignItems: 'center'       
    },
    button2: {
        backgroundColor: 'hsla(0, 70%, 30%, .8)',
        color: 'white', 
        padding: 15, 
        width: 300, 
        alignItems: 'center',
        marginTop: 30       
    },
    buttonText: {
        color: 'white', 
        fontSize: 15
    },
    cartText: {
        color: 'white', 
        fontSize: 16,
        marginTop: 10,
        textAlign: 'center',
        padding: 2
    },
    nothingHeading: {
        position: 'absolute',
        top: 9,
        fontSize: 20,
        color: 'white',
        margin: 5,
        textAlign: 'center'
    },
});

export default Order

