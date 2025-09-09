# VidyaMitra - React Native Expo App

## Overview
VidyaMitra is a React Native application built with Expo that runs as a learning companion. The app has been successfully set up to run in the Replit environment with web support.

## Recent Changes
- **2025-09-09**: Initial project setup and configuration for Replit environment
  - Created missing SplashScreen and LoginScreen components
  - Installed required Expo web dependencies (react-dom, react-native-web, @expo/metro-runtime)
  - Configured Metro bundler for web support
  - Set up workflow to run on port 5000 with lan host setting
  - Created deployment configuration for production builds

## Project Architecture
- **Framework**: React Native with Expo SDK 53.0.22
- **Navigation**: React Navigation with Stack Navigator
- **UI Components**: React Native Paper for Material Design components
- **Icons**: Expo Vector Icons and React Native Vector Icons
- **Database**: Firebase integration ready
- **Platform Support**: iOS, Android, and Web

## Key Files
- `App.js` - Main application component with navigation setup
- `components/SplashScreen.js` - Welcome screen component
- `components/LoginScreen.js` - User authentication screen
- `metro.config.js` - Metro bundler configuration for web support
- `app.json` - Expo configuration file

## Development Setup
- **Dev Server**: Runs on port 5000 using `npx expo start --web --host lan --port 5000`
- **Web Build**: Uses Expo's web support with Metro bundler
- **Dependencies**: All packages installed and working correctly

## Deployment
- **Target**: Autoscale deployment for stateless web application
- **Build**: Uses `npx expo export -p web --output-dir dist`
- **Run**: Serves static files with `npx serve -s dist`

## User Preferences
- Frontend configured to run on port 5000 as required
- Web support enabled for Replit environment
- Proper host configuration for proxy support