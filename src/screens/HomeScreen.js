import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'
import { HeroImage, Logo, MaheshBabu, Rohit } from '../../assets';

const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

  return (
    <SafeAreaView className="bg-white flex-1 relative">
        {/* First Section */}

        <View className="flex-row px-2 mt-12 items-center justify-center space-x-2">
            <Text className="text-[#2A2B4B] text-5xl font-semibold">Pack</Text>

            <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
                <Text className="text-[#ECBA5C] text-5xl font-semibold">Ur</Text>
            </View>

            <Text className="text-[#2A2B4B] text-5xl font-semibold">Bags</Text>
            <Image source={Logo} className="h-[120px] w-[120px] object-contain"/>
        </View>

        {/* Second Section */}
        <View className="px-6 mt-4 space-y-0">
            <Text className="text-[#3C6072] text-[45px]">Enjoy the trip with</Text>
            <Text className="text-[#00BCC9] text-[40px] font-bold">Good Moments</Text>
            <Text className="text-[#3C6072] text-[18px]">
                "Embark on a journey with as a Traveler, where we revolutionize your search experience, delivering invaluable resources to your fingertips, effortlessly and free of charge."
            </Text>
        </View>

        {/* Circle Section */}
        <View className="w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-24 -right-40 -z-10"></View>
        <View className="w-[400px] h-[400px] bg-[#E99265] rounded-full absolute -bottom-20 -left-36 -z-20"></View>

        {/* Image container */}
        <View className="flex-1 relative items-center justify-center overflow-hidden z-10">
            <Animatable.Image animation="fadeIn" easing="ease-in-out" source={MaheshBabu} className="w-full h-full object-cover"/>

            <TouchableOpacity onPress={() => navigation.push("Discover")} className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center">
                <Animatable.View className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]">
                    <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
                </Animatable.View>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen