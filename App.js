import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import SplashScreen from './src/splash/SplashScreen';
import HotelCard from './src/components/HotelCard';
import SearchScreen from './src/screens/SearchScreen';

const App = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <SplashScreen />
            </NavigationContainer>
            <NavigationContainer>
                <AppNavigator />
            </NavigationContainer>
        </SafeAreaProvider>
    );
};
 
// Learn if one page can load after  another page in app

export default App;
