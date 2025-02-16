import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require("@/assets/images/background-image.png")}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.container}>
            {/* COMPANY LOGO */}
            <View style={styles.companyLogo}>
              <Image source={require("@/assets/images/Logo.png")} />
            </View>

            {/* TEXT GROUPS */}
            <View style={styles.textGroup}>
              <Text style={styles.textLarge}>
                Find your favourite place here
              </Text>
              <Text style={styles.textSmall}>The best prices for over 2</Text>
              <Text style={styles.textSmall}>million properties worldwide</Text>
            </View>

            <View style={{ position: "absolute", bottom: 60, width: "100%" }}>
              {/* BUTTON GROUP */}
              <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.button}>
                  <Text style={{ ...styles.textSmall, color: "black" }}>
                    Join here
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.transparentButton}>
                  <Text style={styles.textSmall}>Sign in</Text>
                </TouchableOpacity>
              </View>

              {/* NAVIGATION PROMPT */}
              <View style={{ alignItems: "center", paddingVertical: 20 }}>
                <Text style={{ color: "white" }}>Continue to home</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: Dimensions.get("window").height,
  },

  companyLogo: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    marginBottom: 50,
  },

  textGroup: {
    alignItems: "center",
  },

  textLarge: {
    color: "#fff",
    fontSize: 40,
    fontWeight: 800,
    textAlign: "center",
    marginBottom: 12,
  },

  textSmall: {
    color: "white",
    fontSize: 18,
    fontWeight: "200",
    textAlign: "center",
  },

  transparentButton: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    flex: 1,
  },

  button: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    fontSize: 20,
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
  },

  buttonGroup: {
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 20,
  },
});
