//import { StatusBar } from "expo-status-bar";

import tw from "twrnc";

import {
    Image,
    Platform,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    View,
} from "react-native";
import { Email } from "./components/Email";
import { TasksDB } from "./db/db";
import { useState } from "react";

export default function App() {
    const app1 = "EXPO JCC";
    const title1 = "2024";
    const [task, settask] = useState(TasksDB);

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScrollView
                showsVerticalScrollIndicator={true}
                //overScrollMode="never"
                style={styles.scrollView}
            >
                <View style={{ backgroundColor: "yellow" }}>
                    <View
                        style={[
                            { justifyContent: "center", alignItems: "center" },
                            tw.style("bg-blue-900"),
                        ]}
                    >
                        <Text
                            style={[
                                styles.task,
                                tw.style(
                                    "bg-purple-500 hover:bg-purple-700 text-white text-center my-8 py-2 px-4 rounded"
                                ),
                            ]}
                        >
                            Hello
                        </Text>
                        <Text
                            style={tw.style(
                                "bg-indigo-500 hover:bg-indigo-700 text-white py-2 px-4 rounded items-center my-8"
                            )}
                        >
                            Hello
                        </Text>
                        <View
                            style={tw.style(
                                "max-w-sm rounded overflow-hidden shadow-lg bg-green-300 mb-4"
                            )}
                        >
                            <Image
                                style={tw.style("w-32 h-32 mx-auto my-4")}
                                source={require("./assets/icon.png")}
                            />
                            <View style={tw.style("px-6 py-4")}>
                                <Text
                                    style={tw.style("font-bold text-xl mb-2")}
                                >
                                    The Coldest Sunset
                                </Text>
                                <Text
                                    style={tw.style("text-gray-700 text-base")}
                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Voluptatibus quia, nulla!
                                    Maiores et perferendis eaque, exercitationem
                                    praesentium nihil.
                                </Text>
                            </View>
                            <View
                                style={tw.style(
                                    "flex flex-row justify-evenly pt-4 pb-2"
                                )}
                            >
                                <Text
                                    style={tw.style(
                                        "bg-gray-200 rounded-2xl p-2 text-sm font-semibold text-gray-700"
                                    )}
                                >
                                    #photographyText
                                </Text>
                                <Text
                                    style={tw.style(
                                        "bg-gray-200 rounded-2xl p-2 text-sm font-semibold text-gray-700"
                                    )}
                                >
                                    #travel
                                </Text>
                                <Text
                                    style={tw.style(
                                        "bg-gray-200 rounded-2xl p-2 text-sm font-semibold text-gray-700"
                                    )}
                                >
                                    #winter
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View
                        style={[
                            { justifyContent: "center", alignItems: "center" },
                            tw.style("bg-pink-900"),
                        ]}
                    >
                        <Email app={app1} title={title1} />
                    </View>

                    <View
                        style={[
                            { justifyContent: "center", alignItems: "center" },
                            tw.style("bg-pink-900"),
                        ]}
                    >
                        {/* <Flat /> */}
                        {task.map((task) => (
                            <Text
                                style={tw.style(
                                    "w-full text-center bg-yellow-500 text-[1rem]"
                                )}
                                key={task.id}
                            >
                                {task.description}
                            </Text>
                        ))}
                    </View>
                    <StatusBar
                        animated={true}
                        backgroundColor="fuchsia"
                        hidden={false}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        paddingTop: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Platform.select({
            ios: "fuchsia",
            android: "blue",
            web: "yellow",
        }),
    },
    scrollView: {
        flex: 1,
        width: "100%",
        //height: "100%",
        marginBottom: 0,
        marginTop: 0,
        padding: 0,
        backgroundColor: Platform.select({
            ios: "green",
            android: "green",
            web: "red",
        }),
    },
    task: {
        width: "50%",
        marginTop: 10,
        padding: 10,
        borderRadius: 36,
        borderColor: "white",
        borderWidth: 2,
        backgroundColor: "purple",
        elevation: 3,
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.7,
        shadowRadius: 6,
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },
});
