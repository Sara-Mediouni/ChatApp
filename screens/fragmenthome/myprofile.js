
import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native';
export default function Myprofile() {
  return (
    <View style={styles.container2}>
      <Text style={styles.title}>My profile</Text>
      <Image source={require('../../assets/19333449.jpg')} style={styles.image} />
      <TextInput style={styles.auth_input} placeholder="First name" keyboardType=""></TextInput>
      <TextInput style={styles.auth_input} placeholder="Last name" keyboardType=""></TextInput>
      <TextInput style={styles.auth_input} placeholder="Email" keyboardType="email-address" ></TextInput>
      <TextInput style={styles.auth_input} placeholder="Pseudo" keyboardType="" ></TextInput>
       
        <Button style={styles.btn} title="Save" color='#1d3557' ></Button>

    </View>
  )
 
} 
const styles = StyleSheet.create({
    image:{
       borderRadius:"60px",
       width:"100px",
       height:"100px",
       margin:40,
    },
    text:{
   
    margin:20

    },
    container: {
      flex: 1,
      backgroundColor: '#d5ad36',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2: {
      height: 700,
      width: "80%",
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:"#0003",padding:"20px",
    margin:"50px"
    },
    title: {
      fontSize: 30,
      color: "#fff",
      marginTop: 30,
    },
    auth_input: {
      backgroundColor: "#fff",
      alignItems: 'center',
      marginBottom: 20,
      padding: 15,
      borderRadius: 10,
      width: "90%",
    },
    btn: {
      marginTop: "50px",
      color: "#fff",
      borderRadius: 20,
    },
    link: {
      marginTop: 10,
      fontStyle: "bold",
      color: "#fff",
  
    }
  });