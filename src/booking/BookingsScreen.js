import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const BookingsScreen = ({ route }) => {
    const { hotel, checkIn, checkOut, guests } = route.params;
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.headerTitle}>Booking Details</Text>
                <View style={styles.bookingDetails}>
                    <Text style={styles.bookingDetailsText}>Hotel Name:{'  '} 
                        <Text style={styles.bookingDetailsValue}>{hotel.name}</Text>
                    </Text>
                    <Text style={styles.bookingDetailsText}>Check-in:{'  '} 
                        <Text style={styles.bookingDetailsValue}>{checkIn}</Text>
                    </Text>
                    <Text style={styles.bookingDetailsText}>Check-out:{'  '} 
                        <Text style={styles.bookingDetailsValue}>{checkOut}</Text>
                    </Text>
                    <Text style={styles.bookingDetailsText}>Guests:{'  '} 
                        <Text style={styles.bookingDetailsValue}>{guests}</Text>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    formContainer: {
        padding: 15,
        backgroundColor: 'white',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        marginBottom: 8,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#333',
    },
    bookingDetails: {
        padding: 15,
        backgroundColor: 'white',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        marginBottom: 8,
    },
    bookingDetailsText: {
        marginLeft: 5,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#007AFF',
    },
    bookingDetailsValue: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#292461ff',
    },
});

export default BookingsScreen