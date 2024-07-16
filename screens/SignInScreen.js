import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';

export default function SignInScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/2nd.png')} style={styles.image} />
        <View style={styles.containertext}>
          <Text style={styles.title}>Get your groceries </Text>
          <Text style={styles.title}>with nectar</Text>
        </View>
      <Image source={require('../assets/number.png')} style={styles.number} />
      <Text style={styles.title2}>Or connect with social media </Text>
      <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.buttonText1}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.buttonText2}>Continue with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  containertext: {
    marginRight:100,
    justifyContent: 'left',
    alignItems: 'left',
    backgroundColor: '#fff',
    marginBottom:50
  },
  image: {
    width: '100%',
    height: '40%',
    resizeMode: 'cover',
  },
  number: {
    height: 40,
    marginLeft: 35,
    marginBottom: 40,
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    marginVertical: 0,
  },

  title2: {
    fontSize: 15,
    marginVertical: 0,
    textAlign: 'left', // Add this line to align the text to the left
    color: 'gray',
    marginBottom:50
  },
  button1: {
    backgroundColor: '#337AB7',
    paddingVertical: 22,
    paddingHorizontal: 90,
    borderRadius: 18,
    marginBottom: 20,
  },
  buttonText1: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button2: {
    backgroundColor: '#3B5999',
    paddingVertical: 22,
    paddingHorizontal: 80,
    borderRadius: 18,
    marginBottom: 0,
  },
  buttonText2: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
