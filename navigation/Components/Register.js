//Bài 3 -20520319 - Võ Lục Thanh Trà
import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useAuth } from '../Container/AuthContext';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
//Bài 3 -20520319 - Võ Lục Thanh Trà
const Register = () => {
    const navigation = useNavigation();
    const { register } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const handleRegister = () => {
        register(name, email, password);
    };

    const goToLogin = () => {
        navigation.navigate('LogIn');
    };
//Bài 3 -20520319 - Võ Lục Thanh Trà
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                style={styles.Logo}
            />
            <Text style={styles.title}>Create new account</Text>
            <View style={styles.inputContainer}>
                <Icon name="user" size={20} color="grey" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                />
            </View>
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

            <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color="grey" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    secureTextEntry
                    value={confirmPass}
                    onChangeText={setConfirmPass}
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={handleRegister}
            >
                <Text style={styles.buttonText}>CREATE</Text>
            </TouchableOpacity>

            <Text style={styles.loginText}>
                Already have an account?{' '}
                <Text style={styles.highlight} onPress={goToLogin}>
                    Login now!
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
});

export default Register;
