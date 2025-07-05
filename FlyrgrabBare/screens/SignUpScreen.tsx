import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Platform,
  StatusBar as RNStatusBar,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

interface SignUpScreenProps {
  onAuthSuccess: () => void; // Prop baru untuk navigasi setelah berhasil
}

export default function SignUpScreen({ onAuthSuccess }: SignUpScreenProps) {
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    console.log("Sign Up Pressed!", { email, mobileNumber, password });
    // Implementasikan logika pendaftaran Anda di sini
    // Setelah pendaftaran berhasil (simulasi), panggil onAuthSuccess
    onAuthSuccess();
  };

  return (
    <SafeAreaView style={signUpStyles.safeArea}>
      <StatusBar style="dark" />

      <LinearGradient
        colors={["#FFDAB9", "#FFFFFF"]}
        style={signUpStyles.gradientHeader}
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 0.5, y: 0.0 }}
      >
        <View style={signUpStyles.headerContentWrapper}>
          <Image
            source={require("../assets/createaccount.png")}
            style={signUpStyles.headerIcon}
          />
          <View style={signUpStyles.headerTextContainer}>
            <Text style={signUpStyles.headerTitle}>Create Account</Text>
            <Text style={signUpStyles.headerSubtitle}>Flyrgrab</Text>
          </View>
        </View>
      </LinearGradient>

      <ScrollView contentContainerStyle={signUpStyles.formScrollViewContent}>
        <View style={signUpStyles.formContainer}>
          <Text style={signUpStyles.inputLabel}>Email</Text>
          <View style={signUpStyles.inputWrapper}>
            <Image
              source={require("../assets/mail_icon.png")}
              style={signUpStyles.inputIcon}
            />
            <TextInput
              style={signUpStyles.textInput}
              placeholder="youremail@gmail.com"
              placeholderTextColor="#888"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <Text style={signUpStyles.inputLabel}>Mobile Number</Text>
          <View style={signUpStyles.inputWrapper}>
            <Image
              source={require("../assets/phone_icon.png")}
              style={signUpStyles.inputIcon}
            />
            <TextInput
              style={signUpStyles.textInput}
              placeholder="+62 8114131"
              placeholderTextColor="#888"
              keyboardType="phone-pad"
              value={mobileNumber}
              onChangeText={setMobileNumber}
            />
          </View>

          <Text style={signUpStyles.inputLabel}>Password</Text>
          <View style={signUpStyles.inputWrapper}>
            <Image
              source={require("../assets/lock_icon.png")}
              style={signUpStyles.inputIcon}
            />
            <TextInput
              style={signUpStyles.textInput}
              placeholder="••••••••••••"
              placeholderTextColor="#888"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <Text style={signUpStyles.passwordStrength}>Strong</Text>
          </View>

          <TouchableOpacity
            style={signUpStyles.signUpButton}
            onPress={handleSignUp}
          >
            <Text style={signUpStyles.signUpButtonText}>Sign up</Text>
          </TouchableOpacity>

          <View style={signUpStyles.separatorContainer}>
            <View style={signUpStyles.separatorLine} />
            <Text style={signUpStyles.separatorText}>or sign up with</Text>
            <View style={signUpStyles.separatorLine} />
          </View>

          <View style={signUpStyles.socialButtonsContainer}>
            <TouchableOpacity style={signUpStyles.socialButton}>
              <Image
                source={require("../assets/google_logo.png")}
                style={signUpStyles.socialIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={signUpStyles.socialButton}>
              <Image
                source={require("../assets/apple_logo.png")}
                style={signUpStyles.socialIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={signUpStyles.socialButton}>
              <Image
                source={require("../assets/facebook_logo.png")}
                style={signUpStyles.socialIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const signUpStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  gradientHeader: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: height * 0.25,
    paddingTop: Platform.OS === "android" ? RNStatusBar.currentHeight + 20 : 60,
    paddingHorizontal: 25,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  headerContentWrapper: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  headerIcon: {
    width: 45,
    height: 45,
    resizeMode: "contain",
    marginBottom: 5,
    tintColor: "#FF5507",
  },
  headerTextContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 26,
    fontFamily: "Poppins-ExtraBold",
    color: "#333333",
    marginBottom: 2,
    textAlign: "center",
  },
  headerSubtitle: {
    fontSize: 15,
    fontFamily: "Poppins-Regular",
    color: "#6A6A6A",
    opacity: 1,
    textAlign: "center",
  },
  formScrollViewContent: {
    flexGrow: 1,
    backgroundColor: "transparent",
    paddingTop: height * 0.25 - 20,
  },
  formContainer: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 25,
    paddingTop: 45,
    paddingBottom: 50,
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    color: "#333333",
    marginBottom: 6,
    marginTop: 18,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 48,
    marginBottom: 10,
  },
  inputIcon: {
    width: 16,
    height: 16,
    resizeMode: "contain",
    marginRight: 10,
    tintColor: "#6A6A6A",
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#333333",
  },
  passwordStrength: {
    fontSize: 12,
    fontFamily: "Poppins-Medium",
    color: "#00C853",
    marginLeft: 10,
  },
  signUpButton: {
    backgroundColor: "#FF5507",
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 25,
    shadowColor: "#FF5507",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 15,
    elevation: 12,
  },
  signUpButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Poppins-Bold",
  },
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E0E0E0",
  },
  separatorText: {
    width: 100,
    textAlign: "center",
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "#6A6A6A",
    marginHorizontal: 10,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 0,
    marginBottom: 10,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 6,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  socialIcon: {
    width: "50%",
    height: "50%",
    resizeMode: "contain",
  },
});
