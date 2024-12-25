import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Iconbell from "../../../assets/icons/bell.svg";
import Iconcart from "../../../assets/icons/cart.svg";
import Iconsearch from "../../../assets/icons/search.svg";
import Slider from "@/components/Slider/Slider";
import { imageSliders } from "@/data/SliderData";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Cards, FeaturedCard } from "@/components/Cards";
// import { FlatList } from "react-native-gesture-handler";

const home = () => {
  const scale = useSharedValue(1);
  const [formSearch, setFormSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [indexCat, setIndexCat] = useState("1");

  const categories = [
    { id: "1", name: "Technologie" },
    { id: "2", name: "Santé" },
    { id: "3", name: "Mode" },
    { id: "4", name: "Mode 2" },
    { id: "5", name: "Mode 3" },
    { id: "6", name: "Mode 4" },
  ];

  const animeStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });
  const handlePress = () => {
    scale.value = 1.4; // Taille augmentée
    scale.value = withSpring(1, { damping: 2, stiffness: 200 }); // Rebond vers 1
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100 mx-5">
      {/*  */}
      <View>
        {/* Header */}
        <View
          className="flex flex-row items-center  justify-between mt-2 gap-3"
          // style={{flexDirection}}
        >
          <View className="w-14 h-14  bg-gray-200 rounded-full justify-center items-center">
            <Iconbell width={30} height={30} fill={"black"} stroke={"black"} />
          </View>
          <View className=" flex-1 ">
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <TouchableNativeFeedback onPress={Keyboard.dismiss}>
                <View
                  className={`flex flex-row items-center gap-2  border-[2px] bg-white 
       
                  rounded-full px-4`}
                >
                  <Iconsearch
                    width={30}
                    height={30}
                    fill={isFocused ? "#f1c40f" : "gray"} // Change de couleur en fonction du focus
                    stroke={isFocused ? "#f1c40f" : "gray"}
                  />

                  <TextInput
                    placeholder="Enter your password"
                    className="flex-1 h-12 text-md"
                    value={formSearch}
                    onChangeText={(value) => setFormSearch(value)}
                    onFocus={() => setIsFocused(true)} // Active le focus
                    onBlur={() => setIsFocused(false)} // Désactive le focus
                  />
                </View>
              </TouchableNativeFeedback>
            </KeyboardAvoidingView>
          </View>
        </View>
      </View>
      <View>
        <FlatList
          data={categories}
          horizontal
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            marginHorizontal: 10,
            flexDirection: "row",
          }}
          renderItem={({ item }) => (
            <Animated.View onTouchStart={handlePress}>
              <TouchableOpacity
                style={[
                  styles.categoryButton,
                  {
                    flexDirection: "column",
                    alignItems: "center",
                    // flex
                  },
                ]}
                onPress={() => {
                  setIndexCat(item.id);
                }}

                // onPress={() => navigation.navigate('Category', { categoryId: item.id, categoryName: item.name })}
              >
                <Text style={[styles.categoryText]}>{item.name}</Text>

                {indexCat === item.id && (
                  <Animated.View
                    className="h-1 w-10 b bg-black mt-2 rounded-full"
                    style={[indexCat === item.id ? animeStyle : null]}
                  />
                )}
              </TouchableOpacity>
            </Animated.View>
          )}
        />
      </View>
      <View className="w-full mt-5 flex flex-row gap-6">
        <FeaturedCard />
        <FeaturedCard />
      </View>
      <View className="w-full mt-5 flex flex-row gap-3">
        <Cards />
        <Cards />
      </View>

      {/*  */}
    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({
  categoryButton: {
    paddingHorizontal: 10,
    backgroundColor: "#f0f0f0",
    marginVertical: 10,
    borderRadius: 8,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
