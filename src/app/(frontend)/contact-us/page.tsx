import React from "react";
import PageHeader from "@/components/PageHeader";

export default function page() {
  let content = {
    media: {
      URL: "/media/image/image-8.png", // Can be string URL or StaticImageData
      ALT: "Group of actionable words about volenteering.",
    },
    title: "Contact Us",
    description: `For non crisis questions and comments or to contact The LifeLine Canada Foundation about collaborating please use the contact form below.`,
  };
  return (
    <>
      <div className="">
        <PageHeader
          Banner={content.media}
          Title={content.title}
          Description={content.description}
        />
      </div>
    </>
  );
}
