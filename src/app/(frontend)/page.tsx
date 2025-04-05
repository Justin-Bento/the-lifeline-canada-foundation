import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <section className="p-6 md:p-12 xl:p-24">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse items-center gap-12">
            <div className="relative w-full aspect-[16/10]">
              <Image
                fill
                src="/media/image/landingPage/home-hero-image.jpg"
                alt="Crisis Resources for Suicide Prevention"
                className="rounded-xl"
              />
            </div>
            <div className="space-y-6">
              <p className="font-mono text-xs font-bold capitalize text-primary lg:text-base/6">
                Mental Wellness Starts Here!
              </p>
              <h1 className="text-4xl font-semibold text-balance scroll-m-20 lg:text-5xl">
                Transforming Mental Health with Compassion and Support.
              </h1>
              <p className="md:text-xl/7 text-foreground/90">
                The LifeLine Canada Foundation (TLC) is a registered non-profit,
                working to foster mental wellness and create meaningful change.
                Through our ongoing projects and initiatives, we aim to provide
                support and raise awareness for mental health in every
                community.
              </p>
              <ul className="pl-6 space-y-6 list-none list-outside md:list-disc">
                <li className="text-sm/6 md:text-base/6 text-balance">
                  We believe that mental health matters, and seeking help is a
                  sign of strength. The guides, tools, and resources available
                  on this site are here to support you and those you care about.
                  They come from a variety of trusted sources worldwide,
                  offering a wealth of information to help guide you toward the
                  support you deserve.
                </li>
              </ul>
              <ul className="flex items-center gap-6">
                <li className="">
                  <Link href="/resources">
                    <Button className="shadow-none">
                      Start Reading &rarr;
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link href="/in-crisis">
                    <Button variant="secondary" className="shadow-none">
                      Support Services &rarr;
                    </Button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
