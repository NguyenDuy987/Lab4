//Bài 3 -20520319 - Võ Lục Thanh Trà
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function FavoritesScreen ({ navigation }) {
  const numberOfFavorite = 3;
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Favorites</Text>
      <Text style={styles.textStyle}>You have {numberOfFavorite} favorites</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});