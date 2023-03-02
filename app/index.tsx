import { Link } from "expo-router";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Index</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Link style={{ color: "red", marginBottom: 30 }} href="/countries">
        Countries (/countries)
      </Link>
      <Link style={{ color: "red", marginBottom: 30 }} href="/two">
        Two (/two)
      </Link>
      <Link style={{ color: "red", marginBottom: 30 }} href="/two2">
        Two2 (/two2)
      </Link>
      <Link style={{ color: "red", marginBottom: 30 }} href="/countries/us/two">
        (/countries/us/two)
      </Link>
      <EditScreenInfo path="app/index.tsx" />
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
