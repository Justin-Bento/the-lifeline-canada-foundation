import React from "react";
import Wrapper from "@/components/Wrapper";
import { PageHeader } from "@/components/PageHeader";

export default function page() {
  return (
    <>
      <PageHeader>
        <PageHeader.Banner
          image="/media/image/image-7.jpg"
          alt="Group of actionable words about volenteering."
        />
        <PageHeader.Container>
          <PageHeader.Headline>Email Support!</PageHeader.Headline>
          <PageHeader.Description className="space-y-4">
            <p>
              The LifeLine Canada Foundation (TLC) is a registered non-profit
              committed to the prevention of suicide and positive mental health
              in Canada and Worldwide and has made work in this area a top
              priority. We envision a country where suicide is a rare event,
              where people are nurtured and supported, where individuals and
              families are aware of the risk factors for suicide and actively
              seek help from accessible, effective community resources.
            </p>
          </PageHeader.Description>
        </PageHeader.Container>
      </PageHeader>
      <Wrapper
        height="screen"
        spacing="lg"
        className="space-y-24 border-4 border-dashed  rounded-2xl my-24"
      ></Wrapper>
    </>
  );
}
