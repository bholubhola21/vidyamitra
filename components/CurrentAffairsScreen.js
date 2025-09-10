import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import data from "../data/news.json";

const CurrentAffairsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Icon name="arrow-back-ios" size={20} color="#fff" />
        </Pressable>
        <Text style={styles.headerTitle}>Current Affairs</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        {data.news.map((newsItem, index) => (
          <Pressable
            key={index}
            style={styles.newsCard}
            onPress={() => navigation.navigate("NewsDetail", { newsItem })}
          >
            <Image source={{ uri: newsItem.image }} style={styles.newsImage} />
            <View style={styles.newsOverlay} />
            <View style={styles.newsTextWrapper}>
              <Text style={styles.newsCategory}>{newsItem.category}</Text>
              <Text style={styles.newsTitle}>{newsItem.title}</Text>
              <Text style={styles.newsSubtitle}>{newsItem.subtitle}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CurrentAffairsScreen;

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#111714" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "rgba(17,23,20,0.8)",
  },
  backBtn: { backgroundColor: "#29382F", borderRadius: 25, padding: 8 },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
    marginRight: 32,
  },
  newsCard: {
    width: "90%",
    height: 200,
    borderRadius: 16,
    marginHorizontal: "5%",
    marginVertical: 8,
    overflow: "hidden",
    alignSelf: "center",
  },
  newsImage: { width: "100%", height: "100%", borderRadius: 16 },
  newsOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(0,0,0,0.3)" },
  newsTextWrapper: { position: "absolute", bottom: 12, left: 12, right: 12 },
  newsCategory: { color: "#38e07b", fontSize: 12, fontWeight: "bold" },
  newsTitle: { color: "#fff", fontSize: 16, fontWeight: "bold", marginTop: 2 },
  newsSubtitle: { color: "rgba(255,255,255,0.8)", fontSize: 14, marginTop: 2 },
});
