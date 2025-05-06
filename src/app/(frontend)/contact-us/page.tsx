import React from "react";
import Wrapper from "@/components/Wrapper";
import { PageHeader } from "@/components/PageHeader";

export default function page() {
  return (
    <>
      <PageHeader>
        <PageHeader.Banner
          image="/media/image/image-8.png"
          alt="Group of actionable words about volenteering."
        />
        <PageHeader.Container>
          <PageHeader.Headline>Contact Us</PageHeader.Headline>
          <PageHeader.Description className="space-y-4">
            <p>
              For non crisis questions and comments or to contact The LifeLine
              Canada Foundation about collaborating please use the contact form
              below.
            </p>
          </PageHeader.Description>
        </PageHeader.Container>
      </PageHeader>
      <Wrapper
        height="screen"
        spacing="lg"
        className="space-y-24 border-4 border-dashed rounded-2xl my-24"
      ></Wrapper>
    </>
  );
}
