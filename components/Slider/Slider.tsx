import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import { ImageSliderType } from "@/data/SliderData";
import SliderItem from "./SliderItem";
import Animated, { useSharedValue } from "react-native-reanimated";
const { width } = Dimensions.get("screen");

type Props = {
  itemList: ImageSliderType[];
};
const Slider = ({ itemList }: Props) => {
  const scrollX = useSharedValue(0);
  return (
    <View className="mt-5 items-center justify-center">
      <Animated.FlatList
        data={itemList}
        renderItem={({ item, index }) => (
          <SliderItem item={item} index={index} />
        )}
        horizontal
        // pagingEnabled={}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Slider;
