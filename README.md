```bash
npx create-expo-app expoRN
```

✔ Downloaded and extracted project files.

✔ Installed JavaScript dependencies.

✅ Your project is ready!

To run your project, navigate to the directory and run one of the following npm commands.

```bash
- cd expoRN
- npm run android
- npm run ios
- npm run web
```

A new version of `create-expo-app` is available
You can update by running:

```bash
npm install -g create-expo-app

npx expo install react-native-web react-dom @expo/metro-runtime 


lsof -i :8081

kill 93928
```

```typescript
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Text
                style={[
                    styles.title,
                    {
                        color: Platform.OS === "ios" ? "white" : "blue",
                        fontSize: Platform.OS === "ios" ? 40 : 42,
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
```

## Expo CLI

npx expo --help

  Usage
    $ npx expo <command>

  Commands

    start 
    export
    run:ios,
    run:android, 
    prebuild
    install
    customize
    config
    login
    logout
    whoami
    register

  Options:

    --version, -v   Version number

    --help, -h      Usage info

  For more info run a command with the --help flag
  
    $ npx expo start --help

## Cloudflared

cloudflared tunnel --url http://localhost:8081