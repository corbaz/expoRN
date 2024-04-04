import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { FlashList } from "@shopify/flash-list";

interface Contact {
    firstName: string;
    lastName: string;
}

const contacts: (string | Contact)[] = [
    "A",
    { firstName: "John", lastName: "Aaron" },
    { firstName: "Julio", lastName: "Corbaz" },
    "D",
    { firstName: "John", lastName: "Doe" },
    { firstName: "Mary", lastName: "Dianne" },
    "E",
    { firstName: "John", lastName: "Erick" },
    { firstName: "Mary", lastName: "Erickson" },
    "F",
    { firstName: "John", lastName: "Fisher" },
    { firstName: "Mary", lastName: "Fisher" },
    "G",
    { firstName: "John", lastName: "Garcia" },
    { firstName: "Mary", lastName: "Garcia" },
];

const stickyHeaderIndices = contacts
    .map((item, index) => {
        if (typeof item === "string") {
            return index;
        } else {
            return null;
        }
    })
    .filter((item) => item !== null) as number[];

export default function Flat() {
    return (
        <View
            style={{
                height: 200,
                width: Dimensions.get("screen").width,
            }}
        >
            <FlashList
                data={contacts}
                renderItem={({ item }) => {
                    if (typeof item === "string") {
                        // Rendering header
                        return <Text style={styles.header}>{item}</Text>;
                    } else {
                        // Render item
                        return <Text>{item.firstName}</Text>;
                    }
                }}
                stickyHeaderIndices={stickyHeaderIndices}
                getItemType={(item) => {
                    // To achieve better performance, specify the type based on the item
                    return typeof item === "string" ? "sectionHeader" : "row";
                }}
                estimatedItemSize={10}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        fontSize: 22,
        backgroundColor: "green",
    },
});
