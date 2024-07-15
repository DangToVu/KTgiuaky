// screens/SignInScreen.js
import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

export default function SignInScreen() {
  return (
    <View style={styles.container}>
     <Image source={require('../assets/2nd.png')} style={styles.image} />
      <Text style={styles.title}>Get your groceries with nectar</Text>
      <Button title="Continue with Google" onPress={() => {}} />
      <Button title="Continue with Facebook" onPress={() => {}} />
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
  image: {
    width: '100%',
    height: '40%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
});