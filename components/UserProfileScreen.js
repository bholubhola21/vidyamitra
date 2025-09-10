import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Switch,
  ScrollView,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const UserProfileScreen = () => {
  const navigation = useNavigation();

  // State management
  const [isNotifications, setIsNotifications] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [savedQuizzes, setSavedQuizzes] = useState([
    "Math Quiz 1",
    "GK Quiz 2",
  ]);
  const [savedArticles, setSavedArticles] = useState([
    "Current Affairs Jan 2025",
    "Economy Insights",
  ]);

  // ✅ Handle logout
  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        style: "destructive",
        onPress: () => {
          // Clear auth data here (AsyncStorage / Redux)
          navigation.reset({
            index: 0,
            routes: [{ name: "Login" }],
          });
        },
      },
    ]);
  };

  // ✅ Handle delete account
  const handleDeleteAccount = () => {
    Alert.alert(
      "Delete Account",
      "This action cannot be undone. Are you sure?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            // Call API to delete account
            setTimeout(() => {
              Alert.alert("Account Deleted", "Your account was deleted.");
              navigation.reset({
                index: 0,
                routes: [{ name: "Home" }],
              });
            }, 1000);
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: isDarkTheme ? "#111714" : "#fff" }]}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-back-ios" size={22} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profile & Settings</Text>
        </View>

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View>
            <Image
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjrbJ8WszrYOo1YWsWEoqmxMBf5lbCcHRi0E3DLGaPUPttkcRp1RDp25qLawZXBM8tT80Av2V5YxqqB2Sjipeh5jO-B9d5-zsrSWuNWAId95S9W5CddPS1ciNOEfM7cdU8UU5W8bINxkuNMvWAPK50FJQYa4djxbLkoGsGnImRc07prw0G2WaYMVmiswVSh2Ko3dWrc2fleUxUNtEiViwGOIDJ8GMYYZJPd_r-Ig9Ab9dAcURcLWgzVIb3EtMK2sO5C6T8SYFr1KM",
              }}
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editButton}>
              <Icon name="edit" size={16} color="#111714" />
            </TouchableOpacity>
          </View>
          <Text style={styles.profileName}>Arjun Sharma</Text>
          <Text style={styles.profileEmail}>arjun.sharma@email.com</Text>
        </View>

        {/* Account Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <TouchableOpacity style={styles.item}>
            <View style={styles.row}>
              <Icon name="person" size={22} color="#9eb7a8" />
              <Text style={styles.itemText}>Edit Profile</Text>
            </View>
            <Icon name="arrow-forward-ios" size={16} color="#9eb7a8" />
          </TouchableOpacity>
        </View>

        {/* Settings Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settings</Text>

          {/* Notifications */}
          <View style={styles.item}>
            <View style={styles.row}>
              <Icon name="notifications" size={22} color="#9eb7a8" />
              <Text style={styles.itemText}>Notifications</Text>
            </View>
            <Switch
              value={isNotifications}
              onValueChange={setIsNotifications}
              trackColor={{ false: "#29382f", true: "#38e07b" }}
              thumbColor="#fff"
            />
          </View>

          {/* Theme */}
          <TouchableOpacity
            style={styles.item}
            onPress={() => setIsDarkTheme(!isDarkTheme)}
          >
            <View style={styles.row}>
              <Icon name="dark-mode" size={22} color="#9eb7a8" />
              <Text style={styles.itemText}>Theme</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.itemSubText}>
                {isDarkTheme ? "Dark" : "Light"}
              </Text>
              <Icon name="arrow-forward-ios" size={16} color="#9eb7a8" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Saved Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Saved</Text>

          <TouchableOpacity style={styles.item}>
            <View style={styles.row}>
              <Icon name="bookmark" size={22} color="#9eb7a8" />
              <Text style={styles.itemText}>Saved Quizzes</Text>
            </View>
            <Text style={styles.itemSubText}>{savedQuizzes.length} items</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <View style={styles.row}>
              <Icon name="article" size={22} color="#9eb7a8" />
              <Text style={styles.itemText}>Saved Articles</Text>
            </View>
            <Text style={styles.itemSubText}>{savedArticles.length} items</Text>
          </TouchableOpacity>
        </View>

        {/* Account Management */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account Management</Text>

          <TouchableOpacity style={styles.actionButton}>
            <Icon name="lock-reset" size={22} color="#fff" />
            <Text style={styles.actionText}>Change Password</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, styles.logoutButton]}
            onPress={handleLogout}
          >
            <Icon name="logout" size={22} color="#38e07b" />
            <Text style={[styles.actionText, { color: "#38e07b" }]}>
              Logout
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, styles.deleteButton]}
            onPress={handleDeleteAccount}
          >
            <Icon name="delete" size={22} color="#ff4d4d" />
            <Text style={[styles.actionText, { color: "#ff4d4d" }]}>
              Delete Account
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate("Home")}
        >
          <Icon name="home" size={24} color="#9eb7a8" />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Icon name="description" size={24} color="#9eb7a8" />
          <Text style={styles.footerText}>Exams</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Icon name="quiz" size={24} color="#9eb7a8" />
          <Text style={styles.footerText}>Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItemActive}>
          <Icon name="person" size={24} color="#38e07b" />
          <Text style={[styles.footerText, { color: "#38e07b" }]}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UserProfileScreen;

// ✅ same styles from your code (unchanged)
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#111714" },
  header: { flexDirection: "row", alignItems: "center", padding: 16 },
  backButton: { padding: 8 },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginRight: 30,
  },
  profileSection: { alignItems: "center", padding: 16 },
  avatar: { width: 100, height: 100, borderRadius: 50 },
  editButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#38e07b",
    borderRadius: 20,
    padding: 6,
  },
  profileName: { fontSize: 20, fontWeight: "bold", marginTop: 8, color: "#fff" },
  profileEmail: { color: "#9eb7a8" },
  section: {
    marginTop: 16,
    marginHorizontal: 12,
    backgroundColor: "#1c2620",
    borderRadius: 8,
    overflow: "hidden",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#9eb7a8",
    marginBottom: 8,
    marginLeft: 8,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#29382f",
  },
  row: { flexDirection: "row", alignItems: "center", gap: 8 },
  itemText: { fontSize: 16, color: "#fff", marginLeft: 8 },
  itemSubText: { color: "#9eb7a8", marginRight: 4 },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 8,
    marginVertical: 4,
    backgroundColor: "#1c2620",
  },
  logoutButton: { backgroundColor: "rgba(56,224,123,0.1)" },
  deleteButton: { backgroundColor: "rgba(255,77,77,0.1)" },
  actionText: { marginLeft: 8, fontWeight: "600", color: "#fff" },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderColor: "#29382f",
    backgroundColor: "#1c2620",
    paddingVertical: 8,
  },
  footerItem: { alignItems: "center" },
  footerItemActive: { alignItems: "center" },
  footerText: { fontSize: 12, marginTop: 2, color: "#9eb7a8" },
});
