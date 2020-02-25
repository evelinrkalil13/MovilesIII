import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}><Text style={styles.text}>Taylor Swift1</Text></View>
      <View style={styles.box2}><Text style={styles.text}>Taylor Swift2</Text></View>
      <View style={styles.box3}><Text style={styles.text}>Taylor Swift2</Text></View>
      <View style={styles.box4}><Text style={styles.text}>Taylor Swift2</Text></View>
      <View style={styles.box5}><Text style={styles.text}>Taylor Swift2</Text></View>
      <View style={styles.box6}><Text style={styles.text}>Taylor Swift2</Text></View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d50000',
    flexDirection: "column", 

  },

  text:{
    color: '#fff',
    fontWeight: "bold",
  },

  box1:{
    flex:1,
    backgroundColor:'#d50000',
  },

  box2:{
    flex:1,
    backgroundColor:'#e65100',
  },

  box3:{
    flex:1,
    backgroundColor:'#ffea00',
  },

  box4:{
    flex:1,
    backgroundColor:'#087f23',
  },

  box5:{
    flex:1,
    backgroundColor:'#0d47a1',
  },

  box6:{
    flex:1,
    backgroundColor:'#4a148c',
  },


});
