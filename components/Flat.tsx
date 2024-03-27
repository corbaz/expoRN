import React from "react";
import { FlashList, View, StyleSheet, Platform } from "react-native";

interface props {
    app: string;
    title: string;
}
export default function Email(props: props) {
    const [app, title] = [props.app, props.title];

    return (
        <View style={styles.container}>
            <FlashList
                estimatedItemSize={128}
                refreshing={loading}
                onRefresh={() => onRefresh(userInfo)}
                contentContainerStyle={{
                    paddingBottom: 120,
                    paddingHorizontal: 16,
                    paddingTop: 10,
                }}
                data={providers}
                renderItem={renderProviders}
                keyExtractor={(_, index) => index.toString()}
                ListEmptyComponent={renderEmptyContainer}
            />
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
