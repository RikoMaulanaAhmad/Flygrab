import React from "react";
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

interface HomeScreenProps {
  onGoFoodPress: () => void; // Prop untuk navigasi ke RestaurantDetailScreen
  onGoToActivity: () => void; // Prop baru untuk navigasi ke ActivityScreen
}

export default function HomeScreen({
  onGoFoodPress,
  onGoToActivity,
}: HomeScreenProps) {
  // Fallback image URL for all images
  const fallbackImageUrl = "https://placehold.co/50x50/cccccc/000000?text=IMG";

  return (
    <SafeAreaView style={homeStyles.safeArea}>
      <StatusBar style="dark" />

      {/* Header Section */}
      <View style={homeStyles.headerContainer}>
        <View style={homeStyles.searchBarWrapper}>
          {/* Search Icon */}
          <Image
            source={{
              uri: "https://img.icons8.com/ios-glyphs/30/888888/search--v1.png",
            }}
            style={homeStyles.searchIcon}
            onError={(e) =>
              console.log("Image failed to load", e.nativeEvent.error)
            }
            defaultSource={{ uri: fallbackImageUrl }}
          />
          <TextInput
            style={homeStyles.searchInput}
            placeholder="Cari layanan atau makanan..."
            placeholderTextColor="#888"
          />
        </View>
        <TouchableOpacity style={homeStyles.profileIconContainer}>
          {/* Profile Icon */}
          <Image
            source={{
              uri: "https://img.icons8.com/ios-glyphs/30/6A6A6A/user--v1.png",
            }}
            style={homeStyles.profileIcon}
            onError={(e) =>
              console.log("Image failed to load", e.nativeEvent.error)
            }
            defaultSource={{ uri: fallbackImageUrl }}
          />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={homeStyles.scrollViewContent}>
        {/* Drone Delivery Hero Banner */}
        <View style={homeStyles.droneHeroContainer}>
          <Image
            source={{
              uri: "https://placehold.co/600x300/FF5507/FFFFFF?text=DRONE+DELIVERY",
            }} // Placeholder for a drone delivery image
            style={homeStyles.droneHeroImage}
            onError={(e) =>
              console.log("Image failed to load", e.nativeEvent.error)
            }
            defaultSource={{ uri: fallbackImageUrl }}
          />
          <LinearGradient
            colors={["rgba(0,0,0,0.5)", "transparent"]}
            style={homeStyles.droneHeroGradient}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
          />
          <View style={homeStyles.droneHeroOverlay}>
            <Text style={homeStyles.droneHeroTitle}>
              Pengiriman Super Cepat dengan Drone!
            </Text>
            <Text style={homeStyles.droneHeroSubtitle}>
              Nikmati layanan pengiriman masa depan.
            </Text>
            <TouchableOpacity style={homeStyles.droneHeroButton}>
              <Text style={homeStyles.droneHeroButtonText}>Pesan Sekarang</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Wallet/Balance Section */}
        <View style={homeStyles.walletContainer}>
          <View style={homeStyles.balanceInfo}>
            <Text style={homeStyles.balanceAmount}>Rp2.521</Text>
            <Text style={homeStyles.coinsText}>109 koin</Text>
          </View>
          <View style={homeStyles.walletButtons}>
            <TouchableOpacity style={homeStyles.walletButton}>
              <Image
                source={{
                  uri: "https://img.icons8.com/ios-glyphs/30/FF5507/money-bag.png",
                }}
                style={homeStyles.walletButtonIcon}
                onError={(e) =>
                  console.log("Image failed to load", e.nativeEvent.error)
                }
                defaultSource={{ uri: fallbackImageUrl }}
              />
              <Text style={homeStyles.walletButtonText}>Bayar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={homeStyles.walletButton}>
              <Image
                source={{
                  uri: "https://img.icons8.com/ios-glyphs/30/FF5507/plus-math.png",
                }}
                style={homeStyles.walletButtonIcon}
                onError={(e) =>
                  console.log("Image failed to load", e.nativeEvent.error)
                }
                defaultSource={{ uri: fallbackImageUrl }}
              />
              <Text style={homeStyles.walletButtonText}>Isi Saldo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={homeStyles.walletButton}>
              <Image
                source={{
                  uri: "https://img.icons8.com/ios-glyphs/30/FF5507/ellipsis.png",
                }}
                style={homeStyles.walletButtonIcon}
                onError={(e) =>
                  console.log("Image failed to load", e.nativeEvent.error)
                }
                defaultSource={{ uri: fallbackImageUrl }}
              />
              <Text style={homeStyles.walletButtonText}>Lainnya</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Service Icons Grid */}
        <View style={homeStyles.servicesGrid}>
          <View style={homeStyles.serviceRow}>
            <TouchableOpacity style={homeStyles.serviceItem}>
              <Image
                source={{
                  uri: "https://img.icons8.com/ios-glyphs/60/000000/drone--v1.png",
                }} // Drone icon
                style={homeStyles.serviceIcon}
                onError={(e) =>
                  console.log("Image failed to load", e.nativeEvent.error)
                }
                defaultSource={{ uri: fallbackImageUrl }}
              />
              <Text style={homeStyles.serviceText}>Drone Ride</Text>
            </TouchableOpacity>
            <TouchableOpacity style={homeStyles.serviceItem}>
              <Image
                source={{
                  uri: "https://img.icons8.com/ios-glyphs/60/000000/drone-delivery.png",
                }} // Drone delivery icon
                style={homeStyles.serviceIcon}
                onError={(e) =>
                  console.log("Image failed to load", e.nativeEvent.error)
                }
                defaultSource={{ uri: fallbackImageUrl }}
              />
              <Text style={homeStyles.serviceText}>Drone Car</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={homeStyles.serviceItem}
              onPress={onGoFoodPress}
            >
              <Image
                source={{
                  uri: "https://img.icons8.com/ios-glyphs/60/000000/food-delivery-drone.png",
                }} // Drone food delivery icon
                style={homeStyles.serviceIcon}
                onError={(e) =>
                  console.log("Image failed to load", e.nativeEvent.error)
                }
                defaultSource={{ uri: fallbackImageUrl }}
              />
              <Text style={homeStyles.serviceText}>Drone Food</Text>
            </TouchableOpacity>
            <TouchableOpacity style={homeStyles.serviceItem}>
              <Image
                source={{
                  uri: "https://img.icons8.com/ios-glyphs/60/000000/delivery-drone.png",
                }} // Delivery drone icon
                style={homeStyles.serviceIcon}
                onError={(e) =>
                  console.log("Image failed to load", e.nativeEvent.error)
                }
                defaultSource={{ uri: fallbackImageUrl }}
              />
              <Text style={homeStyles.serviceText}>Drone Send</Text>
            </TouchableOpacity>
          </View>
          <View style={homeStyles.serviceRow}>
            <TouchableOpacity style={homeStyles.serviceItem}>
              <Image
                source={{
                  uri: "https://img.icons8.com/ios-glyphs/60/000000/shopping-cart--v1.png",
                }} // Keep shopping cart for mart
                style={homeStyles.serviceIcon}
                onError={(e) =>
                  console.log("Image failed to load", e.nativeEvent.error)
                }
                defaultSource={{ uri: fallbackImageUrl }}
              />
              <Text style={homeStyles.serviceText}>Drone Mart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={homeStyles.serviceItem}>
              <Image
                source={{
                  uri: "https://img.icons8.com/ios-glyphs/60/000000/bill.png",
                }} // Keep bill for tagihan
                style={homeStyles.serviceIcon}
                onError={(e) =>
                  console.log("Image failed to load", e.nativeEvent.error)
                }
                defaultSource={{ uri: fallbackImageUrl }}
              />
              <Text style={homeStyles.serviceText}>Drone Tagihan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={homeStyles.serviceItem}>
              <Image
                source={{
                  uri: "https://img.icons8.com/ios-glyphs/60/000000/apple.png",
                }} // Keep apple for healthy food
                style={homeStyles.serviceIcon}
                onError={(e) =>
                  console.log("Image failed to load", e.nativeEvent.error)
                }
                defaultSource={{ uri: fallbackImageUrl }}
              />
              <Text style={homeStyles.serviceText}>Drone Sehat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={homeStyles.serviceItem}>
              <Image
                source={{
                  uri: "https://img.icons8.com/ios-glyphs/60/000000/more.png",
                }}
                style={homeStyles.serviceIcon}
                onError={(e) =>
                  console.log("Image failed to load", e.nativeEvent.error)
                }
                defaultSource={{ uri: fallbackImageUrl }}
              />
              <Text style={homeStyles.serviceText}>Lainnya</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Middle Promotional Banner */}
        <TouchableOpacity style={homeStyles.middleBannerContainer}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-glyphs/30/00C853/discount--v1.png",
            }}
            style={homeStyles.middleBannerIcon}
            onError={(e) =>
              console.log("Image failed to load", e.nativeEvent.error)
            }
            defaultSource={{ uri: fallbackImageUrl }}
          />
          <Text style={homeStyles.middleBannerText}>
            Diskon s.d. 10rb/transaksi. Yuk, langganan!
          </Text>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-glyphs/30/00C853/arrow-right.png",
            }}
            style={homeStyles.middleBannerArrow}
            onError={(e) =>
              console.log("Image failed to load", e.nativeEvent.error)
            }
            defaultSource={{ uri: fallbackImageUrl }}
          />
        </TouchableOpacity>

        {/* Bottom Content Section (GoFood Cards Placeholder) */}
        <View style={homeStyles.bottomContentSection}>
          <Text style={homeStyles.bottomContentTitle}>
            Rekomendasi Drone Food Pilihan
          </Text>
          <TouchableOpacity onPress={onGoFoodPress}>
            <View style={homeStyles.gofoodCardPlaceholder}>
              <Text style={{ color: "#888" }}>
                Placeholder Kartu Drone Food (Klik saya)
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={homeStyles.bottomNavBar}>
        <TouchableOpacity style={homeStyles.navBarItem}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-glyphs/30/FF5507/home--v1.png",
            }}
            style={homeStyles.navBarIconActive}
            onError={(e) =>
              console.log("Image failed to load", e.nativeEvent.error)
            }
            defaultSource={{ uri: fallbackImageUrl }}
          />
          <Text style={homeStyles.navBarTextActive}>Beranda</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={homeStyles.navBarItem}
          onPress={onGoToActivity}
        >
          {" "}
          {/* DITAMBAHKAN: onPress untuk navigasi ke ActivityScreen */}
          <Image
            source={{
              uri: "https://img.icons8.com/ios-glyphs/30/6A6A6A/activity-history.png",
            }}
            style={homeStyles.navBarIcon}
            onError={(e) =>
              console.log("Image failed to load", e.nativeEvent.error)
            }
            defaultSource={{ uri: fallbackImageUrl }}
          />
          <Text style={homeStyles.navBarText}>Aktivitas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.navBarItem}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-glyphs/30/6A6A6A/star--v1.png",
            }}
            style={homeStyles.navBarIcon}
            onError={(e) =>
              console.log("Image failed to load", e.nativeEvent.error)
            }
            defaultSource={{ uri: fallbackImageUrl }}
          />
          <Text style={homeStyles.navBarText}>Promo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.navBarItem}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-glyphs/30/6A6A6A/chat--v1.png",
            }}
            style={homeStyles.navBarIcon}
            onError={(e) =>
              console.log("Image failed to load", e.nativeEvent.error)
            }
            defaultSource={{ uri: fallbackImageUrl }}
          />
          <Text style={homeStyles.navBarText}>Chat</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const homeStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F7F7F7", // Latar belakang abu-abu muda
    paddingTop: Platform.OS === "android" ? RNStatusBar.currentHeight : 0,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 3,
  },
  searchBarWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 25,
    paddingHorizontal: 15,
    flex: 1,
    height: 45,
    marginRight: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginRight: 10,
    tintColor: "#888",
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    color: "#333",
  },
  profileIconContainer: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
  },
  profileIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    tintColor: "#6A6A6A",
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 80, // Ruang untuk bottom nav bar
  },
  droneHeroContainer: {
    width: width - 30,
    height: width * 0.55, // Increased height for hero section
    borderRadius: 20, // More rounded corners
    overflow: "hidden",
    marginTop: 15,
    marginHorizontal: 15,
    position: "relative",
    backgroundColor: "#F7F7F7",
    shadowColor: "#FF5507", // Orange shadow for drone theme
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
  droneHeroImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  droneHeroGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  droneHeroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  droneHeroTitle: {
    fontSize: 24,
    fontFamily: "Poppins-ExtraBold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 10,
    textShadowColor: "rgba(0, 0, 0, 0.7)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  droneHeroSubtitle: {
    fontSize: 15,
    fontFamily: "Poppins-Regular",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 20,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  droneHeroButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  droneHeroButtonText: {
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    color: "#FF5507",
  },
  walletContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    marginHorizontal: 15,
    marginTop: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  balanceInfo: {
    flexDirection: "column",
  },
  balanceAmount: {
    fontSize: 20,
    fontFamily: "Poppins-Bold",
    color: "#333",
  },
  coinsText: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#6A6A6A",
  },
  walletButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  walletButton: {
    alignItems: "center",
    marginLeft: 20,
  },
  walletButtonIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    tintColor: "#FF5507",
    marginBottom: 5,
  },
  walletButtonText: {
    fontSize: 12,
    fontFamily: "Poppins-Medium",
    color: "#333",
  },
  servicesGrid: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    marginHorizontal: 15,
    marginTop: 15,
    paddingVertical: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  serviceRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  serviceItem: {
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
  },
  serviceIcon: {
    width: 45,
    height: 45,
    resizeMode: "contain",
    marginBottom: 5,
  },
  serviceText: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "#333",
    textAlign: "center",
  },
  middleBannerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E6F7F0",
    borderRadius: 15,
    marginHorizontal: 15,
    marginTop: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  middleBannerIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    tintColor: "#00C853",
  },
  middleBannerText: {
    flex: 1,
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    color: "#00C853",
    marginLeft: 10,
  },
  middleBannerArrow: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    tintColor: "#00C853",
  },
  bottomContentSection: {
    paddingHorizontal: 15,
    marginTop: 20,
  },
  bottomContentTitle: {
    fontSize: 18,
    fontFamily: "Poppins-Bold",
    color: "#333",
    marginBottom: 15,
  },
  gofoodCardPlaceholder: {
    width: "100%",
    height: 150,
    backgroundColor: "#F0F0F0",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    marginBottom: 15,
  },
  bottomNavBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 70,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
    paddingBottom: Platform.OS === "ios" ? 10 : 0,
  },
  navBarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  navBarIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    tintColor: "#6A6A6A",
    marginBottom: 3,
  },
  navBarIconActive: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    tintColor: "#FF5507",
    marginBottom: 3,
  },
  navBarText: {
    fontSize: 10,
    fontFamily: "Poppins-Medium",
    color: "#6A6A6A",
  },
  navBarTextActive: {
    fontSize: 10,
    fontFamily: "Poppins-Bold",
    color: "#FF5507",
  },
});
