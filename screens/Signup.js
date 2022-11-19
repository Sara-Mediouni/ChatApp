import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native';
import initfirebase from '../firebase';
export default function Signup({ navigation }) {
  const [email, setEmail] = useState('');
  const [password,setpassword]=useState('');
  const [confirmpassword,setconfirmpassword]=useState('');
  const [error,setError]=useState('');
  const auth=initfirebase.auth();
  
  return (
    <ImageBackground source={require("../assets/19333449.jpg")} style={styles.container}>
    
      <View style={styles.container2}>
        <Text style={styles.title}>Sign up</Text>
        <TextInput style={styles.auth_input} placeholder="Your email" keyboardType="email-address" onChange={(text)=>{setEmail(text.target.value)}}></TextInput>
        <TextInput style={styles.auth_input} placeholder="Your password" secureTextEntry={true} keyboardType="default" onChange={(text)=>{setpassword(text.target.value)}}></TextInput>
        <TextInput style={styles.auth_input} placeholder="Confirm your password" secureTextEntry={true} keyboardType="default" onChange={(text)=>{setconfirmpassword(text.target.value)}}></TextInput>
        <Button style={styles.btn} title="Submit" color='#265999' onPress={auth.createUserWithEmailAndPassword(email,password).then(()=>{navigation.replace('Home')}).catch((error)=>{alert(error)})}> </Button>
       <TouchableOpacity style={{alignItems:"flex-end"}}><Text style={styles.link} onPress={() =>
        navigation.navigate('Signin')
      }>Already member?</Text></TouchableOpacity>
       
        
      
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d5ad36',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    height: 300,
    width: "80%",
    backgroundColor:"#0003",
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color: "#fff",
    marginBottom: 30,
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
    marginTop: 10,
    color: "#fff",
    borderRadius: 20,
  },
  link: {
    marginTop: 10,
    fontStyle: "bold",
    color: "#fff",

  }
});