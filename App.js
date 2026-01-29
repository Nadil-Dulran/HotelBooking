

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import SplashScreen from './src/splash/SplashScreen';

const App = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <AppNavigator>
                    <SplashScreen />
                </AppNavigator> 
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;
