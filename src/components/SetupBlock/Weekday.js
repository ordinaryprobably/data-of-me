import { useFormikContext } from "formik";
import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";

import AppText from "../AppText";
import colors from "../../config/colors";
import { Noto_BOLD } from "../../config/constants";

function Weekdays({ day }) {
  const [isPressed, setIsPressed] = useState(false);
  const { setFieldValue, errors, touched, values } = useFormikContext();

  const handlePress = () => {
    setIsPressed((prev) => !prev);
    setFieldValue(day, !values[day]);
  };

  return (
    <View>
      <TouchableOpacity
        style={isPressed ? styles.boxActive : styles.boxInactive}
        onPress={handlePress}
      >
        <AppText passedStyle={styles.text} font={Noto_BOLD}>
          {day}
        </AppText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  boxActive: {
    alignItems: "center",
    justifyContent: "center",
    width: 45,
    height: 45,
    paddingBottom: 3,
    backgroundColor: colors.BLUE,
    borderRadius: 10,
  },
  boxInactive: {
    alignItems: "center",
    justifyContent: "center",
    width: 45,
    height: 45,
    paddingBottom: 3,
    backgroundColor: colors.INACTIVE_DARK_GREY,
    borderRadius: 10,
  },
  text: {
    fontSize: 17,
    color: "white",
  },
});

export default Weekdays;
