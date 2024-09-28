import React, { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView  } from 'react-native';
import { TextInput, GestureHandlerRootView } from 'react-native-gesture-handler';
  

const HomstelScreen = ({ navigation }) => {

    const [searchQuery, setSearchQuery] = useState(''); // New state for search query

    const handleSearch = (text) => {
      setSearchQuery(text); // Update the search query state
      // Perform search logic here if needed
    };

    const handleLoginPress = () => {
     navigation.navigate('Login'); // Navigate to the Login screen
    };

    const handleTheresaPress = () => {
        navigation.navigate('Theresa'); // Navigate to the Login screen
    };

    const handleHostelPress = () => {
        navigation.navigate('Hostel'); // Navigate to the Login screen
    }
    

    const Star = ({ filled }) => {
        return <Text style={filled ? styles.starFilled : styles.starUnfilled}>&#9733;</Text>;
    };

    return(
        <GestureHandlerRootView>
         <ScrollView style={styles.scroll}>
            <View style={styles.container}>
            <View style={styles.inContainer}>
                <Text style={styles.choose}>CHOOSE THE HOSTEL YOU LOVE</Text>
                <TouchableOpacity style={styles.logoutBtn} onPress={handleLoginPress}>
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
                <TextInput
                 style={styles.search} 
                 placeholder='Search for hostel or homstel...'
                 onChangeText={handleSearch}
                 autoCapitalize='none'
                />
                <View style={styles.bothBtn}>
                    <TouchableOpacity style={styles.hostelBtn} onPress={handleHostelPress}>
                        <Image source={require('../assets/th (2).png')} style={styles.logo1}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.homstelBtn} >
                        <Image source={require('../assets/th (3).png')} style={styles.logo2}/>
                    </TouchableOpacity>
                </View>

                <View View style={styles.text}>
                   <Text style={styles.pop}>Popular Hostels</Text>
                   <TouchableOpacity>
                     <Text style={styles.see}>see all --</Text>
                   </TouchableOpacity>
                </View>

                <View style={styles.popular}>
                 <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.hostelBox}>
                       <TouchableOpacity style={styles.hostelTouch} >
                         <Image source={require('../assets/OIP.jpeg')} style={styles.hostel}/>
                       </TouchableOpacity>
                       
                     <Text style={styles.name}>Ata Fie</Text>  
                     
                     <View style={styles.stars}>
                        <Star filled={true} />
                        <Star filled={true} />
                        <Star filled={true} />
                        <Star filled={true} />
                        <Star filled={false} />
                     </View>
                      <Text style={styles.address}>Ayeduase NT 676, Kumasi</Text>
                      <Text style={styles.amount}>GHS 8,000.00 ~16,000.00</Text>
                    </View>


                    <View style={styles.hostelBox}>
                       <TouchableOpacity style={styles.hostelTouch}>
                         <Image source={require('../assets/OIP (6).jpeg')} style={styles.hostel}/>
                       </TouchableOpacity>

                       <Text style={styles.name}>St Theresas</Text> 

                     <View style={styles.stars}>
                        <Star filled={true} />
                        <Star filled={true} />
                        <Star filled={true} />
                        <Star filled={true} />
                        <Star filled={false} />
                     </View>
                      <Text style={styles.address}>Ayeduase NT 676, Kumasi</Text>
                      <Text style={styles.amount}>GHS 8,000.00 ~ 16,000.00</Text>
                    </View>

                    <View style={styles.hostelBox}>
                       <TouchableOpacity style={styles.hostelTouch}>
                         <Image source={require('../assets/OIP (14).jpeg')} style={styles.hostel}/>
                       </TouchableOpacity>

                       <Text style={styles.name}>St Theresas</Text> 

                     <View style={styles.stars}>
                        <Star filled={true} />
                        <Star filled={true} />
                        <Star filled={true} />
                        <Star filled={true} />
                        <Star filled={false} />
                     </View>
                      <Text style={styles.address}>Ayeduase NT 676, Kumasi</Text>
                      <Text style={styles.amount}>GHS 8,000.00 ~ 16,000.00</Text>
                    </View>



                    <View style={styles.hostelBox}>
                       <TouchableOpacity style={styles.hostelTouch}>
                         <Image source={require('../assets/OIP (10).jpeg')} style={styles.hostel}/>
                       </TouchableOpacity>
                       
                     <Text style={styles.name}>St Theresas</Text>  
                     
                     <View style={styles.stars}>
                        <Star filled={true} />
                        <Star filled={true} />
                        <Star filled={true} />
                        <Star filled={true} />
                        <Star filled={false} />
                     </View>
                      <Text style={styles.address}>Ayeduase NT 676, Kumasi</Text>
                      <Text style={styles.amount}>GHS 8,000.00 ~16,000.00</Text>
                    </View>


                    <View style={styles.hostelBox}>
                       <TouchableOpacity style={styles.hostelTouch}>
                         <Image source={require('../assets/OIP (13).jpeg')} style={styles.hostel}/>
                       </TouchableOpacity>
                       
                     <Text style={styles.name}>St Theresas</Text>  
                     
                     <View style={styles.stars}>
                        <Star filled={true} />
                        <Star filled={true} />
                        <Star filled={true} />
                        <Star filled={true} />
                        <Star filled={false} />
                     </View>
                      <Text style={styles.address}>Ayeduase NT 676, Kumasi</Text>
                      <Text style={styles.amount}>GHS 8,000.00 ~16,000.00</Text>
                    </View>


                    <View style={styles.hostelBox}>
                       <TouchableOpacity style={styles.hostelTouch}>
                         <Image source={require('../assets/OIP (5).jpeg')} style={styles.hostel}/>
                       </TouchableOpacity>
                       
                     <Text style={styles.name}>St Theresas</Text>  
                     
                     <View style={styles.stars}>
                        <Star filled={true} />
                        <Star filled={true} />
                        <Star filled={true} />
                        <Star filled={true} />
                        <Star filled={false} />
                     </View>
                      <Text style={styles.address}>Ayeduase NT 676, Kumasi</Text>
                      <Text style={styles.amount}>GHS 8,000.00 ~16,000.00</Text>
                    </View>


                    <View style={styles.hostelBox}>
                       <TouchableOpacity style={styles.hostelTouch}>
                         <Image source={require('../assets/OIP (7).jpeg')} style={styles.hostel}/>
                       </TouchableOpacity>
                       
                     <Text style={styles.name}>St Theresas</Text>  
                     
                     <View style={styles.stars}>
                        <Star filled={true} />
                        <Star filled={true} />
                        <Star filled={true} />
                        <Star filled={true} />
                        <Star filled={false} />
                     </View>
                      <Text style={styles.address}>Ayeduase NT 676, Kumasi</Text>
                      <Text style={styles.amount}>GHS 8,000.00 ~16,000.00</Text>
                    </View>

                 </ScrollView>  
                </View>

                <View style={styles.availableHostels}>
                 <Text style={styles.availableText}>Available Hostel</Text>
                 <View style={styles.oneRow}>
                  <View style={styles.available}>
                    <TouchableOpacity style={styles.theresaTouch}>
                     <Image source={require('../assets/hostel.jpeg')} style={styles.downHostel}/>
                    </TouchableOpacity>
                    <View style= {styles.side}>
                        <Text style={styles.name}>Frontline Court</Text>
                        <Text style={styles.address}>Ayeduase FT 778</Text>
                        <Text style={styles.amount}>GHS 3,200.00 ~ GHS 6,000.00</Text>
                        <View style={styles.stars}>
                         <Star filled={true} />
                         <Star filled={true} />
                         <Star filled={true} />
                         <Star filled={true} />
                         <Star filled={false} />
                        </View>
                    </View>
                  </View>
                 </View>

                 <View style={styles.oneRow}>
                  <View style={styles.available}>
                    <TouchableOpacity style={styles.theresaTouch}>
                     <Image source={require('../assets/OIP (5).jpeg')} style={styles.downHostel}/>
                    </TouchableOpacity>
                    <View style= {styles.side}>
                        <Text style={styles.name}>Frontline Court</Text>
                        <Text style={styles.address}>Ayeduase FT 778</Text>
                        <Text style={styles.amount}>GHS 3,200.00 ~ GHS 6,000.00</Text>
                        <View style={styles.stars}>
                         <Star filled={true} />
                         <Star filled={true} />
                         <Star filled={true} />
                         <Star filled={true} />
                         <Star filled={false} />
                        </View>
                    </View>
                  </View>
                 </View>

                 <View style={styles.oneRow}>
                  <View style={styles.available}>
                    <TouchableOpacity style={styles.theresaTouch}>
                     <Image source={require('../assets/OIP (4).jpeg')} style={styles.downHostel}/>
                    </TouchableOpacity>
                    <View style= {styles.side}>
                        <Text style={styles.name}>Frontline Court</Text>
                        <Text style={styles.address}>Ayeduase FT 778</Text>
                        <Text style={styles.amount}>GHS 3,200.00 ~ GHS 6,000.00</Text>
                        <View style={styles.stars}>
                         <Star filled={true} />
                         <Star filled={true} />
                         <Star filled={true} />
                         <Star filled={true} />
                         <Star filled={false} />
                        </View>
                    </View>
                  </View>
                 </View>

                 <View style={styles.oneRow}>
                  <View style={styles.available}>
                    <TouchableOpacity style={styles.theresaTouch}>
                     <Image source={require('../assets/OIP (3).jpeg')} style={styles.downHostel}/>
                    </TouchableOpacity>
                    <View style= {styles.side}>
                        <Text style={styles.name}>Frontline Court</Text>
                        <Text style={styles.address}>Ayeduase FT 778</Text>
                        <Text style={styles.amount}>GHS 3,200.00 ~ GHS 6,000.00</Text>
                        <View style={styles.stars}>
                         <Star filled={true} />
                         <Star filled={true} />
                         <Star filled={true} />
                         <Star filled={true} />
                         <Star filled={false} />
                        </View>
                    </View>
                  </View>
                 </View>

                 <View style={styles.oneRow}>
                  <View style={styles.available}>
                    <TouchableOpacity style={styles.theresaTouch}>
                     <Image source={require('../assets/OIP (2).jpeg')} style={styles.downHostel}/>
                    </TouchableOpacity>
                    <View style= {styles.side}>
                        <Text style={styles.name}>Frontline Court</Text>
                        <Text style={styles.address}>Ayeduase FT 778</Text>
                        <Text style={styles.amount}>GHS 3,200.00 ~ GHS 6,000.00</Text>
                        <View style={styles.stars}>
                         <Star filled={true} />
                         <Star filled={true} />
                         <Star filled={true} />
                         <Star filled={true} />
                         <Star filled={false} />
                        </View>
                    </View>
                  </View>
                 </View>

                 <View style={styles.oneRow}>
                  <View style={styles.available}>
                    <TouchableOpacity style={styles.theresaTouch}>
                     <Image source={require('../assets/OIP (1).jpeg')} style={styles.downHostel}/>
                    </TouchableOpacity>
                    <View style= {styles.side}>
                        <Text style={styles.name}>Frontline Court</Text>
                        <Text style={styles.address}>Ayeduase FT 778</Text>
                        <Text style={styles.amount}>GHS 3,200.00 ~ GHS 6,000.00</Text>
                        <View style={styles.stars}>
                         <Star filled={true} />
                         <Star filled={true} />
                         <Star filled={true} />
                         <Star filled={true} />
                         <Star filled={false} />
                        </View>
                    </View>
                  </View>
                 </View>
                </View>
            </View>
          </View>

         </ScrollView>
         
        </GestureHandlerRootView>
        
    );
}

