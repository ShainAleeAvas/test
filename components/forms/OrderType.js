import { ScrollView, TouchableOpacity, View } from "react-native";
import StepByStepProgressBar from "../StepByStepProgressBar";
import { StatusBar } from "expo-status-bar";
import SignUpLayput from "../layouts/SignUpLayput";
import SignUpP1 from "./SignUpP1";

export default function OrderType() {
  const [inputs, setInputs] = useState({
    page1: [
      { label: "Load your photo", value: "" },
      { label: "Full name", placeholder: "Enter full name", value: "" },
      { label: "E-mail", placeholder: "Enter e-mail", value: "" },
      { label: "Phone number", placeholder: "+960 XXXXXXX", value: "" },
      { label: "Front picture", value: "" },
      { label: "Back picture", value: "" },
    ],
    page2: [
      {
        label: "Personal identification number",
        placeholder: "Enter number",
        value: "",
      },
      { label: "Expiration date", placeholder: "Enter date", value: "" },
      { label: "Front picture", value: "" },
      { label: "Back picture", value: "" },
    ],
    page3: [
      {
        label: "Photo of vehicle",
        value: "",
      },
      { label: "Color", placeholder: "Enter color", value: "" },
      { label: "Year of issue", placeholder: "Enter date", value: "" },
      { label: "Model", placeholder: "Enter model", value: "" },
      { label: "Plate number", placeholder: "Enter plate number", value: "" },
      {
        label: "Maximum number of passengers",
        placeholder: "Enter amount",
        value: "",
      },
    ],
  });

  useEffect(() => {
    setProgress(
      (pagePercent / inputs.page1.length) *
        inputs.page1.filter((e) => e.value !== "").length +
        (pagePercent / inputs.page2.length) *
          inputs.page2.filter((e) => e.value !== "").length +
        (pagePercent / inputs.page3.length) *
          inputs.page3.filter((e) => e.value !== "").length
    );
  }, [inputs]);

  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: 20,
          zIndex: 1,
          position: "absolute",
          top: 40,
          width: "100%",
          flex: 1,
          flexDirection: "row",
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
        <Text>Order's type</Text>
      </View>
      <ScrollView horizontal scrollEnabled={true}>
        <SignUpP1 data={inputs} setData={setInputs} />
      </ScrollView>

      <View style={{ width: "100%", height: 76, padding: 12 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#BFC2C9",
            borderRadius: 20,
            paddingVertical: 12,
          }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>Save</Text>
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
    marginVertical: 20,
  },
});
