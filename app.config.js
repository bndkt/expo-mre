module.exports = {
  name: "expo-mre",
  slug: "expo-mre",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "myapp",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/images/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.bndkt.expo-mre",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  web: {
    bundler: "metro",
    favicon: "./assets/images/favicon.png",
  },
  extra: {
    eas: {
      projectId: "94c985f0-8e87-4924-8618-0876965db3b4",
    },
  },
  owner: "mueller",
};
