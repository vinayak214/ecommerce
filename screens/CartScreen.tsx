import { ScrollView, StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/MaterialIcons'

const CartScreen = () => {
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
            color="black" />
          <TextInput placeholder='Search Amazon.in' />
        </Pressable>
        <Feather name="mic" size={24} color="black" />
      </View>

      <View style={{ padding: 10, flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 18, fontWeight: "500" }}>Subtotal : </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: 'black' }}>$4500</Text>
      </View>
      <Text style={{ marginHorizontal: 10, fontWeight:"500" }}>EMI details Available</Text>
      <Pressable
        style={{
          borderRadius: 5,
          backgroundColor: '#FFC72C',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
          marginHorizontal: 10,
          marginTop: 10
        }}>
        <Text style={{ color: 'black', fontWeight: "bold" }}>Proceed to Buy (1 items)</Text>
      </Pressable>

      <Text style={{ height: 1, borderColor: "#D0D0D0", borderWidth: 1, marginTop: 16 }}></Text>

    </ScrollView>
  )
}

export default CartScreen

const styles = StyleSheet.create({})