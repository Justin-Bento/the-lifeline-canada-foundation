import React from "react";
import { View, Text, ScrollView, Image } from "react-native";

export default function AboutScreen() {
  return (
    <ScrollView className="my-8">
      <View className="w-11/12 mx-auto space-y-4">
        <View className="bg-white shadow-sm rounded-md p-4 border border-gray-300 overflow-hidden">
          <Text className="text-lg font-bold text-center">
            If you, or Someone you know is in Crisis, Call 911 Immediately!
          </Text>
          <Text className="text-base/7 text-center mt-2">
            The LifeLine Canada is Not a Crisis Hotline.
          </Text>
          <Image
            source={require("../assets/card_image/cbef1c0010018ea502ee11746ce1486b.png")}
            className="w-full h-52 rounded-lg mb-3.5" // Adjusted based on your style
          />
        </View>
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
