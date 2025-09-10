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
import termsData from "../data/terms.json";
import privacyData from "../data/privacy.json";
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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        fullName,
        email,
        mobile,
        createdAt: new Date(),
      });

      Alert.alert("Success", "Signup successful! Please log in.");
      navigation.replace("Login");
    } catch (error) {
      Alert.alert("Signup Failed", error.message);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back-ios" size={22} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Sign Up</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Create your account</Text>
          <Text style={styles.subtitle}>
            Join our community of future leaders.
          </Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <MaterialIcons name="person" size={22} color="#a1a1aa" style={styles.icon} />
            <TextInput
              placeholder="Full Name"
              placeholderTextColor="#a1a1aa"
              style={styles.input}
              value={fullName}
              onChangeText={setFullName}
            />
          </View>

          <View style={styles.inputContainer}>
            <MaterialIcons name="email" size={22} color="#a1a1aa" style={styles.icon} />
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
            <MaterialIcons name="lock" size={22} color="#a1a1aa" style={styles.icon} />
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
            <MaterialIcons
              name="phone-iphone"
              size={22}
              color="#a1a1aa"
              style={styles.icon}
            />
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

        {/* OR Divider */}
        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>Or sign up with</Text>
          <View style={styles.line} />
        </View>

        {/* Social Buttons */}
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialText}>Facebook</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Already have an account?{" "}
            <Text
              style={styles.footerLink}
              onPress={() => navigation.navigate("Login")}
            >
              Log In
            </Text>
          </Text>
        </View>

        {/* Terms & Privacy */}
        <View style={styles.policyContainer}>
          <Text style={styles.policyText}>
            By signing up, you agree to our{" "}
            <Text
              style={styles.policyLink}
              onPress={() =>
                navigation.navigate("PolicyScreen", {
                  title: termsData.title,
                  content: termsData.content, // supply JSON
                })
              }
            >
              Terms & Conditions
            </Text>{" "}
            and{" "}
            <Text
              style={styles.policyLink}
              onPress={() =>
                navigation.navigate("PolicyScreen", {
                  title: privacyData.title,
                  content: privacyData.content, // supply JSON
                })
              }
            >
              Privacy Policy
            </Text>
            .
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#111714" },
  container: { padding: 24 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  headerTitle: { color: "white", fontSize: 18, fontWeight: "bold" },
  titleContainer: { alignItems: "center", marginBottom: 32 },
  title: { color: "white", fontSize: 28, fontWeight: "bold" },
  subtitle: { color: "#a1a1aa", fontSize: 14 },
  form: { marginBottom: 24 },
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
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
  },
  line: { flex: 1, height: 1, backgroundColor: "#29382f" },
  orText: { color: "#a1a1aa", marginHorizontal: 12, fontSize: 12 },
  socialContainer: { flexDirection: "row", gap: 12, marginBottom: 32 },
  socialButton: {
    flex: 1,
    backgroundColor: "#29382f",
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  socialText: { color: "white", fontWeight: "600" },
  footer: { alignItems: "center", marginBottom: 16 },
  footerText: { color: "#a1a1aa" },
  footerLink: { color: "#38e07b", fontWeight: "bold" },
  policyContainer: { paddingBottom: 32 },
  policyText: { color: "#a1a1aa", fontSize: 12, textAlign: "center" },
  policyLink: { color: "#38e07b", fontWeight: "600" },
});
