import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import SplashScreen from './src/splash/SplashScreen';
import SearchScreen from './src/screens/SearchScreen';
import BookingDetailScreen from './src/screens/BookingDetailScreen';
import BookingsScreen from './src/booking/BookingsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
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
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
