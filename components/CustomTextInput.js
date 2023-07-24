import React from "react";
import { Text, TextInput, View } from "react-native";

export default function CustomTextInput({
  label,
  placeholder,
  setData,
  index,
  data,
}) {
  return (
    <View style={{ marginBottom: 8, fontSize: 12 }}>
      <Text style={{ marginLeft: 16, marginBottom: 2 }}>{label}</Text>
      <TextInput
        onChangeText={(text) =>
          setData({
            ...data,
            page1: data.page1.map((e, i) =>
              i === index ? { label: e.label, value: text } : e
            ),
          })
        }
        placeholder={placeholder}
        style={{
          paddingVertical: 12,
          paddingHorizontal: 16,
          borderRadius: 14,
          backgroundColor: "#F0F2F5",
        }}
      />
    </View>
  );
}
