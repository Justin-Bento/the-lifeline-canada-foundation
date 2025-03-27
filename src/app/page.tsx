import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="container mx-auto lg:p-6 min-h-dvh">
        <section className="space-y-8">
          <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight  lg:text-5xl">
            Mental Health Resources At Your Fingertips
          </h1>
          <p className="max-w-[120ch] text-balance">
            Do you or someone you care about struggle with thoughts of suicide
            or other mental health issues? We’re here to help. The guides, tools
            and resources throughout this site represent a compilation of
            resources from various sources across the Globe as noted.
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
        </section>
      </main>
    </>
  );
}
