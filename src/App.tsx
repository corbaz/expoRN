//import { StatusBar } from "expo-status-bar";

import tw from "twrnc";
import { Colores,Titulos } from "./utils/const";

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
import { useEffect, useState } from "react";


export default function App() {
    const app1 = "EXPO JCC";
    const title1 = "";
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks();
    }, []);

    async function getTasks() {
        try {
            const response = await fetch("http://192.168.100.3:2736");
            const data = await response.json();
            console.log(data);
            setTasks(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <Text style={Titulos.twTitleApp}>{Titulos.titleApp}</Text>
            <View style={styles.scrollView}>
                {tasks !== undefined && tasks.map((task) => (
                    <Text key={task.id} style={styles.task}>
                        {task.description}
                    </Text>
                ))}
            </View>
            
            <StatusBar
                animated={true}
                backgroundColor={Platform.select({
                    ios: Colores.backgroundIOS,
                    android: Colores.backgroundAndroid,
                    web: Colores.backgroundWeb,
                })}
                hidden={false}
            />
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
        //width: "100%",
        marginTop: 20,
        padding: 10,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: Platform.OS === "ios" ? 0 : 10,
        borderColor: "white",
        borderWidth: 4,
        backgroundColor: "black",
        elevation: 33,
        shadowOffset: { width: 14, height: 14 },
        shadowOpacity: 0.7,
        shadowRadius: 6,
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },
});