const styles=StyleSheet.create({
    scroll: {

    },

    container: {
        margin: 10,
        paddingBottom: 40,
    },

    inContainer: {

    },

    choose: {
        top: 10,
        fontWeight: 'bold',
    },

    logoutBtn: {
        backgroundColor: 'rgba(210, 165, 1, 100)',
        width: 70,
        alignItems: 'center',
        height: 30,
        left: 265,
        borderRadius: 20,
        bottom: 20,
    },

    logoutText: {
        top: 3,
    },

    search: {
        backgroundColor: 'white',
        width: 270,
        borderRadius: 30,
        paddingLeft: 10,
        marginLeft: 30,
        height: 35,
    },

    bothBtn: {
        height: 70,
        width: 50,
        flexDirection: 'row',
        top: 30,
    },

    hostelBtn:{
        justifyContent: 'center',
        borderRadius: 60,
        left: 60,
        borderWidth: 1,
    },

    homstelBtn:{
        borderWidth: 3,
        justifyContent: 'center',
        borderRadius: 60,
        left: 85,
        borderColor: 'rgba(210, 165, 1, 100)',
    },

    logo1: {
        height: 60,
        width: 100,
    },

    logo2: {
        height: 100,
        width: 100,
    },
    
    text: {
        flexDirection: 'row'
    },

    popular: {
        flexDirection: 'row',

    },

    pop: {
        top: 50,
        fontWeight: 'bold',
    },

    see: {
        color: 'rgba(210, 165, 1, 100)',
        top: 50,
        left: 190,
    },

    hostelBox: {
        flexDirection: 'column',

    },

    hostelTouch: {
        top: 70,
        width: 180,
        height: 225,


    },
     
    hostel: {
        width: 160,
        height: 150,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderTopWidth: 1,
    },

    

    name: {
        fontWeight: 'bold',
    
    },

    stars: {
        flexDirection: 'row',

    },

    starFilled: {
        color:'rgba(210, 165, 1, 100)',
    },

    starUnfilled: {
        color: 'gray'

    },

    address: {
        fontWeight: 'light',
        color:'gray',
    },

    amount: {
        fontStyle: 'italic',
        color: 'blue'
    },

    oneRow: {
        paddingVertical: 10,
        
    },

    availableHostels: {

    },

    downHostel: {
        width: 130,
        height: 100,
        top: 50,
        borderRadius: 15,
    },

    availableText: {
        fontWeight: 'bold',
        top: 40,
      
    },

    available: {
        flexDirection: 'row'
    },

    side:{
        top: 50,
        left: 23,
    }

})


export default  HomstelScreen;

































