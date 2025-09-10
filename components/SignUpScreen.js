import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { auth, db } from "../src/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

export default function SignUpScreen({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSignUp = async () => {
    if (!fullName || !email || !password || !mobile) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    try {
      // Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Save user info in Firestore
      await setDoc(doc(db, "users", user.uid), {
        fullName,
        email,
        mobile,
        createdAt: new Date(),
      });

      Alert.alert("Success", "Signup successful! Please log in.");
      navigation.replace("Login"); // Navigate to login page

    } catch (error) {
      Alert.alert("Signup Failed", error.message);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Sign Up</Text>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Create your account</Text>
          <Text style={styles.subtitle}>Join our community of future leaders.</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <MaterialIcons name="person" size={24} color="#a1a1aa" style={styles.icon} />
            <TextInput
              placeholder="Full Name"
              placeholderTextColor="#a1a1aa"
              style={styles.input}
              value={fullName}
              onChangeText={setFullName}
            />
          </View>

          <View style={styles.inputContainer}>
            <MaterialIcons name="email" size={24} color="#a1a1aa" style={styles.icon} />
            <TextInput
              placeholder="Email"
              placeholderTextColor="#a1a1aa"
              style={styles.input}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputContainer}>
            <MaterialIcons name="lock" size={24} color="#a1a1aa" style={styles.icon} />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#a1a1aa"
              style={styles.input}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <View style={styles.inputContainer}>
            <MaterialIcons name="phone-iphone" size={24} color="#a1a1aa" style={styles.icon} />
            <TextInput
              placeholder="Mobile Number"
              placeholderTextColor="#a1a1aa"
              style={styles.input}
              keyboardType="phone-pad"
              value={mobile}
              onChangeText={setMobile}
            />
          </View>

          <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
            <Text style={styles.signupButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Already have an account?{" "}
            <Text style={styles.footerLink} onPress={() => navigation.navigate("Login")}>
              Log In
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#111714" },
  container: { padding: 16, paddingBottom: 32 },
  header: { alignItems: "center", marginBottom: 24 },
  headerTitle: { color: "white", fontSize: 18, fontWeight: "bold" },
  titleContainer: { alignItems: "center", marginBottom: 32 },
  title: { color: "white", fontSize: 28, fontWeight: "bold" },
  subtitle: { color: "#a1a1aa", fontSize: 14 },
  form: { marginBottom: 32 },
  inputContainer: { position: "relative", marginBottom: 16 },
  icon: { position: "absolute", left: 12, top: "50%", marginTop: -12 },
  input: {
    backgroundColor: "#29382f",
    height: 56,
    borderRadius: 28,
    paddingLeft: 44,
    paddingRight: 16,
    color: "white",
  },
  signupButton: {
    backgroundColor: "#38e07b",
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  signupButtonText: { color: "#111714", fontWeight: "bold", fontSize: 16 },
  footer: { alignItems: "center" },
  footerText: { color: "#a1a1aa", marginBottom: 4 },
  footerLink: { color: "#38e07b", fontWeight: "bold" },
});
