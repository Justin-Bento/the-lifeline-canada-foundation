import React from "react";
import { ScrollView } from "react-native";
import Headline from "../components/Headline";

export default function ResourceScreen() {
  return (
    <ScrollView className="w-11/12 mx-auto pt-6">
      <Headline
        title="Resources"
        supporting="This app provides information about anxiety, depression and suicide. Online resources alone are no substitute for professional medical advice, diagnosis or treatment. Seek the advice of an appropriately qualified healthcare professional before making decisions about your circumstances."
      />
    </ScrollView>
  );
}
