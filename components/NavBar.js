import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class NavBar extends React.Component {

  render(){
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    backgroundColor: "#cccccc",
    position: "absolute", 
    bottom: 0,
    height: "5%"
  }
});