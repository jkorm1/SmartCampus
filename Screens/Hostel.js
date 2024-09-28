import React, { useState, useEffect } from 'react';
import {  StyleSheet, Text, TouchableOpacity, View, Image, ScrollView  } from 'react-native';
import { TextInput, GestureHandlerRootView } from 'react-native-gesture-handler';
import { db } from '../firebaseConfig';
import { ref, onValue } from 'firebase/database';

const HostelScreen = ({ navigation }) => {



      useEffect(() => {
        const fetchData = async () => {
          try {
            const textsRef =  ref(db, '/Hostel');
            onValue(textsRef, (snapshot) => {
              const data = snapshot.val();
              setTexts({
                choose: data.choose,
                logoutText: data.logoutText,
                pop: data.pop,
              });

              const hostelList = [];
              for (const key in data) {
                if  (key !== 'choose' && key !=='logoutText' && key !== 'pop') {
                  hostelList.push({
                    name: key,
                    ...data[key],
                  });
                }
              }
              setHostels(hostelList);
            });
            
          } catch (error) {
            console.error('Error fetching data: ', error);
          }
        };
        fetchData();
      }, []);
    
     const handleLiendaPress = () => {
      navigation.navigate('Theresa', { 
        hostelName: 'Lienda Hostel', 
        address: 'Kotwi FN 855', 
        price1: 'GHS 1500.00',
        price2: 'GHS 6,500.00',
        price3: 'GHS 3,250.00',
        email: 'christian1@gmail.com',
        phone: '0501852613',
        image: require('../assets/lienda.jpeg')
      });
    };
    
    

    const [searchQuery, setSearchQuery] = useState(''); // New state for search query
    const [texts, setTexts] = useState({});

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

    const handleHomstelPress = () => {
        navigation.navigate('Homstel'); // Navigate to the Login screen
    }
    

    const Star = ({ filled }) => {
        return <Text style={filled ? styles.starFilled : styles.starUnfilled}>&#9733;</Text>;
    };

    return(
        <GestureHandlerRootView>
         <ScrollView style={styles.scroll}>
            <View style={styles.container}>
            <View style={styles.inContainer}>
                <Text style={styles.choose}>{texts.choose}</Text>
                <TouchableOpacity style={styles.logoutBtn} onPress={handleLoginPress}>
                    <Text style={styles.logoutText}>{texts.logoutText}</Text>
                </TouchableOpacity>
                <TextInput
                 style={styles.search} 
                 placeholder='Search for hostel or homstel...'
                 onChangeText={handleSearch}
                 autoCapitalize='none'
                />
                <View style={styles.bothBtn}>
                    <TouchableOpacity style={styles.hostelBtn}>
                        <Image source={require('../assets/th (2).png')} style={styles.logo1}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.homstelBtn} onPress={handleHomstelPress}>
                        <Image source={require('../assets/th (3).png')} style={styles.logo2}/>
                    </TouchableOpacity>
                </View>

                <View View style={styles.text}>
                   <Text style={styles.pop}>{texts.pop}</Text>
                   <TouchableOpacity>
                     <Text style={styles.see}>{texts.see} --</Text>
                   </TouchableOpacity>
                </View>

                <View style={styles.popular}>
                 <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.hostelBox}>
                       <TouchableOpacity style={styles.hostelTouch} onPress={handleTheresaPress}>
                         <Image source={require('../assets/theresa.jpg')} style={styles.hostel}/>
                       </TouchableOpacity>
                       
                     <Text style={styles.name}>{texts.theresas}</Text>  
                     
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
                       <TouchableOpacity style={styles.hostelTouch} onPress={handleLiendaPress}>
                         <Image source={require('../assets/th.jpeg')} style={styles.hostel}/>
                       </TouchableOpacity>

                       <Text style={styles.name}>Lienda</Text> 

                     <View style={styles.stars}>
                        <Star filled={true} />
                        <Star filled={true} />
                        <Star filled={true} />
                        <Star filled={true} />
                        <Star filled={false} />
                     </View>
                      <Text style={styles.address}>Kotwi FN 855</Text>
                      <Text style={styles.amount}>GHS 3,250.00 ~ 15,000.00</Text>
                    </View>

                    <View style={styles.hostelBox}>
                       <TouchableOpacity style={styles.hostelTouch}>
                         <Image source={require('../assets/OIP (14).jpeg')} style={styles.hostel}/>
                       </TouchableOpacity>

                       <Text style={styles.name}>Impact Building</Text> 

                     <View style={styles.stars}>
                        <Star filled={true} />
                        <Star filled={true} />
                        <Star filled={true} />
                        <Star filled={true} />
                        <Star filled={false} />
                     </View>
                      <Text style={styles.address}>Ayeduase NT 676, Kumasi</Text>
                      <Text style={styles.amount}>GHS 9,000.00 ~ 18,000.00</Text>
                    </View>



                    <View style={styles.hostelBox}>
                       <TouchableOpacity style={styles.hostelTouch}>
                         <Image source={require('../assets/OIP (10).jpeg')} style={styles.hostel}/>
                       </TouchableOpacity>
                       
                     <Text style={styles.name}>Jalex</Text>  
                     
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
                       
                     <Text style={styles.name}>Hall 7</Text>  
                     
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
                       
                     <Text style={styles.name}>Golden</Text>  
                     
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
                       
                     <Text style={styles.name}>Amen</Text>  
                     
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
                 <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
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
                 </ScrollView>
                </View>
            </View>
          </View>

         </ScrollView>
         
        </GestureHandlerRootView>
        
    );
}

const styles=StyleSheet.create({
    scroll: {
      flex: 1,

    },

    container: {
        margin: 10,
        flex: 1,
        
      
    },

    inContainer: {
      flex: 1,
      

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
        borderWidth: 3,
        borderColor: 'rgba(210, 165, 1, 100)',
        justifyContent: 'center',
        borderRadius: 60,
        left: 60,
        
        
    },

    homstelBtn:{
        borderWidth: 1,
        justifyContent: 'center',
        borderRadius: 60,
        left: 85,
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
        paddingBottom: 30,

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
        bottom: 40
    },

    availableHostels: {
      

    },

    downHostel: {
        width: 130,
        height: 100,
        top: 50,
        borderRadius: 15
        
    },

    availableText: {
        fontWeight: 'bold',
        top: 5,
      
    },

    available: {
        flexDirection: 'row'
    },

    side:{
        top: 50,
        left: 23,
    }

})


export default  HostelScreen;

































