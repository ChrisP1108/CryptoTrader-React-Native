import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarheight
    },
    section1: {
        backgroundColor: '#4E0909F0', 
        marginBottom: 30, 
        margin: 15, 
        alignItems: 'center', 
        paddingBottom: 30
    },
    sectionHeading: {
        color: 'white', 
        fontSize: 28, 
        margin: 20, 
        textAlign: 'center'
    },
    sectionImage : {
        width: 300, 
        height: 200
    },
    sectionText: {
        color: 'white', 
        fontSize: 18, 
        margin: 20,
        textAlign: 'center'
    }

});