import React from "react";
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
  StatusBar as RNStatusBar,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const { width, height } = Dimensions.get("window");

interface OrderTrackingScreenProps {
  onBackToHome: () => void; // Prop untuk kembali ke Home Screen
  onViewAllHistory: () => void; // Prop baru untuk melihat semua riwayat
}

export default function OrderTrackingScreen({
  onBackToHome,
  onViewAllHistory,
}: OrderTrackingScreenProps) {
  const fallbackImageUrl = "https://placehold.co/50x50/cccccc/000000?text=IMG";

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBackToHome} style={styles.headerButton}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-glyphs/30/000000/left-arrow.png",
            }}
            style={styles.headerIcon}
            onError={(e) =>
              console.log("Image failed to load", e.nativeEvent.error)
            }
            defaultSource={{ uri: fallbackImageUrl }}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pelacakan Pesanan</Text>
        <View style={styles.headerButtonPlaceholder} />{" "}
        {/* Placeholder untuk menyeimbangkan layout */}
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Order Status Section */}
        <View style={styles.statusContainer}>
          <Text style={styles.statusTitle}>
            Pesanan Anda sedang dalam perjalanan!
          </Text>
          <Text style={styles.statusSubtitle}>
            Drone #DRN12345 sedang menuju lokasi Anda.
          </Text>
          <Image
            source={{
              uri: "https://placehold.co/300x200/00C853/FFFFFF?text=Drone+Flying",
            }} // Placeholder for drone animation/image
            style={styles.droneAnimation}
            onError={(e) =>
              console.log("Image failed to load", e.nativeEvent.error)
            }
            defaultSource={{ uri: fallbackImageUrl }}
          />
          <Text style={styles.estimatedTime}>Estimasi tiba: 15-20 menit</Text>
        </View>

        {/* Map Placeholder */}
        <View style={styles.mapPlaceholder}>
          <Text style={styles.mapText}>Simulasi Peta Pengiriman Drone</Text>
          <Image
            source={{
              uri: "https://placehold.co/600x300/E0E0E0/6A6A6A?text=Google+Maps+Placeholder",
            }} // Placeholder for a map
            style={styles.mapImage}
            onError={(e) =>
              console.log("Image failed to load", e.nativeEvent.error)
            }
            defaultSource={{ uri: fallbackImageUrl }}
          />
        </View>

        {/* Order Details Summary */}
        <View style={styles.orderDetailsContainer}>
          <Text style={styles.orderDetailsTitle}>Detail Pesanan</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Restoran:</Text>
            <Text style={styles.detailValue}>Chicken Crush, Marelan</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Item:</Text>
            <Text style={styles.detailValue}>
              Whole Chicken Laulk Special (3x)
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Total Pembayaran:</Text>
            <Text style={styles.detailValue}>Rp441.000</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Alamat Pengiriman:</Text>
            <Text style={styles.detailValue}>
              Depot Marelan (Pas disimpang pagar hitam)
            </Text>
          </View>
        </View>

        {/* Order History Section (Placeholder) */}
        <View style={styles.historyContainer}>
          <Text style={styles.historyTitle}>Riwayat Pesanan Anda</Text>
          <View style={styles.historyItem}>
            <Text style={styles.historyItemText}>
              #ORD98765 - Nasi Goreng (2x) - Selesai
            </Text>
            <Text style={styles.historyItemDate}>25 Juni 2025</Text>
          </View>
          <View style={styles.historyItem}>
            <Text style={styles.historyItemText}>
              #ORD54321 - Pizza Large (1x) - Selesai
            </Text>
            <Text style={styles.historyItemDate}>18 Juni 2025</Text>
          </View>
          <TouchableOpacity
            style={styles.viewAllHistoryButton}
            onPress={onViewAllHistory}
          >
            {" "}
            {/* DITAMBAHKAN: onPress untuk navigasi */}
            <Text style={styles.viewAllHistoryButtonText}>
              Lihat Semua Riwayat
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    paddingTop: Platform.OS === "android" ? RNStatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  headerButton: {
    padding: 5,
  },
  headerIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    tintColor: "#333",
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: "Poppins-Bold",
    color: "#333",
  },
  headerButtonPlaceholder: {
    width: 34, // Same width as headerButton + padding
    height: 34,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  statusContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    marginHorizontal: 15,
    marginTop: 15,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  statusTitle: {
    fontSize: 20,
    fontFamily: "Poppins-Bold",
    color: "#00C853", // Green for success
    marginBottom: 5,
    textAlign: "center",
  },
  statusSubtitle: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#6A6A6A",
    marginBottom: 15,
    textAlign: "center",
  },
  droneAnimation: {
    width: 200,
    height: 150,
    resizeMode: "contain",
    marginBottom: 15,
  },
  estimatedTime: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    color: "#FF5507", // Orange for emphasis
  },
  mapPlaceholder: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    marginHorizontal: 15,
    marginTop: 15,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  mapText: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    color: "#333",
    marginBottom: 10,
  },
  mapImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    resizeMode: "cover",
  },
  orderDetailsContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    marginHorizontal: 15,
    marginTop: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  orderDetailsTitle: {
    fontSize: 18,
    fontFamily: "Poppins-Bold",
    color: "#333",
    marginBottom: 15,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    color: "#6A6A6A",
  },
  detailValue: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#333",
    flexShrink: 1, // Allow text to wrap
    textAlign: "right", // Align value to the right
  },
  historyContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    marginHorizontal: 15,
    marginTop: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  historyTitle: {
    fontSize: 18,
    fontFamily: "Poppins-Bold",
    color: "#333",
    marginBottom: 15,
  },
  historyItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  historyItemText: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#333",
  },
  historyItemDate: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "#6A6A6A",
  },
  viewAllHistoryButton: {
    backgroundColor: "#FF5507",
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 20,
  },
  viewAllHistoryButtonText: {
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    color: "#FFFFFF",
  },
});
