import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Brain, Notebook, PhoneCall, Smartphone } from "lucide-react";
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
            <Card className="shadow-none group relative isolate overflow-hidden hover:border-foreground/25 hover:cursor-pointer">
              <CardContent className="space-y-2">
                <Notebook className="size-5" />
                <CardTitle className="text-lg font-semibold">
                  Mental Health Resources.
                  <span className="absolute inset-0 group-hover:bg-foreground/5 z-10"></span>
                </CardTitle>
                <CardDescription className="line-clamp-3 text-sm/6">
                  The guides, tool kits and resources throughout this site
                  represent a compilation of curated suicide prevention
                  resources from various sources around the world. When clicking
                  3rd party links, you will be redirected to websites not
                  affiliated with, but supported by The LifeLine Canada
                  Foundation.
                </CardDescription>
                <CardDescription className="line-clamp-3 text-sm/6 group-hover:underline">
                  See More
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="shadow-none group relative isolate overflow-hidden hover:border-foreground/25 hover:cursor-pointer">
              <CardContent className="space-y-2">
                <Brain className="size-5" />
                <Link href="#">
                  <CardTitle className="text-lg font-semibold">
                    Pattern Intterupts
                    <span className="absolute inset-0 group-hover:bg-foreground/5 z-10"></span>
                  </CardTitle>
                </Link>
                <CardDescription className="line-clamp-3 text-sm/6">
                  A Pattern Interrupt is a way to alter our mental, emotional,
                  or behavioral state in order to break negative habits. Pattern
                  interrupts offer an effective way to break negative cycles and
                  regain control over our actions, thoughts, and emotions. By
                  recognizing our patterns, we can intervene and create new
                  pathways for more productive thoughts, behaviors, and emotions
                  and make lasting changes in our lives.
                </CardDescription>
                <CardDescription className="line-clamp-3 text-sm/6 group-hover:underline">
                  See More
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="shadow-none group relative isolate overflow-hidden hover:border-foreground/25 hover:cursor-pointer">
              <CardContent className="space-y-2">
                <PhoneCall className="size-5" />
                <Link href="#">
                  <CardTitle className="text-lg font-semibold">
                    In Crisis? Need Help?
                    <span className="absolute inset-0 group-hover:bg-foreground/5 z-10"></span>
                  </CardTitle>
                </Link>
                <CardDescription className="line-clamp-3 text-sm/6">
                  In Crisis? Call or Text 988 Canada’s new suicide prevention
                  hotline. If you or someone you know is in danger of hurting
                  themselves or others, call 911 immediately. See our directory
                  of mental health crisis support in your area below. Seek the
                  advice of an appropriately qualified healthcare professional
                  before making decisions about your circumstances.
                </CardDescription>
                <CardDescription className="line-clamp-3 text-sm/6 group-hover:underline">
                  See More
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="shadow-none group relative isolate overflow-hidden hover:border-foreground/25 hover:cursor-pointer">
              <CardContent className="space-y-2">
                <Smartphone className="size-5" />
                <Link href="#">
                  <CardTitle className="text-lg font-semibold">
                    The LifeLine Application
                    <span className="absolute inset-0 group-hover:bg-foreground/5 z-10"></span>
                  </CardTitle>
                </Link>
                <CardDescription className="line-clamp-3 text-sm/6">
                  The LifeLine App is a free Suicide Prevention and Awareness
                  App that offers access and guidance to support for those
                  suffering in crisis, and those who have suffered the
                  devastating loss of a loved one from suicide, as well as for
                  those struggling with any degree of anxiety or depression. The
                  LifeLine App also provides awareness, education and prevention
                  strategies to guide people in crisis.
                </CardDescription>
                <CardDescription className="line-clamp-3 text-sm/6 group-hover:underline">
                  See More
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="">
            <Button>View More</Button>
          </div>
        </section>

        {/* Call To Action - Get Involved With Us. */}
        <div className="relative rounded-3xl bg-primary/10 overflow-hidden">
          <div className="relative h-80 overflow-hidden bg-primary/60 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
            <img
              className="size-full object-cover"
              src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
              alt=""
            />
            <svg
              viewBox="0 0 926 676"
              aria-hidden="true"
              className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
            >
              <path
                className="fill-primary"
                fill-opacity=".4"
                d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
              />
              <defs>
                <linearGradient
                  id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
                  x1="926.392"
                  x2="-109.635"
                  y1=".176"
                  y2="321.024"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#776FFF" />
                  <stop offset="1" stop-color="#FF4694" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
            <div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pr-0 lg:pl-24 xl:pl-32">
              <h2 className="text-base/7 font-semibold text-primary">
                Get Involved! Change a Life!
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-foreground capitalize sm:text-5xl">
                Volunteering with TLC is rewarding and fun!
              </p>
              <p className="mt-6 text-base/7 text-foreground">
                Thank you for your interest in volunteering for The LifeLine
                Canada Foundation If you’d like to get involved, we are always
                looking for dedicated and committed volunteers for short, long
                term and task specific help. There are many opportunities
                available. You can use the volunteer form below to share more
                information regarding your interests and availability.
              </p>
              <div className="mt-8">
                <Link href="#">
                  <Button>Get Involved</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
