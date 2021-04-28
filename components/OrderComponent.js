import React, { Component } from 'react';
import { View, FlatList, Text, Animated, TouchableOpacity, ImageBackground } from 'react-native';
import { useContext, useState } from 'react';
import { State } from '../state/State';
import { ListItem, Tile, Card, Image } from 'react-native-elements';
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
                <Text style={styles.buttonText}>{item.title}</Text>
                <Text style={styles.buttonText}>${item.price}</Text>
            </TouchableOpacity>     
        )
    }

    const renderCartItem = ({item}) => {
        return(
            <Text style={mainStyles.buttonText}>{item}</Text>
        )
    }

    return( 
        <ImageBackground 
            source={require('../assets/images/5.jpg')}
            style={{resizeMode: 'cover', justifyContent: 'center'}}
        >
            <View style={styles.section1}>
                <Text style={mainStyles.sectionHeading}>
                    Select Or Deselect Items To Order
                </Text>
                <FlatList
                    data={orderpagecontent}
                    renderItem={renderOrderItem}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
            <View style={styles.section2}>
                <Text style={mainStyles.buttonText}>
                    Product Cart Total: ${cartTotal}
                </Text>
                <FlatList
                    data={cartItems}
                    renderItem={renderCartItem}
                    // keyExtractor={item => item.id.toString()}
                />
                if (cartTotal === []) {
                    <Text>Nothing Selected</Text>
                } else {
                    <TouchableOpacity 
                        style={mainStyles.button2}
                        onPress={() => console.log('Submitted')}
                    >
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity> 
                } 
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
        marginBottom: 30, 
        margin: 15, 
        alignItems: 'center', 
        paddingBottom: 5
    },
    button: {
        backgroundColor: 'hsla(0, 0%, 30%, 0.8)',
        color: 'white', 
        padding: 5,
        margin: 10, 
        width: 300, 
        alignItems: 'center'       
    },
    buttonText: {
        color: 'white', 
        fontSize: 15
    }
});

export default Order

