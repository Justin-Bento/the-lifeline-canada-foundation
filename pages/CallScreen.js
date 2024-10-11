import React from "react";
import { View, Text, ScrollView, FlatList, Image } from "react-native";
import { Layouts, Spacing, Typography } from "../styles/styles";
import Card from "../components/Card";

export default function CallScreen() {
  return (
    <ScrollView>
      <Card style={Layouts.cardLayout}>
        <View style={{ marginBottom: 20 }}>
          <Text style={[Typography.titleLG, { textTransform: "capitalize", textAlign: "center" }]}>
            If you, or Someone you know is in Crisis, Call 911 Immediately!
          </Text>
          <Text style={(Typography.body1, { marginTop: 8, textAlign: "center" })}>
            The LifeLine Canada is Not a Crisis Hotline.
          </Text>
          <Image
            source={require("../assets/card_image/cbef1c0010018ea502ee11746ce1486b.png")}
            style={Layouts.mediaImage} // Adjust these values as needed
          />
        </View>
      </Card>
      <FlatList
        data={nationwideCrisisCentres}
        renderItem={({ item }) => (
          <View style={Layouts.cardContainer}>
            {/* Left side (50%) */}
            <View style={Spacing.leftContainer}>
              <Image
                source={{ uri: "https://picsum.photos/300/150" }} // Replace with your image URL or local image path
                style={Layouts.image}
              />
            </View>
            {/* Right side (50%) */}
            <View style={Spacing.rightContainer}>
              <Text style={Typography.h5}>{item.title}</Text>
              <Text style={Typography.body2}>{item.number}</Text>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
}

const nationwideCrisisCentres = [
  { title: "Talk Suicide Canada", number: "Call: 1-833-456-4566" },
  { title: "Kids Help Phone", number: "Call: 1-800-668-6868" },
  { title: "Crisis Text Line", number: "TALK to 686868" },
  { title: "First Nations Residential Schools", number: "Call: 1-866-925-4419" },
  { title: "Trans Lifeline", number: "Call: 1-877-330-6366, All Ages" },
  { title: "First Nations & Inuit Hope For Wellness", number: "Call: 1-855-242-3310  24/7" },
];
