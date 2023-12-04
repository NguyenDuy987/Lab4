//Bài 3 -20520319 - Võ Lục Thanh Trà
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import MainBottom from './navigation/Container/MainBottom';
import { AuthProvider, useAuth } from './navigation/Container/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigation from './navigation/Container/AuthNavigation';
const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </AuthProvider>
  );
};

const AppNavigation= () => {
  const { user } = useAuth();
  return user ? <MainBottom /> : <AuthNavigation />;
};
