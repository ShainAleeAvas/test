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

export default function SignUpP2({ data, setData }) {
  const width = useWindowDimensions().width;
  const PickImage = async (index) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      setData({
        ...data,
        page2: data.page2.map((e, i) =>
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
          Driver
        </Text>
        <View>
          <CustomTextInput
            style={{ marginTop: 24 }}
            page="page2"
            index={0}
            data={data}
            setData={setData}
            label={data.page2[0].label}
            placeholder={data.page2[0].placeholder}
          />
          <CustomTextInput
            page="page2"
            index={1}
            data={data}
            setData={setData}
            label={data.page2[1].label}
            placeholder={data.page2[1].placeholder}
          />
          <View style={{ marginVertical: 24 }}>
            <Text style={{ fontSize: 16, fontWeight: "400", marginBottom: 6 }}>
              Add License photo
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
                <Text style={{ marginBottom: 2, marginLeft: 16 }}>
                  {data.page2[2].label}
                </Text>
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
                  onPress={() => PickImage(2)}
                >
                  {data.page2[2].value ? (
                    <Image
                      source={{ uri: data.page2[2].value }}
                      style={{
                        borderRadius: 14,
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  ) : (
                    <Feather name="camera" size={32} color="#BFC2C9" />
                  )}
                </TouchableOpacity>
              </View>
              <View style={{ height: 124, width: "48.5%" }}>
                <Text style={{ marginBottom: 2, marginLeft: 16 }}>
                  {data.page2[3].label}
                </Text>
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
                  onPress={() => PickImage(3)}
                >
                  {data.page2[3].value ? (
                    <Image
                      source={{ uri: data.page2[3].value }}
                      style={{
                        borderRadius: 14,
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  ) : (
                    <Feather name="camera" size={32} color="#BFC2C9" />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
