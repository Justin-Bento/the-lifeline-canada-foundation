import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FlagTriangleRight,
  HeartHandshake,
  HeartPulse,
  PawPrint,
  Smartphone,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="container mx-auto lg:px-6 min-h-dvh space-y-32 py-32">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight  lg:text-5xl">
              Mental Health Resources At Your Fingertips
            </h1>
            <p className="max-w-[120ch] text-balance">
              Do you or someone you care about struggle with thoughts of suicide
              or other mental health issues? We’re here to help. The guides,
              tools and resources throughout this site represent a compilation
              of resources from various sources across the Globe as noted.
            </p>
            <p className="max-w-[120ch] text-balance">
              When clicking 3rd party links, you will be redirected to websites
              not affiliated to, but with the underlying support of The LifeLine
              Canada Foundation.
            </p>
            <div className="flex items-center gap-6">
              <Button className="bg-purple-700 hover:bg-purple-800 shadow-none">
                Start Reading &rarr;
              </Button>
              <Button
                variant="secondary"
                className="bg-purple-100 hover:bg-purple-200 shadow-none"
              >
                Get Involved &rarr;
              </Button>
            </div>
          </div>
          <div className="relative w-full aspect-[16/11]">
            <Image
              fill
              src="/media/image/home-hero-image.jpg"
              alt="Crisis Resources for Suicide Prevention"
              className="rounded-xl"
            />
          </div>
        </section>
        <section className="space-y-3">
          <HeartHandshake className="text-purple-500 size-8" />
          <h2 className="scroll-m-20 text-4xl font-bold tracking-tight capitalize">
            What Can We Help You With?
          </h2>
        </section>
        <section className="space-y-3">
          <Card className="bg-purple-100 rounded-2xl shadow-none border-none">
            <CardContent className="py-32 flex flex-col items-center justify-centerg gap-10">
              <div className="space-y-2 text-center">
                <h2 className="scroll-m-20 text-xl tracking-tight capitalize">
                  The LifeLine Canada Foundation is not a crisis hotline!
                </h2>
                <p className="text-2xl capitalize">
                  In Crisis? Call or Text 988 Canada’s new suicide prevention
                  hotline.
                </p>
                <p className="text-2xl capitalize">
                  If you or someone you know is in danger of hurting themselves
                  or others, call 911 immediately.
                </p>
                <p className="text-xl capitalize">
                  Additionally, see our directory of mental health crisis
                  support in your area.
                </p>
              </div>
              <Button className="shadow-none">Support Services</Button>
            </CardContent>
          </Card>
        </section>
        <section className="space-y-16">
          <div className="space-y-4">
            <Smartphone className="text-purple-500 size-8" />
            <h2 className="scroll-m-20 text-4xl font-bold tracking-tight capitalize">
              Projects Going On The Lifeline Canada Foundation
            </h2>
          </div>
          <div className="space-y-4">
            <HeartPulse className="text-purple-500 size-6" />
            <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0 capitalize">
              The Lifeline App
            </h3>
          </div>
          <div className="space-y-4">
            <PawPrint className="text-purple-500 size-6" />
            <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0 capitalize">
              Companion Paws Canada
            </h3>
          </div>
        </section>
      </main>
    </>
  );
}
