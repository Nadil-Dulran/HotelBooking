
export const mockHotels = [
  {
    id: '1',
    name: 'Grand Hyatt Mumbai',
    location: 'Mumbai, India',
    price: 180,
    rating: 4.5,
    availableRooms: 5,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: '2',
    name: 'Taj Lake Palace',
    location: 'Udaipur, India',
    price: 350,
    rating: 5.0,
    availableRooms: 2,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: '3',
    name: 'The Oberoi Amarvilas',
    location: 'Agra, India',
    price: 400,
    rating: 4.8,
    availableRooms: 8,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: '4',
    name: 'Rambagh Palace',
    location: 'Jaipur, India',
    price: 280,
    rating: 4.7,
    availableRooms: 3,
    image: 'https://images.unsplash.com/photo-1571896349842-6e53ce41be03?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: '5',
    name: 'Wildflower Hall',
    location: 'Shimla, India',
    price: 220,
    rating: 4.6,
    availableRooms: 6,
    image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  },
];

export const searchHotels = async (criteria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Mock filtering logic
      const filtered = mockHotels.filter(hotel => {
          // Simple filter: if destination is provided, check if location includes it
          if (criteria.destination && !hotel.location.toLowerCase().includes(criteria.destination.toLowerCase())) {
              return false;
          }
          return true;
      });
      resolve(filtered);
    }, 1000); // Simulate network delay
  });
};
