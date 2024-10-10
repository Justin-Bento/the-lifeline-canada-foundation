import React from "react";
import { View, Text, Image } from "react-native";
import { Typography, Layouts } from "../styles/styles";
import Card from "../components/Card";

export default function CallScreen() {
  return (
    <>
      <View style={Layouts.container}>
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
      </View>
    </>
  );
}
