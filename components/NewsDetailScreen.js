import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Share,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import newsData from "../data/news.json";

export default function NewsDetailScreen({ navigation, route }) {
  const { newsId } = route.params;
  const news = newsData.find((n) => n.id === newsId);

  if (!news) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Text style={{ color: "white", textAlign: "center", marginTop: 50 }}>
          News not found
        </Text>
      </SafeAreaView>
    );
  }

  const [bookmarked, setBookmarked] = useState(false);

  const handleBack = () => navigation.goBack();
  const handleBookmark = () => setBookmarked((prev) => !prev);
  const handleShare = async () => {
    await Share.share({ message: `${news.title}\n\n${news.lead}` });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton} onPress={handleBack}>
          <MaterialIcons name="arrow-back-ios" size={20} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton} onPress={handleBookmark}>
            <MaterialIcons
              name={bookmarked ? "bookmark" : "bookmark-border"}
              size={20}
              color="#fff"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={handleShare}>
            <MaterialIcons name="share" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Body */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.metaContainer}>
          <Text style={styles.categoryText}>{news.subtitle.toUpperCase()}</Text>
          <Text style={styles.titleText}>{news.title}</Text>
          <View style={styles.metaRow}>
            <Text style={styles.metaSmall}>{`By ${news.author}`}</Text>
            <Text style={styles.metaSmall}>•</Text>
            <Text style={styles.metaSmall}>{news.date}</Text>
          </View>
        </View>

        <Image source={{ uri: news.image }} style={styles.articleImage} />

        <View style={styles.content}>
          <Text style={styles.lead}>{news.lead}</Text>
          {news.content.map((section, idx) => (
            <View key={idx} style={{ marginTop: 10 }}>
              <Text style={styles.sectionHeading}>{section.heading}</Text>
              <Text style={styles.paragraph}>{section.text}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#111714" },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: "rgba(17,23,20,0.9)",
  },
  iconButton: {
    backgroundColor: "#29382F",
    padding: 8,
    borderRadius: 999,
    marginLeft: 8,
  },
  headerRight: { flexDirection: "row" },

  scrollContent: { paddingBottom: 50 },
  metaContainer: { paddingHorizontal: 16, paddingTop: 12 },
  categoryText: { color: "#38e07b", fontSize: 12, fontWeight: "700" },
  titleText: { color: "#fff", fontSize: 24, fontWeight: "800", marginTop: 6 },
  metaRow: { flexDirection: "row", marginTop: 8, alignItems: "center" },
  metaSmall: { color: "rgba(255,255,255,0.6)", fontSize: 13, marginRight: 8 },

  articleImage: { width: "100%", height: 200, marginTop: 12, borderRadius: 12 },
  content: { paddingHorizontal: 16, paddingTop: 12 },
  lead: { color: "rgba(255,255,255,0.92)", fontSize: 16, lineHeight: 22 },
  sectionHeading: { color: "#fff", fontSize: 18, fontWeight: "700", marginTop: 12 },
  paragraph: { color: "rgba(255,255,255,0.85)", fontSize: 15, lineHeight: 22, marginTop: 8 },
});
