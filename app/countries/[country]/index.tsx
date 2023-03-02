import { Link, useLocalSearchParams, useSearchParams } from "expo-router";
import { useEffect } from "react";
import { Alert, StyleSheet } from "react-native";

import EditScreenInfo from "../../../components/EditScreenInfo";
import { Text, View } from "../../../components/Themed";

export default function TabOneScreen() {
  const { country } = useLocalSearchParams<{ country: string }>();

  useEffect(() => {
    if (!country) {
      Alert.alert("No country", "No country", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
  }, [country]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/countries/[country]/index.tsx" />
      <Link style={{ color: "red", marginTop: 30 }} href="/two2">
        Two (../../two2)
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
