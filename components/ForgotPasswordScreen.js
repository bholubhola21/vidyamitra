import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function ForgotPasswordScreen() {
  const navigation = useNavigation();
  const [emailOrMobile, setEmailOrMobile] = useState("");

  // 👉 Handler function
  const handleSendCode = () => {
    if (!emailOrMobile.trim()) {
      alert("Please enter your email or phone number");
      return;
    }

    // later you can call API here to send OTP
    console.log("Send code to:", emailOrMobile);

    // navigate to OTP Verification screen
    navigation.navigate("OtpVerification", { userInput: emailOrMobile });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back-ios-new" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Forgot Password</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Body */}
      <View style={styles.content}>
        <Text style={styles.title}>Reset your password</Text>
        <Text style={styles.subtitle}>
          Enter your registered email or phone number. We’ll send you a code to
          reset your password.
        </Text>

        {/* Input */}
        <View style={styles.inputContainer}>
          <Icon
            name="person"
            size={22}
            color="#9CA3AF"
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Email or Phone Number"
            placeholderTextColor="#9CA3AF"
            value={emailOrMobile}
            onChangeText={setEmailOrMobile}
          />
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={handleSendCode}>
          <Text style={styles.buttonText}>Send Code</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#101010" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: { color: "#fff", fontSize: 18, fontWeight: "600" },
  content: { flex: 1, padding: 20, marginTop: 40 },
  title: { fontSize: 26, fontWeight: "bold", color: "#fff" },
  subtitle: { fontSize: 14, color: "#9CA3AF", marginTop: 8 },
  inputContainer: {
    marginTop: 24,
    position: "relative",
    backgroundColor: "#1E1E1E",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
    borderRadius: 12,
  },
  inputIcon: { position: "absolute", left: 12, top: 18 },
  input: {
    paddingLeft: 40,
    paddingRight: 12,
    height: 56,
    color: "#fff",
    fontSize: 16,
  },
  button: {
    marginTop: 32,
    backgroundColor: "#38e07b",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    shadowColor: "#38e07b",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 8,
  },
  buttonText: {
    color: "#101010",
    fontSize: 16,
    fontWeight: "bold",
  },
});
