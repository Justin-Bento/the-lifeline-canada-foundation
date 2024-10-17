import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./pages/HomeScreen";
import AboutScreen from "./pages/AboutScreen";
import CallScreen from "./pages/CallScreen";
import GetHelpScreen from "./pages/HelpScreen";
import ResourceScreen from "./pages/ResourceScreen";
import PatternInterruptScreen from "./pages/PatternInterruptScreen";
import DetailsScreen from "./pages/DetailsScreen";
import "./global.css";

const Stack = createNativeStackNavigator();

import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            // Use Tailwind classes with Nativewind
            className: "bg-purple-100",
          },
          headerShadowVisible: false,
          headerTintColor: "black",
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AboutTCL" component={AboutScreen} />
        <Stack.Screen name="Call" component={CallScreen} />
        <Stack.Screen name="GetHelp" component={GetHelpScreen} />
        <Stack.Screen name="Resource" component={ResourceScreen} />
        <Stack.Screen name="Pattern" component={PatternInterruptScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
