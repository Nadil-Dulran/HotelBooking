import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../screens/SearchScreen';
import BookingDetailScreen from '../screens/BookingDetailScreen';
import SplashScreen from '../splash/SplashScreen';
import BookingsScreen from '../booking/BookingsScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {

      const [showSplash, setShowSplash] = useState(true);
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setShowSplash(false);
        }, 2000);
    
        return () => clearTimeout(timer);
      }, []);


    return (
        
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#007AFF' },
            headerTintColor: '#fff',
          }}
        >
          {showSplash ? (
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
          ) : (
            <>
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
              <Stack.Screen
                name="Bookings"
                component={BookingsScreen}
                options={{ title: 'Bookings' }}
              />
            </>
          )}
        </Stack.Navigator>
    );
};

export default AppNavigator;
