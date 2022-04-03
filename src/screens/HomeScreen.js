import React from "react";
import { View, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";
import HeaderView from "../components/HeaderView";
import Screen from "../components/Screen";
import Separator from "../components/Separator";
import SubmitBlock from "../components/SubmitBlock";
import { Noto_BOLD } from "../config/constants";

function HomeScreen(props) {
  return (
    <Screen>
      <HeaderView
        title="Your Data"
        subTitle="Be patient, and let it accumulate."
        showSetting
      />
      <View style={styles.todayWrap}>
        <AppText font={Noto_BOLD} passedStyle={styles.today}>
          Today
        </AppText>
        <SubmitBlock type="yes-no" isToday />
        <SubmitBlock type="number" isToday />
      </View>
      <Separator passedStyle={styles.line} />
      <View>
        <AppText font={Noto_BOLD} passedStyle={styles.today}>
          Upcoming
        </AppText>
        <SubmitBlock />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  todayWrap: {
    marginBottom: 20,
  },
  today: {
    fontSize: 25,
    color: colors.BLACK,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  line: {
    marginBottom: 20,
  },
});

export default HomeScreen;
