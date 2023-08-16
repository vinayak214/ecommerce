import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'

const ProductItem = ({ item, index }: any) => {
    return (
        <Pressable style={{
            marginHorizontal: 15,
            marginVertical: 25,
        }}>
            <Image
                style={{
                    width: 150,
                    height: 180
                }}
                source={{ uri: item.image }}>
            </Image>
            <Text numberOfLines={1} style={{ width: 150, marginTop: 10, color: 'black' }}>
                {item?.title}
            </Text>

            <View
                style={{
                    marginTop: 5,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Text style={{ fontSize: 15, fontWeight: "bold", color: 'black' }}>₹{item?.price}</Text>
                <Text style={{ color: "#FFC72C", fontWeight: "bold" }}>
                    {item?.rating?.rate} ratings
                </Text>
            </View>

            <Pressable style={{
                backgroundColor: '#FFC72C',
                borderRadius: 20,
                alignItems: 'center',
                padding: 10,
                marginHorizontal: 10,
                marginTop: 10
            }}>
                <Text style={{ color: 'black', fontWeight: '500' }}>Add to Cart</Text>
            </Pressable>


        </Pressable>
    )
}

export default ProductItem

const styles = StyleSheet.create({})