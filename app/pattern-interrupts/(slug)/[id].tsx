import { UndoSlug } from "@/constants/utils";
import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View className="flex flex-1 justify-center items-center">
      <Text>Details of user {UndoSlug(id)}</Text>
    </View>
  );
}
