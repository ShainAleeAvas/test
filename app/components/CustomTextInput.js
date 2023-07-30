import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { email } from "./forms/validation";

export default function CustomTextInput({
  label,
  placeholder,
  setData,
  index,
  data,
  page,
  style,
  validated = true,
}) {
  const [value, setValue] = useState("");
  return (
    <View style={{ marginBottom: 8, fontSize: 12, ...style }}>
      <Text
        style={{
          marginLeft: 16,
          marginBottom: 2,
        }}
      >
        {label}
      </Text>
      <TextInput
        onBlur={() => console.log(email(value))}
        onChangeText={(text) => (
          setValue(text),
          setData({
            ...data,
            [page]: data[page].map((e, i) =>
              i === index ? { label: e.label, value: text } : e
            ),
          })
        )}
        placeholder={placeholder}
        style={{
          borderWidth: 2,
          borderColor: validated ? "rgba(255, 0, 0, 0)" : "rgba(255, 0, 0, 1)",
          paddingVertical: 12,
          paddingHorizontal: 16,
          borderRadius: 14,
          backgroundColor: "#F0F2F5",
        }}
      />
    </View>
  );
}
