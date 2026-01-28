
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native';

const HotelCard = ({ hotel, onPress }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: hotel.image }} style={styles.image} />
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.name}>{hotel.name}</Text>
                    <Text style={styles.rating}>★ {hotel.rating}</Text>
                </View>
                <Text style={styles.location}>{hotel.location}</Text>
                <View style={styles.footer}>
                    <Text style={styles.price}>${hotel.price} <Text style={styles.perNight}>/ night</Text></Text>
                    <TouchableOpacity style={styles.bookButton} onPress={onPress}>
                        <Text style={styles.bookButtonText}>Book Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 12,
        marginVertical: 10,
        marginHorizontal: 16,
        elevation: 4, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 180,
        resizeMode: 'cover',
    },
    content: {
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        flex: 1,
    },
    rating: {
        fontSize: 14,
        color: '#f5a623',
        fontWeight: 'bold',
        marginLeft: 8,
    },
    location: {
        fontSize: 14,
        color: '#666',
        marginBottom: 12,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2c3e50',
    },
    perNight: {
        fontSize: 12,
        fontWeight: 'normal',
        color: '#888',
    },
    bookButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        elevation: 2,
    },
    bookButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
});

export default HotelCard;
