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
  Alert, // Menggunakan Alert untuk simulasi konfirmasi
} from "react-native";
import { StatusBar } from "expo-status-bar";

const { width, height } = Dimensions.get("window");

interface CheckoutScreenProps {
  onBackPress: () => void; // Prop untuk kembali ke halaman sebelumnya
  onOrderConfirm: () => void; // Prop untuk melanjutkan ke halaman konfirmasi/pelacakan
}

export default function CheckoutScreen({
  onBackPress,
  onOrderConfirm,
}: CheckoutScreenProps) {
  const [selectedDelivery, setSelectedDelivery] = useState("Reguler"); // State untuk opsi pengiriman
  const [itemCount, setItemCount] = useState(3); // State untuk jumlah item, dari gambar
  const [notes, setNotes] = useState(""); // State untuk catatan pesanan

  // Fallback image URL for all images
  const fallbackImageUrl = "https://placehold.co/50x50/cccccc/000000?text=IMG";

  const handleOrder = () => {
    console.log("Order Confirmed!");
    // Simulasi konfirmasi pesanan
    Alert.alert(
      "Pesanan Berhasil!",
      "Pesanan Anda telah berhasil ditempatkan. Drone akan segera berangkat!",
      [
        {
          text: "OK",
          onPress: () => {
            console.log("Simulating opening Google Maps...");
            // Di sini Anda bisa menambahkan logika untuk membuka Google Maps
            // Contoh: Linking.openURL('https://www.google.com/maps/dir/?api=1&destination=YourDestination');
            // Untuk simulasi di Canvas, kita hanya akan log ini.

            // Lanjutkan ke halaman pelacakan pesanan setelah konfirmasi
            onOrderConfirm();
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBackPress} style={styles.headerButton}>
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
        <Text style={styles.headerTitle}>Chicken Crush, Marelan</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-glyphs/30/000000/thumb-up.png",
            }}
            style={styles.headerIcon}
            onError={(e) =>
              console.log("Image failed to load", e.nativeEvent.error)
            }
            defaultSource={{ uri: fallbackImageUrl }}
          />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Delivery Schedule Section */}
        <View style={styles.deliveryScheduleContainer}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-glyphs/25/00C853/calendar--v1.png",
            }}
            style={styles.deliveryScheduleIcon}
            onError={(e) =>
              console.log("Image failed to load", e.nativeEvent.error)
            }
            defaultSource={{ uri: fallbackImageUrl }}
          />
          <Text style={styles.deliveryScheduleText}>
            Mau ngejadwalin delivery? Klik "Ganti"
          </Text>
          <TouchableOpacity style={styles.changeButton}>
            <Text style={styles.changeButtonText}>Ganti</Text>
          </TouchableOpacity>
        </View>

        {/* Delivery Options */}
        <View style={styles.sectionContainer}>
          <View style={styles.deliveryOption}>
            <Image
              source={{
                uri: "https://img.icons8.com/ios-glyphs/30/6A6A6A/motorcycle.png",
              }}
              style={styles.deliveryOptionIcon}
              onError={(e) =>
                console.log("Image failed to load", e.nativeEvent.error)
              }
              defaultSource={{ uri: fallbackImageUrl }}
            />
            <View style={styles.deliveryOptionTextContainer}>
              <Text style={styles.deliveryOptionTitle}>
                Express <Text style={styles.deliveryOptionTime}>40 min</Text>
              </Text>
              <Text style={styles.deliveryOptionDescription}>
                Driver hanya antar pesananmu
              </Text>
            </View>
            <Text style={styles.deliveryOptionPrice}>19.000</Text>
            <TouchableOpacity
              style={
                selectedDelivery === "Express"
                  ? styles.radioSelected
                  : styles.radioUnselected
              }
              onPress={() => setSelectedDelivery("Express")}
            />
          </View>
          <View style={styles.deliveryOption}>
            <Image
              source={{
                uri: "https://img.icons8.com/ios-glyphs/30/6A6A6A/motorcycle.png",
              }}
              style={styles.deliveryOptionIcon}
              onError={(e) =>
                console.log("Image failed to load", e.nativeEvent.error)
              }
              defaultSource={{ uri: fallbackImageUrl }}
            />
            <View style={styles.deliveryOptionTextContainer}>
              <Text style={styles.deliveryOptionTitle}>
                Reguler <Text style={styles.deliveryOptionTime}>45-55 min</Text>
              </Text>
            </View>
            <Text style={styles.deliveryOptionPrice}>17.000</Text>
            <TouchableOpacity
              style={
                selectedDelivery === "Reguler"
                  ? styles.radioSelected
                  : styles.radioUnselected
              }
              onPress={() => setSelectedDelivery("Reguler")}
            />
          </View>
          <View style={styles.deliveryOption}>
            <Image
              source={{
                uri: "https://img.icons8.com/ios-glyphs/30/6A6A6A/motorcycle.png",
              }}
              style={styles.deliveryOptionIcon}
              onError={(e) =>
                console.log("Image failed to load", e.nativeEvent.error)
              }
              defaultSource={{ uri: fallbackImageUrl }}
            />
            <View style={styles.deliveryOptionTextContainer}>
              <Text style={styles.deliveryOptionTitle}>
                Ekonomis{" "}
                <Text style={styles.deliveryOptionTime}>55-65 min</Text>
              </Text>
            </View>
            <Text style={styles.deliveryOptionPrice}>7.000</Text>
            <TouchableOpacity
              style={
                selectedDelivery === "Ekonomis"
                  ? styles.radioSelected
                  : styles.radioUnselected
              }
              onPress={() => setSelectedDelivery("Ekonomis")}
            />
          </View>
        </View>

        {/* Delivery Address Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.addressHeader}>
            <Text style={styles.sectionTitle}>Alamat pengantaran</Text>
            <TouchableOpacity style={styles.changeButton}>
              <Text style={styles.changeButtonText}>Ganti alamat</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.addressName}>Depot Marelan</Text>
          <View style={styles.infoBox}>
            <Image
              source={{
                uri: "https://img.icons8.com/ios-glyphs/20/FF5507/info--v1.png",
              }}
              style={styles.infoIcon}
              onError={(e) =>
                console.log("Image failed to load", e.nativeEvent.error)
              }
              defaultSource={{ uri: fallbackImageUrl }}
            />
            <Text style={styles.infoText}>
              Isi detail alamat biar driver gampang cari lokasimu pas antar
              makanan.
            </Text>
          </View>
          <View style={styles.addressActions}>
            <TouchableOpacity style={styles.addressActionButton}>
              <Image
                source={{
                  uri: "https://img.icons8.com/ios-glyphs/20/6A6A6A/marker--v1.png",
                }}
                style={styles.addressActionIcon}
                onError={(e) =>
                  console.log("Image failed to load", e.nativeEvent.error)
                }
                defaultSource={{ uri: fallbackImageUrl }}
              />
              <Text style={styles.addressActionText}>Isi detail alamat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addressActionButton}>
              <Image
                source={{
                  uri: "https://img.icons8.com/ios-glyphs/20/6A6A6A/pencil--v1.png",
                }}
                style={styles.addressActionIcon}
                onError={(e) =>
                  console.log("Image failed to load", e.nativeEvent.error)
                }
                defaultSource={{ uri: fallbackImageUrl }}
              />
              <Text style={styles.addressActionText}>Ubah catatan</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.notesInput}
            placeholder="Pas disimpang pagar hitam"
            placeholderTextColor="#888"
            value={notes}
            onChangeText={setNotes}
          />
        </View>

        {/* Order Summary Section (from IMG-20250701-WA0009.jpg) */}
        <View style={styles.sectionContainer}>
          <View style={styles.orderItem}>
            <Text style={styles.orderItemPrice}>147.000</Text>
            <View style={styles.orderItemDetails}>
              <Text style={styles.orderItemName}>
                Whole Chicken Laulk Special
              </Text>
              <Image
                source={{
                  uri: "https://placehold.co/80x80/FF5507/FFFFFF?text=Chicken",
                }}
                style={styles.orderItemImage}
                onError={(e) =>
                  console.log("Image failed to load", e.nativeEvent.error)
                }
                defaultSource={{ uri: fallbackImageUrl }}
              />
            </View>
            <View style={styles.itemQuantityControl}>
              <Image
                source={{
                  uri: "https://img.icons8.com/ios-glyphs/20/6A6A6A/note.png",
                }}
                style={styles.itemQuantityIcon}
                onError={(e) =>
                  console.log("Image failed to load", e.nativeEvent.error)
                }
                defaultSource={{ uri: fallbackImageUrl }}
              />
              <Text style={styles.itemQuantityText}>Catatan</Text>
              <TouchableOpacity style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{itemCount}</Text>
              <TouchableOpacity style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.sectionTitle}>
            Menu resto ini yang juga mantep
          </Text>
          <View style={styles.menuItemContainer}>
            <View style={styles.menuItemImageWrapper}>
              <Image
                source={{
                  uri: "https://placehold.co/80x80/FF5507/FFFFFF?text=Menu+Item",
                }}
                style={styles.menuItemImage}
                onError={(e) =>
                  console.log("Image failed to load", e.nativeEvent.error)
                }
                defaultSource={{ uri: fallbackImageUrl }}
              />
              <View style={styles.promoTag}>
                <Text style={styles.promoTagText}>BANTING HARGA</Text>
              </View>
            </View>
            <View style={styles.menuItemDetails}>
              <Text style={styles.menuItemName}>
                Whole Chicken Laulk Nikmat
              </Text>
              <Text style={styles.menuItemPrice}>
                106.400{" "}
                <Text style={styles.menuItemOriginalPrice}>133.000</Text>
              </Text>
            </View>
            <TouchableOpacity style={styles.tambahButton}>
              <Text style={styles.tambahButtonText}>Tambah</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.addMoreContainer}>
            <Text style={styles.addMoreText}>Ada lagi yang mau dibeli?</Text>
            <TouchableOpacity style={styles.tambahButton}>
              <Text style={styles.tambahButtonText}>Tambah</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Discount Info */}
        <View style={styles.discountInfoContainer}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-glyphs/25/00C853/discount--v1.png",
            }}
            style={styles.discountInfoIcon}
            onError={(e) =>
              console.log("Image failed to load", e.nativeEvent.error)
            }
            defaultSource={{ uri: fallbackImageUrl }}
          />
          <Text style={styles.discountInfoText}>
            Ekstra diskon s.d. 10rb buat GoFood
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Floating Order Button */}
      <View style={styles.bottomOrderBar}>
        <View style={styles.balanceSummary}>
          <Text style={styles.balanceText}>Sisa saldo: 109</Text>
          <View style={styles.gopayCoins}>
            <Image
              source={{
                uri: "https://img.icons8.com/ios-glyphs/20/00C853/coin.png",
              }}
              style={styles.gopayCoinsIcon}
              onError={(e) =>
                console.log("Image failed to load", e.nativeEvent.error)
              }
              defaultSource={{ uri: fallbackImageUrl }}
            />
            <Text style={styles.gopayCoinsText}>109 GoPay Coins</Text>
            <TouchableOpacity>
              <Image
                source={{
                  uri: "https://img.icons8.com/ios-glyphs/20/6A6A6A/ellipsis.png",
                }}
                style={styles.gopayCoinsMoreIcon}
                onError={(e) =>
                  console.log("Image failed to load", e.nativeEvent.error)
                }
                defaultSource={{ uri: fallbackImageUrl }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.orderButton} onPress={handleOrder}>
          <Text style={styles.orderButtonText}>Pesan dan antar sekarang</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F7F7F7", // Latar belakang abu-abu muda
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
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 120, // Ruang untuk bottom order bar
  },
  deliveryScheduleContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E6F7F0", // Warna hijau muda
    borderRadius: 10,
    marginHorizontal: 15,
    marginTop: 15,
    padding: 15,
  },
  deliveryScheduleIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    tintColor: "#00C853",
    marginRight: 10,
  },
  deliveryScheduleText: {
    flex: 1,
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#00C853",
  },
  changeButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  changeButtonText: {
    fontSize: 12,
    fontFamily: "Poppins-Medium",
    color: "#333",
  },
  sectionContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginHorizontal: 15,
    marginTop: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    color: "#333",
    marginBottom: 10,
  },
  deliveryOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  deliveryOptionIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    tintColor: "#6A6A6A",
    marginRight: 10,
  },
  deliveryOptionTextContainer: {
    flex: 1,
  },
  deliveryOptionTitle: {
    fontSize: 15,
    fontFamily: "Poppins-Medium",
    color: "#333",
  },
  deliveryOptionTime: {
    fontSize: 13,
    fontFamily: "Poppins-Regular",
    color: "#6A6A6A",
  },
  deliveryOptionDescription: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "#6A6A6A",
  },
  deliveryOptionPrice: {
    fontSize: 15,
    fontFamily: "Poppins-Medium",
    color: "#333",
    marginRight: 10,
  },
  radioUnselected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#E0E0E0",
  },
  radioSelected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 6,
    borderColor: "#FF5507",
  },
  addressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  addressName: {
    fontSize: 15,
    fontFamily: "Poppins-Medium",
    color: "#333",
    marginBottom: 10,
  },
  infoBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFBE6", // Light yellow background
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  infoIcon: {
    width: 16,
    height: 16,
    resizeMode: "contain",
    tintColor: "#FF5507",
    marginRight: 8,
  },
  infoText: {
    flex: 1,
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "#FF5507",
  },
  addressActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  addressActionButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    flex: 1, // Allow buttons to take equal space
    marginHorizontal: 5, // Add some margin between buttons
    justifyContent: "center", // Center content within button
  },
  addressActionIcon: {
    width: 16,
    height: 16,
    resizeMode: "contain",
    tintColor: "#6A6A6A",
    marginRight: 5,
  },
  addressActionText: {
    fontSize: 12,
    fontFamily: "Poppins-Medium",
    color: "#6A6A6A",
  },
  notesInput: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#333",
  },
  orderItem: {
    flexDirection: "column",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
    marginBottom: 10,
  },
  orderItemDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  orderItemPrice: {
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    color: "#333",
    marginBottom: 5,
  },
  orderItemName: {
    flex: 1,
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    color: "#333",
  },
  orderItemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    resizeMode: "cover",
    marginLeft: 10,
  },
  itemQuantityControl: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 5,
  },
  itemQuantityIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
    tintColor: "#6A6A6A",
    marginRight: 5,
  },
  itemQuantityText: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "#6A6A6A",
    marginRight: 10,
  },
  quantityButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  quantityButtonText: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    color: "#333",
  },
  quantityText: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    color: "#333",
    marginHorizontal: 5,
  },
  menuItemContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  menuItemImageWrapper: {
    position: "relative",
    marginRight: 10,
  },
  menuItemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    resizeMode: "cover",
  },
  promoTag: {
    position: "absolute",
    top: 5,
    left: 5,
    backgroundColor: "#FF5507",
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  promoTagText: {
    fontSize: 9,
    fontFamily: "Poppins-Medium",
    color: "#FFFFFF",
  },
  menuItemDetails: {
    flex: 1,
  },
  menuItemName: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    color: "#333",
    marginBottom: 3,
  },
  menuItemPrice: {
    fontSize: 14,
    fontFamily: "Poppins-Bold",
    color: "#333",
  },
  menuItemOriginalPrice: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "#6A6A6A",
    textDecorationLine: "line-through",
  },
  tambahButton: {
    backgroundColor: "#00C853",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  tambahButtonText: {
    fontSize: 12,
    fontFamily: "Poppins-Bold",
    color: "#FFFFFF",
  },
  addMoreContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  addMoreText: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#6A6A6A",
  },
  discountInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E6F7F0",
    borderRadius: 10,
    marginHorizontal: 15,
    marginTop: 15,
    padding: 15,
  },
  discountInfoIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    tintColor: "#00C853",
    marginRight: 10,
  },
  discountInfoText: {
    flex: 1,
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#00C853",
  },
  bottomOrderBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
    paddingBottom: Platform.OS === "ios" ? 30 : 10, // Adjust for iOS safe area
  },
  balanceSummary: {
    marginBottom: 10,
  },
  balanceText: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "#6A6A6A",
    marginBottom: 5,
  },
  gopayCoins: {
    flexDirection: "row",
    alignItems: "center",
  },
  gopayCoinsIcon: {
    width: 16,
    height: 16,
    resizeMode: "contain",
    tintColor: "#00C853",
    marginRight: 5,
  },
  gopayCoinsText: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    color: "#333",
    flex: 1,
  },
  gopayCoinsMoreIcon: {
    width: 16,
    height: 16,
    resizeMode: "contain",
    tintColor: "#6A6A6A",
  },
  orderButton: {
    backgroundColor: "#FF5507",
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  orderButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Poppins-Bold",
  },
});
