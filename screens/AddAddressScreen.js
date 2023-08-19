import { StyleSheet, Text, View, ScrollView, Pressable, TextInput } from 'react-native'
import React, { useState, useEffect, useContext, useCallback } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/MaterialIcons'
import { useNavigation, useRoute, useFocusEffect } from "@react-navigation/native";
import axios from 'axios'
import { UserType } from '../context/UserContext'


const AddAddressScreen = () => {
    const navigation = useNavigation();
    const [addresses, setAddresses] = useState([]);
    const { userId, setUserId } = useContext(UserType);
    console.log("userId:::", userId);

    useEffect(() => {
        fetchAddresses();
    }, []);

    const fetchAddresses = async () => {
        try {
            const response = await axios.get(
                `http://192.168.0.14:8000/addresses/${userId}`
            );
            const { addresses } = response.data;
            setAddresses(addresses);
        } catch (error) {
            console.log("error", error);
        }
    };
    //refresh the addresses when the component comes to the focus ie basically when we navigate back
    useFocusEffect(
        useCallback(() => {
            fetchAddresses();
        }, [])
    );
    return (
        <ScrollView>
            <View
                style={{
                    backgroundColor: "#00CED1",
                    padding: 10,
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                <Pressable

                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginHorizontal: 7,
                        gap: 10,
                        backgroundColor: "white",
                        borderRadius: 3,
                        height: 38,
                        flex: 1,
                    }}
                >
                    <AntDesign
                        style={{ paddingLeft: 10 }}
                        name="search1"
                        size={22}
                        color="black"
                    />
                    <TextInput placeholder='Search Amazon.in' />
                </Pressable>
                <Feather name="mic" size={24} color="black" />
            </View>
            <View
                style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20 }}>Your Addresses</Text>
                <Pressable
                    onPress={() => navigation.navigate('Add')}
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: 10,
                        borderColor: "#D0D0D0",
                        borderWidth: 1,
                        borderLeftWidth: 0,
                        borderRightWidth: 0,
                        paddingVertical: 7,
                        paddingHorizontal: 5,
                    }}
                >
                    <Text style={{color:'black'}}>Add a new Address</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </Pressable>
            </View>
            <Pressable>
                {/* all the added adresses */}
                {addresses?.map((item, index) => (
                    <Pressable
                        key={item.mobileNo}
                        style={{
                            borderWidth: 1,
                            borderColor: "#D0D0D0",
                            padding: 10,
                            flexDirection: "column",
                            gap: 5,
                            marginVertical: 10,
                        }}
                    >
                        <View
                            style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
                        >
                            <Text style={{ fontSize: 15, fontWeight: "bold",color:"black" }}>
                                {item?.name}
                            </Text>
                            <Entypo name="location-pin" size={24} color="red" />
                        </View>

                        <Text style={{ fontSize: 15, color: "#181818" }}>
                            {item?.houseNo}, {item?.landmark}
                        </Text>

                        <Text style={{ fontSize: 15, color: "#181818" }}>
                            {item?.street}
                        </Text>

                        <Text style={{ fontSize: 15, color: "#181818" }}>
                            India, Bangalore
                        </Text>

                        <Text style={{ fontSize: 15, color: "#181818" }}>
                            phone No : {item?.mobileNo}
                        </Text>
                        <Text style={{ fontSize: 15, color: "#181818" }}>
                            pin code : {item?.postalCode}
                        </Text>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 10,
                                marginTop: 7,
                            }}
                        >
                            <Pressable
                                style={{
                                    backgroundColor: "#F5F5F5",
                                    paddingHorizontal: 10,
                                    paddingVertical: 6,
                                    borderRadius: 5,
                                    borderWidth: 0.9,
                                    borderColor: "#D0D0D0",
                                }}
                            >
                                <Text style={{color:'black'}}>Edit</Text>
                            </Pressable>

                            <Pressable
                                style={{
                                    backgroundColor: "#F5F5F5",
                                    paddingHorizontal: 10,
                                    paddingVertical: 6,
                                    borderRadius: 5,
                                    borderWidth: 0.9,
                                    borderColor: "#D0D0D0",
                                    color:'black'
                                }}
                            >
                                <Text style={{color:'black'}}>Remove</Text>
                            </Pressable>

                            <Pressable
                                style={{
                                    backgroundColor: "#F5F5F5",
                                    paddingHorizontal: 10,
                                    paddingVertical: 6,
                                    borderRadius: 5,
                                    borderWidth: 0.9,
                                    borderColor: "#D0D0D0",
                                }}
                            >
                                <Text style={{color:'black'}}>Set as Default</Text>
                            </Pressable>
                        </View>
                    </Pressable>
                ))}
            </Pressable>

        </ScrollView>
    )
}

export default AddAddressScreen

const styles = StyleSheet.create({})