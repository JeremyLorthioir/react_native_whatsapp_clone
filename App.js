import React from 'react';
import { View, Text } from 'react-native';
import Homepage from './pages/Homepage';
import NavBar from './pages/NavBar';

export default function App() {
  return (
    <View style={{
      flexDirection: "row",
      height: 100,
      padding: 40
    }}>
      <Homepage />
      <NavBar />
    </View>
  );
}

