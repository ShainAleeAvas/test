import { StatusBar, StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function signUpPending({}) {
  const { email } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 28.19, fontWeight: 400 }}>Avas Ride</Text>
      <Text style={{ textAlign: "center", fontSize: 14, marginTop: 16 }}>
        Your request is pending. When your request will be approved you will get
        confirmation email to
      </Text>
      <Text
        style={{
          color: "#60BC65",
          paddingVertical: 8,
          fontSize: 14,
          marginBottom: 32,
        }}
      >
        {email}
      </Text>
      <View
        style={{
          height: "45%",
          width: "70%",
          borderRadius: 18,
          backgroundColor: "#F0F2F5",
        }}
      ></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
