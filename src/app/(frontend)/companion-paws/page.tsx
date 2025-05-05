import { PageHeader } from "@/components/PageHeader";
import Wrapper from "@/components/Wrapper";
import React from "react";

export default function page() {
  return (
    <>
      <PageHeader>
        <PageHeader.Banner
          image="/media/image/image-6.jpg"
          alt="Group of actionable words about volenteering."
        />
        <PageHeader.Container>
          <PageHeader.Headline>Companion Paws Canada (CPC)</PageHeader.Headline>
          <PageHeader.Description className="space-y-4">
            <p>
              Companion Paws is dedicated to supporting Canadians in need while
              providing a second chance for pets in rescues through The LifeLine
              Canada&#39;s (T.L.C.) Companion Paws Therapy Dog Adoption Program
              and a Certify Your Own Dog Program for ones with their own fully
              trained and temperament suitable dogs. TLC&#39;s Companion Paws
              programs are available in all Provinces across Canada.
            </p>
          </PageHeader.Description>
        </PageHeader.Container>
      </PageHeader>
      <Wrapper spacing="md" height="screen">
        <h2>Hello World</h2>
      </Wrapper>
    </>
  );
}
