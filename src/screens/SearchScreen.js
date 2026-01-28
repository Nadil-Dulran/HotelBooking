
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Alert, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { searchHotels } from '../services/mockHotels';
import HotelCard from '../components/HotelCard';

const SearchScreen = ({ navigation }) => {
    const [destination, setDestination] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState('2');
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searched, setSearched] = useState(false);

    const handleSearch = async () => {
        setLoading(true);
        setSearched(true);
        try {
            const results = await searchHotels({ destination, checkIn, checkOut, guests });
            setHotels(results);
        } catch (error) {
            Alert.alert('Error', 'Failed to fetch hotels');
        } finally {
            setLoading(false);
        }
    };

    const renderItem = ({ item }) => (
        <HotelCard
            hotel={item}
            onPress={() => navigation.navigate('BookingDetails', { hotel: item, checkIn, checkOut, guests })}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.headerTitle}>Find Your Stay</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Destination City"
                    value={destination}
                    onChangeText={setDestination}
                />
                <View style={styles.row}>
                    <TextInput
                        style={[styles.input, styles.halfInput]}
                        placeholder="Check-in (YYYY-MM-DD)"
                        value={checkIn}
                        onChangeText={setCheckIn}
                    />
                    <TextInput
                        style={[styles.input, styles.halfInput]}
                        placeholder="Check-out (YYYY-MM-DD)"
                        value={checkOut}
                        onChangeText={setCheckOut}
                    />
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Number of Guests"
                    value={guests}
                    onChangeText={setGuests}
                    keyboardType="numeric"
                />
                <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                    {loading ? (
                        <ActivityIndicator color="white" />
                    ) : (
                        <Text style={styles.searchButtonText}>Search Hotels</Text>
                    )}
                </TouchableOpacity>
            </View>

            <FlatList
                data={hotels}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContent}
                ListEmptyComponent={
                    searched && !loading ? (
                        <Text style={styles.emptyText}>No hotels found. Try different criteria.</Text>
                    ) : null
                }
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    formContainer: {
        padding: 16,
        backgroundColor: 'white',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
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
    input: {
        backgroundColor: '#f9f9f9',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        fontSize: 16,
        color: '#333',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    halfInput: {
        width: '48%',
    },
    searchButton: {
        backgroundColor: '#007AFF',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 8,
    },
    searchButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    listContent: {
        paddingBottom: 20,
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 32,
        fontSize: 16,
        color: '#666',
    },
});

export default SearchScreen;
