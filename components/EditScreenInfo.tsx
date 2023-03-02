import { useLocalSearchParams, useSearchParams } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

import { MonoText } from "./StyledText";
import { View } from "./Themed";

export default function EditScreenInfo({ path }: { path: string }) {
  const searchParams = useSearchParams();
  const localSearchParams = useLocalSearchParams();

  return (
    <View>
      <View style={styles.getStartedContainer}>
        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)"
        >
          <MonoText>Path: {path}</MonoText>
          <MonoText>searchParams: {searchParams.country}</MonoText>
          <MonoText>localSearchParams: {localSearchParams.country}</MonoText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
});
