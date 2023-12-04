// screens/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const [cartCount, setCartCount] = useState(0);
  const [hotDealsData, setHotDealsData] = useState([]);
  const [newArrivalsData, setNewArrivalsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const hotDealsResponse = await axios.get('https://fakestoreapi.com/products?limit=4');
        const newArrivalsResponse = await axios.get('https://fakestoreapi.com/products?limit=4&start=4');

        setHotDealsData(hotDealsResponse.data);
        setNewArrivalsData(newArrivalsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const addToCart = (product) => {
    setCartCount(cartCount + 1);
    Alert.alert('Thông báo', 'Sản phẩm đã được thêm vào giỏ hàng.');
  };

  const navigateToProductDetail = (product) => {
    navigation.navigate('ProductDetail', { product });
  };

  const renderProductItem = ({ item }) => (

    <View style={styles.productContainer}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName} >{item.title}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>{item.rating.rate} stars</Text>
          <Text style={styles.ratingText}>({item.rating.count} reviews)</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.addToCartCircleButton} onPress={() => addToCart(item)}>
        <Text style={styles.addToCartCircleButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.slogan}>Khẩu hiệu ứng dụng</Text>

      <Text style={styles.sectionTitle}>Hot Deals</Text>
      <FlatList
        data={hotDealsData}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />

      <Text style={styles.sectionTitle}>New Arrivals</Text>
      <FlatList
        data={newArrivalsData}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />

      <Text style={styles.cartCount}>Số sản phẩm trong giỏ hàng: {cartCount}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  productContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginRight: 16,
    width: 170,
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 8,
  },
  productDetails: {
    flex: 1,
    marginLeft: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: 'green',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingText: {
    marginLeft: 4,
  },
  addToCartButton: {
    backgroundColor: 'blue',
    padding: 8,
    marginTop: 8,
    borderRadius: 4,
  },
  addToCartButtonText: {
    color: '#fff',
  },
  addToCartCircleButton: {
    backgroundColor: 'orange',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartCircleButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
  slogan: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cartCount: {
    fontSize: 16,
    marginTop: 16,
  },
});
export default HomeScreen;

