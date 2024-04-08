import StartScreen from "./screen/StartScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Color} from "./constant/color";
import DeviceDataScreen from "./screen/DeviceDataScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <>
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: Color.statusBarBg },
                    headerTintColor: Color.statusBarText,
                    contentStyle: { backgroundColor: Color.screenBg }
                }}
            >
                <Stack.Screen
                    name='StartScreen'
                    component={StartScreen}
                    options={{
                        title: 'Scan'
                    }}
                />
                <Stack.Screen
                    name='DeviceDataScreen'
                    component={DeviceDataScreen}
                    options={{
                        title: 'Device data'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
      </>
  );
}
