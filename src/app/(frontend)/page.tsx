import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="container mx-auto min-h-dvh space-y-32 py-24  lg:px-6">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full aspect-[16/10]">
            <Image
              fill
              src="/media/image/landingPage/home-hero-image.jpg"
              alt="Crisis Resources for Suicide Prevention"
              className="rounded-xl"
            />
          </div>
          <div className="space-y-6">
            <p className="text-primary font-bold font-mono capitalize">
              Mental Wellness Starts Here!
            </p>
            <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight  lg:text-5xl">
              Transforming Mental Health with Compassion and Support.
            </h1>
            <p className="text-xl/7 text-foreground/90">
              The LifeLine Canada Foundation (TLC) is a registered non-profit,
              working to foster mental wellness and create meaningful change.
              Through our ongoing projects and initiatives, we aim to provide
              support and raise awareness for mental health in every community.
            </p>
            <ul className="pl-6 list-outside list-none md:list-disc space-y-6">
              <li className="leading-6">
                We believe that mental health matters, and seeking help is a
                sign of strength. The guides, tools, and resources available on
                this site are here to support you and those you care about. They
                come from a variety of trusted sources worldwide, offering a
                wealth of information to help guide you toward the support you
                deserve.
              </li>
            </ul>
            <ul className="flex items-center gap-6">
              <li className="">
                <Link href="/resources">
                  <Button className="shadow-none">Start Reading &rarr;</Button>
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
        </section>
      </main>
    </>
  );
}
