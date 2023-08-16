import { Alert, Image, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';



const LoginScreen = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
    const [logged, setlogged]: any = useState('false')

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const token = await AsyncStorage.getItem("authToken");

                if (token) {
                    navigation.replace("Main");
                    setlogged(logged)
                }
            } catch (err) {
                setlogged(!logged)

                console.log("error message", err);
            }
        };
        checkLoginStatus();
    }, []);

    const handleLogin = () => {
        const user = {
            email: email,
            password: password,
        };
        axios
            .post("http://192.168.0.14:8000/login", user)
            .then((response) => {
                console.log("test:::" + JSON.stringify(response));
                const token = response.data.token;
                AsyncStorage.setItem("authToken", token);
                navigation.replace("Main");
            })
            .catch((error) => {
                Alert.alert("Login Error", "Invalid Email");
                console.log(error);
            });
    };

    return (
        <SafeAreaView style={{
            alignItems: 'center',
            backgroundColor: 'white',
            flex: 1
        }}>
            {!logged ? (
                <>
                <View>
                    <Image
                        style={{ width: 150, height: 100 }}
                        source={{ uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png" }}>
                    </Image>
                </View><KeyboardAvoidingView>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 17,
                            }}>Login in To your account</Text>
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
                            <View style={{ marginTop: 80 }}>

                                <Pressable
                                    onPress={handleLogin}
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
                                    }}>Login</Text>

                                </Pressable>
                                <Pressable
                                    onPress={() => navigation.navigate("Register" as never)}
                                    style={{ marginTop: 15 }}>
                                    <Text
                                        style={{
                                            color: 'gray',
                                            textAlign: 'center',
                                            fontSize: 16,
                                            fontWeight: '500',
                                        }}>Don't have an account? Sign Up</Text>
                                </Pressable>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </>

            ) : (
                <View style={{
                    justifyContent:'center',
                    alignItems:'center',
                    flex:1}}>
                    <Text style={{ color: 'blue', textAlign: 'center' }}>Loading.....!!</Text>
                </View>
            )}
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})