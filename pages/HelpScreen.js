import React from "react";
import { View, ScrollView, Text } from "react-native";
import { Typography, Layouts } from "../styles/styles";

export default function HelpScreen() {
  return (
    <ScrollView style={Layouts.mainContainer}>
      <Text style={[Typography.h2, { marginBottom: 8 }]}>Get Help</Text>
      <Text style={Typography.body1}>
        If in crisis, call 911 or the Mental Health Crisis Lines provided below.
        The LifeLine Canada Foundation is not a crisis hotline.
      </Text>
      <View
        style={[
          { backgroundColor: "#fff" },
          { padding: 20 },
          { marginVertical: 20 },
          { borderWidth: 1 },
          { borderColor: "#e4e4e7" },
          { borderRadius: 5 },
        ]}
      >
        <Text style={[Typography.body2]}>Numbers of Support</Text>
        <Text style={[Typography.titleXL, { marginTop: 4 }]}>
          Canada Crisis Center
        </Text>
      </View>
    </ScrollView>
  );
}
