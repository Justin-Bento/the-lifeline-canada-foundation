import React, { useState } from "react";
import { View, Text, Pressable, Image, Linking } from "react-native";

export default function ContentCard({
  href,
  title,
  supporting,
  image,
  imageAlt,
}) {
  const [opacity, setOpacity] = useState(1);

  const handlePressIn = () => setOpacity(0.5);
  const handlePressOut = () => setOpacity(1);
  const openURL = () => Linking.openURL(href ?? "https://www.example.com");

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={openURL}
      style={{ opacity }}
      className="bg-white border border-gray-300 rounded-lg my-2 last:mb-32"
    >
      <View className="w-full h-60 bg-gray-200">
        {image ? (
          <Image
            source={{ uri: image }}
            alt={imageAlt ?? "Image"}
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <Text>&nbsp;</Text>
        )}
      </View>
      <View className="p-5">
        <Text className="text-sm font-medium text-gray-400">{supporting}</Text>
        <Text className="text-2xl font-medium capitalize">{title}</Text>
      </View>
    </Pressable>
  );
}
