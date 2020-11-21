import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Icon({
  name,
  size = 40,
  bColor = "#000",
  iconColor = "#fff",
}) {
  console.log(
    "name is " +
      name +
      " and color is " +
      iconColor +
      " size is " +
      size * 0.5 +
      " bgC is " +
      bColor
  );
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: bColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
}

const styles = StyleSheet.create({});
