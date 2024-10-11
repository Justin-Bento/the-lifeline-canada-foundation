import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { Typography, Layouts } from "../styles/styles";
import Card from "../components/Card";

export default function CallScreen() {
  return (
    <>
      <ScrollView style={Layouts.main_container}>
        <Card style={Layouts.cardLayout}>
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
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={styles.image}>
              <Text>&nbsp;</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.headline}>First Headline for Card</Text>
              <Text style={styles.secondary}>This is secondary</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
    borderRadius: 6,
  },
  content: {
    flexDirection: "row",
    padding: 10,
  },
  image: {
    width: 150,
    height: 100,
    backgroundColor: "#000",
    borderRadius: 12,
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
