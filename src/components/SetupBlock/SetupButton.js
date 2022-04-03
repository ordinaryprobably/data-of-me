import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import AppText from "../AppText";
import colors from "../../config/colors";
import { Noto_BOLD } from "../../config/constants";

function SetupButton({ text, passedStyle, onPress }) {
  return (
    <TouchableOpacity style={[styles.container, passedStyle]} onPress={onPress}>
      <AppText font={Noto_BOLD} passedStyle={styles.text}>
        {text}
      </AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: colors.INACTIVE_DARK_GREY,
    padding: 10,
  },
  text: {
    fontSize: 19,
    color: "white",
  },
});

export default SetupButton;
