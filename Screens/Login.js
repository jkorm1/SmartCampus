import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, Image, ActivityIndicator,  Alert, Linking } from 'react-native';
import { TextInput, GestureHandlerRootView } from 'react-native-gesture-handler';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = ({ navigation }) => {
  const auth = getAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignupPress = () => {
    navigation.navigate('Signup'); // Navigate to the Signup scree
  };
  
  const handleHostelPress = () => {
    navigation.navigate('Hostel'); // Navigate to the Signup scree
  };

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in both email and password.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Alert.alert('Error', 'Invalid email format.');
      return;
    }

    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      setLoading();
      const user = userCredential.user;
      Alert.alert('Success', 'Logged in successfully');
      // Navigate to the next screen, e.g., Hostel screen
      navigation.navigate('Hostel');
    })
    .catch(error => {
      setLoading(false);


      console.log('error',error.code)
    
      let errorMessage;

      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage = 'No account found with this email. Please sign up first.';
          break;
        case 'auth/invalid-credential':
          errorMessage = 'Incorrect credentials. Please try again.';
          break;
        default:
          errorMessage = 'An error occurred. Please try again.';
      }
      Alert.alert('Login Error', errorMessage);
    });
  };

    return(
        <GestureHandlerRootView>
          <View style={styles.container}>
            <View style={styles.innerbox}>
              <View style = {styles.content}>
              <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.signupButton} onPress={handleSignupPress}>
                <Text style={styles.signupText}>Sign Up</Text>
              </TouchableOpacity>

              <TextInput 
                style={styles.input} 
                placeholder='Enter your email'
                onChangeText={text=>setEmail(text)}
                keyboardType='email-address'
                autoCapitalize='none'
              />

              <TextInput
               style={styles.input}
               placeholder="Enter your password"
               onChangeText={text => setPassword(text)}
               value={password}
               secureTextEntry={true}
              />

              <Text style={styles.forgot}>Forgot password?</Text>
              <Text style={styles.or}>OR</Text>
              <TouchableOpacity style={styles.loginn} onPress={handleLogin} disabled={loading} >
              {loading ? (
                <ActivityIndicator size="small" color="#FFF" />
              ) : (
                <Text style={styles.loginntext}>Login</Text>
              )}
              </TouchableOpacity>
              <View style={styles.logocontainer}>
                <TouchableOpacity  onPress={() => openSocialMedia('https://www.facebook.com/joseph.gh.108')}>
                 <Image 
                  source={require('../assets/facebook.png')}
                  style={styles.logo1}
                 />
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => openSocialMedia('https://x.com/joseph_korm')}>
                 <Image 
                  source={require('../assets/x.png')}
                  style={styles.logo1}
                 />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openSocialMedia('https://www.instagram.com/j.korm/')}>
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
    margin: 30,


  },

  loginButton: {
    backgroundColor: 'rgba(210, 165, 1, 100)',
    position: 'absolute',
    top: 40.1,
    left: 10,
    padding: 10,
    borderRadius: 25,
    width: 110,
    height :40.60,
    alignItems: 'center',
  },

  loginText: {
    

  },

  signupButton: {
    position: 'absolute',
    top: 39,
    left: 100,
    backgroundColor: 'transparent',
    padding: 10,
    width: 100,
    alignItems: 'center',
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    borderEndWidth: 1,
    borderEndColor: 'rgba(210, 165, 1, 100)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(210, 165, 1, 100)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(210, 165, 1, 100)',

    
  },

  signupText: {
    color: 'rgba(210, 165, 1, 100)',
   
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
    left: 118,
    color: 'grey',
  },

  loginn: {
    top: 150,
    left: 15,
    right: 5,
    backgroundColor: 'rgba(210, 165, 1, 100)',
    height: 50,
    width: 245,
    borderRadius: 50,
    alignItems: 'center',

  },

  loginntext: {
    alignItems: 'center',
    top: 13,
    
  },

  or: {
    left : 130,
    top: 250,
    color: 'grey',
  },

  logocontainer: {
    flexDirection: 'row',
    top: 220,
    justifyContent: 'center',

  },

  logo1: {
    width: 50,
    height: 50,


  },

  logo2: {

  },

  logo3: {

  }









})

export default  LoginScreen;