
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const SplashScreen = ({ navigation }) => {
    // useEffect(() => {
    //     setTimeout(() => {
    //         navigation.replace('Search');
    //     }, 2000);
    // }, []);
    return (
        <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
            <Text>SplashScreen</Text>
        </View>
    );
};

export default SplashScreen;
