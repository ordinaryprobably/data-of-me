import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";

function Separator({ passedStyle }) {
  return <View style={[styles.line, passedStyle]} />;
}

const styles = StyleSheet.create({
  line: {
    width: "90%",
    height: 1,
    backgroundColor: colors.BOX_GREY,
    alignSelf: "center",
  },
});

export default Separator;
