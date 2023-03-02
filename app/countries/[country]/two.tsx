import { Link, useLocalSearchParams, useSearchParams } from "expo-router";
import { useEffect } from "react";
import { Alert, StyleSheet } from "react-native";

import EditScreenInfo from "../../../components/EditScreenInfo";
import { Text, View } from "../../../components/Themed";

export default function TabTwoScreen() {
  const { country } = useSearchParams<{ country: string }>();
  const { country: localCountry } = useLocalSearchParams<{ country: string }>();

  useEffect(() => {
    if (!country ?? !localCountry) {
      Alert.alert(
        "No country",
        `TabTwoScreen()\n\nCountry: ${country}\nCountry (local): ${localCountry}`,
        [
          {
            text: "OK",
            onPress: () => console.log("OK Pressed"),
          },
        ]
      );
    }
  }, [country, localCountry]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/countries/[country]/two.tsx" />
      <Link style={{ color: "red", marginTop: 30 }} href="/two">
        Two (/two)
      </Link>
      <Link style={{ color: "red", marginTop: 30 }} href="/two2">
        Two2 (/two2)
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
