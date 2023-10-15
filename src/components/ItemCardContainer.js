import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { MapPinIcon }  from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'

const ItemCardContainer = ({imageSrc, title, location, data}) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ItemScreen", {  params: data })} className="rounded-md border border-gray-300 space-y-1 px-2  py-2 shadow-md bg-white w-[150px] my-2">
        <Image 
            source={{uri: imageSrc}}
            className="w-full h-40 rounded-md object-cover"
        />
        
        {title ? (
            <>
                <Text className="text-[#428288] text-[20 px] font-bold">
                    { title?.lenth > 14 ? `${title.slice(0, 14)}..` : title }
                </Text>

                <View className="flex-row items-center space-x-1 ">
                    <MapPinIcon size={16} color="#8597A2" />
                    <Text className="text-[#428288] text-[14 px] font-bold">
                        { location ?.lenth > 14 ? `${location .slice(0, 14)}..` : location  }
                    </Text>
                </View>
            </>
        ) : (
            <></>
        )}
    </TouchableOpacity>
  )
}

export default ItemCardContainer