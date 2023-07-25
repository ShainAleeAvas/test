import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";

export default function RadioButton({
  data,
  setData,
  index,
  label,
  style,
  color = "black",
  selectedColor = "black",
  icon,
}) {
  return (
    <TouchableOpacity
      style={{
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: data.orderType[index].value === "" ? color : selectedColor,
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      {data.orderType[index].value !== "" &&
        (icon || (
          <View
            style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor:
                data.orderType[index].value === "" ? color : selectedColor,
            }}
          />
        ))}
    </TouchableOpacity>
  );
}
