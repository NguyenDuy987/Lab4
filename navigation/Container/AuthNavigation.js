//Bài 3 -20520319 - Võ Lục Thanh Trà
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from '../Components/LogIn';
import Register from '../Components/Register';

const Stack = createStackNavigator();

const App = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    );
}
export default App;