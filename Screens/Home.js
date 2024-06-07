import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { withNavigationFocus } from 'react-navigation';


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
            <View style={styles.container}>
                <Image source={require('../assets/logo.png')} style={styles.logo}/>
            </View>
        );
    } 
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(210, 165, 1, 100)',
        alignItems: 'center',
        alignContent: 'center',
        flex: 1,
    },

    logo: {
        marginTop: 200,
        resizeMode: 'contain',
    }
})




export default  HomeScreen;



