//Bài 3 -20520319 - Võ Lục Thanh Trà
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { TextInput, Button } from 'react-native';
import { useAuth } from '../Container/AuthContext.js';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
//Bài 3 -20520319 - Võ Lục Thanh Trà
const LogIn = () => {
  const navigation = useNavigation();
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        login(email, password);
    };

    const goToRegister = () => {
        navigation.navigate('Register');
    };

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                style={styles.Logo}
            />
            <Text style={styles.title}>Welcome</Text>
            <View style={styles.inputContainer}>
                <Icon name="envelope" size={20} color="grey" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color="grey" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
            <View style={styles.forgotPasswordContainer}>
                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Forgot password?</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
            >
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
            <Text style={styles.centerText}>Or login with</Text>
            <View style={styles.socialButtonContainer}>
                <TouchableOpacity style={styles.socialButton}>
                    <Icon name="facebook" size={20} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.googleButton}>
                    <Icon name="google" size={20} color="white" />
                </TouchableOpacity>
            </View>
            <Text style={styles.loginText}>
                Don't have an account?{' '}
                <Text style={styles.highlight} onPress={goToRegister}>
                    Sign up here!
                </Text>
            </Text>
        </View>
    );
};
//Bài 3 -20520319 - Võ Lục Thanh Trà
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Logo: {
        width: 150,
        height: 150,
        borderRadius: 150,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        padding: 5,
        width: '80%',
        borderRadius: 10,
    },
    input: {
        flex: 1,
    },
    button: {
        width: '80%',
        backgroundColor: 'orange',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    LoginText: {
        color: 'blue',
        fontSize: 16,
    },
    Login: {
        color: 'blue',
        fontSize: 16,
    },
    icon: {
        marginRight: 10,
    },
    loginText: {
        marginTop: 20,
    },
    highlight: {
        color: '#3498db',
        fontWeight: 'bold',
    },
    forgotPasswordContainer: {
        width: '80%',
        alignItems: 'flex-end',
        marginBottom: 20,
    },
    forgotPassword: {
        color: 'blue',
        fontSize: 16,
    },
    centerText: {
        color: 'grey',
        fontSize: 16,
        marginVertical: 20,
    },
    socialButtonContainer: {
        flexDirection: 'row',
        width: '30%',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    socialButton: {
        backgroundColor: 'blue',
        padding: 15,
        borderRadius: 50,
        width: 50,
        height: 50,
        alignItems: 'center',
    },
    googleButton: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 50,
        width: 50,
        height: 50,
        alignItems: 'center',
    },
});

export default LogIn;