import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: Platform.select({
            ios: "green",
            android: "purple",
            web: "blue",
          }),
        },
      ]}
    >
      <Text
        style={[
          styles.title,
          {
            color: Platform.select({
              ios: "fuchsia",
              android: "white",
              web: "yellow",
            }),
          },
        ]}
      >
        EXPO JCC!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    color: "yellow",
  },
});
