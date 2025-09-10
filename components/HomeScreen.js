import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import data from "../data/news.json";

const HomeScreen = ( {navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Select Exam</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Search Bar */}
        <View style={styles.searchWrapper}>
          <Icon name="search" size={20} color="rgba(255,255,255,0.6)" style={styles.searchIcon} />
          <TextInput
            placeholder="Search for exams"
            placeholderTextColor="rgba(255,255,255,0.6)"
            style={styles.searchInput}
          />
        </View>

        {/* Exams Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Indian Competitive Exams</Text>
          <Text style={styles.link}>See all</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {data.exams.map((exam, index) => (
            <Pressable key={index} style={styles.examCard}>
              <Image source={{ uri: exam.image }} style={styles.examImage} />
              <Text style={styles.examTitle}>{exam.title}</Text>
              <Text style={styles.examSubtitle}>{exam.subtitle}</Text>
            </Pressable>
          ))}
        </ScrollView>

        {/* Subjects Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Topic/Subject Choices</Text>
          <Text style={styles.link}>See all</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {data.subjects.map((subj, index) => (
            <Pressable key={index} style={styles.subjectBtn}>
              <Text style={styles.subjectText}>{subj}</Text>
            </Pressable>
          ))}
        </ScrollView>

        {/* News Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Current Affairs</Text>
          <Text style={styles.link} onPress={()=>navigation.navigate('CurrentAffairs')}>See all</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {data.news.map((newsItem, index) => (
            <Pressable key={index} style={styles.newsCard}>
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
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Pressable style={styles.navItem}>
          <Icon name="home" size={22} color="rgba(255,255,255,0.6)" />
          <Text style={styles.navText}>Home</Text>
        </Pressable>
        <Pressable style={styles.navItem}>
          <Icon name="description" size={22} color="#38e07b" />
          <Text style={[styles.navText, { color: "#38e07b" }]}>Exams</Text>
        </Pressable>
        <Pressable style={styles.navItem}>
          <Icon name="person" size={22} color="rgba(255,255,255,0.6)" />
          <Text style={styles.navText}>Profile</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#111714",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "rgba(17,23,20,0.8)",
  },
  backBtn: {
    backgroundColor: "#29382F",
    borderRadius: 25,
    padding: 8,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
    marginRight: 32,
  },
  searchWrapper: {
    margin: 16,
    position: "relative",
  },
  searchIcon: {
    position: "absolute",
    left: 20,
    top: 12,
  },
  searchInput: {
    backgroundColor: "#29382F",
    color: "#fff",
    borderRadius: 25,
    paddingLeft: 40,
    paddingRight: 16,
    height: 44,
    fontSize: 14,
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 16,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    color: "#38e07b",
    fontSize: 14,
    fontWeight: "600",
  },
  horizontalScroll: {
    paddingHorizontal: 16,
    marginTop: 10,
  },
  examCard: {
    backgroundColor: "#1C2620",
    borderRadius: 16,
    padding: 12,
    marginRight: 12,
    alignItems: "center",
    width: 120,
  },
  examImage: {
    width: 70,
    height: 70,
    borderRadius: 12,
    marginBottom: 8,
  },
  examTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
  examSubtitle: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 12,
    textAlign: "center",
  },
  subjectBtn: {
    backgroundColor: "#29382F",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
  },
  subjectText: {
    color: "#fff",
    fontSize: 14,
  },
  newsCard: {
    width: 200,
    height: 150,
    borderRadius: 16,
    marginRight: 12,
    overflow: "hidden",
  },
  newsImage: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
  newsOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  newsTextWrapper: {
    position: "absolute",
    bottom: 8,
    left: 8,
    right: 8,
  },
  newsCategory: {
    color: "#38e07b",
    fontSize: 10,
    fontWeight: "bold",
  },
  newsTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  newsSubtitle: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 12,
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(28,38,32,0.8)",
    borderTopWidth: 1,
    borderTopColor: "#29382f",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    fontWeight: "500",
    color: "rgba(255,255,255,0.6)",
    marginTop: 2,
  },
});
