import { useEffect, useState } from "react";
import {
    View,
    Text,
    SafeAreaView,
    Platform,
    StatusBar,
    StyleSheet,
} from "react-native";

import { Colores, Titulos } from "@/utils/const";
import { Task } from "@/interfaces/types";

const TaskScreen = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

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
        <View style={styles.safeAreaView}>
            <Text style={Titulos.twTitleApp}>{Titulos.titleApp}</Text>
            <View style={styles.scrollView}>
                {tasks !== undefined &&
                    tasks.map((task) => (
                        <Text key={task.id} style={styles.task}>
                            {task.title} {"\n"}
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
        </View>
    );
};

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        //paddingTop: -100,
        alignItems: "center",
        //justifyContent: "center",
        backgroundColor: Platform.select({
            ios: "fuchsia",
            android: "blue",
            web: "cyan",
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
        height: 70,
    },
});

export default TaskScreen;
