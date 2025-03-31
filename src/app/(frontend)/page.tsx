import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="container mx-auto min-h-dvh space-y-64 py-24  lg:px-6">
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

        {/* Products / Services Section */}
        <section className="space-y-12">
          <span className="">
            <p className="text-xs font-mono">What Can We Help You With?</p>
            <h2 className="mb-10 mt-2 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Mental Health Resources At Your Fingertips.
            </h2>
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-none">
              <CardContent className="space-y-2">
                <CardTitle className="text-lg font-semibold">
                  Mental Health Resources.
                </CardTitle>
                <CardDescription className="line-clamp-3 text-sm/6">
                  The guides, tool kits and resources throughout this site
                  represent a compilation of curated suicide prevention
                  resources from various sources around the world. When clicking
                  3rd party links, you will be redirected to websites not
                  affiliated with, but supported by The LifeLine Canada
                  Foundation.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="shadow-none">
              <CardContent className="space-y-2">
                <CardTitle className="text-lg font-semibold">
                  Pattern Intterupts
                </CardTitle>
                <CardDescription className="line-clamp-3 text-sm/6">
                  A Pattern Interrupt is a way to alter our mental, emotional,
                  or behavioral state in order to break negative habits. Pattern
                  interrupts offer an effective way to break negative cycles and
                  regain control over our actions, thoughts, and emotions. By
                  recognizing our patterns, we can intervene and create new
                  pathways for more productive thoughts, behaviors, and emotions
                  and make lasting changes in our lives.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="shadow-none">
              <CardContent className="space-y-2">
                <CardTitle className="text-lg font-semibold">
                  In Crisis? Need Help?
                </CardTitle>
                <CardDescription className="line-clamp-3 text-sm/6">
                  In Crisis? Call or Text 988 Canada’s new suicide prevention
                  hotline. If you or someone you know is in danger of hurting
                  themselves or others, call 911 immediately. See our directory
                  of mental health crisis support in your area below. Seek the
                  advice of an appropriately qualified healthcare professional
                  before making decisions about your circumstances.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="shadow-none">
              <CardContent className="space-y-2">
                <CardTitle className="text-lg font-semibold">
                  The LifeLine Application
                </CardTitle>
                <CardDescription className="line-clamp-3 text-sm/6">
                  The LifeLine App is a free Suicide Prevention and Awareness
                  App that offers access and guidance to support for those
                  suffering in crisis, and those who have suffered the
                  devastating loss of a loved one from suicide, as well as for
                  those struggling with any degree of anxiety or depression. The
                  LifeLine App also provides awareness, education and prevention
                  strategies to guide people in crisis.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="">
            <Button>View More</Button>
          </div>
        </section>
      </main>
    </>
  );
}
