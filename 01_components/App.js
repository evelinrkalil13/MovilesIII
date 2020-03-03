import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TextInput, SafeAreaView, Button, Alert } from 'react-native';

export default function App() {
  const saludo = () =>{Alert.alert("How you doing?")}
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>

        <Image style={styles.logo} source={require('./assets/pride.png')}/>
        <TextInput  maxLength={14} style={styles.textInput} placeholder="User" onChangeText={(text)=>setName(text)}></TextInput>
        <Button title="Start" onPress={saludo}></Button>
  </View> 
    
  );
}

const styles = StyleSheet.create({
 
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 100,
    height: 100,
  },
  textInput:{
    borderColor: '#000',
    borderWidth: 1 ,
    borderRadius: 5,
    width: 230,
    textAlign: 'center',

  }
});
