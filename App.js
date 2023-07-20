import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
  Platform,
  Image,
  TextInput,
} from "react-native";
import { Ionicons, Entypo, FontAwesome5 } from "@expo/vector-icons";
import CustomTextInput from "./components/CustomTextInput";
import StepByStepProgressBar from "./components/StepByStepProgressBar";

export default function App() {
  const width = useWindowDimensions().width;
  return (
    <View style={styles.container}>
      <View
        style={{
          zIndex: 1,
          position: "absolute",
          top: 40,
          width: "100%",
          flex: 1,
          flexDirection: "column",
          backgroundColor: "white",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            borderRadius: 24.2,
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            width: 50,
            height: 50,
            zIndex: 2,
            marginBottom: 10,

            shadowOffset: { width: 0, height: 3 },
            shadowColor: "black",
            shadowOpacity: 0.4,
            shadowRadius: 3,

            shadowColor: "black",
            elevation: 8,
          }}
        >
          <Ionicons name="arrow-back" size={25} color="black" />
        </TouchableOpacity>
        <StepByStepProgressBar steps={3} />
      </View>
      <ScrollView
        style={{
          flex: 1,
          marginTop: 131,
        }}
      >
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
      <View style={{ width: "100%", height: 76, padding: 12 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#BFC2C9",
            borderRadius: 20,
            paddingVertical: 12,
          }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>Next</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    margin: 20,
  },
});
