import React from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import newsData from "../data/news.json"; // ✅ Import news JSON

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Select Exam</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <MaterialIcons
              name="search"
              size={24}
              color="rgba(255,255,255,0.6)"
              style={styles.searchIcon}
            />
            <TextInput
              placeholder="Search for exams"
              placeholderTextColor="rgba(255,255,255,0.6)"
              style={styles.searchInput}
            />
          </View>
        </View>

        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 140 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Indian Competitive Exams */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Indian Competitive Exams</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll}
          >
            {[
              {
                title: "UPSC",
                subtitle: "Civil Services",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuApcREqUYLyUcO5EAFkNFEARylcUOOq2shT9AYt_ddyNfMPywMmype7Aod3iNmaDIXKPFrERiEQGja0H623fSkyBXqu-7o-5Q8pgxJVb7Fr30XTS1yUIZRDnMapRaqKYk5d2Z5bOw-qqtisMsiu3bjA_lXXwguq28GA52LwUO1lRTGcyrJehqpEY1A29jjb_2UIynKQJl3uPfsQIGmT8uSgedmxKTgZABSufwmY3PwPqzIQL8ZNCdO55tx9VFSfMtMRSPzPiJsMyJQ",
              },
              {
                title: "SSC",
                subtitle: "Staff Selection",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuA2mVxrSz5kfOPOq4IWVO8-qd-Cd27r_lay4A2m8YFCT3rg7Hs5CZyoHw_zJ3ovveGU9b0od883KKtj-SGEM8_lAeQB2IwMPbcJuuZ0U0eoV0IsKSNuWeYc4zQzj3sgxKgX9-v1lbZAGNKJorW4Jq5VocyY4G-guRT3kMWu8p-VS8h215bYNi7BXoLFwViWzIbYb3DvlRxp_w8kpxAg4sB432bpH5ZTWjDoMITr6Y7jYxomzXrx0UaCNDpS-S-v0LsGxIP7N-hs",
              },
              {
                title: "Banking",
                subtitle: "Sector Exams",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuCE7T0orPT5XZeKBoFJu2jJiwaxdGGWTKK230lJ2VNKzE_h81nmyevJTsTojwjM1YJKgpzWrYPGoMIhHV8nhKZn6SPh1U90zxefS-5i4a40zOhVFSm3Xw6g0bvP3DN1nHIVL_m5XhDhsquwtJy1jZ4T7sA6Dm72au51lxvbWGaa7N10h0OD6p3YGBptmu3eSIGudMxUaNdoA7nxPrk6QWFxe2qaPxbGuNJPajTOxQTC_WFEGAL7VIauhEs1gsmYt49svGrFvNmC21g",
              },
            ].map((exam, index) => (
              <TouchableOpacity key={index} style={styles.card}>
                <ImageBackground
                  source={{ uri: exam.image }}
                  style={styles.cardImage}
                  imageStyle={{ borderRadius: 16 }}
                />
                <View style={styles.cardText}>
                  <Text style={styles.cardTitle}>{exam.title}</Text>
                  <Text style={styles.cardSubtitle}>{exam.subtitle}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Current Affairs */}
          <View style={{ marginTop: 10 }}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Current Affairs</Text>
              <TouchableOpacity onPress={() => navigation.navigate("CurrentAffairs")}>
                <Text style={styles.seeAll}>See all</Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.horizontalScroll}
            >
              {newsData.slice(0, 3).map((news) => (
                <TouchableOpacity
                  key={news.id}
                  style={styles.newsCard}
                  onPress={() => navigation.navigate("NewsDetail", { newsId: news.id })}
                >
                  <ImageBackground
                    source={{ uri: news.image }}
                    style={styles.newsImage}
                    imageStyle={{ borderRadius: 16 }}
                  >
                    <View style={styles.newsOverlay} />
                    <View style={styles.newsText}>
                      <Text style={styles.newsSubtitle}>{news.subtitle}</Text>
                      <Text style={styles.newsTitle} numberOfLines={2}>
                        {news.title}
                      </Text>
                      <Text style={styles.newsDescription} numberOfLines={2}>
                        {news.description}
                      </Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </ScrollView>

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem}>
            <MaterialIcons name="home" size={28} color="#38e07b" />
            <Text style={styles.navTextActive}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <MaterialIcons name="description" size={28} color="rgba(255,255,255,0.6)" />
            <Text style={styles.navTextInactive}>Exams</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("UserProfile")} >
            <MaterialIcons name="person" size={28} color="rgba(255,255,255,0.6)" />
            <Text style={styles.navTextInactive}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#111714" },
  container: { flex: 1, backgroundColor: "#111714" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    backgroundColor: "rgba(17,23,20,0.8)",
  },
  headerTitle: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "rgba(17,23,20,0.8)",
  },
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#29382F",
    borderRadius: 999,
    paddingHorizontal: 12,
    height: 48,
  },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, color: "#fff" },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  sectionTitle: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  seeAll: { color: "#38e07b", fontSize: 14, fontWeight: "600" },
  horizontalScroll: { paddingLeft: 16, paddingBottom: 12 },
  card: {
    backgroundColor: "#1C2620",
    borderRadius: 16,
    width: 130,
    marginRight: 12,
  },
  cardImage: { width: "100%", height: 130, borderRadius: 16 },
  cardText: { marginTop: 6, paddingHorizontal: 4 },
  cardTitle: { color: "#fff", fontWeight: "600" },
  cardSubtitle: { color: "rgba(255,255,255,0.7)", fontSize: 12, marginTop: 2 },

  newsCard: {
    width: 200,
    height: 160,
    marginRight: 12,
    borderRadius: 16,
    overflow: "hidden",
  },
  newsImage: { flex: 1, justifyContent: "flex-end", padding: 8 },
  newsOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 16,
  },
  newsSubtitle: {
    backgroundColor: "#38e07b",
    color: "#111714",
    fontSize: 10,
    fontWeight: "600",
    paddingHorizontal: 4,
    borderRadius: 999,
    alignSelf: "flex-start",
  },
  newsTitle: { color: "#fff", fontSize: 14, fontWeight: "bold", marginTop: 4 },
  newsDescription: { color: "rgba(255,255,255,0.8)", fontSize: 12, marginTop: 2 },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingTop: 8,
    paddingBottom: 16,
    backgroundColor: "rgba(28,38,32,0.8)",
    borderTopWidth: 1,
    borderTopColor: "#29382f",
  },
  navItem: { alignItems: "center" },
  navTextActive: { color: "#38e07b", fontSize: 10, marginTop: 2 },
  navTextInactive: { color: "rgba(255,255,255,0.6)", fontSize: 10, marginTop: 2 },
});
