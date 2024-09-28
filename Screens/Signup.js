import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, Image, Alert, Platform, Linking, ActivityIndicator} from 'react-native';
import { TextInput, GestureHandlerRootView } from 'react-native-gesture-handler';
import { initializeApp } from '@firebase/app';
import { getAuth, createUserWithEmailAndPassword,  } from '@firebase/auth';
import { getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebaseConfig from '../firebaseConfig'; 


const app = initializeApp(firebaseConfig);

const auth = getAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLoginPress = () => {
    navigation.navigate('Login'); // Navigate to the Signup screen
  };

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Alert.alert('Error', 'Invalid email format.');
      return;
    }

    if (email === '' || password === '' || confirmPassword === '') {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    setLoading(false);

    createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      setLoading(false);
      const user = userCredential.user;
      Alert.alert('Success', 'Account created successfully');
      // Navigate to another screen if needed
      navigation.navigate('Home');
    })
    .catch(error => {
      setLoading(false);
    
      Alert.alert('Error', error.message);
    });

  }
    return(
        <GestureHandlerRootView>
          <View style={styles.container}>
            <View style={styles.innerbox}>
              <View style = {styles.content}>
                <View style ={styles.loginSignup}>
                 <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
                  <Text style={styles.loginText}>Login</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
                  <Text style={styles.signupText} >Sign Up</Text>
                 </TouchableOpacity>
                </View>
              

              <TextInput 
                style={styles.input} 
                placeholder='Enter email or Username'
                onChangeText={text=>setEmail(text)}
                keyboardType='email-address'
                autoCapitalize='none'
              />

              <TextInput
               style={styles.input}
               placeholder="Password"
               onChangeText={text => setPassword(text)}
               value={password}
               secureTextEntry={true}
              />

              <TextInput
               style={styles.input}  
               placeholder="Confirm Password"
               onChangeText={text => setConfirmPassword(text)}
               value={confirmPassword}
               secureTextEntry={true}
              />

              <Text style={styles.forgot}>Forgot password?</Text>
              <Text style={styles.or}>OR</Text>
              <TouchableOpacity style={styles.loginn} onPress={handleSignUp} disabled={loading} >
              {loading ? (
                <ActivityIndicator size="small" color="#FFF" />
              ) : (
                <Text style={styles.loginntext}>Sign Up</Text>
              )}
              </TouchableOpacity>
              <View style={styles.logocontainer}>
                <TouchableOpacity>
                 <Image 
                  source={require('../assets/facebook.png')}
                  style={styles.logo1}
                 />
                </TouchableOpacity>
                <TouchableOpacity>
                 <Image 
                  source={require('../assets/x.png')}
                  style={styles.logo1}
                 />
                </TouchableOpacity>
                <TouchableOpacity>
                 <Image 
                 source={require('../assets/instagram.png')}
                 style={styles.logo1}
                 />
                </TouchableOpacity>
              </View>
              
              </View>
            </View>
          </View>
        </GestureHandlerRootView>
    );
}

const styles=StyleSheet.create({
  container:{
    flex: 1,

  },
  innerbox: {
    backgroundColor: '#FFFFFF',
    margin: 35,
    height: 530,
    borderRadius: 30,

  },

  content: {
    margin: 10,
  },

  loginSignup:{
    left: 25,
     
  },

  loginButton: {
    backgroundColor: 'transparent',
    position: 'absolute',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    top: 39,
    left: 10,
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: 'rgba(210, 165, 1, 100)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(210, 165, 1, 100)',
    borderStartWidth: 1,
    borderStartColor: 'rgba(210, 165, 1, 100)',
    width: 110,
    height :40.60,
    alignItems: 'center',
  },

  loginText: {
    

  },

  signupButton: {
    position: 'absolute',
    top: 38.5,
    left: 100,
    backgroundColor: 'rgba(210, 165, 1, 100)',
    padding: 10,
    width: 100,
    alignItems: 'center',
    borderRadius: 30,
    borderEndWidth: 1,
    borderEndColor: 'rgba(210, 165, 1, 100)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(210, 165, 1, 100)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(210, 165, 1, 100)',
    borderStartWidth: 1,
    borderStartColor: 'rgba(210, 165, 1, 100)',
  },

  signupText: {
   
  },

  input: {
    top: 120,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    height: 55,
  },

  forgot: {
    fontWeight: 'lighter',
    top: 140,
    left: 152,
    color: 'grey',
  },

  loginn: {
    top: 150,
    left: 15,
    backgroundColor: 'rgba(210, 165, 1, 100)',
    height: 50,
    width: 238,
    borderRadius: 50,
  },

  loginntext: {
    textAlign: 'center',
    top: 13,
    
  },

  or: {
    textAlign: 'center',
    top: 240,
    color: 'grey',
  },

  logocontainer: {
    flexDirection: 'row',
    top: 210,
    justifyContent: 'center',

  },

  logo1: {
    width: 35,
    height: 35,


  },

  logo2: {

  },

  logo3: {

  }









})

export default  SignupScreen;