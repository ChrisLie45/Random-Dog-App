import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, SafeAreaView } from 'react-native';
import React, {useState} from 'react';

export default function App() {

  const [randomDog, setDog] = useState({image: 'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_3673.jpg', breed: 'terrier irish'});

  const clickHandler = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      let imageUrl = data.message;
      let breed = data.message.split('/')[4];
      breed = breed.split('-').join(' ');
      breed = breed.charAt(0).toUpperCase() + breed.slice(1);
      
      setDog({image: imageUrl, breed: breed});
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.textContainer, styles.shadow]}>
        <Text style={{fontSize: 20}}>Hello, my breed is</Text>
        <Text style={{fontWeight: 'bold', fontSize: 25}}>{randomDog.breed}</Text>
      </View>
      
      <View style={[styles.imageContainer, styles.shadow]}>
        <Image style={styles.image} source={{uri:randomDog.image}}/>
      </View>

      <View style={[styles.buttonContainer, styles.shadow]}>
        <Button title='Random Dog 🐾' color="#000" onPress={clickHandler}/>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaf1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonContainer: {
    width: 350,
    backgroundColor: '#fff',
    borderRadius: 10,
    flex: 1,
    position: 'absolute',
    bottom: 70,
  }, 

  textContainer: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: 350,
    marginBottom: 30,
    alignItems: 'center',
  },

  imageContainer: {
      width: 350,
      height: 350,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      marginBottom: 200,
  },

  image: {
    width: 330,
    height: 330,
    borderRadius: 10,
  },

  shadow: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 3,
  }
});
