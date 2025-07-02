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
    import { LinearGradient } from 'expo-linear-gradient';

    const { width, height } = Dimensions.get("window");

    interface RestaurantDetailScreenProps {
      onGoToCheckout: () => void; // Prop baru untuk navigasi ke CheckoutScreen
      onBackPress: () => void; // Prop untuk kembali ke HomeScreen
    }

    export default function RestaurantDetailScreen({ onGoToCheckout, onBackPress }: RestaurantDetailScreenProps) {
      const [itemCount, setItemCount] = useState(1); // State untuk jumlah item
      const fallbackImageUrl = "https://placehold.co/50x50/cccccc/000000?text=IMG";

      const incrementItem = () => setItemCount(prevCount => prevCount + 1);
      const decrementItem = () => setItemCount(prevCount => (prevCount > 1 ? prevCount - 1 : 1));

      return (
        <SafeAreaView style={styles.safeArea}>
          <StatusBar style="dark" />

          {/* Header with Background Image */}
          <View style={styles.headerBackground}>
            <Image
              source={{ uri: "https://placehold.co/600x200/FF5507/FFFFFF?text=Restaurant+Header" }} // Placeholder for restaurant background image
              style={styles.headerImage}
              onError={(e) => console.log('Image failed to load', e.nativeEvent.error)}
              defaultSource={{ uri: fallbackImageUrl }}
            />
            <LinearGradient
              colors={['rgba(0,0,0,0.6)', 'transparent']}
              style={styles.headerGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
            />
            <View style={styles.headerOverlay}>
              <TouchableOpacity style={styles.backButton} onPress={onBackPress}> {/* DITAMBAHKAN: onPress untuk kembali */}
                <Image
                  source={{ uri: "https://img.icons8.com/ios-glyphs/30/FFFFFF/left-arrow.png" }}
                  style={styles.backIcon}
                  onError={(e) => console.log('Image failed to load', e.nativeEvent.error)}
                  defaultSource={{ uri: fallbackImageUrl }}
                />
              </TouchableOpacity>
              <View style={styles.headerActions}>
                <TouchableOpacity style={styles.headerActionIconContainer}>
                  <Image
                    source={{ uri: "https://img.icons8.com/ios-glyphs/30/FFFFFF/search--v1.png" }}
                    style={styles.headerActionIcon}
                    onError={(e) => console.log('Image failed to load', e.nativeEvent.error)}
                    defaultSource={{ uri: fallbackImageUrl }}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.headerActionIconContainer}>
                  <Image
                    source={{ uri: "https://img.icons8.com/ios-glyphs/30/FFFFFF/like--v1.png" }}
                    style={styles.headerActionIcon}
                    onError={(e) => console.log('Image failed to load', e.nativeEvent.error)}
                    defaultSource={{ uri: fallbackImageUrl }}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.headerActionIconContainer}>
                  <Image
                    source={{ uri: "https://img.icons8.com/ios-glyphs/30/FFFFFF/share.png" }}
                    style={styles.headerActionIcon}
                    onError={(e) => console.log('Image failed to load', e.nativeEvent.error)}
                    defaultSource={{ uri: fallbackImageUrl }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {/* Restaurant Info Card */}
            <View style={styles.restaurantInfoCard}>
              <View style={styles.restaurantHeader}>
                <Image
                  source={{ uri: "https://placehold.co/60x60/FF5507/FFFFFF?text=Logo" }} // Placeholder for restaurant logo
                  style={styles.restaurantLogo}
                  onError={(e) => console.log('Image failed to load', e.nativeEvent.error)}
                  defaultSource={{ uri: fallbackImageUrl }}
                />
                <View style={styles.restaurantNameRating}>
                  <Text style={styles.restaurantName}>Chicken Crush, Marelan</Text>
                  <View style={styles.ratingContainer}>
                    <Text style={styles.ratingText}>4.8</Text>
                    <Image
                      source={{ uri: "https://img.icons8.com/ios-glyphs/15/FFD700/star--v1.png" }}
                      style={styles.starIcon}
                      onError={(e) => console.log('Image failed to load', e.nativeEvent.error)}
                      defaultSource={{ uri: fallbackImageUrl }}
                    />
                  </View>
                </View>
              </View>
              <Text style={styles.restaurantCategory}>Cepat saji</Text>
              <View style={styles.plusTagContainer}>
                <Text style={styles.plusTagText}>PLUS ></Text>
                <Image
                  source={{ uri: "https://img.icons8.com/ios-glyphs/20/8A2BE2/discount.png" }} // Placeholder for discount icon
                  style={styles.discountIcon}
                  onError={(e) => console.log('Image failed to load', e.nativeEvent.error)}
                  defaultSource={{ uri: fallbackImageUrl }}
                />
              </View>

              {/* Delivery Info */}
              <View style={styles.deliveryInfoContainer}>
                <Image
                  source={{ uri: "https://img.icons8.com/ios-glyphs/25/6A6A6A/delivery-scooter.png" }}
                  style={styles.deliveryIcon}
                  onError={(e) => console.log('Image failed to load', e.nativeEvent.error)}
                  defaultSource={{ uri: fallbackImageUrl }}
                />
                <View style={styles.deliveryTextContainer}>
                  <Text style={styles.deliveryLabel}>Delivery</Text>
                  <Text style={styles.deliveryTime}>tiba 30-40 min (3.66 km)</Text>
                </View>
                <TouchableOpacity>
                  <Image
                    source={{ uri: "https://img.icons8.com/ios-glyphs/25/6A6A6A/right-arrow.png" }}
                    style={styles.deliveryArrow}
                    onError={(e) => console.log('Image failed to load', e.nativeEvent.error)}
                    defaultSource={{ uri: fallbackImageUrl }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Discount Cards */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.discountCardsContainer}>
              <View style={styles.discountCard}>
                <Image
                  source={{ uri: "https://img.icons8.com/ios-glyphs/25/FF5507/discount--v1.png" }}
                  style={styles.discountCardIcon}
                  onError={(e) => console.log('Image failed to load', e.nativeEvent.error)}
                  defaultSource={{ uri: fallbackImageUrl }}
                />
                <Text style={styles.discountCardTitle}>Diskon makanan 40%, maks. 20rb.</Text>
                <Text style={styles.discountCardSubtitle}>Min. pembelian 290rb</Text>
              </View>
              <View style={styles.discountCard}>
                <Image
                  source={{ uri: "https://img.icons8.com/ios-glyphs/25/FF5507/discount--v1.png" }}
                  style={styles.discountCardIcon}
                  onError={(e) => console.log('Image failed to load', e.nativeEvent.error)}
                  defaultSource={{ uri: fallbackImageUrl }}
                />
                <Text style={styles.discountCardTitle}>Diskon 35%</Text>
                <Text style={styles.discountCardSubtitle}>Min. pembelian 100rb</Text>
              </View>
            </ScrollView>

            {/* Section: Orang-orang pada doyan ini */}
            <Text style={styles.sectionTitle}>Orang-orang pada doyan ini</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.popularItemsContainer}>
              <View style={styles.popularItemCard}>
                <Image
                  source={{ uri: "https://placehold.co/150x100/FF5507/FFFFFF?text=Whole+Chicken" }}
                  style={styles.popularItemImage}
                  onError={(e) => console.log('Image failed to load', e.nativeEvent.error)}
                  defaultSource={{ uri: fallbackImageUrl }}
                />
                <View style={styles.popularItemTag}>
                  <Image
                    source={{ uri: "https://img.icons8.com/ios-glyphs/15/FF0000/like--v1.png" }}
                    style={styles.popularItemTagIcon}
                    onError={(e) => console.log('Image failed to load', e.nativeEvent.error)}
                    defaultSource={{ uri: fallbackImageUrl }}
                  />
                  <Text style={styles.popularItemTagText}>30 orang suka ini</Text>
                </View>
                <View style={styles.popularItemRating}>
                  <Text style={styles.popularItemRatingText}>4.8</Text>
                  <Image
                    source={{ uri: "https://img.icons8.com/ios-glyphs/15/FFD700/star--v1.png" }}
                    style={styles.starIcon}
                    onError={(e) => console.log('Image failed to load', e.nativeEvent.error)}
                    defaultSource={{ uri: fallbackImageUrl }}
                  />
                  <Text style={styles.popularItemRatingCount}>(100+)</Text>
                </View>
                <Text style={styles.popularItemName}>Whole Chicken Laulk Special</Text>
                <Text style={styles.popularItemPrice}>147.000</Text>
              </View>

              <View style={styles.popularItemCard}>
                <Image
                  source={{ uri: "https://placehold.co/150x100/FF5507/FFFFFF?text=Whole+Chicken" }}
                  style={styles.popularItemImage}
                  onError={(e) => console.log('Image failed to load', e.nativeEvent.error)}
                  defaultSource={{ uri: fallbackImageUrl }}
                />
                <View style={styles.popularItemTag}>
                  <Image
                    source={{ uri: "https://img.icons8.com/ios-glyphs/15/FF0000/like--v1.png" }}
                    style={styles.popularItemTagIcon}
                    onError={(e) => console.log('Image failed to load', e.nativeEvent.error)}
                    defaultSource={{ uri: fallbackImageUrl }}
                  />
                  <Text style={styles.popularItemTagText}>25 orang suka ini</Text>
                </View>
                <View style={styles.popularItemRating}>
                  <Text style={styles.popularItemRatingText}>4.8</Text>
                  <Image
                    source={{ uri: "https://img.icons8.com/ios-glyphs/15/FFD700/star--v1.png" }}
                    style={styles.starIcon}
                    onError={(e) => console.log('Image failed to load', e.nativeEvent.error)}
                    defaultSource={{ uri: fallbackImageUrl }}
                  />
                  <Text style={styles.popularItemRatingCount}>(70+)</Text>
                </View>
                <Text style={styles.popularItemName}>Whole Chicken Nikmat</Text>
                <Text style={styles.popularItemPrice}>133.000</Text>
              </View>
            </ScrollView>

            {/* Menu Resto ini yang juga mantep */}
            <Text style={styles.sectionTitle}>Menu resto ini yang juga mantep</Text>
            <View style={styles.menuItemContainer}>
              <View style={styles.menuItemImageWrapper}>
                <Image
                  source={{ uri: "https://placehold.co/80x80/FF5507/FFFFFF?text=Menu+Item" }}
                  style={styles.menuItemImage}
                  onError={(e) => console.log('Image failed to load', e.nativeEvent.error)}
                  defaultSource={{ uri: fallbackImageUrl }}
                />
                <View style={styles.promoTag}>
                  <Text style={styles.promoTagText}>Promo</Text>
                </View>
              </View>
              <View style={styles.menuItemDetails}>
                <Text style={styles.menuItemName}>Whole Chicken Laulk Nikmat</Text>
                <View style={styles.menuItemRating}>
                  <Text style={styles.menuItemRatingText}>5.0</Text>
                  <Image
                    source={{ uri: "https://img.icons8.com/ios-glyphs/15/FFD700/star--v1.png" }}
                    style={styles.starIcon}
                    onError={(e) => console.log('Image failed to load', e.nativeEvent.error)}
                    defaultSource={{ uri: fallbackImageUrl }}
                  />
                  <Text style={styles.menuItemRatingCount}>(30+)</Text>
                </View>
                <Text style={styles.menuItemPrice}>106.400 <Text style={styles.menuItemOriginalPrice}>133.000</Text></Text>
                <Text style={styles.promoInfo}>Promo maks. 1 item per hari</Text>
              </View>
              <TouchableOpacity style={styles.tambahButton}>
                <Text style={styles.tambahButtonText}>Tambah</Text>
              </TouchableOpacity>
            </View>

            {/* Resto's top picks */}
            <Text style={styles.sectionTitle}>Resto's top picks</Text>
            <View style={styles.menuItemContainer}>
              <View style={styles.menuItemImageWrapper}>
                <Image
                  source={{ uri: "https://placehold.co/80x80/FF5507/FFFFFF?text=Combo+Duo" }}
                  style={styles.menuItemImage}
                  onError={(e) => console.log('Image failed to load', e.nativeEvent.error)}
                  defaultSource={{ uri: fallbackImageUrl }}
                />
                <View style={styles.promoTag}>
                  <Text style={styles.promoTagText}>Paket Combo</Text>
                </View>
              </View>
              <View style={styles.menuItemDetails}>
                <Text style={styles.menuItemName}>Combo Duo Chicken</Text>
                <View style={styles.menuItemRating}>
                  <Text style={styles.menuItemRatingText}>4.7</Text>
                  <Image
                    source={{ uri: "https://img.icons8.com/ios-glyphs/15/FFD700/star--v1.png" }}
                    style={styles.starIcon}
                    onError={(e) => console.log('Image failed to load', e.nativeEvent.error)}
                    defaultSource={{ uri: fallbackImageUrl }}
                  />
                  <Text style={styles.menuItemRatingCount}>(20+)</Text>
                </View>
                <Text style={styles.menuItemDescription}>Nasi + 1 Ayam Dada / Sayap / Paha Bawah</Text>
              </View>
              <TouchableOpacity style={styles.menuButton}>
                <Image
                  source={{ uri: "https://img.icons8.com/ios-glyphs/20/FFFFFF/menu.png" }}
                  style={styles.menuButtonIcon}
                  onError={(e) => console.log('Image failed to load', e.nativeEvent.error)}
                  defaultSource={{ uri: fallbackImageUrl }}
                />
                <Text style={styles.menuButtonText}>Menu</Text>
              </TouchableOpacity>
            </View>

            {/* Bottom Floating Cart/Order Summary */}
            <TouchableOpacity style={styles.bottomCartSummary} onPress={onGoToCheckout}> {/* DITAMBAHKAN: onPress untuk navigasi ke checkout */}
              <View style={styles.cartItemCount}>
                <Text style={styles.cartItemCountText}>3 item</Text>
              </View>
              <Text style={styles.cartDeliveryInfo}>Diantar dari Chicken Crush, Ma...</Text>
              <Text style={styles.cartTotalPrice}>441.000</Text>
              <TouchableOpacity style={styles.cartButton}>
                <Image
                  source={{ uri: "https://img.icons8.com/ios-glyphs/25/FFFFFF/shopping-bag.png" }}
                  style={styles.cartButtonIcon}
                  onError={(e) => console.log('Image failed to load', e.nativeEvent.error)}
                  defaultSource={{ uri: fallbackImageUrl }}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      );
    }

    const styles = StyleSheet.create({
      safeArea: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingTop: Platform.OS === "android" ? RNStatusBar.currentHeight : 0,
      },
      headerBackground: {
        width: '100%',
        height: height * 0.25, // Adjust height as needed
        position: 'relative',
      },
      headerImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
      },
      headerGradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
      },
      headerOverlay: {
        position: 'absolute',
        top: Platform.OS === "android" ? RNStatusBar.currentHeight + 10 : 40,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
      },
      backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      backIcon: {
        width: 20,
        height: 20,
        tintColor: '#FFFFFF',
      },
      headerActions: {
        flexDirection: 'row',
      },
      headerActionIconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
      },
      headerActionIcon: {
        width: 20,
        height: 20,
        tintColor: '#FFFFFF',
      },
      scrollViewContent: {
        flexGrow: 1,
        paddingBottom: 100, // Room for floating cart
      },
      restaurantInfoCard: {
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        marginHorizontal: 15,
        marginTop: -50, // Overlap with header background
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
      },
      restaurantHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
      },
      restaurantLogo: {
        width: 60,
        height: 60,
        borderRadius: 10,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#E0E0E0',
      },
      restaurantNameRating: {
        flex: 1,
      },
      restaurantName: {
        fontSize: 20,
        fontFamily: "Poppins-Bold",
        color: "#333",
      },
      ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
      },
      ratingText: {
        fontSize: 14,
        fontFamily: "Poppins-Medium",
        color: "#333",
        marginRight: 5,
      },
      starIcon: {
        width: 14,
        height: 14,
        resizeMode: "contain",
        tintColor: "#FFD700",
      },
      restaurantCategory: {
        fontSize: 14,
        fontFamily: "Poppins-Regular",
        color: "#6A6A6A",
        marginBottom: 10,
      },
      plusTagContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#E6F7F0", // Light green background
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignSelf: 'flex-start', // Align to start
        marginBottom: 15,
      },
      plusTagText: {
        fontSize: 12,
        fontFamily: "Poppins-Medium",
        color: "#00C853",
        marginRight: 5,
      },
      discountIcon: {
        width: 15,
        height: 15,
        resizeMode: "contain",
        tintColor: "#00C853",
      },
      deliveryInfoContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "#F0F0F0",
        paddingTop: 15,
        marginTop: 15,
      },
      deliveryIcon: {
        width: 20,
        height: 20,
        resizeMode: "contain",
        tintColor: "#6A6A6A",
        marginRight: 10,
      },
      deliveryTextContainer: {
        flex: 1,
      },
      deliveryLabel: {
        fontSize: 14,
        fontFamily: "Poppins-Medium",
        color: "#333",
      },
      deliveryTime: {
        fontSize: 12,
        fontFamily: "Poppins-Regular",
        color: "#6A6A6A",
      },
      deliveryArrow: {
        width: 15,
        height: 15,
        resizeMode: "contain",
        tintColor: "#6A6A6A",
      },
      discountCardsContainer: {
        paddingHorizontal: 15,
        marginTop: 20,
        paddingBottom: 10,
      },
      discountCard: {
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        padding: 15,
        marginRight: 10,
        width: width * 0.4, // Adjust width for two cards per row
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
        borderWidth: 1,
        borderColor: "#E0E0E0",
      },
      discountCardIcon: {
        width: 20,
        height: 20,
        resizeMode: "contain",
        tintColor: "#FF5507",
        marginBottom: 5,
      },
      discountCardTitle: {
        fontSize: 13,
        fontFamily: "Poppins-Medium",
        color: "#333",
        marginBottom: 3,
      },
      discountCardSubtitle: {
        fontSize: 11,
        fontFamily: "Poppins-Regular",
        color: "#6A6A6A",
      },
      sectionTitle: {
        fontSize: 18,
        fontFamily: "Poppins-Bold",
        color: "#333",
        marginTop: 20,
        marginBottom: 15,
        paddingHorizontal: 15,
      },
      popularItemsContainer: {
        paddingHorizontal: 15,
        paddingBottom: 10,
      },
      popularItemCard: {
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        marginRight: 15,
        width: width * 0.45, // Adjust width
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
        paddingBottom: 10,
      },
      popularItemImage: {
        width: '100%',
        height: 120,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        resizeMode: 'cover',
        marginBottom: 10,
      },
      popularItemTag: {
        position: 'absolute',
        top: 10,
        left: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderRadius: 5,
        paddingHorizontal: 8,
        paddingVertical: 4,
      },
      popularItemTagIcon: {
        width: 12,
        height: 12,
        resizeMode: 'contain',
        marginRight: 5,
      },
      popularItemTagText: {
        fontSize: 10,
        fontFamily: "Poppins-Regular",
        color: "#333",
      },
      popularItemRating: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 5,
      },
      popularItemRatingText: {
        fontSize: 12,
        fontFamily: "Poppins-Medium",
        color: "#333",
        marginRight: 3,
      },
      popularItemRatingCount: {
        fontSize: 12,
        fontFamily: "Poppins-Regular",
        color: "#6A6A6A",
        marginLeft: 3,
      },
      popularItemName: {
        fontSize: 14,
        fontFamily: "Poppins-Medium",
        color: "#333",
        paddingHorizontal: 10,
        marginBottom: 5,
      },
      popularItemPrice: {
        fontSize: 16,
        fontFamily: "Poppins-Bold",
        color: "#333",
        paddingHorizontal: 10,
      },
      menuItemContainer: {
        flexDirection: 'row',
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        marginHorizontal: 15,
        marginBottom: 15,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
        alignItems: 'center',
      },
      menuItemImageWrapper: {
        position: 'relative',
        marginRight: 15,
      },
      menuItemImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
        resizeMode: 'cover',
      },
      promoTag: {
        position: 'absolute',
        top: 5,
        left: 5,
        backgroundColor: '#FF5507',
        borderRadius: 5,
        paddingHorizontal: 5,
        paddingVertical: 2,
      },
      promoTagText: {
        fontSize: 10,
        fontFamily: "Poppins-Medium",
        color: "#FFFFFF",
      },
      menuItemDetails: {
        flex: 1,
      },
      menuItemName: {
        fontSize: 16,
        fontFamily: "Poppins-Medium",
        color: "#333",
        marginBottom: 5,
      },
      menuItemRating: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
      },
      menuItemRatingText: {
        fontSize: 12,
        fontFamily: "Poppins-Medium",
        color: "#333",
        marginRight: 3,
      },
      menuItemRatingCount: {
        fontSize: 12,
        fontFamily: "Poppins-Regular",
        color: "#6A6A6A",
        marginLeft: 3,
      },
      menuItemPrice: {
        fontSize: 16,
        fontFamily: "Poppins-Bold",
        color: "#333",
      },
      menuItemOriginalPrice: {
        fontSize: 14,
        fontFamily: "Poppins-Regular",
        color: "#6A6A6A",
        textDecorationLine: 'line-through',
      },
      promoInfo: {
        fontSize: 11,
        fontFamily: "Poppins-Regular",
        color: "#FF5507",
        marginTop: 5,
      },
      tambahButton: {
        backgroundColor: "#00C853",
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 8,
      },
      tambahButtonText: {
        fontSize: 14,
        fontFamily: "Poppins-Bold",
        color: "#FFFFFF",
      },
      menuButton: {
        backgroundColor: "#FF5507",
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
      },
      menuButtonIcon: {
        width: 18,
        height: 18,
        tintColor: '#FFFFFF',
        marginRight: 5,
      },
      menuButtonText: {
        fontSize: 14,
        fontFamily: "Poppins-Bold",
        color: "#FFFFFF",
      },
      bottomCartSummary: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#333333', // Dark background for cart summary
        borderRadius: 30,
        marginHorizontal: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: 20, // Adjust as needed
        left: 0,
        right: 0,
        alignSelf: 'center',
        width: width - 30,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 10,
      },
      cartItemCount: {
        backgroundColor: '#FF5507',
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
      },
      cartItemCountText: {
        fontSize: 12,
        fontFamily: "Poppins-Bold",
        color: "#FFFFFF",
      },
      cartDeliveryInfo: {
        flex: 1,
        fontSize: 12,
        fontFamily: "Poppins-Regular",
        color: "#FFFFFF",
      },
      cartTotalPrice: {
        fontSize: 16,
        fontFamily: "Poppins-Bold",
        color: "#FFFFFF",
        marginRight: 10,
      },
      cartButton: {
        backgroundColor: '#FF5507',
        borderRadius: 20,
        padding: 10,
      },
      cartButtonIcon: {
        width: 20,
        height: 20,
        tintColor: '#FFFFFF',
      },
    });
    