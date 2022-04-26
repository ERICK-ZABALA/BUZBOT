import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//Dependencias ---> React Navigation PANTALLAS
//import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Se importa los archivos Login.js, CreateUser.js UserDetail.js, y UserList.js
import Login from './Screen/Login';
import Location from './Screen/Location';
import Result from './Screen/Result';


const Stack = createNativeStackNavigator();

function MyStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="Location" component={Location} options={{title:'Location'}} />
      <Stack.Screen name="Result" component={Result} options={{title:'Result'}} />
      <Stack.Screen name="Login" component={Login} options={{title:'Login'}} />
    </Stack.Navigator>

  )

}

export default function App() {
  return (

    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
