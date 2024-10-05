import React from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import externalStyleSheet from "../styles/styles";
import Card from "../components/Card";

export default function AboutScreen() {
  return (
    <ScrollView>
      <View style={[externalStyleSheet.main_container, externalStyleSheet.flexLeftAlign]}>
        <Card>
          <View style={externalStyleSheet.card_media}>
            <Text>&nbsp;</Text>
          </View>
          <Text style={externalStyleSheet.title_lg}>
            If you, or Someone you know is in Crisis, Call 911 Immediately!
          </Text>
          <Text>The LifeLine Canada is Not a Crisis Hotline.</Text>
          <Pressable style={[externalStyleSheet.button, { width: 230 }]}>
            <Text style={[externalStyleSheet.body2, { color: "#fafafa", fontWeight: "500" }]}>
              View Our Support Services
            </Text>
          </Pressable>
        </Card>
        <Text style={externalStyleSheet.h4}>About Screen</Text>
        <Text style={externalStyleSheet.body1}>
          The LifeLine Canada Foundation (TLC) is a registered non-profit committed to the prevention of suicide and
          positive mental health in Canada and Worldwide. TLC has made work in this area a top priority. We envision a
          country where suicide is a rare event, where people are nurtured and supported, where individuals and families
          are aware of the risk factors for suicide and actively seek help from accessible, effective community
          resources.
        </Text>
        <Text style={externalStyleSheet.body1}>
          We have several other life changing initiatives coming soon in 2023! Some of the activities include the
          expansion of The LifeLine App, expansion of TLC&#39;s website, resources and services, a human approach online
          self management program for mental health struggles developed in collaboration with mental health
          professionals, expansion of TLC&#39;s Companion Paws website as well as further expansion into animal assisted
          therapy.
        </Text>
        <Text style={externalStyleSheet.h4}>Mission Statement</Text>
        <Text style={externalStyleSheet.body1}>
          To aid in suicide reduction across Canada by raising awareness of risk factors, providing access to online
          resources options, and promoting local programs to build mental health resilience for all!
        </Text>
        <Text style={externalStyleSheet.h4}>Vision Statement</Text>
        <Text style={externalStyleSheet.body1}>
          To continue to lower the risk of suicide to where it is a rare event across the country and to build mental
          health resilience for all.
        </Text>
        <Text style={externalStyleSheet.h4}>Values Statement</Text>
        <Text style={externalStyleSheet.body1}>
          To assist in reducing the stigma around mental health conditions, and to promote evidence based resources and
          programs with integrity, respect and inclusion.
        </Text>
      </View>
    </ScrollView>
  );
}
