import React from 'react';
import { View } from 'react-native';
import Homepage from './components/Homepage.js';
import NavBar from './components/NavBar.js';

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

