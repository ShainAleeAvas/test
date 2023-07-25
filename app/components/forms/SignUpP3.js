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

export default function SignUpP3({ data, setData }) {
  const width = useWindowDimensions().width;
  const PickImage = async (index) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      setData({
        ...data,
        page3: data.page3.map((e, i) =>
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
          Vehicle
        </Text>
        <View style={{ marginTop: 24 }}>
          <View style={{ width: "100%", marginBottom: 8 }}>
            <Text style={{ marginBottom: 2, marginLeft: 16 }}>
              {data.page3[0].label}
            </Text>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 14,
                width: "100%",
                height: 144,
                backgroundColor: "#F0F2F5",
              }}
              onPress={() => PickImage(0)}
            >
              {data.page3[0].value ? (
                <Image
                  source={{ uri: data.page3[0].value }}
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
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <CustomTextInput
              page="page3"
              style={{ width: "49%" }}
              index={1}
              data={data}
              setData={setData}
              label={data.page3[1].label}
              placeholder={data.page3[1].placeholder}
            />
            <CustomTextInput
              page="page3"
              style={{ width: "48%" }}
              index={2}
              data={data}
              setData={setData}
              label={data.page3[2].label}
              placeholder={data.page3[2].placeholder}
            />
          </View>
          <CustomTextInput
            page="page3"
            index={3}
            data={data}
            setData={setData}
            label={data.page3[3].label}
            placeholder={data.page3[3].placeholder}
          />
          <CustomTextInput
            page="page3"
            index={4}
            data={data}
            setData={setData}
            label={data.page3[4].label}
            placeholder={data.page3[4].placeholder}
          />
          <CustomTextInput
            page="page3"
            index={5}
            data={data}
            setData={setData}
            label={data.page3[5].label}
            placeholder={data.page3[5].placeholder}
          />
        </View>
      </ScrollView>
    </View>
  );
}
