import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import * as Font from "expo-font";

import { Noto_BOLD, Noto_LIGHT, Noto_REGULAR } from "../config/constants";

function AppText({ children, font, passedStyle }) {
  const [fontsLoaded] = Font.useFonts({
    Noto_LIGHT: require("../../assets/fonts/NotoSans-Light.ttf"),
    Noto_REGULAR: require("../../assets/fonts/NotoSans-Regular.ttf"),
    Noto_BOLD: require("../../assets/fonts/NotoSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>{children}</Text>;
  }

  if (font === Noto_BOLD) {
    return (
      <Text style={[styles.size, styles.bold, passedStyle]}>{children}</Text>
    );
  }

  if (font === Noto_REGULAR) {
    return (
      <Text style={[styles.size, styles.regular, passedStyle]}>{children}</Text>
    );
  }

  if (font === Noto_LIGHT) {
    return (
      <Text style={[styles.size, styles.light, passedStyle]}>{children}</Text>
    );
  }

  return (
    <Text style={[styles.size, styles.regular, passedStyle]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  size: {
    fontSize: 18,
  },
  regular: {
    fontFamily: "Noto_REGULAR",
  },
  bold: {
    fontFamily: "Noto_BOLD",
  },
  light: {
    fontFamily: "Noto_LIGHT",
  },
});

export default AppText;
