import { Alert, Image, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from "@react-navigation/native"
import axios from "axios";


const RegisterScreen = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigation = useNavigation();

  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };
    // send a POST  request to the backend API to register the user
    // http://192.168.0.14/register
    axios
      .post("http://192.168.0.14:8000/register", user)
      .then((response) => {
        console.log(response);
        Alert.alert(
          "Registration successful",
          "You have been registered Successfully"
        );
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        Alert.alert(
          "Registration Error",
          "An error occurred while registering"
        );
        console.log("registration failed", error);
      });
  };

  return (
    <SafeAreaView style={{
      alignItems: 'center',
      backgroundColor: 'white',
      flex: 1
    }}>
      <View>
        <Image
          style={{ width: 150, height: 100 }}
          source={{ uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png" }}>
        </Image>
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: 'center' }}>
          <Text style={{
            fontWeight: '600',
            fontSize: 17,
          }}>Register To your account</Text>
        </View>
        <View style={{ marginTop: 70 }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#D0D0D0',
            borderRadius: 8,
            marginTop: 30,
            gap: 5
          }}>
            <Ionicons
              name="person"
              size={24}
              color="gray"
              style={{ marginLeft: 8 }}
            />
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={{
                color: 'gray',
                width: 300
              }}
              placeholder="Enter your name"></TextInput>
          </View>

          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#D0D0D0',
            borderRadius: 8,
            marginTop: 30,
            gap: 5
          }}>
            <MaterialIcons style={{ marginLeft: 7 }} name='email' size={24} color="black"></MaterialIcons>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                color: 'gray',
                width: 300
              }}
              placeholder="Enter your Email"></TextInput>
          </View>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#D0D0D0',
            borderRadius: 8,
            marginTop: 30,
            gap: 5
          }}>
            <AntDesign style={{ marginLeft: 7 }} name='lock1' size={24} color="black"></AntDesign>
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={{
                color: 'gray',
                width: 300
              }}
              placeholder="Enter your Password"></TextInput>
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
            alignItems: "center",
          }}>
            <Text style={{ color: 'gray' }}>Keep me logged in</Text>
            <Text style={{
              color: '#007FFF',
              fontWeight: "500"
            }}>Forgot Password</Text>
          </View>
          <View style={{ marginTop: 80 }} >
            <Pressable
              onPress={handleRegister}
              style={{
                backgroundColor: "#FEBE10",
                borderRadius: 6,
                marginLeft: "auto",
                marginRight: "auto",
                width: 200,
                padding: 15,
              }}>
              <Text style={{
                color: 'white',
                fontWeight: "500",
                fontSize: 16,
                textAlign: 'center'
              }}>Register</Text>
            </Pressable>
            <Pressable
              onPress={() => navigation.goBack()}
              style={{ marginTop: 15 }}>
              <Text
                style={{
                  color: 'gray',
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '500',
                }}>Already Have an account? Sign in</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})