import React from "react";
import { View, Text, Button } from "react-native";

const NavBar = (Component) => {
    const HOC = ({ navigation, ...props }) => {
        return (
            <View style={{ flex: 1, backgroundColor:"pink" }}>
                <Text style={{color: "red"}}>{navigation.title}</Text>
                {navigation.canGoBack() && (
                    <Button title="Volver" onPress={navigation.goBack} />
                )}
                <Component {...props} />
            </View>
        );
    };

    return HOC;
};

export default NavBar;
