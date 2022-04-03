import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

function AppTextInput({ ...otherProps }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        clearButtonMode="always"
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 10,
  },
  input: {
    fontSize: 18,
    width: "100%",
  },
});

export default AppTextInput;
