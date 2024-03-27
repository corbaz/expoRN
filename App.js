import {
    Platform,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    StatusBar,
} from "react-native";
import Email from "./components/Email";

export default function App() {
    const app1 = "Expo";
    const title1 = "JCC 2024";

    return (
        <SafeAreaView
            style={[
                styles.safeAreaView,
                {
                    backgroundColor: Platform.select({
                        ios: "fuchsia",
                        android: "blue",
                        web: "yellow",
                    }),
                },
            ]}
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
                //overScrollMode="never"
                style={[
                    styles.scrollView,
                    {
                        flex: 1,
                        height: 300,
                        width: "80%",
                        padding: 10,
                        backgroundColor: Platform.select({
                            ios: "fuchsia",
                            android: "gray",
                            web: "red",
                        }),
                    },
                ]}
            >
                <Email app={app1} title={title1} />

                <StatusBar
                    animated={true}
                    backgroundColor="#61dafb"
                    hidden={false}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        //paddingTop: StatusBar.currentHeight,
        alignItems: "center",
        justifyContent: "center",
    },
    scrollView: {
        flex: 1,
        width: "100%",
        height: "100%",
        marginBottom: 0,
    },
});
