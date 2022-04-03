import React from "react";
import { StyleSheet } from "react-native";

import HeaderView from "../components/HeaderView";
import Screen from "../components/Screen";
import SetupBlock from "../components/SetupBlock/SetupBlock";

function SetupScreen(props) {
  return (
    <Screen>
      <HeaderView title="Yes or No" subTitle="Choose between Yes/No." />
      <SetupBlock />
    </Screen>
  );
}

const styles = StyleSheet.create({
  days: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default SetupScreen;
