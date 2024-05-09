import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { images } from "../constants";
// import { useGlobalContext } from "../context/GlobalProvider";

const Welcome = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [isLogged, setIsLogged] = useState(false)

  if (!isLoading && isLogged) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="h-full">
      {/* <Loader isLoading={loading} /> */}

      <View className="w-full flex justify-center items-center h-full px-4">
        <Image
          source={images.amigosOutdoors}
          className="h-[400px]"
          resizeMode="contain"
        />

        <View className="relative mt-5">
          <Text className="text-center">
            <Text className="text-4xl font-bold">Smart Task Management{"\n"}</Text>
            <Text className="text-lg">This smart tool is designed to help you better manage your tasks!</Text>
          </Text>

        </View>

        <TouchableOpacity
          onPress={() => router.push("/home")}
          className="mt-16 bg-[#91D7E0] w-11/12 rounded-sm py-3"
        >
          <Text className="text-center text-white font-semibold text-lg">Continue</Text>
        </TouchableOpacity >
      </View>

      <StatusBar backgroundColor="#ffffff" />
    </SafeAreaView>
  );
};

export default Welcome;