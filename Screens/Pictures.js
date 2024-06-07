import React from 'react';
import { View, Text, StyleSheet, Image,  ScrollView  } from 'react-native';

const Pictures = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.incontainer}>

        <View style={styles.room}>
          <Text style={styles.name}>Room</Text>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.roomPics}>
            <Image source={require('../assets/th (8).jpeg')} style={styles.roomImage}/>
            <Image source={require('../assets/th (9).jpeg')} style={styles.roomImage}/>
            <Image source={require('../assets/th (11).jpeg')} style={styles.roomImage}/>
            <Image source={require('../assets/th (10).jpeg')} style={styles.roomImage}/>
          </View>
          </ScrollView>
        </View>

        <View style={styles.kitchen}>
          <Text style={styles.name}>Kitchen</Text>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.roomPics}>
             <Image source={require('../assets/th (14).jpeg')} style={styles.kitchenImage}/> 
             <Image source={require('../assets/th (17).jpeg')} style={styles.kitchenImage}/>
             <Image source={require('../assets/th (10).jpeg')} style={styles.kitchenImage}/>
             <Image source={require('../assets/th (9).jpeg')} style={styles.kitchenImage}/>
  
          </View>
          </ScrollView>
        </View>

        <View style={styles.kitchen}>
          <Text style={styles.name}>Wash Room</Text>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.roomPics}>
             <Image source={require('../assets/th (12).jpeg')} style={styles.kitchenImage} /> 
             <Image source={require('../assets/th (13).jpeg')} style={styles.kitchenImage}/>
             <Image source={require('../assets/th (11).jpeg')} style={styles.kitchenImage}/>

          </View>
          </ScrollView>
        </View>

        <View style={styles.kitchen}>
          <Text style={styles.name}>Environment</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.roomPics}>
            <Image source={require('../assets/th (9).jpeg')} style={styles.envImage}/>
            <Image source={require('../assets/th (13).jpeg')} style={styles.envImage}/>
          </View>
          </ScrollView>
        </View>

      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    
    
  },

  incontainer: {
    margin: 10,
    bottom: 15,
    top: 5,

  },
  

  room: {

  },

  name: {
    fontWeight: 'bold',
    fontSize: 20,

  },
  

  roomPics: {
    flexDirection: 'row',
    
  
    
  },

  roomImage: {
    width: 180,
    height: 180,
    paddingLeft: 100,
    marginTop: 10,
    marginRight: 10,

  },



  kitchenImage: {
    width: 180,
    height: 180,
    marginRight: 10,
  
    

  },

  envImage: {
    width: 342,
    height: 180,
    marginRight: 10,

  }

});

export default Pictures;