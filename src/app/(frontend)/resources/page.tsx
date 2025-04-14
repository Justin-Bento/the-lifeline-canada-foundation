import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { resourcesPage } from "@/lib/data";
import { createSlug } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <main className="container mx-auto min-h-dvh px-6 lg:py-24">
      <h1 className="scroll-m-20 text-4xl font-semibold lg:text-5xl">
        Resources
      </h1>
      <div className="max-w-2xl text-balance space-y-4 mt-4">
        <p className="">
          In Crisis? Call or Text 988 Canada’s new suicide prevention hotline.
          If you or someone you know is in danger of hurting themselves or
          others, call 911 immediately. See our directory of mental health
          crisis support in your area.
        </p>
        <p>
          This site provides information about anxiety, depression and suicide.
          Online resources alone are not a substitute for professional medical
          advice, diagnosis or treatment. Seek the advice of an appropriately
          qualified healthcare professional before making decisions about your
          circumstances.
        </p>
        <p>
          The guides, tool kits and resources throughout this site represent a
          compilation of curated suicide prevention resources from various
          sources around the world. When clicking 3rd party links, you will be
          redirected to websites not affiliated with, but supported by The
          LifeLine Canada Foundation.
        </p>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-9 mt-12">
        {resourcesPage.map((resource, index) => (
          <li key={index}>
            <Card className="relative isolate shadow-none pt-0 overflow-hidden group:">
              <CardHeader className="relative w-full aspect-video">
                <Image fill src="" alt="#" className="bg-muted-foreground" />
              </CardHeader>
              <CardContent>
                <Link
                  href={`/resources/${createSlug(resource.title)}`}
                  className="text-lg font-semibold group-hover:underline"
                >
                  <span className="absolute inset-0 hover:bg-purple-300/10 z-10"></span>
                  {resource.title}
                </Link>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </main>
  );
}
