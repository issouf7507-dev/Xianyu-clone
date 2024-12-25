import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { ImageSliderType } from "@/data/SliderData";

type Props = {
  item: ImageSliderType;
  index: number;
};

const { width } = Dimensions.get("screen");

const SliderItem = ({ item, index }: Props) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: width,
        gap: 20,
      }}
    >
      <View
        style={{
          width: 370,
          height: 200,
          backgroundColor: "slategray", // Remplace bg-slate-400
          borderRadius: 30,
        }}
      ></View>
      <Text style={{ color: "red" }}>{index}</Text>
    </View>
  );
};

export default SliderItem;
