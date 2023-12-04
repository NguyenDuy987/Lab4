//Bài 3 -20520319 - Võ Lục Thanh Trà
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
//Screens
import HomeScreen from '../Components/Screen/Home';
import CategoriesScreen from '../Components/Screen/Categories';
import FavouritesScreen from '../Components/Screen/Favorites';
import ProfileScreen from '../Components/Screen/Profile';
//Screen names
const homeName = "Home";
const categoriesName = "Categories";
const favouritesName = "Favourites";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

function MainBottom() {
  return (
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey',
          tabBarLabelStyle: {
            paddingBottom: 10,
            fontSize: 10
          },
          tabBarStyle: [
            {
              display: 'flex'
            },
            null
          ],
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === categoriesName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === favouritesName) {
              iconName = focused ? 'heart' : 'heart-outline';
            
            } else if (rn === profileName) {
              iconName = focused ? 'person':'person-outline';
            }


            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        /*tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}*/
        >

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={categoriesName} component={CategoriesScreen} />
        <Tab.Screen 
         name={favouritesName} 
         component={FavouritesScreen}
         options={{
          tabBarIcon: ({ color, size }) => (
              <View>
                  <Icon name="heart" size={size} color={color} />
                  <View style={styles.badge}>
                      <Text style={styles.count}>3</Text>
                  </View>
              </View>
              ),
          }} 
         />
        <Tab.Screen name={profileName} component={ProfileScreen}/>
      </Tab.Navigator>
  );
}

export default MainBottom;

styles = StyleSheet.create({
  badge: {
      position: 'absolute',
      top: -5,
      right: -5,
      backgroundColor: 'red',
      width: 20,
      height: 20,
      borderRadius: 10,
      justifyContent: 'right',
      alignItems: 'right',
  },
  count: { 
    color: 'white', 
    fontSize: 10, 
    fontWeight: 'bold',
    paddingLeft: 7,  
    paddingTop: 3,
  },
});