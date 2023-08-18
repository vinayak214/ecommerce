import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const AddressScreen :React.FC<React.ReactNode> = () => {

    const [name, setName] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [houseNo, setHouseNo] = useState("");
    const [street, setStreet] = useState("");
    const [landmark, setLandmark] = useState("");
    const [postalCode, setPostalCode] = useState("");
    return (
        <ScrollView>
            <View style={{ height: 50, backgroundColor: "#00CED1" }} />
            <View style={{
                padding: 10
            }}>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>Add a new Address</Text>
                <TextInput
                    placeholder='India'
                    style={{
                        padding: 10,
                        borderColor: "#D0D0D0",
                        borderWidth: 1,
                        marginTop: 10,
                        borderRadius: 5,
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
                        }}
                        placeholder="Enter Pincode"
                    />
                </View>
                <Pressable
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 10,
                        borderRadius: 5,
                        backgroundColor: '#FFC72C',
                        marginTop: 20
                    }}>
                    <Text style={{
                        color: 'black',
                        fontWeight: '500',
                        fontSize: 15
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