import { Link } from "expo-router";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Countries/Index</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Link style={{ color: "red", marginBottom: 30 }} href="/countries/us">
        United States
      </Link>
      <Link style={{ color: "red", marginBottom: 30 }} href="/countries/de">
        Germany
      </Link>
      <Link style={{ color: "red", marginBottom: 30 }} href="/countries/sg">
        Singapore
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
