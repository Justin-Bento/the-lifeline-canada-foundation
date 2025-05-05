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
          <PageHeader.Headline>
            Volunteering with TLC is Fun!
          </PageHeader.Headline>
          <PageHeader.Description className="space-y-4">
            <p>
              We offer enthusiastic volunteers an opportunity to make a
              significant difference in the lives of Canadians in keeping with
              our vision: “To continue to lower the risk of suicide to where it
              is a rare event across the country and to build mental health
              resilience for all.” It is also an opportunity to gain important
              experience in specific vocational areas and/or with the non-profit
              sector.
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
