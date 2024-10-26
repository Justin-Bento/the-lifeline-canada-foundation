import React from "react";
import { View, Text } from "react-native";

interface HeadlineProps {
  title?: string;
  overview?: string;
}

export default function Headline({ title, overview }: HeadlineProps) {
  return (
    <View className="space-y-2">
      <Text className="scroll-m-20 text-3xl font-semibold tracking-tight">
        {title || "Resources"}
      </Text>
      <Text className="text-base leading-6">
        {overview ||
          `Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus natus perferendis rerum nobis fugiat eum dolor dolorem, exercitationem nostrum aperiam, quos odit in, necessitatibus dolorum odio porro deserunt.`}
      </Text>
    </View>
  );
}
