# Hotel Booking App

A React Native mobile application for browsing and booking hotels.

## Features

- **Search Hotels**: Search by destination, check-in/out dates, and number of guests.
- **Hotel Details**: View details like rating, price per night, and location.
- **Booking Flow**: Simple booking confirmation process.
- **Responsive Design**: Clean UI with cards, shadows, and images.

## Technology Stack

- **React Native** (CLI)
- **React Navigation** (Native Stack)
- **Functional Components & Hooks** (`useState`, `useEffect`)
- **Styles**: `StyleSheet`

## Project Structure

```
HotelBooking/
├── src/
│   ├── booking/        # Final Booking screens
│   ├── components/     # Reusable UI components (e.g., HotelCard)
│   ├── navigation/     # (Legacy/Refactoring)
│   ├── screens/        # Main App Screens (Search, Details)
│   ├── services/       # Mock data and API services
│   ├── splash/         # Splash screen logic
│   └── utils/          # Helper functions
├── App.js              # Entry point & Navigation Setup
└── index.js            # AppRegistry Root
```
