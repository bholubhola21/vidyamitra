import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation, useRoute } from "@react-navigation/native";

const PolicyScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // ✅ Dynamic: Title & Content comes from route params
  const { title, content } = route.params || {
    title: "Terms and Conditions",
    content: [
      {
        heading: "Acceptance of Terms",
        text: "Your use of our platform constitutes your acceptance of these terms. We reserve the right to modify these terms at any time, and your continued use after any changes constitutes your acceptance of the revised terms.",
      },
      {
        heading: "User Accounts",
        text: "You may need to create an account to access certain features. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.",
      },
      {
        heading: "Content",
        text: "All content provided on our platform is for informational purposes only. We do not guarantee the accuracy, completeness, or usefulness of any content.",
      },
      {
        heading: "Prohibited Conduct",
        text: "You agree not to engage in any conduct that is unlawful, harmful, or interferes with the use of our platform by others.",
      },
      {
        heading: "Termination",
        text: "We may terminate or suspend your access to our platform at any time, with or without cause.",
      },
      {
        heading: "Limitation of Liability",
        text: "We are not liable for any damages arising out of your use of our platform.",
      },
      {
        heading: "Governing Law",
        text: "These terms are governed by the laws of India.",
      },
      {
        heading: "Contact Us",
        text: "If you have any questions about these terms, please contact us at support@example.com.",
      },
    ],
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="close" size={24} color="#9eb7a8" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {content.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.itemHeading}>{index + 1}. {item.heading}</Text>
            <Text style={styles.itemText}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.agreeButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.agreeText}>Agree</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PolicyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111714",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#29382f",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  scrollContent: {
    padding: 16,
  },
  item: {
    marginBottom: 16,
  },
  itemHeading: {
    fontSize: 16,
    fontWeight: "600",
    color: "#38e07b",
    marginBottom: 4,
  },
  itemText: {
    color: "#ccc",
    fontSize: 14,
    lineHeight: 20,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: "#29382f",
  },
  agreeButton: {
    backgroundColor: "#38e07b",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  agreeText: {
    fontWeight: "bold",
    color: "#111714",
    fontSize: 16,
  },
});
