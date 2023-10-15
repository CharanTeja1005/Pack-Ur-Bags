import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useLayoutEffect, useState } from 'react';
import { SafeAreaView, View, TextInput, TouchableOpacity, Text } from 'react-native';
import {ChevronLeftIcon} from 'react-native-heroicons/outline'
import axios from 'axios'

// const axios = require('axios');

export default function BookingScreen() {

    const navigation = useNavigation();
    const {params: data} = useRoute();

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [aadhar, setAadhar] = useState('');
    const placeName = data?.name;
    const locName = data?.location_string;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

  const handleFormSubmit = () => {
  // Handle form submission logic here
    console.log('Form submitted:', { name, phone, email, aadhar });
    console.log(placeName);
    console.log(locName);
    const completedata = {
      Name: name,
      Phone: phone,
      Email: email,
      Aadhar: aadhar,
      'Place Name': placeName,
      Location: locName,
    };

    axios.post('https://sheet.best/api/sheets/bc9700c6-e7a1-4315-b96f-a3f49d65e90b', completedata).then((response) => console.log(response));
  };

  return (
    <SafeAreaView className="flex-1 bg-white relative mt-10">
      <View className='p-3'>
        <TouchableOpacity onPress={() => navigation.goBack()} className="w-10 h-10 py-3 rounded-md items-center justify-center bg-[#06B2BE]">
            <View className="w-10 h-10 rounded-md items-center justify-center bg-[#06B2BE]">
                <ChevronLeftIcon size={30} color="#fff" />
            </View>
        </TouchableOpacity>
        <Text className='text-lg font-bold mb-4 py-4'>Form Details</Text>
        <TextInput
          className='input py-2 px-4 border border-gray-300 rounded mb-4'
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          className='input py-2 px-4 border border-gray-300 rounded mb-4'
          placeholder="Phone"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
        <TextInput
          className='input py-2 px-4 border border-gray-300 rounded mb-4'
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          className='input py-2 px-4 border border-gray-300 rounded mb-4'
          placeholder="Aadhar No"
          value={aadhar}
          onChangeText={setAadhar}
          keyboardType="numeric"
        />
        <TouchableOpacity className='bg-blue-500 py-2 px-4 rounded' onPress={() => {handleFormSubmit(); navigation.push("BookedScreen")}}>
          <Text className='text-white font-bold text-center'>Confirm</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}