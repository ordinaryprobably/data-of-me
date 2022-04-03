import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import AppText from "../AppText";
import colors from "../../config/colors";
import { Noto_BOLD } from "../../config/constants";

function YesNo(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {}}
        style={styles.box}
      >
        <AppText font={Noto_BOLD} passedStyle={styles.text}>
          Yes
        </AppText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <View>
          <AppText font={Noto_BOLD} passedStyle={styles.text}>
            No
          </AppText>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  box: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "48%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    color: colors.ACTIVE_DARK_GREY,
  },
});

export default YesNo;
