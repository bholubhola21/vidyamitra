import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import FAIcon from "react-native-vector-icons/FontAwesome";
import { auth } from "../firebaseConfig"; // 👈 update path if needed
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter email and password");
      return;
    }
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      Alert.alert("Success", `Welcome back, ${user.email}`);
      // TODO: Navigate to home/dashboard
    } catch (error) {
      Alert.alert("Login Failed", error.message);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.headerText}>Log In</Text>
            </View>

            {/* Welcome */}
            <View style={styles.welcome}>
              <Text style={styles.title}>Welcome back!</Text>
              <Text style={styles.subtitle}>Log in to continue your journey.</Text>
            </View>

            {/* Form */}
            <View style={styles.form}>
              <View style={styles.inputWrapper}>
                <Icon name="email" size={20} color="#aaa" style={styles.inputIcon} />
                <TextInput
                  placeholder="Email"
                  placeholderTextColor="#aaa"
                  style={styles.input}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>

              <View style={styles.inputWrapper}>
                <Icon name="lock" size={20} color="#aaa" style={styles.inputIcon} />
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="#aaa"
                  style={styles.input}
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                />
              </View>

              <Text style={styles.forgotPassword}>Forgot Password?</Text>

              <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginText}>Log In</Text>
              </TouchableOpacity>
            </View>

            {/* Social logins */}
            <View style={styles.socialContainer}>
              <View style={styles.divider} />
              <Text style={styles.orText}>Or log in with</Text>
              <View style={styles.divider} />
            </View>

            <View style={styles.socialButtons}>
              <TouchableOpacity style={styles.socialButton}>
                <FAIcon name="google" size={20} color="#EA4335" />
                <Text style={styles.socialText}>Google</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <FAIcon name="facebook" size={20} color="#1877F2" />
                <Text style={styles.socialText}>Facebook</Text>
              </TouchableOpacity>
            </View>

            {/* Signup link */}
            <Text style={styles.signupText}>
              Don't have an account?{" "}
              <Text style={styles.signupLink}>Sign Up</Text>
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#111714",
  },
  container: {
    flex: 1,
    backgroundColor: "#111714",
    padding: 20,
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  headerText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  welcome: { alignItems: "center", marginBottom: 30 },
  title: { color: "#fff", fontSize: 28, fontWeight: "bold" },
  subtitle: { color: "#aaa", fontSize: 14, marginTop: 4 },
  form: { marginBottom: 20 },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#29382f",
    borderRadius: 30,
    marginBottom: 15,
    paddingHorizontal: 15,
    height: 50,
  },
  inputIcon: { marginRight: 10 },
  input: { flex: 1, color: "#fff" },
  forgotPassword: {
    textAlign: "right",
    color: "#38e07b",
    marginBottom: 15,
    fontWeight: "600",
  },
  loginButton: {
    backgroundColor: "#38e07b",
    borderRadius: 30,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: { fontWeight: "bold", color: "#111714", fontSize: 16 },
  socialContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  divider: { flex: 1, height: 1, backgroundColor: "#333" },
  orText: { marginHorizontal: 10, color: "#aaa" },
  socialButtons: { flexDirection: "row", gap: 10, marginBottom: 20 },
  socialButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#29382f",
    borderRadius: 30,
    height: 45,
    gap: 8,
  },
  socialText: { color: "#fff", fontWeight: "600" },
  signupText: { textAlign: "center", color: "#aaa" },
  signupLink: { color: "#38e07b", fontWeight: "600" },
});
