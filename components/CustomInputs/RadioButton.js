import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";

export default function RadioButton({
  style,
  defaultSelected = false,
  color = "black",
  selectedColor = "black",
  radius = 12,
  icon,
}) {
  const [selected, setSelcted] = useState(defaultSelected);
  return (
    <TouchableOpacity
      onPress={() => setSelcted(!selected)}
      style={{
        marginBottom: 16,
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: selected ? selectedColor : color,
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      {selected &&
        (icon || (
          <View
            style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: selected ? selectedColor : color,
            }}
          />
        ))}
    </TouchableOpacity>
  );
}
