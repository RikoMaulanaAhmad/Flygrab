import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
  StatusBar as RNStatusBar,
} from "react-native";
import { StatusBar } from "expo-status-bar";

interface ActivityScreenProps {
  onBackToHome: () => void; // Prop untuk kembali ke Home Screen
}

export default function ActivityScreen({ onBackToHome }: ActivityScreenProps) {
  const fallbackImageUrl = "https://placehold.co/50x50/cccccc/000000?text=IMG";

  // Data riwayat pesanan contoh
  const orderHistory = [
    {
      id: "ORD98765",
      name: "Whole Chicken Laulk Special",
      status: "Selesai",
      date: "25 Juni 2025",
    },
    {
      id: "ORD54321",
      name: "Combo Duo Chicken",
      status: "Selesai",
      date: "18 Juni 2025",
    },
    {
      id: "ORD11223",
      name: "Nasi Goreng Spesial",
      status: "Selesai",
      date: "10 Juni 2025",
    },
    {
      id: "ORD44556",
      name: "Es Teh Manis (2x)",
      status: "Dibatalkan",
      date: "05 Juni 2025",
    },
    {
      id: "ORD77889",
      name: "Mie Ayam Bakso",
      status: "Selesai",
      date: "01 Juni 2025",
    },
  ];

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
        <Text style={styles.headerTitle}>Aktivitas Saya</Text>
        <View style={styles.headerButtonPlaceholder} />{" "}
        {/* Placeholder untuk menyeimbangkan layout */}
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.sectionTitle}>Riwayat Pesanan</Text>
        {orderHistory.map((order, index) => (
          <View key={order.id} style={styles.historyItem}>
            <View>
              <Text style={styles.historyItemName}>{order.name}</Text>
              <Text style={styles.historyItemId}>ID Pesanan: {order.id}</Text>
            </View>
            <View style={styles.historyItemRight}>
              <Text style={styles.historyItemStatus}>{order.status}</Text>
              <Text style={styles.historyItemDate}>{order.date}</Text>
            </View>
          </View>
        ))}

        {/* Anda bisa menambahkan lebih banyak bagian aktivitas di sini */}
        <Text style={styles.sectionTitle}>Notifikasi</Text>
        <View style={styles.notificationItem}>
          <Text style={styles.notificationText}>
            Promo baru untuk pengiriman drone! Cek sekarang.
          </Text>
          <Text style={styles.notificationDate}>2 jam lalu</Text>
        </View>
        <View style={styles.notificationItem}>
          <Text style={styles.notificationText}>
            Akun Anda berhasil diperbarui.
          </Text>
          <Text style={styles.notificationDate}>Kemarin</Text>
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
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: "Poppins-Bold",
    color: "#333",
    marginBottom: 15,
    marginTop: 10,
  },
  historyItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  historyItemName: {
    fontSize: 15,
    fontFamily: "Poppins-Medium",
    color: "#333",
  },
  historyItemId: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "#6A6A6A",
    marginTop: 3,
  },
  historyItemRight: {
    alignItems: "flex-end",
  },
  historyItemStatus: {
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    color: "#00C853", // Green for completed
  },
  historyItemDate: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "#6A6A6A",
    marginTop: 3,
  },
  notificationItem: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  notificationText: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#333",
    marginBottom: 5,
  },
  notificationDate: {
    fontSize: 11,
    fontFamily: "Poppins-Regular",
    color: "#6A6A6A",
    textAlign: "right",
  },
});
