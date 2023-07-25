import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import CustomTextInput from "../CustomTextInput";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import RadioButton from "../CustomInputs/RadioButton";

export default function OrderType({ data, setData }) {
  const width = useWindowDimensions().width;
  return (
    <View
      style={{
        flex: 1,
        marginTop: 75,
        paddingLeft: 20,
        paddingRight: 25,
        width: width - 5,
      }}
    >
      <ScrollView>
        <Text style={{ fontSize: 24, marginTop: 24, fontWeight: "400" }}>
          Choose your order's type
        </Text>
        <View style={{ marginTop: 45 }}>
          {data.orderType.map((e, i) => (
            <View key={"OrderType" + i}>
              <TouchableOpacity
                onPress={() =>
                  setData({
                    ...data,
                    orderType: data.orderType.map((e, index) =>
                      i === index
                        ? { ...e, value: e.value === "" ? e.label : "" }
                        : e
                    ),
                  })
                }
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingVertical: 16,
                  borderBottomWidth: 2,
                  borderColor: "#F0F2F5",
                }}
              >
                <Text style={{ fontSize: 14 }}>{e.label}</Text>
                <RadioButton
                  label={e.label}
                  index={i}
                  data={data}
                  setData={setData}
                  color="#F0F2F5"
                  selectedColor="#60BC65"
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
