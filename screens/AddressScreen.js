// npm add jwt-decode ==> import this libraray to decode the JWT Token
import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState,useContext ,useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import jwt_decode from "jwt-decode"
import { UserType } from '../context/UserContext'
import axios from 'axios'
import { useNavigation, useRoute } from "@react-navigation/native";


const AddressScreen = () => {

    const [name, setName] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [houseNo, setHouseNo] = useState("");
    const [street, setStreet] = useState("");
    const [landmark, setLandmark] = useState("");
    const [postalCode, setPostalCode] = useState("");

    const { userId, setUserId } = useContext(UserType)
    const navigation = useNavigation()

    useEffect(() => {
        const fetchUser = async () => {
            const token = await AsyncStorage.getItem("authToken");
            const decodedToken = jwt_decode(token);
            const userId = decodedToken.userId;
            setUserId(userId)
        }
        fetchUser();
    }, []);


    const handleAddAddress = () => {
        const address = {
            name,
            mobileNo,
            houseNo,
            street,
            landmark,
            postalCode
        }

        axios.post("http://192.168.0.14:8000/addresses", { userId, address }).then((response) => {
            Alert.alert("Success", "Addresses added successfully");
            setName("");
            setMobileNo("");
            setHouseNo("");
            setStreet("");
            setLandmark("");
            setPostalCode("");
            setTimeout(() => {
                navigation.goBack();
            }, 500)
        }).catch((error) => {
            Alert.alert("Error", "Failed to add address")
            console.log("error", error)
        })
    }

    return (
        <ScrollView>
            <View style={{ height: 50, backgroundColor: "#00CED1" }} />
            <View style={{
                padding: 10
            }}>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16,color:'black'  }}>Add a new Address</Text>
                <TextInput
                    placeholder='India'
                    placeholderTextColor={"black"}
                    style={{
                        padding: 10,
                        borderColor: "#D0D0D0",
                        borderWidth: 1,
                        marginTop: 10,
                        borderRadius: 5,
                        color:'black' 
                    }}>
                </TextInput>

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: 'black' }}>
                        Full name (First and last name)
                    </Text>

                    <TextInput
                        value={name}
                        onChangeText={(text) => setName(text)}
                        placeholderTextColor={"black"}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5,
                            color:'black' 
                        }}
                        placeholder="enter your name"
                    />
                </View>

                <View>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: 'black' }}>
                        Mobile numebr
                    </Text>

                    <TextInput
                        value={mobileNo}
                        onChangeText={(text) => setMobileNo(text)}
                        placeholderTextColor={"black"}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5,
                            color:'black' 
                        }}
                        placeholder="Mobile No"
                    />
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: 'black' }}>
                        Flat,House No,Building,Company
                    </Text>

                    <TextInput
                        value={houseNo}
                        onChangeText={(text) => setHouseNo(text)}
                        placeholderTextColor={"black"}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5,
                            color:'black' 
                        }}
                        placeholder=""
                    />
                </View>

                <View>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: 'black' }}>
                        Area,Street,sector,village
                    </Text>
                    <TextInput
                        value={street}
                        onChangeText={(text) => setStreet(text)}
                        placeholderTextColor={"black"}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5,
                            color:'black' 
                        }}
                        placeholder=""
                    />
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: 'black' }}>Landmark</Text>
                    <TextInput
                        value={landmark}
                        onChangeText={(text) => setLandmark(text)}
                        placeholderTextColor={"black"}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5,
                            color:'black' 
                        }}
                        placeholder="Eg near appollo hospital"
                    />
                </View>

                <View>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: 'black' }}>Pincode</Text>
                    <TextInput
                        value={postalCode}
                        onChangeText={(text) => setPostalCode(text)}
                        placeholderTextColor={"black"}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5,
                            color:'black' 
                        }}
                        placeholder="Enter Pincode"
                    />
                </View>
                <Pressable
                    onPress={handleAddAddress}
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 10,
                        borderRadius: 5,
                        backgroundColor: '#FFC72C',
                        marginTop: 20,
                        color:'black' 
                    }}>
                    <Text style={{
                        color: 'black',
                        fontWeight: '500',
                        fontSize: 15,
                        color:'black' 
                    }}>
                        Add Address
                    </Text>

                </Pressable>
            </View>
        </ScrollView >
    )
}

export default AddressScreen

const styles = StyleSheet.create({})