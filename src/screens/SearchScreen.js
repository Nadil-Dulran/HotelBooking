import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Alert, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { searchHotels } from '../services/mockHotels';
import HotelCard from '../components/HotelCard';
import DateTimePicker from '@react-native-community/datetimepicker';

const SearchScreen = ({ navigation }) => {
    const [destination, setDestination] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState('2');
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searched, setSearched] = useState(false);
    const [showPicker, setShowPicker] = useState(null); 

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
                      <View style={styles.dateInputContainer}>
                    <TextInput
                        style={[styles.input, styles.halfInput]}
                        placeholder="Check-in"
                        value={checkIn}
                        editable={false}
                        onPress={() => setShowPicker('checkIn')}
                    />
                    <TouchableOpacity onPress={() => setShowPicker('checkIn')}>
                      <Text style={styles.calendarIcon}>📅</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={styles.dateInputContainer}>
                    <TextInput
                        style={[styles.input, styles.halfInput]}
                        placeholder="Check-out"
                        value={checkOut}
                        editable={false}
                        onPress={() => setShowPicker('checkOut')}
                    />
                    <TouchableOpacity onPress={() => setShowPicker('checkOut')}>
                         <Text style={styles.calendarIcon}>📅</Text>
                    </TouchableOpacity>
                    </View>
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
           {showPicker && (
           <DateTimePicker
             value={new Date()}
             mode="date"
             display="calendar"
             onChange={(event, selectedDate) => {
               setShowPicker(null);
               if (!selectedDate) return;

               const formatted = selectedDate.toISOString().split('T')[0];

               if (showPicker === 'checkIn') {
                 setCheckIn(formatted);
               } else {
                 setCheckOut(formatted);
               }
             }}
           />
          )}

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

    dateInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '48%',
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 12,
    },

    dateInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
    },

    calendarIcon: {
    fontSize: 20,
    marginLeft: 8,
    },
    });

export default SearchScreen;
