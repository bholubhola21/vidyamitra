import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function OtpVerificationScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { userInput } = route.params || {}; // Email/phone passed from ForgotPassword

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  // Countdown timer
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  // Handle OTP input
  const handleChange = (text, index) => {
    if (/^\d?$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      // Auto move to next input
      if (text && index < otp.length - 1) {
        const nextInput = `otp-${index + 1}`;
        const nextRef = inputRefs[nextInput];
        nextRef?.focus();
      }
    }
  };

  // Store refs for inputs
  const inputRefs = {};

  const handleVerifyOtp = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length < 6) {
      alert("Please enter the 6-digit OTP");
      return;
    }
    console.log("OTP entered:", enteredOtp);
    // TODO: Verify OTP with backend here
    navigation.navigate("Home"); // Replace with your next screen
  };

  const handleResendOtp = () => {
    setTimer(30);
    setCanResend(false);
    setOtp(["", "", "", "", "", ""]);
    console.log("Resend OTP to:", userInput);
    // TODO: Call API to resend OTP
    alert(`A new OTP has been sent to ${userInput}`);
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
        <Text style={styles.headerTitle}>OTP Verification</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Enter Verification Code</Text>
        <Text style={styles.subtitle}>
          We have sent a 6-digit code to{" "}
          <Text style={{ fontWeight: "600", color: "#38e07b" }}>
            {userInput}
          </Text>
        </Text>

        {/* OTP Inputs */}
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputRefs[`otp-${index}`] = ref)}
              style={styles.otpInput}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
            />
          ))}
        </View>

        {/* Verify Button */}
        <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
          <Text style={styles.buttonText}>Verify OTP</Text>
        </TouchableOpacity>

        {/* Resend Section */}
        <View style={styles.resendContainer}>
          {canResend ? (
            <TouchableOpacity onPress={handleResendOtp}>
              <Text style={styles.resendText}>Resend OTP</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.timerText}>Resend available in {timer}s</Text>
          )}
        </View>
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
  title: { fontSize: 26, fontWeight: "bold", color: "#fff", textAlign: "center" },
  subtitle: {
    fontSize: 14,
    color: "#9CA3AF",
    marginTop: 8,
    textAlign: "center",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
    gap: 10,
  },
  otpInput: {
    width: 50,
    height: 60,
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    textAlign: "center",
    fontSize: 22,
    color: "#fff",
  },
  button: {
    marginTop: 32,
    backgroundColor: "#38e07b",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },
  buttonText: { color: "#101010", fontSize: 16, fontWeight: "bold" },
  resendContainer: { marginTop: 20, alignItems: "center" },
  resendText: { color: "#38e07b", fontWeight: "600", fontSize: 14 },
  timerText: { color: "#9CA3AF", fontSize: 14 },
});
