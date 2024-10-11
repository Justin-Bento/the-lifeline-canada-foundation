import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { Typography, Layouts } from "../styles/styles";
import Card from "../components/Card";

export default function CallScreen() {
  return (
    <>
      <ScrollView style={Layouts.main_container}>
        <Card style={[Layouts.cardLayout, { marginBottom: 20 }]}>
          <View style={{ marginBottom: 20 }}>
            <View style={[{ paddingHorizontal: 24 }]}>
              <Text style={[Typography.title_lg, { textTransform: "capitalize", textAlign: "center" }]}>
                If you, or Someone you know is in Crisis, Call 911 Immediately!
              </Text>
              <Text style={(Typography.body1, { marginTop: 8, textAlign: "center" })}>
                The LifeLine Canada is Not a Crisis Hotline.
              </Text>
            </View>
            <Image
              source={require("../assets/card_image/cbef1c0010018ea502ee11746ce1486b.png")}
              style={Layouts.mediaImage} // Adjust these values as needed
            />
          </View>
        </Card>
        {call.map((centers, index) => {
          return (
            <View
              key={index}
              style={styles.container}
            >
              <View style={styles.content}>
                <View style={styles.image}>
                  <Text>&nbsp;</Text>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.headline}>{centers.headline}</Text>
                  <Text style={styles.secondary}>{centers.body}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </>
  );
}
const call = [
  {
    headline: "Talk Suicide Canada",
    body: "Productivity",
  },
  {
    headline: "Kids Help Phone",
    body: "Productivity",
  },
  {
    headline: "Chris Text Line",
    body: "Productivity",
  },
  {
    headline: "First Nations",
    body: "Productivity",
  },
  {
    headline: "Trans Life",
    body: "Productivity",
  },
  {
    headline: "First Nations",
    body: "Productivity",
  },
];
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 4,
    marginVertical: 8,
  },
  content: {
    flexDirection: "row",
  },
  image: {
    width: 125,
    height: 100,
    backgroundColor: "#000",
    borderRadius: 4,
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 10,
    justifyContent: "center",
  },
  headline: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  secondary: {
    fontSize: 14,
    color: "#666",
  },
});
