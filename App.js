import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Text
                style={[
                    styles.title,
                    {
                        color: Platform.select({
                            ios: "cyan",
                            android: "pink",
                            web: "green",
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
