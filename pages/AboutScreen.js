import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import CallImmediately from "../components/CallImmediately";

export default function AboutScreen() {
  return (
    <ScrollView className="my-8">
      <View className="w-11/12 mx-auto space-y-4">
        <CallImmediately />
        <Text className="text-2xl font-medium">About Screen</Text>
        <Text className="text-md leading-5">
          The LifeLine Canada Foundation (TLC) is a registered non-profit
          committed to the prevention of suicide and positive mental health in
          Canada and Worldwide. TLC has made work in this area a top priority.
          We envision a country where suicide is a rare event, where people are
          nurtured and supported, where individuals and families are aware of
          the risk factors for suicide and actively seek help from accessible,
          effective community resources.
        </Text>
        <Text className="text-md leading-5">
          We have several other life changing initiatives coming soon in 2023!
          Some of the activities include the expansion of The LifeLine App,
          expansion of TLC&#39;s website, resources and services, a human
          approach online self management program for mental health struggles
          developed in collaboration with mental health professionals, expansion
          of TLC&#39;s Companion Paws website as well as further expansion into
          animal assisted therapy.
        </Text>
        <Text className="text-2xl font-medium">Mission Statement</Text>
        <Text className="text-md leading-5">
          To aid in suicide reduction across Canada by raising awareness of risk
          factors, providing access to online resources options, and promoting
          local programs to build mental health resilience for all!
        </Text>
        <Text className="text-2xl font-medium">Vision Statement</Text>
        <Text className="text-md leading-5">
          To continue to lower the risk of suicide to where it is a rare event
          across the country and to build mental health resilience for all.
        </Text>
        <Text className="text-2xl font-medium">Values Statement</Text>
        <Text className="text-md leading-5">
          To assist in reducing the stigma around mental health conditions, and
          to promote evidence based resources and programs with integrity,
          respect and inclusion.
        </Text>
      </View>
    </ScrollView>
  );
}
