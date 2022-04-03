import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Formik } from "formik";

import AppText from "../AppText";
import AppTextInput from "../AppTextInput";
import colors from "../../config/colors";
import Hour from "./Hour";
import { Noto_BOLD } from "../../config/constants";
import Separator from "../../components/Separator";
import SetupButton from "./SetupButton";
import Weekday from "./Weekday";

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function SetupBlock(props) {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          title: "",
          Mon: false,
          Tue: false,
          Wed: false,
          Thu: false,
          Fri: false,
          Sat: false,
          Sun: false,
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <AppTextInput
              onChangeText={handleChange("title")}
              onBlur={handleBlur("title")}
              value={values.title}
              placeholder="Write title here... ex) Acne pills."
            />
            <View>
              <AppText font={Noto_BOLD} passedStyle={styles.guidance}>
                Notify me on every:
              </AppText>
              <View style={styles.days}>
                {weekdays.map((day) => (
                  <Weekday day={day} key={day} />
                ))}
              </View>
            </View>
            <View style={styles.hour}>
              <AppText font={Noto_BOLD} passedStyle={styles.guidance}>
                at:
              </AppText>
              <Hour />
            </View>
            <Separator passedStyle={styles.line} />
            <View>
              <AppText font={Noto_BOLD} passedStyle={styles.guidance}>
                or,
              </AppText>
            </View>
            <SetupButton
              onPress={handleSubmit}
              text="I will submit at anytime I want"
              passedStyle={styles.button}
            />
            {/* <Button onPress={handleSubmit} title="hi" /> */}
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 8,
    backgroundColor: colors.BOX_GREY,
  },
  days: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  hour: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  guidance: {
    fontSize: 20,
    color: colors.ACTIVE_DARK_GREY,
    marginBottom: 10,
  },
  line: {
    backgroundColor: colors.INACTIVE_LIGHT_GREY,
  },
  button: {
    marginBottom: 20,
  },
});

export default SetupBlock;
