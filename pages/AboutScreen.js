import React from "react";
import { View, Text } from "react-native";
import externalStyleSheet from "../styles/styles";

export default function AboutScreen() {
  return (
    <View style={externalStyleSheet.container}>
      <Text style={externalStyleSheet.headline}>About Screen</Text>
      <Text style={externalStyleSheet.paragraph}>
        The LifeLine Canada Foundation (TLC) is a registered non-profit committed to the prevention of suicide and
        positive mental health in Canada and Worldwide. TLC has made work in this area a top priority. We envision a
        country where suicide is a rare event, where people are nurtured and supported, where individuals and families
        are aware of the risk factors for suicide and actively seek help from accessible, effective community resources.
      </Text>
      <Text style={externalStyleSheet.paragraph}>
        We have several other life changing initiatives coming soon in 2023! Some of the activities include the
        expansion of The LifeLine App, expansion of TLC&#39;s website, resources and services, a human approach online
        self management program for mental health struggles developed in collaboration with mental health professionals,
        expansion of TLC&#39;s Companion Paws website as well as further expansion into animal assisted therapy.
      </Text>
      <Text style={externalStyleSheet.headline}>Mission Statement</Text>
      <Text style={externalStyleSheet.paragraph}>
        To aid in suicide reduction across Canada by raising awareness of risk factors, providing access to online
        resources options, and promoting local programs to build mental health resilience for all!
      </Text>
      <Text style={externalStyleSheet.headline}>Vision Statement</Text>
      <Text style={externalStyleSheet.paragraph}>
        To continue to lower the risk of suicide to where it is a rare event across the country and to build mental
        health resilience for all.
      </Text>
      <Text style={externalStyleSheet.headline}>Values Statement</Text>
      <Text style={externalStyleSheet.paragraph}>
        To assist in reducing the stigma around mental health conditions, and to promote evidence based resources and
        programs with integrity, respect and inclusion.
      </Text>
    </View>
  );
}
