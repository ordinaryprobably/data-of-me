import React from "react";
import { useForm, Controller } from "react-hook-form";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

import AppText from "../AppText";
import AppTextInput from "../AppTextInput";
import colors from "../../config/colors";

function Number() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      number: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <View style={styles.container}>
        <Controller
          control={control}
          name="number"
          rules={{
            required: {
              value: true,
              message: "Cannot submit an empty record.",
            },
            pattern: {
              value: /^[0-9]*$/,
              message: "Your record must be a number.",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.input}>
              <AppTextInput
                placeholder="Submit a number"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
        />
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={handleSubmit(onSubmit)}
          style={styles.button}
        >
          <Image source={require("../../../assets/arrow-right.png")} />
        </TouchableOpacity>
        {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
      </View>
      {errors.number && (
        <AppText passedStyle={styles.error}>{errors.number.message}</AppText>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    width: "70%",
  },
  button: {
    width: "25%",
    height: 50,
    backgroundColor: colors.BLUE,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  error: {
    fontSize: 14,
    color: colors.RED,
    marginLeft: 10,
  },
});

export default Number;
