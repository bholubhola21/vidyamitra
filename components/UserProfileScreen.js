import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  Switch,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function UserProfileScreen({ navigation }) {
  const [notifications, setNotifications] = useState(true);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={{ flex: 1 }}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="arrow-back-ios"
              size={22}
              color="#fff"
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profile & Settings</Text>
        </View>

        {/* Profile Info */}
        <View style={styles.profileSection}>
          <View>
            <Image
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjrbJ8WszrYOo1YWsWEoqmxMBf5lbCcHRi0E3DLGaPUPttkcRp1RDp25qLawZXBM8tT80Av2V5YxqqB2Sjipeh5jO-B9d5-zsrSWuNWAId95S9W5CddPS1ciNOEfM7cdU8UU5W8bINxkuNMvWAPK50FJQYa4djxbLkoGsGnImRc07prw0G2WaYMVmiswVSh2Ko3dWrc2fleUxUNtEiViwGOIDJ8GMYYZJPd_r-Ig9Ab9dAcURcLWgzVIb3EtMK2sO5C6T8SYFr1KM",
              }}
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editButton}>
              <MaterialIcons name="edit" size={18} color="#111714" />
            </TouchableOpacity>
          </View>
          <Text style={styles.name}>Arjun Sharma</Text>
          <Text style={styles.email}>arjun.sharma@email.com</Text>
        </View>

        {/* Account Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <TouchableOpacity style={styles.row}>
            <View style={styles.rowLeft}>
              <MaterialIcons name="person" size={22} color="#9eb7a8" />
              <Text style={styles.rowText}>Edit Profile</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={18} color="#9eb7a8" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.row}>
            <View style={styles.rowLeft}>
              <MaterialIcons name="lock-reset" size={22} color="#9eb7a8" />
              <Text style={styles.rowText}>Change Password</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={18} color="#9eb7a8" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.row}>
            <View style={styles.rowLeft}>
              <MaterialIcons name="delete" size={22} color="red" />
              <Text style={[styles.rowText, { color: "red" }]}>
                Delete Account
              </Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={18} color="red" />
          </TouchableOpacity>
        </View>

        {/* Settings Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settings</Text>
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <MaterialIcons name="notifications" size={22} color="#9eb7a8" />
              <Text style={styles.rowText}>Notifications</Text>
            </View>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: "#29382f", true: "#38e07b" }}
              thumbColor="#fff"
            />
          </View>
          <TouchableOpacity style={styles.row}>
            <View style={styles.rowLeft}>
              <MaterialIcons name="dark-mode" size={22} color="#9eb7a8" />
              <Text style={styles.rowText}>Theme</Text>
            </View>
            <View style={styles.rowRight}>
              <Text style={styles.rowValue}>Dark</Text>
              <MaterialIcons name="arrow-forward-ios" size={18} color="#9eb7a8" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.row}>
            <View style={styles.rowLeft}>
              <MaterialIcons name="language" size={22} color="#9eb7a8" />
              <Text style={styles.rowText}>Language</Text>
            </View>
            <View style={styles.rowRight}>
              <Text style={styles.rowValue}>English</Text>
              <MaterialIcons name="arrow-forward-ios" size={18} color="#9eb7a8" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Saved Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Saved</Text>
          <TouchableOpacity style={styles.row}>
            <View style={styles.rowLeft}>
              <MaterialIcons name="bookmark" size={22} color="#9eb7a8" />
              <Text style={styles.rowText}>Saved Quizzes</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={18} color="#9eb7a8" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.row}>
            <View style={styles.rowLeft}>
              <MaterialIcons name="article" size={22} color="#9eb7a8" />
              <Text style={styles.rowText}>Saved Articles</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={18} color="#9eb7a8" />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <MaterialIcons name="home" size={26} color="#9eb7a8" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("CurrentAffairs")}>
          <MaterialIcons name="description" size={26} color="#9eb7a8" />
          <Text style={styles.navText}>Exams</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="quiz" size={26} color="#9eb7a8" />
          <Text style={styles.navText}>Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="person" size={26} color="#38e07b" />
          <Text style={[styles.navText, { color: "#38e07b" }]}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#111714" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 32,
  },
  profileSection: { alignItems: "center", padding: 20 },
  avatar: { width: 100, height: 100, borderRadius: 50 },
  editButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#38e07b",
    borderRadius: 20,
    padding: 6,
  },
  name: { color: "#fff", fontSize: 22, fontWeight: "bold", marginTop: 10 },
  email: { color: "#9eb7a8", fontSize: 14 },
  section: { marginTop: 20, marginHorizontal: 16 },
  sectionTitle: { color: "#9eb7a8", fontSize: 16, marginBottom: 8 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 14,
    backgroundColor: "#1c2620",
    borderBottomWidth: 1,
    borderBottomColor: "#29382f",
    borderRadius: 8,
    marginBottom: 4,
  },
  rowLeft: { flexDirection: "row", alignItems: "center", gap: 10 },
  rowText: { color: "#fff", fontSize: 15 },
  rowRight: { flexDirection: "row", alignItems: "center", gap: 6 },
  rowValue: { color: "#9eb7a8" },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#1c2620",
    borderTopWidth: 1,
    borderTopColor: "#29382f",
  },
  navText: { fontSize: 11, color: "#9eb7a8", textAlign: "center", marginTop: 2 },
});
