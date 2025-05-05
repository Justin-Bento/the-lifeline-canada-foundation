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
          <PageHeader.Headline>
            The LifeLine Canada Foundation (or TLC)
          </PageHeader.Headline>
          <PageHeader.Description className="space-y-4">
            <p>
              The LifeLine Canada Foundation (or TLC) is a registered
              non-profit, committed to positive mental health and suicide
              prevention & awareness and is constantly developing new
              initiatives in support of these goals.
            </p>
            <p>
              The LifeLine Canada Foundation is not a crisis hotline. If in
              Crisis, call or text 988 for Canada&#39;s new suicide prevention
              hotline. If you or someone you know is in danger of hurting
              themselves or others, call 911 immediately. See our directory of
              mental health crisis support in your area.
            </p>
          </PageHeader.Description>
        </PageHeader.Container>
      </PageHeader>
      <article className="">
        <Wrapper height="screen" spacing="md" className="space-y-8">
          <section className="">
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Our Mission
            </h2>
            <p className="text-lg tracking-wide">
              To aid in suicide reduction across Canada by raising awareness of
              risk factors, delivering programs for positive mental health
              development, providing access to available resource options, and
              promoting local programs to build mental health resilience for
              all.
            </p>
          </section>
        </Wrapper>
      </article>
    </>
  );
}
