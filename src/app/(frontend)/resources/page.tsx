import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Wrapper from "@/components/Wrapper";
import { resourcesPage } from "@/lib/data";
import { createSlug } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <main className="min-h-dvh">
      <div className="relative w-full h-96">
        <Image
          fill
          alt=""
          src="/media/image/image-3.jpg"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-white" />
      </div>
      <Wrapper layout="fullHeight" whiteSpace="medium">
        <h1 className="scroll-m-20 text-4xl font-semibold lg:text-5xl">
          Resources
        </h1>
        <div className="max-w-4xl text-xl text-balance space-y-4 mt-4">
          <p>
            This site provides information about anxiety, depression and
            suicide. Online resources alone are not a substitute for
            professional medical advice, diagnosis or treatment. Seek the advice
            of an appropriately qualified healthcare professional before making
            decisions about your circumstances.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
          <Card className="flex items-center justify-center lg:col-span-2 shadow-none border-0 bg-purple-100 lg:my-12">
            <CardContent>
              <p className="max-w-4xl text-balance">
                The guides, tool kits and resources throughout this site
                represent a compilation of curated suicide prevention resources
                from various sources around the world. When clicking 3rd party
                links, you will be redirected to websites not affiliated with,
                but supported by The LifeLine Canada Foundation.
              </p>
            </CardContent>
          </Card>
          <Card className=" flex items-center justify-centershadow-none border-0 bg-purple-100 lg:my-12">
            <CardContent>
              <p className="max-w-4xl text-balance">
                In Crisis? Call or Text 988 Canada’s new suicide prevention
                hotline. If you or someone you know is in danger of hurting
                themselves or others, call 911 immediately. See our directory of
                mental health crisis support in your area.
              </p>
            </CardContent>
          </Card>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-9 my-12">
          {resourcesPage.map((resource, index) => (
            <li key={index}>
              <Card className="relative isolate shadow-none pt-0 overflow-hidden group:">
                <CardHeader className="relative w-full aspect-video">
                  <Image
                    fill
                    src={`/media/image/resourcesPage/${resource.media.image}`}
                    alt={resource.media.alt}
                    className="object-cover"
                  />
                </CardHeader>
                <CardContent>
                  <Link
                    href={`/resources/${createSlug(resource.title)}`}
                    className="text-lg font-semibold group-hover:underline capitalize"
                  >
                    <span className="absolute inset-0 hover:bg-purple-300/10 z-10"></span>
                    {resource.title}
                  </Link>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </Wrapper>
    </main>
  );
}
