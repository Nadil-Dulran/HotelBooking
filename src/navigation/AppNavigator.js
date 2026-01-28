
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../screens/SearchScreen';
import BookingDetailScreen from '../screens/BookingDetailScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Search"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#007AFF',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen
                name="Search"
                component={SearchScreen}
                options={{ title: 'Hotel Booking' }}
            />
            <Stack.Screen
                name="BookingDetails"
                component={BookingDetailScreen}
                options={{ title: 'Booking Details' }}
            />
        </Stack.Navigator>
    );
};

export default AppNavigator;
