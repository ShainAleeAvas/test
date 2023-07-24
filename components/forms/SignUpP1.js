import { ScrollView, Text, View, useWindowDimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import CustomTextInput from "../CustomTextInput";

export default function SignUpP1() {
  const width = useWindowDimensions().width;

  return (
    <View
      style={{
        flex:1,
        marginTop: 131,
        paddingLeft: 20,
        paddingRight: 15,
        marginRight: 5,
        width:width
      }}
    >
      <ScrollView>
        <Text style={{ fontSize: 24, marginTop: 24, fontWeight: "400" }}>
          Profile
        </Text>
        <Text style={{ fontSize: 14, marginTop: 8 }}>
          Before you start enter your information
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            marginVertical: 24,
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 90,
              borderWidth: 1,
              borderColor: "black",
              width: 90,
              height: 90,
              alignItems: "center",
              paddingBottom: 10,
            }}
          >
            <FontAwesome5 name="user-alt" size={60} color="black" />
            {/* <Image style={{ height: "80%", width: "80%" }} /> */}
          </View>
          <Text
            style={{
              marginTop: 10,
              fontSize: 14,
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            Load your photo
          </Text>
        </View>
        <CustomTextInput label="Full name" placeholder="Enter full name" />
        <CustomTextInput label="E-mail" placeholder="Enter e-mail" />
        <CustomTextInput label="Phone number" placeholder="+960 XXXXXXX" />
        <View style={{ marginVertical: 24 }}>
          <Text style={{ fontSize: 16, fontWeight: "400", marginBottom: 6 }}>
            Add ID card information
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "nowrap",
              alignItems: "center",
            }}
          >
            <View style={{ height: 124, width: "48.5%" }}>
              <Text style={{ marginBottom: 2 }}>Front picture</Text>
              <View
                style={{
                  borderRadius: 14,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#F0F2F5",
                }}
              ></View>
            </View>
            <View style={{ height: 124, width: "48.5%" }}>
              <Text style={{ marginBottom: 2 }}>Back picture</Text>
              <View
                style={{
                  borderRadius: 14,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#F0F2F5",
                }}
              ></View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
