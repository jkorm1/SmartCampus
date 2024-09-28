import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image,  ScrollView, ActivityIndicator  } from 'react-native';
import { getStorage, ref, getDownloadURL} from 'firebase/storage'; 

const Pictures = () => {
  const [loading, setLoading] = useState(true);
  const [roomImages, setRoomImages] = useState([]);
  const [kitchenImages, setKitchenImages] = useState([]);
  const [washroomImages, setWashroomImages] = useState([]);
  const [envImages, setEnvImages] = useState([]);

  useEffect(() => {
    const storage = getStorage();

    const fetchImages = async () => {
      try {
        const roomUrls = [];
        const kitchenUrls = [];
        const washroomUrls = [];
        const envUrls = [];

        const roomImageRefs = ['th (8).jpeg', 'th (9).jpeg', 'th (11).jpeg', 'th (10).jpeg'];
        const kitchenImageRefs = ['th (14).jpeg', 'th (17).jpeg', 'th (10).jpeg', 'th (9).jpeg'];
        const washroomImageRefs = ['th (12).jpeg', 'th (13).jpeg', 'th (11).jpeg'];
        const envImageRefs = ['th (9).jpeg', 'th (13).jpeg'];

        for (const imageRef of roomImageRefs) {
          const imageUrl = await getDownloadURL(ref(storage, imageRef));
          roomUrls.push(imageUrl);
        }

        for (const imageRef of kitchenImageRefs) {
          const imageUrl = await getDownloadURL(ref(storage, imageRef));
          kitchenUrls.push(imageUrl);
        }

        for (const imageRef of washroomImageRefs) {
          const imageUrl = await getDownloadURL(ref(storage, imageRef));
          washroomUrls.push(imageUrl);
        }

        for (const imageRef of envImageRefs) {
          const imageUrl = await getDownloadURL(ref(storage, imageRef));
          envUrls.push(imageUrl);
        }

        setRoomImages(roomUrls);
        setKitchenImages(kitchenUrls);
        setWashroomImages(washroomUrls);
        setEnvImages(envUrls);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching images from Firebase:', error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);


    


  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.incontainer}>

        <View style={styles.room}>
          <Text style={styles.name}>Room</Text>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.roomPics}>
                {loading ? (
                  <ActivityIndicator size="large" color="#000" />
                ) : (
                  roomImages.map((imageUrl, index) => (
                    <Image key={index} source={{ uri: imageUrl }} style={styles.roomImage} />
                  ))
                )}
              </View>
            </ScrollView>
          </View>

          <View style={styles.kitchen}>
            <Text style={styles.name}>Kitchen</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={styles.roomPics}>
                {loading ? (
                  <ActivityIndicator size="large" color="#000" />
                ) : (
                  kitchenImages.map((imageUrl, index) => (
                    <Image key={index} source={{ uri: imageUrl }} style={styles.kitchenImage} />
                  ))
                )}
              </View>
            </ScrollView>
          </View>

          <View style={styles.kitchen}>
            <Text style={styles.name}>Wash Room</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={styles.roomPics}>
                {loading ? (
                  <ActivityIndicator size="large" color="#000" />
                ) : (
                  washroomImages.map((imageUrl, index) => (
                    <Image key={index} source={{ uri: imageUrl }} style={styles.kitchenImage} />
                  ))
                )}
              </View>
            </ScrollView>
          </View>

          <View style={styles.kitchen}>
            <Text style={styles.name}>Environment</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={styles.roomPics}>
                {loading ? (
                  <ActivityIndicator size="large" color="#000" />
                ) : (
                  envImages.map((imageUrl, index) => (
                    <Image key={index} source={{ uri: imageUrl }} style={styles.envImage} />
                  ))
                )}
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