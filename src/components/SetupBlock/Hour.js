import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";

import colors from "../../config/colors";
import { Noto_BOLD } from "../../config/constants";

import AppText from "../AppText";

function Hour(props) {
  const [hour, setHour] = useState(8);

  const increment = () => {
    if (hour === 12) return;

    setHour((prev) => prev + 1);
  };

  const decrement = () => {
    if (hour === 1) return;

    setHour((prev) => prev - 1);
  };

  return (
    <View style={styles.hour}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={decrement}
      >
        <AppText font={Noto_BOLD} passedStyle={styles.sign}>
          -
        </AppText>
      </TouchableOpacity>
      <View style={styles.textWrap}>
        <AppText font={Noto_BOLD} passedStyle={styles.sign}>
          {hour}
        </AppText>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={increment}
      >
        <AppText font={Noto_BOLD} passedStyle={styles.sign}>
          +
        </AppText>
      </TouchableOpacity>
      <View style={styles.select}>
        <TouchableOpacity>
          <AppText font={Noto_BOLD} passedStyle={styles.sign}>
            am
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity>
          <AppText font={Noto_BOLD} passedStyle={styles.sign}>
            pm
          </AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hour: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  textWrap: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  text: {},
  sign: {
    padding: 10,
    fontSize: 20,
    color: colors.INACTIVE_LIGHT_GREY,
  },
  select: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
  },
});

export default Hour;
