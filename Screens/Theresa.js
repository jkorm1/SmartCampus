import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Linking, ActivityIndicator } from 'react-native';
import { TouchableOpacity, GestureHandlerRootView  } from 'react-native-gesture-handler';1
import {getStorage, ref, getDownloadURL } from 'firebase/storage'; 

const TheresaScreen = ({ route, navigation }) => {
    
    const [imageUrls, setImageUrls] = useState('')
    const storage = getStorage();

    const fetchImageUrls = async () => {
        try {
            const urls ={};
            const theresaImageRef = ref(storage, 'theresa.jpg');
            urls.theresa = await getDownloadURL(theresaImageRef)
            setImageUrls(urls);
        } catch (error) {
            console.erroe('Error fetching images from Firebase:', error);
        }
    };
    
    fetchImageUrls();

    const { hostelName = 'St Theresa’s Hotel', address = 'Ayeduase NT 676, Kumasi', price1 = 'GHS 16,000.00', price2 = 'GHS 8,000.00', price3 = 'GHS 4,500.00', email = 'sttheresas@gmail.com', phone = '0543316245', image } = route.params || {};


    const Star = ({ filled }) => {
        return <Text style={filled ? styles.starFilled : styles.starUnfilled}>&#9733;</Text>;
    };
    
    const handlePicturesPress = () => {
        navigation.navigate('Pictures'); 
      };
    
    const handleCallFrontDesk = () => {
        Linking.openURL('tel:+233543316245');
    }

    

    return(
        <GestureHandlerRootView>
        <View style={styles.container}>
            <View style={styles.inContainer}>
                <View style={styles.hostelBox}>
                    
                    {imageUrls.theresa ? (
                        <Image 
                            source = {{ uri: imageUrls.theresa}}
                            style={styles.hostel}
                        />
                         ) : (
                         <ActivityIndicator size = "large" color = 'black' />
                    )}
                    
                    <Text style={styles.hostelName}>{hostelName || 'St Theresa’s Hotel'}</Text>
                    <View style={styles.stars}>
                         <Star filled={true} />
                         <Star filled={true} />
                         <Star filled={true} />
                         <Star filled={true} />
                         <Star filled={false} />
                         <Text style={styles.five}>5.0</Text>
                    </View>
                
                    <Text style={styles.address}>{address || 'Ayeduase NT 676, Kumasi'}</Text>

                </View>
                <View style={styles.priceBox}>
                    <Text style={styles.Prices}>Prices</Text>
                    <Text style={styles.priceText}>One in a room        <Text style={styles.moneyText}>{price1 || 'GHS 16,000.00'}</Text></Text>
                    
                    <Text style={styles.priceText}>Two in a room        <Text style={styles.moneyText}>{price2 || 'GHS 8,000.00'}</Text></Text>
                    
                    <Text style={styles.priceText}>Three in a room      <Text style={styles.moneyText}>{price3 || 'GHS 4,500.00'}</Text></Text>
                    
                    <TouchableOpacity style={styles.roomsBtn} onPress={handlePicturesPress}>
                        <Text style={styles.roomsText}>See pictures of rooms</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.contactBox}>
                    <Text style={styles.contactDetails}>Contact  Details</Text>

                    <View style={styles.contactBox}> 
                        <View style={styles.call}>
                          <Image source={require('../assets/email (1).png')} style={styles.logo}/>
                          <Text style={styles.callText}>{email || 'sttheresas@gmail.com'}</Text>
                        </View>

                        <View style={styles.call}>
                          <Image source={require('../assets/email (2).png')} style={styles.logo}/>
                          <Text style={styles.callText}>{phone || '0543316245'}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.mapbox}>
                 <Image source={require('../assets/OIP (24).jpeg')} style={styles.map}/>
                </View>
                  
                <TouchableOpacity style={styles.frontdeskBtn} onPress={handleCallFrontDesk}>
                   <Text style={styles.frontDesk}>Call Our Front Desk</Text>
                </TouchableOpacity>
            </View>

        </View>
        </GestureHandlerRootView>
    );
}

const styles=StyleSheet.create({

    container: {
        padding: 8,

    },

    inContainer: {

    },

    hostelBox: {
        paddingBottom: 10,
        borderBottomWidth: 1,  
        borderColor: '#ccc',
        backgroundColor: '#ffffff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,


    },

    hostel: {
        width: 395,
        height: 200,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,

    },

    hostelName: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    stars: {
        flexDirection: 'row',
        
    
    },

    starFilled: {
        color:'rgba(210, 165, 1, 100)',
        fontSize: 18,
    },

    starUnfilled: {
        color: 'gray',
        fontSize: 18,

    },

    five: {
        left: 30,
        top: 3,
        color: 'gray',
        fontSize: 15,

    },


    address: {
        color: 'gray',

    },

    priceBox: {
        backgroundColor: '#ffffff',
        top: 8,
        paddingBottom: 27,

    },

    Prices: {
        fontWeight: 'bold',
        fontSize: 20,

    },

    priceText: {
        fontSize: 16,

    },

    moneyText: {
        color: 'blue',
        

    },
    roomsBtn: {
        backgroundColor: 'rgba(210, 165, 1, 100)',
        borderRadius: 20,
        width: 200,
        height: 30,
        alignContent: 'center',
        alignItems: 'center', 
        justifyContent: 'center',
        left:  60,
        top: 20,
    },

    roomsText: {
        fontWeight: 'bold',
        fontSize: 15,
    },

    map: {

    },

    contactBox: {
        backgroundColor: '#ffffff',
        top: 20,

    },

    contactDetails:{
        fontWeight: 'bold',
        fontSize: 20,

    },

    logo: {
        height: 30,
        width: 30,
        top: -10,
        left: 10,

    },

    call: {
        flexDirection: 'row',
        alignItems: 'center',
       
    },

    callText: {
        fontSize: 17,
        fontStyle: 'italic',
        marginLeft: 30,
        top: -10,

    },

    frontdeskBtn:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        left: 85,
        width: 230,
        height: 40,
        borderRadius: 20,
        top: 200,
       

    },

    frontDesk:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffff'
        

    },

    mapbox: {
        top: 50,
        height: 10,
        
        
    },
    
    map: {
        width: 395,
        

    },
 

    callBtn: {

    },


})
export default  TheresaScreen;

