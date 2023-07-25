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

export default function OrderType() {
  const width = useWindowDimensions().width;
  return (
    <View
      style={{
        flex: 1,
        marginTop: 75,
        paddingLeft: 20,
        paddingRight: 25,
        width: width-5,
      }}
    >
      <ScrollView>
        <Text style={{ fontSize: 24, marginTop: 24, fontWeight: "400" }}>
          Choose your order's type
        </Text>
        <View style={{ marginTop: 45 }}>
          <TouchableOpacity
            style={{ flex: 1, flexDirection: "row", justifyContent:"space-between", backgroundColor: "yellow" }}
          >
            <Text style={{fontSize:14}}>Taxi</Text>
            <RadioButton />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
