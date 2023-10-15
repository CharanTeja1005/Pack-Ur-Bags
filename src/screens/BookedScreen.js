import { SafeAreaView, View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {ChevronLeftIcon, HeartIcon} from 'react-native-heroicons/outline'
import { Confirmed } from '../../assets'

const BookedScreen = () => {
    const navigation = useNavigation();

    const [isLoading, setisLoading] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    useEffect(() => {
        setisLoading(true);
        setTimeout(() => {
            setisLoading(false);
            }, 2000);
    }, []);

  return (
    <SafeAreaView className="flex-1 bg-white relative mt-10">
        {isLoading ? (
                <View className="flex-1 items-center justify-center"> 
                    <ActivityIndicator size="large" color="#0B646B" />
                </View>
        ) : (
            <>
                <View className="flex-row inset-x-0 top-3 justify-between px-3">
                    <TouchableOpacity onPress={() => navigation.goBack()} className="w-10 h-10 rounded-md items-center justify-center bg-[#06B2BE]">
                        <View className="w-10 h-10 rounded-md items-center justify-center bg-[#06B2BE]">
                            <ChevronLeftIcon size={30} color="#fff" />
                        </View>
                    </TouchableOpacity>
                </View>
                <View className="flex-1 relative items-center justify-center">
                    <Image source={Confirmed} className="h-[250px] w-[250px] object-contain"/>
                </View>
            </>
        )}
    </SafeAreaView>
  )
}

export default BookedScreen