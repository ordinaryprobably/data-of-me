import React from "react";
import { View, StyleSheet } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";
import Number from "./SubmitBlockTypes.js/Number";
import YesNo from "./SubmitBlockTypes.js/YesNo";
import { Noto_BOLD } from "../config/constants";

function SubmitBlock({ type, isToday }) {
  const yesNoBlock = (
    <View style={styles.container}>
      <AppText
        font={Noto_BOLD}
        passedStyle={isToday ? styles.title : styles.upcoming}
      >
        Acne Pills
      </AppText>
      <AppText passedStyle={styles.period}>Ask Everyday</AppText>
      <AppText passedStyle={styles.setting}>Setting</AppText>
      <YesNo />
    </View>
  );

  const numberBlock = (
    <View style={styles.container}>
      <AppText
        font={Noto_BOLD}
        passedStyle={isToday ? styles.title : styles.upcoming}
      >
        Acne Pills
      </AppText>
      <AppText passedStyle={styles.period}>Ask Everyday</AppText>
      <AppText passedStyle={styles.setting}>Setting</AppText>
      <Number />
    </View>
  );

  const upcoming = (
    <View style={styles.upcomingContainer}>
      <View style={styles.upcomingInner}>
        <AppText
          font={Noto_BOLD}
          passedStyle={isToday ? styles.title : styles.upcoming}
        >
          Go to gym
        </AppText>
        <AppText passedStyle={styles.upcomingPeriod}>Ask Everyday</AppText>
      </View>
      {/* <AppText passedStyle={styles.setting}>Setting</AppText> */}
    </View>
  );

  if (type === "yes-no") {
    return yesNoBlock;
  } else if (type === "number") {
    return numberBlock;
  } else {
    return upcoming;
  }
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    backgroundColor: colors.BOX_GREY,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 15,
  },
  title: {
    color: colors.BLUE,
    fontSize: 20,
    letterSpacing: 0.6,
  },
  period: {
    color: colors.ACTIVE_LIGHT_GREY,
    fontSize: 16,
    marginBottom: 17,
  },
  setting: {
    color: colors.ACTIVE_LIGHT_GREY,
    position: "absolute",
    right: 20,
    top: 25,
  },
  upcoming: {
    color: colors.BLACK,
    fontSize: 20,
    letterSpacing: 0.6,
  },
  upcomingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colors.BOX_GREY,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 15,
  },
  upcomingInner: {},
  upcomingPeriod: {
    color: colors.INACTIVE_LIGHT_GREY,
    fontSize: 16,
  },
});

export default SubmitBlock;
