import { createStackNavigator } from "@react-navigation/stack";
import withNavBar from "@/screens/NavBar"; // Importamos el HOC
import HomeScreen from "@/screens/HomeScreen";
import TaskScreen from "@/screens/TaskScreen";

const Stack = createStackNavigator();

const NavigationStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={withNavBar(HomeScreen)} // Envolvemos HomeScreen con withNavBar
                options={{ title: "Inicio" }}
            />
            <Stack.Screen
                name="Tasks"
                component={withNavBar(TaskScreen)} // Envolvemos TaskScreen con withNavBar
                options={{ title: "Tareas" }}
            />
        </Stack.Navigator>
    );
};

export default NavigationStack;
