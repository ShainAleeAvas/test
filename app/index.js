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
import { Ionicons } from "@expo/vector-icons";
import StepByStepProgressBar from "./components/StepByStepProgressBar";
import { useEffect, useRef, useState } from "react";
import SignUpP1 from "./components/forms/SignUpP1";
import SignUpP2 from "./components/forms/SignUpP2";
import SignUpP3 from "./components/forms/SignUpP3";
import OrderType from "./components/forms/OrderType";
import { Link } from "expo-router";

export default function App() {
  const [currentPage, setCurrentPage] = useState(1); //default 1
  const width = useWindowDimensions().width;
  const [progress, setProgress] = useState(0); //default 0
  const pagePercent = 100 / 3; // 3 is number of pages

  const [scrolling, setScrolling] = useState(false); //default false

  const ref = useRef(null);
  const [inputs, setInputs] = useState({
    page1: [
      {
        name: "profilePic",
        label: "Load your photo",
        value: "",
        validated: true,
      },
      {
        name: "fullname",
        label: "Full name",
        placeholder: "Enter full name",
        value: "",
      },
      {
        name: "email",
        label: "E-mail",
        placeholder: "Enter e-mail",
        value: "",
      },
      {
        name: "phone",
        label: "Phone number",
        placeholder: "+960 XXXXXXX",
        value: "",
      },
      { name: "idCardFront", label: "Front picture", value: "" },
      { name: "idCardBack", label: "Back picture", value: "" },
    ],
    page2: [
      {
        name: "licenseCardNumber",
        label: "Personal identification number",
        placeholder: "Enter number",
        value: "",
      },
      {
        name: "licenseCardExpireDate",
        label: "Expiration date",
        placeholder: "Enter date",
        value: "",
      },
      { name: "licenseCardFront", label: "Front picture", value: "" },
      { name: "licenseCardFront", label: "Back picture", value: "" },
    ],
    page3: [
      {
        name: "vehiclePhoto",
        label: "Photo of vehicle",
        value: "",
      },
      {
        name: "vehicleColor",
        label: "Color",
        placeholder: "Enter color",
        value: "",
      },
      {
        name: "vehicleIssuedYear",
        label: "Year of issue",
        placeholder: "Enter date",
        value: "",
      },
      {
        name: "vehicleModel",
        label: "Model",
        placeholder: "Enter model",
        value: "",
      },
      {
        name: "vehiclePlateNo",
        label: "Plate number",
        placeholder: "Enter plate number",
        value: "",
      },
      {
        name: "vehicleMaxOccupancy",
        label: "Maximum number of passengers",
        placeholder: "Enter amount",
        value: "",
      },
    ],
    orderType: [
      {
        name: "taxi",
        label: "Taxi",
        value: "",
      },
      {
        name: "foodDelivery",
        label: "Food delivery",
        value: "",
      },
      {
        name: "packageDelivery",
        label: "Package delivery",
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
      <View style={styles.signUpHeader}>
        <TouchableOpacity
          style={styles.signUpBackButton}
          onPress={
            () =>
              currentPage !== 1 &&
              (setCurrentPage(currentPage - 1),
              setScrolling(true),
              ref.current?.scrollTo({
                x: width * (currentPage - 1) - width,
              }),
              setScrolling(false))
            //
          }
        >
          <Ionicons name="arrow-back" size={25} color="black" />
        </TouchableOpacity>
        {currentPage !== 4 && (
          <StepByStepProgressBar steps={3} percent={progress} />
        )}
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        scrollEnabled={scrolling}
        ref={ref}
      >
        <SignUpP1 data={inputs} setData={setInputs} />
        <SignUpP2 data={inputs} setData={setInputs} />
        <SignUpP3 data={inputs} setData={setInputs} />
        <OrderType data={inputs} setData={setInputs} />
      </ScrollView>
      <TouchableOpacity
        onPress={() =>
          progress >= pagePercent * currentPage &&
          (setScrolling(true),
          ref.current?.scrollTo({ x: width * currentPage + 10 }),
          setCurrentPage(currentPage + 1),
          setScrolling(false))
        }
      >
        {currentPage === 4 ? (
          <Link
            style={{
              ...styles.signUpFooter,
              backgroundColor:
                inputs.orderType.filter((e) => e.value !== "").length > 0
                  ? "#60BC65"
                  : "#BFC2C9",
            }}
            href={{
              pathname: "/signUpPending",
              params: { email: inputs.page1[2].value },
            }}
          >
            <Text>Next</Text>
          </Link>
        ) : (
          <Text
            style={{
              ...styles.signUpFooter,
              backgroundColor:
                progress >= pagePercent * currentPage ? "#60BC65" : "#BFC2C9",
            }}
          >
            Next
          </Text>
        )}
      </TouchableOpacity>
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
  signUpHeader: {
    flex: 1,
    paddingHorizontal: 20,
    zIndex: 1,
    position: "absolute",
    top: 40,
    width: "100%",

    flexDirection: "column",
    backgroundColor: "white",
  },
  signUpFooter: {
    height: 44,
    borderRadius: 20,
    margin: 12,
    paddingVertical: 12,
    textAlign: "center",
    color: "white",
  },
  signUpBackButton: {
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
  },
});
