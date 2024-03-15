import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ActivityIndicator } from "react-native";
import image from "./assets/Kavaratti1.png";

import {
  useFonts,
  Inter_700Bold,
  Inter_400Regular,
} from "@expo-google-fonts/inter";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_regular: Inter_400Regular,
    Inter_bold: Inter_700Bold,
  });
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/Kavaratti1.png")}
        style={{
          flex: 1,
          padding: 10,
        }}
      >
        <View
          style={{
            flex: 1,
            padding: 20,
            justifyContent: "space-between",
            marginTop: 32,
            flexDirection: "row",
            gap: 10,
          }}
        >
          <View>
            <Text
              style={{
                color: "#fff",
                fontSize: 14,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              et, eaque id quibusdam animi voluptatibus optio necessitatibus
              nihil. Magnam, dolore?
            </Text>
            <Text style={{ fontWeight: "bold", color: "#fff" }}>
              Ada lovles
            </Text>
          </View>
          <Text style={{ color: "#fff" }}> icon</Text>
        </View>

        <View>
          <Text>Lorem, ipsum dolor.</Text>
        </View>
        <View>
          <Text>
            <Text
              style={{
                fontFamily: "Inter_bold",
                color: "#fff",
                fontSize: 100,
              }}
            >
              11:30
            </Text>
            <Text
              style={{
                fontFamily: "Inter_regular",
                color: "#fff",
              }}
            >
              PM
            </Text>
          </Text>
        </View>
        <Text style={{ color: "white" }}>IN LONDON UK</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
