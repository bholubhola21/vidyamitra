import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import newsData from "../data/news.json";

export default function CurrentAffairsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={newsData}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 80 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("NewsDetail", { newsId: item.id })}
          >
            <Image source={{ uri: item.image }} style={styles.thumbnail} />
            <View style={styles.textBox}>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.authorDate}>
                {item.author} • {item.date}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Bottom nav */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Home")}>
          <MaterialIcons name="home" size={26} color="rgba(255,255,255,0.6)" />
          <Text style={styles.navTextInactive}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="description" size={26} color="#38e07b" />
          <Text style={styles.navTextActive}>Exams</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("UserProfile")}>
          <MaterialIcons name="person" size={26} color="rgba(255,255,255,0.6)" />
          <Text style={styles.navTextInactive}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#111714" },
  card: {
    flexDirection: "row",
    margin: 10,
    padding: 10,
    backgroundColor: "#1c2620",
    borderRadius: 12,
  },
  thumbnail: { width: 80, height: 80, borderRadius: 8 },
  textBox: { marginLeft: 10, flex: 1 },
  subtitle: { color: "#38e07b", fontSize: 12 },
  title: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  authorDate: { color: "rgba(255,255,255,0.6)", fontSize: 12, marginTop: 4 },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 8,
    paddingBottom: 18,
    backgroundColor: "rgba(28,38,32,0.9)",
    borderTopWidth: 1,
    borderTopColor: "#29382f",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: { alignItems: "center" },
  navTextActive: { color: "#38e07b", fontSize: 11, marginTop: 4 },
  navTextInactive: { color: "rgba(255,255,255,0.6)", fontSize: 11, marginTop: 4 },
});
