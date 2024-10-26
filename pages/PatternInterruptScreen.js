import React from "react";
import { ScrollView, View, Text } from "react-native";
import Headline from "../components/Headline";

export default function PatternInterruptScreen() {
  return (
    <ScrollView className="w-11/12 pt-8 mx-auto flex-1 flex-col space-y-4">
      <View>
        <Headline
          title="Pattern Interrupts"
          supporting="Pattern Interrupts are a way to change a person’s pattern of thought. We all have behavior patterns that are habit sequences. Usually habits are useful. Auto pilot means our brains have become so efficient at doing something we can tune out our conscious minds which excels at running patterns or programs automatically. This sometimes can present a problem when trying to change your own or someone else’s habitual patterns of thought, emotion or behavior. It is useful to interrupt a pattern when stuck in a non resourceful state."
        />
      </View>
    </ScrollView>
  );
}
