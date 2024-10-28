import { Slot, Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Home" }} />

        <Stack.Screen name="about/index" options={{ title: "About" }} />
        <Stack.Screen
          name="crisis-centers/index"
          options={{ title: "Crisis Centers" }}
        />
        <Stack.Screen name="get-help/index" options={{ title: "Get Help" }} />
        <Stack.Screen
          name="more-resources/index"
          options={{ title: "More Resources" }}
        />
        <Stack.Screen
          name="national-hotlines/index"
          options={{ title: "National Hotlines" }}
        />
        <Stack.Screen
          name="self-care-hub/index"
          options={{ title: "Self-Care Hub" }}
        />
        <Stack.Screen
          name="pattern-interrupts/index"
          options={{ title: "Self-Care Hub" }}
        />
        <Slot />
      </Stack>
    </>
  );
}
