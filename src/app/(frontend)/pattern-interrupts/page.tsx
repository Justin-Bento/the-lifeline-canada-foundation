import React from "react";
import Wrapper from "@/components/Wrapper";
import { PageHeader } from "@/components/PageHeader";

export default function page() {
  return (
    <>
      <PageHeader>
        <PageHeader.Banner
          image="/media/image/image-2.png"
          alt="Group of actionable words about volenteering."
        />
        <PageHeader.Container>
          <PageHeader.Headline>Pattern Interruptions</PageHeader.Headline>
          <PageHeader.Description className="space-y-4">
            <p>
              A Pattern Interrupt is a way to alter our mental, emotional, or
              behavioral state in order to break negative habits. Pattern
              interrupts offer an effective way to break negative cycles and
              regain control over our actions, thoughts, and emotions.
            </p>
            <p>
              By recognizing our patterns, we can intervene and create new
              pathways for more productive thoughts, behaviors, and emotions and
              make lasting changes in our lives.
            </p>
          </PageHeader.Description>
        </PageHeader.Container>
      </PageHeader>
      <Wrapper
        height="screen"
        spacing="lg"
        className="space-y-24 border-4 border-dashed bg-gray-300 rounded-2xl mt-8"
      ></Wrapper>
    </>
  );
}
