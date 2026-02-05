
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const BookingDetailScreen = ({ route, navigation }) => {
    const { hotel, checkIn, checkOut, guests } = route.params;

    const handleConfirmBooking = () => {
        // Show success message
        Alert.alert(
            'Booking Confirmed!',
            `You have successfully booked ${hotel.name} for ${guests} guests.\nCheck-in: ${checkIn || 'Not specified'}\nCheck-out: ${checkOut || 'Not specified'}`,
            [
                {
                    text: 'OK',
                    onPress: () => {
                        navigation.replace('Bookings', {
                            hotel,
                            checkIn,
                            checkOut,
                            guests,
                        });
                    },
                },
            ]
        );
    };

    return (
        <SafeAreaView style={styles.container} edges={['bottom']}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Image source={{ uri: hotel.image }} style={styles.image} />
                <View style={styles.content}>
                    <Text style={styles.name}>{hotel.name}</Text>
                    <View style={styles.row}>
                        <Text style={styles.rating}>★ {hotel.rating}</Text>
                        <Text style={styles.location}>{hotel.location}</Text>
                    </View>

                    <View style={styles.divider} />

                    <Text style={styles.sectionTitle}>Booking Summary</Text>
                    <View style={styles.detailRow}>
                        <Text style={styles.label}>Check-in:</Text>
                        <Text style={styles.value}>{checkIn || 'Not specified'}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.label}>Check-out:</Text>
                        <Text style={styles.value}>{checkOut || 'Not specified'}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.label}>Guests:</Text>
                        <Text style={styles.value}>{guests}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.label}>Price per night:</Text>
                        <Text style={styles.value}>${hotel.price}</Text>
                    </View>

                    <View style={styles.totalContainer}>
                        <Text style={styles.totalLabel}>Total to pay (approx):</Text>
                        <Text style={styles.totalValue}>${hotel.price * 1} (1 night)</Text>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmBooking}>
                    <Text style={styles.confirmButtonText}>Confirm Booking</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        paddingBottom: 100,
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
    },
    content: {
        padding: 20,
    },
    name: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    rating: {
        fontSize: 16,
        color: '#f5a623',
        fontWeight: 'bold',
        marginRight: 12,
    },
    location: {
        fontSize: 16,
        color: '#666',
    },
    divider: {
        height: 1,
        backgroundColor: '#eee',
        marginVertical: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#333',
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    label: {
        fontSize: 16,
        color: '#666',
    },
    value: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
    },
    totalContainer: {
        marginTop: 20,
        padding: 16,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    totalLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    totalValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#007AFF',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    confirmButton: {
        backgroundColor: '#34C759', // Green for confirmation
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
    },
    confirmButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default BookingDetailScreen;
