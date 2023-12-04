//Bài 3 -20520319 - Võ Lục Thanh Trà
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../../Container/AuthContext.js';
export default function ProfileScreen({ navigation }) {
  const { user, logout } = useAuth();
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Profile Screen</Text>
      <Button title="Log Out" onPress={logout} />
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
  styleButton: {
    width: 200,
    height: 40,
    backgroundColor: 'orange',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
});
