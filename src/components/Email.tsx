import React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";

interface Props {
    app: string;
    title: string;
}
export function Email({ app='RN', title="JCC" }: Props) {
    // const  = [props.app, props.title];

    return (
        <View style={styles.container}>
            <Text
                style={[
                    styles.title,
                    {
                        color: Platform.select({
                            ios: "blue",
                            android: "white",
                            web: "yellow",
                        }),
                    },
                ]}
            >
                {app} - {title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 0,
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "yellow",
    },
});
