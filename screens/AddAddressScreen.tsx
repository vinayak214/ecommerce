import { StyleSheet, Text, View, ScrollView, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/MaterialIcons'
import { useNavigation, useRoute } from "@react-navigation/native";

const AddAddressScreen = () => {

    const navigation = useNavigation() as any;

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
                    <Text>Add a new Address</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default AddAddressScreen

const styles = StyleSheet.create({})