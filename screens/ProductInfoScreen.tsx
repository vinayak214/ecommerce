import { ScrollView, StyleSheet, Text, View, Pressable, TextInput, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const ProductInfoScreen = () => {

    const route: any = useRoute();
    const { width } = Dimensions.get("window");
    const height = (width * 100) / 100;
    return (
        <ScrollView
            key={route?.params.id}
            style={{
                backgroundColor: 'white',
            }}>
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
            <ScrollView
                key={route?.params.id}
                horizontal
                showsHorizontalScrollIndicator={false}>
                {route?.params.carouselImages.map((item: any) => (
                    <View>
                        <ImageBackground
                            style={{ width, height, marginTop: 25 }}
                            source={{ uri: item }}>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: 10
                            }}>
                                <View style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 20,
                                    backgroundColor: "#C60C30",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}>
                                    <Text style={{
                                        color: "white",
                                        textAlign: "center",
                                        fontWeight: "600",
                                        fontSize: 12,
                                    }}>20% off</Text>
                                </View>
                                <MaterialCommunityIcons
                                    name="share-variant"
                                    size={24}
                                    color="black"
                                />

                            </View>

                            <View style={{
                                width: 40,
                                height: 40,
                                backgroundColor: '#E0E0E0',
                                borderRadius: 20,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: "auto",
                                marginLeft: 20,
                                marginBottom: 20,
                            }}>
                                <AntDesign name="hearto" size={24} color="black" />
                            </View>
                        </ImageBackground>
                    </View>

                ))}

            </ScrollView>
            <View style={{
                padding: 10
            }}>
                <Text
                    style={{
                        fontWeight: '500',
                        color: 'black'
                    }}>{route?.params.title}
                </Text>
                <Text style={{
                    fontSize: 18,
                    fontWeight: "500",
                    marginTop: 6,
                    color: 'black'
                }}>
                    ₹{route?.params?.price}
                </Text>
                <Text style={{ height: 1, borderColor: "#D0D0D0", borderWidth: 1, marginTop: 6 }} />

                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                    <Text style={{ color: 'grey' }}>Color: </Text>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: 'black' }}>{route?.params.color}</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                    <Text style={{ color: 'grey' }}>Size: </Text>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: 'black' }}> {route?.params?.size}
                    </Text>
                </View>

                <Text style={{ height: 1, borderColor: "#D0D0D0", borderWidth: 1, marginTop: 6 }} />

                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                    <Text style={{ color: 'grey' }}>Total: </Text>
                    <Text style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        color: 'black'
                    }}> ${route?.params?.oldPrice}
                    </Text>
                </View>
                <Text style={{ fontSize: 15, color: '#00CED1' }}>FREE delivery Tomorrow by 3 PM.Order within 10hrs 30 mins</Text>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                    <Ionicons name="location-outline" size={24} color="black" />
                    <Text style={{
                        fontSize: 15,
                        fontWeight: "500",
                        color: 'black'
                    }}>Deliver To Vinayak - Bentonville 72712
                    </Text>
                </View>
                <Text style={{
                    fontSize: 15,
                    fontWeight: "500",
                    color: 'green',
                    marginTop: 6
                }}>In Stock</Text>

                <Pressable
                    style={{
                        alignItems: 'center',
                        borderRadius: 20,
                        backgroundColor: '#FFC72C',
                        marginVertical: 10,
                        marginHorizontal: 10,
                        padding: 10

                    }}>

                    <Text style={{ color: 'black', fontWeight: '500' }}>Add to Cart</Text>
                </Pressable>

                <Pressable
                    style={{
                        alignItems: 'center',
                        borderRadius: 20,
                        backgroundColor: '#FFC72C',
                        marginVertical: 10,
                        marginHorizontal: 10,
                        padding: 10

                    }}>

                    <Text style={{ color: 'black', fontWeight: '500' }}>Buy Now</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default ProductInfoScreen

const styles = StyleSheet.create({})