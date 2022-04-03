import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";
import { Noto_BOLD, Noto_LIGHT } from "../config/constants";

function HeaderView({ title, subTitle, showSetting = false }) {
  return (
    <View style={styles.container}>
      <AppText font={Noto_BOLD} passedStyle={styles.title}>
        {title}
      </AppText>
      <AppText font={Noto_LIGHT} passedStyle={styles.subTitle}>
        {subTitle}
      </AppText>
      {showSetting && (
        <View style={styles.imageWrap}>
          <TouchableWithoutFeedback
            style={styles.setting}
            onPress={() => console.log("pressed")}
          >
            <Image source={require("../../assets/gear.png")} />
          </TouchableWithoutFeedback>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  title: {
    color: colors.BLACK,
    fontSize: 30,
  },
  subTitle: {
    color: colors.ACTIVE_DARK_GREY,
  },
  imageWrap: {
    position: "absolute",
    right: 0,
    top: 20,
  },
  setting: {},
});

export default HeaderView;
