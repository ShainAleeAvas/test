import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { FontAwesome5, Feather } from "@expo/vector-icons";
import CustomTextInput from "../CustomTextInput";
import * as ImagePicker from "expo-image-picker";

export default function SignUpP1({ data, setData }) {
  const width = useWindowDimensions().width;
  const PickImage = async (index) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      setData({
        ...data,
        page1: data.page1.map((e, i) =>
          i === index ? { label: e.label, value: result.uri } : e
        ),
      });
    }
  };

  return (
    <View
      style={{
        flex: 1,
        marginTop: 131,
        paddingLeft: 20,
        paddingRight: 15,
        marginRight: 5,
        width: width,
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
          <TouchableOpacity
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
            onPress={() => PickImage(0)}
          >
            {data.page1[0].value ? (
              <Image
                source={{ uri: data.page1[0].value }}
                style={{
                  position: "absolute",
                  borderRadius: 90,
                  height: 90,
                  width: 90,
                }}
              />
            ) : (
              <FontAwesome5 name="user-alt" size={60} color="black" />
            )}
            <FontAwesome5
              name="plus-circle"
              size={24}
              color="black"
              style={{
                position: "absolute",
                backgroundColor: "white",
                borderRadius: 20,
                padding: 2,
                bottom: 0,
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 10,
              fontSize: 14,
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            {data.page1[0].label}
          </Text>
        </View>
        <CustomTextInput
          data={data}
          setData={setData}
          label={data.page1[1].label}
          placeholder={data.page1[1].placeholder}
        />
        <CustomTextInput
          data={data}
          setData={setData}
          label={data.page1[2].label}
          placeholder={data.page1[2].placeholder}
        />
        <CustomTextInput
          data={data}
          setData={setData}
          label={data.page1[3].label}
          placeholder={data.page1[3].placeholder}
        />
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
              <Text style={{ marginBottom: 2 }}>{data.page1[4].label}</Text>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 14,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#F0F2F5",
                }}
                onPress={() => PickImage(4)}
              >
                {data.page1[4].value ? (
                  <Image
                    source={{ uri: data.page1[4].value }}
                    style={{ borderRadius: 14, width: "100%", height: "100%" }}
                  />
                ) : (
                  <Feather name="camera" size={32} color="#BFC2C9" />
                )}
              </TouchableOpacity>
            </View>
            <View style={{ height: 124, width: "48.5%" }}>
              <Text style={{ marginBottom: 2 }}>{data.page1[4].label}</Text>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 14,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#F0F2F5",
                }}
                onPress={() => PickImage(5)}
              >
                {data.page1[5].value ? (
                  <Image
                    source={{ uri: data.page1[5].value }}
                    style={{ borderRadius: 14, width: "100%", height: "100%" }}
                  />
                ) : (
                  <Feather name="camera" size={32} color="#BFC2C9" />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
