import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import SignUpScreen from "./screens/SignUpScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import RestaurantDetailScreen from "./screens/RestaurantDetailScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import OrderTrackingScreen from "./screens/OrderTrackingScreen";
import ActivityScreen from "./screens/ActivityScreen"; // Import ActivityScreen

SplashScreen.preventAutoHideAsync();

const { width, height } = Dimensions.get("window");
const imageSectionHeightRatio = 0.55;
const heroImageSize = width * 1.0;

interface OnboardingScreenProps {
  onGetStartedPress: () => void;
  onLayoutRootView: () => Promise<void>;
  onSignInPress: () => void;
}

function OnboardingScreen({
  onGetStartedPress,
  onLayoutRootView,
  onSignInPress,
}: OnboardingScreenProps) {
  console.log("OnboardingScreen rendered");
  return (
    <SafeAreaView style={styles.safeArea} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <View style={styles.scrollViewContent}>
        <View style={styles.imageSection}>
          <Image
            source={require("./assets/grouphero.png")}
            style={styles.mainHeroImage}
          />
        </View>

        <View style={styles.contentSection}>
          <Text style={styles.title}>
            Express Delivery{" "}
            <Text style={styles.highlight}>Directly to Your Hands</Text>
          </Text>
          <Text style={styles.description}>
            Packages come from the sky! Flyrgrab is ready to deliver anything,
            super fast and safe, using sophisticated drones
          </Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.getStartedButton}
              onPress={onGetStartedPress}
            >
              <View style={styles.getStartedButtonArrowCircle}>
                <Image
                  source={require("./assets/arrowgetstarted.png")}
                  style={styles.getStartedArrowImage}
                />
              </View>
              <Text style={styles.getStartedButtonText}>Get Started</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => console.log("Apple Button Pressed")}
            >
              <Image
                source={require("./assets/apple_logo.png")}
                style={styles.iconImage}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => console.log("Google Button Pressed")}
            >
              <Image
                source={require("./assets/google_logo.png")}
                style={styles.iconImage}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.signInContainer}>
            <Text style={styles.signInText}>Already have an account? </Text>
            <TouchableOpacity onPress={onSignInPress}>
              <Text style={styles.signInLink}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [currentPage, setCurrentPage] = useState("onboarding");

  useEffect(() => {
    console.log("App useEffect: Starting font loading...");
    async function prepare() {
      try {
        await Font.loadAsync({
          "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
          "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
          "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
          "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
          "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
        });
        console.log("App useEffect: Fonts loaded successfully.");
      } catch (e) {
        console.error("App useEffect: Error loading fonts:", e);
      } finally {
        setAppIsReady(true);
        console.log("App useEffect: appIsReady set to true.");
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      console.log("App onLayoutRootView: Hiding splash screen.");
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    console.log("App: Not ready, returning null (showing splash screen).");
    return null;
  }

  const goToSignUp = () => {
    setCurrentPage("signup");
    console.log("App: Navigating to SignUp screen.");
  };

  const goToLogin = () => {
    setCurrentPage("login");
    console.log("App: Navigating to Login screen.");
  };

  const goToHome = () => {
    setCurrentPage("home");
    console.log("App: Navigating to Home screen.");
  };

  const goToRestaurantDetail = () => {
    setCurrentPage("restaurantDetail");
    console.log("App: Navigating to RestaurantDetail screen.");
  };

  const goToCheckout = () => {
    setCurrentPage("checkout");
    console.log("App: Navigating to Checkout screen.");
  };

  const goToOrderTracking = () => {
    setCurrentPage("orderTracking");
    console.log("App: Navigating to Order Tracking screen.");
  };

  const goToActivity = () => {
    // Fungsi baru untuk navigasi ke ActivityScreen
    setCurrentPage("activity");
    console.log("App: Navigating to Activity screen.");
  };

  if (currentPage === "onboarding") {
    return (
      <OnboardingScreen
        onGetStartedPress={goToSignUp}
        onLayoutRootView={onLayoutRootView}
        onSignInPress={goToLogin}
      />
    );
  } else if (currentPage === "signup") {
    console.log("App: Rendering SignUpScreen.");
    return <SignUpScreen onAuthSuccess={goToHome} />;
  } else if (currentPage === "login") {
    console.log("App: Rendering LoginScreen.");
    return <LoginScreen onAuthSuccess={goToHome} />;
  } else if (currentPage === "home") {
    console.log("App: Rendering HomeScreen.");
    return (
      <HomeScreen
        onGoFoodPress={goToRestaurantDetail}
        onGoToActivity={goToActivity}
      />
    ); // DITAMBAHKAN: onGoToActivity
  } else if (currentPage === "restaurantDetail") {
    console.log("App: Rendering RestaurantDetailScreen.");
    return (
      <RestaurantDetailScreen
        onGoToCheckout={goToCheckout}
        onBackPress={goToHome}
      />
    );
  } else if (currentPage === "checkout") {
    console.log("App: Rendering CheckoutScreen.");
    return (
      <CheckoutScreen
        onBackPress={goToRestaurantDetail}
        onOrderConfirm={goToOrderTracking}
      />
    );
  } else if (currentPage === "orderTracking") {
    console.log("App: Rendering OrderTrackingScreen.");
    return (
      <OrderTrackingScreen
        onBackToHome={goToHome}
        onViewAllHistory={goToActivity}
      />
    );
  } else if (currentPage === "activity") {
    console.log("App: Rendering ActivityScreen.");
    return <ActivityScreen onBackToHome={goToHome} />;
  }

  return null;
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollViewContent: {
    flex: 1,
    paddingBottom: Platform.OS === "ios" ? 20 : 0,
  },
  imageSection: {
    backgroundColor: "#F7F7F7",
    height: height * imageSectionHeightRatio,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    overflow: "hidden",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  mainHeroImage: {
    width: heroImageSize,
    height: heroImageSize,
    resizeMode: "contain",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
  },
  contentSection: {
    paddingHorizontal: 25,
    marginTop: height * 0.01,
  },
  title: {
    fontSize: 30,
    fontFamily: "Poppins-ExtraBold",
    color: "#333333",
    textAlign: "left",
    marginBottom: 10,
    lineHeight: 38,
  },
  highlight: {
    color: "#FF5507",
  },
  description: {
    fontSize: 15,
    fontFamily: "Poppins-Regular",
    color: "#6A6A6A",
    textAlign: "left",
    marginBottom: 30,
    lineHeight: 22,
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 25,
  },
  getStartedButton: {
    backgroundColor: "#FF5507",
    borderRadius: 35,
    paddingVertical: 5,
    paddingLeft: 70,
    paddingRight: 25,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
    shadowColor: "#FF5507",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 15,
    elevation: 12,
    position: "relative",
    height: 70,
  },
  getStartedButtonArrowCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    borderWidth: 0,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 5,
  },
  getStartedArrowImage: {
    width: 32,
    height: 32,
    resizeMode: "contain",
    tintColor: "#FF5507",
  },
  getStartedButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "Poppins-Bold",
  },
  iconButton: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    borderWidth: 2,
    borderColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 0,
    shadowColor: "transparent",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  iconImage: {
    width: "55%",
    height: "55%",
    resizeMode: "contain",
  },
  signInContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: Platform.OS === "android" ? 20 : 0,
    paddingBottom: Platform.OS === "ios" ? 20 : 0,
  },
  signInText: {
    fontSize: 15,
    color: "#6A6A6A",
    fontFamily: "Poppins-Regular",
  },
  signInLink: {
    color: "#FF5507",
    fontSize: 15,
    fontFamily: "Poppins-Bold",
    textDecorationLine: "underline",
    textDecorationColor: "#FF5507",
  },
});
