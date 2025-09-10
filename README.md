Perfect! I can update your `README.md` to include the **project name**, **about the author**, a brief **React Native basics section**, and instructions for running the project. Here’s a polished version:

---

## 📂 `README.md`

```markdown
# 📱 Vidyamitra - Current Affairs & Competitive Exam App

**Vidyamitra** is a mobile application designed for students preparing for **competitive exams and Indian government exams**.  
The app provides **current affairs, news updates, quizzes, and essential legal information** like Terms & Conditions and Privacy Policy.  

**Author / Developer:** Mayank Pandey  
**About the Author:** Full Stack Developer with expertise in React Native, Firebase, and modern mobile app development.

---

## 🚀 Features

- **Authentication**
  - Sign Up
  - Login
  - Logout
  - Delete Account

- **News & Current Affairs**
  - Read latest news updates from `assets/data/news.json`
  - Dynamic content display

- **Legal Pages**
  - Terms of Service → loaded from `assets/data/terms.json`
  - Privacy Policy → loaded from `assets/data/privacy.json`
  - Reusable `PolicyScreen` component

- **UI/UX**
  - Modern design with `SafeAreaView`
  - Scrollable & responsive layouts
  - Dark theme & notifications support

---

## 📁 Project Structure

```

project-root/
│
├── assets/
│   └── data/
│       ├── news.json          # Current affairs and news
│       ├── terms.json         # Terms & Conditions
│       └── privacy.json       # Privacy Policy
│
├── screens/
│   ├── LoginScreen.js
│   ├── SignUpScreen.js
│   ├── HomeScreen.js
│   ├── PolicyScreen.js        # Dynamic Terms/Privacy Screen
│   └── SettingsScreen.js      # Logout, delete, legal links
│
├── App.js                     # App entry point with navigation
├── package.json
└── README.md

````

---

## ⚛️ React Native Basics

React Native allows you to build **mobile apps using JavaScript and React**.  
Instead of building separate apps for Android and iOS, React Native lets you write **one codebase** that works on both platforms.  

### Key Concepts

- **Components:** Building blocks like `<View>`, `<Text>`, `<Image>`, `<ScrollView>`
- **State & Props:** Manage data dynamically with `useState` and pass info via props
- **Navigation:** `React Navigation` handles screen transitions
- **Styling:** Done via `StyleSheet` or inline styles
- **SafeAreaView:** Ensures UI doesn’t overlap system elements (notches, status bars)
- **AsyncStorage / Firebase:** Store user data & authentication

---

## 📦 Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/vidyamitra.git
   cd vidyamitra
````

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start Metro bundler**

   ```bash
   npx react-native start
   ```

4. **Run the app**

   * For Android:

     ```bash
     npx react-native run-android
     ```
   * For iOS:

     ```bash
     npx react-native run-ios
     ```

---

## 📜 JSON Data Structure

### `news.json`

```json
[
  {
    "id": 1,
    "title": "India launches new space mission",
    "description": "ISRO successfully launched..."
  }
]
```

### `terms.json`

```json
{
  "title": "Terms of Service",
  "content": [
    {
      "heading": "1. Acceptance of Terms",
      "text": "By creating an account, you agree to these terms..."
    }
  ]
}
```

### `privacy.json`

```json
{
  "title": "Privacy Policy",
  "content": [
    {
      "heading": "1. Information We Collect",
      "text": "We collect personal info like name, email, and mobile..."
    }
  ]
}
```

---

## 🧑‍💻 Development Notes

* Update legal content by editing `assets/data/terms.json` or `assets/data/privacy.json`.
* Update news by editing `assets/data/news.json`.
* Authentication is handled with **Firebase Auth**; can be replaced with your backend.
* UI is fully responsive and built using **React Native components**.

---

## 📜 License

MIT License © 2025 Mayank Pandey


