import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,Image,Button,Alert,TouchableOpacity,ScrollView } from 'react-native';
import * as Linking from 'expo-linking';
//import React
import React, { useState } from 'react'
//import logo imagen de pantalla
import logo from '../assets/logo.jpg';
//import dependencias para la authentication OAuth Google
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
// import FireBase
import firebase from '../src/firebase/config';

//Client ID Google Login
const webClientId = process.env.GOOGLE_WEB_CLIENT_ID;
const expoClientId = process.env.GOOGLE_EXPO_CLIENT_ID;

WebBrowser.maybeCompleteAuthSession();

const Login = (props) => {

    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: expoClientId,
        webClientId: webClientId,
          });
    
      React.useEffect(() => {
        if (response?.type === 'success') {
          const { authentication } = response;
          Alert.alert('exitoso');
          console.log(authentication);
          //console.log(authentication.accessToken);
          //handleChangeText('accessToken',authentication.accessToken);
          }
      }, [response]);


  return (
    
    <ScrollView>
          
    <View style={styles.container}>
    <Image
    source={logo}
    style={styles.image}
    />
    <Text style={styles.titulo}>BusBoT</Text>
    
    <Text style={styles.subTitle}>Signing in to your account</Text>
    
    <TextInput style={styles.textInput} 
    placeholder="username@mail.com" placeholderTextColor='green' onChangeText={(value) => 
    handleChangeText('email',value)}
    />
    <TextInput style={styles.textInput}
    placeholder="password" placeholderTextColor='green' onChangeText={(value) => 
    handleChangeText('password',value)}
    />
    
    {/* -----------> Enlace de Forgot Password */}
   
    <Text style={styles.active}
    onPress={() => Linking.openURL('http://google.com')}>
    Forgot Password?
    </Text>  

        
    {/* -----------> Boton LOGIN ------ */}
   
    <TouchableOpacity style={styles.button}        
        onPress = {()=> 
        // ----> Funcion que envia la data a FireBase (DataBase) LoginUser()    
        LoginUser()
        //console.log(state)
        //Alert.alert('Hello')
        //console.log ('Hello World')
        }
    ><Text style={styles.textbutton}> Login </Text>
    </TouchableOpacity>

    <Text style={styles.subTitle}> -- or -- </Text>
        
    <Text style={styles.subTitle}>Don't have a Essencity account? </Text> 
    
    {/* -----------> Link Sign In ------ */}
   
    <Text style={styles.active}
    onPress={() => Linking.openURL('http://google.com')}>
    Sign In
    </Text>  
    
    
    {/* -----------> Boton Login OAuth Google ------ */}
       
    <Button
    disabled={!request}
    title="Google"
    onPress={() => {
        promptAsync();
        }}
    />

    </View>

  </ScrollView>

  )
}



const styles = StyleSheet.create({
    container: {
      
      flex: 0,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop:0,
    },
    titulo:{
      fontSize: 60,
      color:'black',
      fontWeight: 'bold',
    },
    subTitle: {
      fontSize:20,
      color: 'gray',
    },
    textInput:{
      padding:10,
      paddingStart: 30,
      width: '80%',
      height:50,
      marginTop:20,
      borderRadius:30,
      backgroundColor: 'white',
      color: 'green',
      borderColor:'green',
      borderWidth:2,
      fontSize: 20,   
  
    },
    image:{
      marginTop:80,
      paddingTop:0,
      height: 130,
      width: 130,
      borderRadius: 65,
    },
  
    button: {
      backgroundColor:'green',
      width: '80%',
      height:50,
      marginTop:10,
      borderRadius:30,
      color:'white',
      padding:10,
    },
  
    textbutton:{
      color:'white',
      fontSize: 20, 
      textAlign:'center',     
      fontWeight: 'bold', 
    },
  
    active:{
      color:'green',
      fontSize:20,
      padding:10,
  
    }
  
  });


export default Login