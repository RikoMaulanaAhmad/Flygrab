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
  StatusBar as RNStatusBar, // Import StatusBar dari React Native untuk mendapatkan tinggi status bar
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient

const { width, height } = Dimensions.get("window"); // Ambil juga tinggi layar

interface LoginScreenProps {
  onAuthSuccess: () => void; // Prop baru untuk navigasi setelah berhasil
}

export default function LoginScreen({ onAuthSuccess }: LoginScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login Pressed!", { email, password });
    // Implementasikan logika login Anda di sini
    // Setelah login berhasil (simulasi), panggil onAuthSuccess
    onAuthSuccess();
  };

  return (
    <SafeAreaView style={loginStyles.safeArea}>
      <StatusBar style="dark" />{" "}
      {/* Atur warna status bar agar kontras dengan latar belakang */}
      {/* Bagian Gradien Header */}
      <LinearGradient
        colors={["#FFDAB9", "#FFFFFF"]} // Warna gradien: oranye muda ke putih
        style={loginStyles.gradientHeader}
        start={{ x: 0.0, y: 0.0 }} // Mulai gradien dari kiri atas
        end={{ x: 0.5, y: 0.0 }} // Berakhir di tengah horizontal (efek blur di kiri)
      >
        {/* Konten di dalam gradien */}
        <View style={loginStyles.headerContentWrapper}>
          {" "}
          {/* Wrapper untuk mengatur posisi ikon dan teks */}
          <Image
            source={require("../assets/createaccount.png")} // Menggunakan ikon yang sama
            style={loginStyles.headerIcon}
          />
          <View style={loginStyles.headerTextContainer}>
            {" "}
            {/* Container untuk teks yang dipusatkan */}
            <Text style={loginStyles.headerTitle}>Welcome Back</Text>
            <Text style={loginStyles.headerSubtitle}>
              Hy want order fast please login
            </Text>
          </View>
        </View>
      </LinearGradient>
      {/* ScrollView untuk konten formulir */}
      <ScrollView contentContainerStyle={loginStyles.formScrollViewContent}>
        <View style={loginStyles.formContainer}>
          {/* Input Email */}
          <Text style={loginStyles.inputLabel}>Email</Text>
          <View style={loginStyles.inputWrapper}>
            <Image
              source={require("../assets/mail_icon.png")} // Pastikan path ini benar
              style={loginStyles.inputIcon}
            />
            <TextInput
              style={loginStyles.textInput}
              placeholder="youremail@gmail.com"
              placeholderTextColor="#888"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* Input Kata Sandi */}
          <Text style={loginStyles.inputLabel}>Password</Text>
          <View style={loginStyles.inputWrapper}>
            <Image
              source={require("../assets/lock_icon.png")} // Pastikan path ini benar
              style={loginStyles.inputIcon}
            />
            <TextInput
              style={loginStyles.textInput}
              placeholder="••••••••••••"
              placeholderTextColor="#888"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <Text style={loginStyles.passwordStrength}>Strong</Text>
          </View>

          {/* Tombol Login */}
          <TouchableOpacity
            style={loginStyles.loginButton}
            onPress={handleLogin}
          >
            <Text style={loginStyles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          {/* Pemisah */}
          <View style={loginStyles.separatorContainer}>
            <View style={loginStyles.separatorLine} />
            <Text style={loginStyles.separatorText}>or sign up with</Text>
            <View style={loginStyles.separatorLine} />
          </View>

          {/* Tombol Sosial */}
          <View style={loginStyles.socialButtonsContainer}>
            <TouchableOpacity style={loginStyles.socialButton}>
              <Image
                source={require("../assets/google_logo.png")} // Pastikan path ini benar
                style={loginStyles.socialIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={loginStyles.socialButton}>
              <Image
                source={require("../assets/apple_logo.png")} // Pastikan path ini benar
                style={loginStyles.socialIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={loginStyles.socialButton}>
              <Image
                source={require("../assets/facebook_logo.png")} // Pastikan path ini benar
                style={loginStyles.socialIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const loginStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF", // Latar belakang utama putih
  },
  gradientHeader: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: height * 0.25, // Tinggi area gradien, sesuaikan jika perlu
    paddingTop: Platform.OS === "android" ? RNStatusBar.currentHeight + 20 : 60, // Padding dari atas
    paddingHorizontal: 25, // Padding dari kiri dan kanan
    flexDirection: "column", // Susun ikon dan teks secara vertikal
    justifyContent: "flex-start", // Mulai konten dari atas
    alignItems: "center", // Pusatkan konten secara horizontal di dalam gradien
  },
  headerContentWrapper: {
    // Wrapper untuk mengatur posisi ikon dan teks
    width: "100%",
    flexDirection: "column",
    alignItems: "center", // Pusatkan semua konten di dalam wrapper ini
  },
  headerIcon: {
    width: 45,
    height: 45,
    resizeMode: "contain",
    marginBottom: 5, // Margin bawah ikon
    tintColor: "#FF5507", // Warna ikon oranye
  },
  headerTextContainer: {
    // Container untuk teks yang dipusatkan
    width: "100%", // Ambil seluruh lebar untuk centering
    alignItems: "center", // Pusatkan konten di dalamnya
    marginTop: 10, // Jarak dari ikon
  },
  headerTitle: {
    fontSize: 26,
    fontFamily: "Poppins-ExtraBold",
    color: "#333333", // Warna judul hitam
    marginBottom: 2,
    textAlign: "center", // Pastikan teks itu sendiri terpusat
  },
  headerSubtitle: {
    fontSize: 15,
    fontFamily: "Poppins-Regular",
    color: "#6A6A6A", // Warna subtitle abu-abu
    opacity: 1,
    textAlign: "center", // Pastikan teks itu sendiri terpusat
  },
  formScrollViewContent: {
    flexGrow: 1,
    backgroundColor: "transparent", // ScrollView transparan, formContainer yang akan memiliki background putih
    paddingTop: height * 0.25 - 20, // Menyesuaikan agar formContainer tumpang tindih dengan gradien, mengurangi overlap
  },
  formContainer: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 25,
    paddingTop: 45, // Meningkatkan padding atas agar konten tidak terpotong oleh radius
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
  loginButton: {
    // Mengganti signUpButton menjadi loginButton
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
  loginButtonText: {
    // Mengganti signUpButtonText menjadi loginButtonText
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
