import { StyleSheet } from 'react-native';

export const mainStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarheight
    },
    drawerHeader: {
        backgroundColor: '#791515',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#791515',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    },
    section1: {
        backgroundColor: 'hsla(0, 79%, 17%, 0.9)', 
        marginBottom: 30, 
        margin: 15, 
        alignItems: 'center', 
        paddingBottom: 30
    },
    section2: {
        backgroundColor: 'hsla(0, 0%, 19%, .92)', 
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
    },
    button1: {
        backgroundColor: 'hsla(0, 0%, 30%, 0.8)',
        color: 'white', 
        padding: 24, 
        width: 300, 
        alignItems: 'center'       
    },
    button2: {
        backgroundColor: 'hsla(0, 70%, 30%, .8)',
        color: 'white', 
        padding: 24, 
        width: 300, 
        alignItems: 'center'       
    },
    buttonText: {
        color: 'white', 
        fontSize: 20
    }
});