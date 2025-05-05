import React from "react";
import Wrapper from "@/components/Wrapper";
import { PageHeader } from "@/components/PageHeader";

export default function page() {
  return (
    <>
      <PageHeader>
        <PageHeader.Banner
          image="/media/image/image-4.png"
          alt="Group of actionable words about volenteering."
        />
        <PageHeader.Container>
          <PageHeader.Headline>The LifeLine Mobile App</PageHeader.Headline>
          <PageHeader.Description className="space-y-4">
            <p>
              The LifeLine App is the National free Suicide Prevention and
              Awareness App that offers access and guidance to support for those
              suffering in crisis and those who have suffered the devastating
              loss of a loved one from suicide.
            </p>
            <p>
              The LifeLine App also provides awareness education and prevention
              strategies to guide people in crisis all across the Globe. The App
              was developed as a centralized hub to connect people with
              accredited resources in Canada and throughout the world.
            </p>
          </PageHeader.Description>
        </PageHeader.Container>
      </PageHeader>
      <Wrapper
        height="screen"
        spacing="lg"
        className="space-y-24 border-4 border-dashed bg-gray-300 rounded-2xl my-24"
      ></Wrapper>
    </>
  );
}
