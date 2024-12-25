import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const welcome = () => {
  return (
    <SafeAreaView>
      <Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia illum
        accusamus delectus vero nesciunt nulla quasi autem alias eos suscipit
        excepturi deserunt, minus laboriosam, odit, tempore harum. Veritatis,
        ratione quod?
      </Text>

      <TouchableOpacity>
        <Link href="/(root)/(tabs)/home">
          <Text>sdwdvwjhd</Text>
        </Link>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default welcome;

const styles = StyleSheet.create({});
