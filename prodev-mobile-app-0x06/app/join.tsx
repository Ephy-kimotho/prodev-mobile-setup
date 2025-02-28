import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* NAVGROUP */}
        <View style={styles.navGroup}>
          <Link href="/">
            <Ionicons name="arrow-back" size={25} />
          </Link>
          <Image source={require("@/assets/images/logo.png")} />
        </View>

        {/* TEXT GROUP */}
        <Text style={styles.largeText}>Create your</Text>
        <Text style={styles.largeText}>Account</Text>
        <Text style={styles.smallText}>
          Enter your details to create a new account
        </Text>

        {/* FORM GROUP */}
        <View style={styles.formGroup}>
          {/* Email Input */}
          <View>
            <Text style={styles.placeholderText}>Email</Text>
            <TextInput keyboardType="email-address" style={styles.inputField} />
          </View>

          {/* Password Input */}
          <View style={{ marginTop: 5 }}>
            <Text style={styles.placeholderText}>Password</Text>
            <View style={styles.passwordGroup}>
              <TextInput style={{ flex: 1 }}></TextInput>
              <FontAwesome name="eye-slash" size={24} color="7E7B7B" />
            </View>
          </View>

          {/* Password Input */}
          <View style={{ marginTop: 5 }}>
            <Text style={styles.placeholderText}>Password</Text>
            <View style={styles.passwordGroup}>
              <TextInput style={{ flex: 1 }}></TextInput>
              <FontAwesome name="eye-slash" size={24} color="7E7B7B" />
            </View>
          </View>
        </View>

        {/* SIGN IN BUTTON */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>

        {/* DIVIDER */}
        <View style={styles.dividerGroup}>
          <View style={styles.divider}></View>
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider}></View>
        </View>

        {/* SOCIAL MEDIA SIGN IN BUTTONS */}
        <View style={styles.socialMediaButtonGroup}>
          <TouchableOpacity style={styles.socialMediaButton}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                gap: 5,
              }}
            >
              <Image source={require("@/assets/images/google.png")} />
              <Text style={styles.socialMediaButtonText}>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialMediaButton}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                gap: 5,
              }}
            >
              <Image source={require("@/assets/images/facebook.png")} />
              <Text style={styles.socialMediaButtonText}>
                Continue with Facebook
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* SUBTEXT  */}
        <View style={styles.subTextGroup}>
          <Text style={styles.subText}>Don't have an account? </Text>
          <Text style={styles.subTextJoin}>Join now</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
