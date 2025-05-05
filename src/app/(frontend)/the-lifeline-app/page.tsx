import React from "react";
import PageHeader from "@/components/PageHeader";

export default function page() {
  let content = {
    media: {
      URL: "/media/image/image-4.png", // Can be string URL or StaticImageData
      ALT: "King sitting on throne",
    },
    title: "The LifeLine Mobile App",
    description: `The LifeLine App is the National free Suicide Prevention and Awareness App that offers access and guidance to support for those suffering in crisis and those who have suffered the devastating loss of a loved one from suicide. The LifeLine App also provides awareness education and prevention strategies to guide people in crisis all across the Globe. The App was developed as a centralized hub to connect people with accredited resources in Canada and throughout the world.`,
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
