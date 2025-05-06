import { PageHeader } from "@/components/PageHeader";
import Wrapper from "@/components/Wrapper";
import React from "react";

export default function page() {
  return (
    <>
      <PageHeader>
        <PageHeader.Banner
          image="/media/image/image-9.jpg"
          alt="Group of actionable words about volenteering."
        />
        <PageHeader.Container>
          <PageHeader.Headline className="flex flex-col-reverse">
            See How We&#39;re Making a Difference!
            <span className="text-xs font-medium tracking-wide text-purple-500 m-0 p-0">
              TLC Projects
            </span>
          </PageHeader.Headline>
          <PageHeader.Description>
            From community outreach to large-scale initiatives, each of our
            projects is a deliberate step toward a brighter, more equitable
            future. Through education, empowerment programs, we&#39;re creating
            measurable change by being a central hub for all things mental
            health.
          </PageHeader.Description>
        </PageHeader.Container>
      </PageHeader>
      <Wrapper
        height="screen"
        spacing="md"
        className="space-y-16 lg:space-y-24"
      >
        <article className="">
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight">
            The LifeLine Mobile App
          </h2>
        </article>
        <article className="">
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight">
            Companion Paws Canada (CPC)
          </h2>
        </article>
      </Wrapper>
    </>
  );
}
