import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./components/SplashScreen";
import LoginScreen from "./components/LoginScreen";
import SignUpScreen from "./components/SignUpScreen";
import HomeScreen from "./components/HomeScreen";
import CurrentAffairsScreen from "./components/CurrentAffairsScreen";
import NewsDetailScreen from "./components/NewsDetailScreen";
import UserProfileScreen from "./components/UserProfileScreen";

// Your HTML-like homepage

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"  screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} /> 
        <Stack.Screen name="CurrentAffairs" component={CurrentAffairsScreen} />
        <Stack.Screen name="NewsDetail" component= {NewsDetailScreen} />
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}
