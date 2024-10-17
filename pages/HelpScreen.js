import React from "react";
import { ScrollView, Text } from "react-native";
import { Typography, Layouts } from "../styles/styles";

export default function HelpScreen() {
  return (
    <ScrollView style={Layouts.mainContainer}>
      <Text style={[Typography.h2, { marginBottom: 8 }]}>Get Help</Text>
      <Text style={Typography.body1}>
        If in crisis, call 911 or the Mental Health Crisis Lines provided below.
        The LifeLine Canada Foundation is not a crisis hotline.
      </Text>
    </ScrollView>
  );
}
