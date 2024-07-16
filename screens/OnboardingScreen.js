// screens/OnboardingScreen.js
import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

export default function OnboardingScreen({ navigation }) {
  return (
    <ImageBackground source={require('../assets/1st.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image source={require('../assets/Group.png')} style={styles.carrotImage} />
        <Text style={styles.title}>Welcome </Text>
        <Text style={styles.title2}> to our store</Text>
        <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  carrotImage: {
    width: '10%',
    height: '10%',
    marginBottom: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 0,
  },
  title2: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#ddd',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#34c759',
    paddingVertical: 22,
    paddingHorizontal: 115,
    borderRadius: 18,
    marginBottom: 50
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
