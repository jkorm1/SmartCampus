import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

class HomeScreen extends Component {
    componentDidMount() {
        const { navigation } = this.props;
        this.focusListener = navigation.addListener('focus', () => {
          setTimeout(() => {
            navigation.navigate('Login');
          }, 2000); // Navigate to the 'Login' screen after 2 seconds
        });
    }

    componentWillUnmount() {
        if (this.focusListener) {
            this.focusListener(); // Remove the focus listener
        }
    }

    render(){
        return(
            <View style={styles.jkorm}>
                <Image source={require('../assets/logo.png')} style={styles.logo}/>
            </View>
        );
    } 
}

const styles = StyleSheet.create({
    jkorm: {
        backgroundColor: 'rgba(210, 165, 1, 100)',
        alignItems: 'center',
        alignContent: 'center',
        flex: 1,
    },

    logo: {
        marginTop: 280,
        resizeMode: 'contain',
    }
})




export default  HomeScreen;



