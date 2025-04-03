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
        <section className="mx-auto max-w-2xl px-6 lg:container lg:mx-auto lg:px-6">
          <div className="space-y-4">
            <h2 className="text-base/7 font-semibold text-indigo-600">
              Where Here to Support You!
            </h2>
            <p className="mt-2 capitalize text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
              We're not a crisis hotline, but we're here to help in any way we
              can.
            </p>
            <p className="mt-4 max-w-3xl text-balance">
              While we may not be equipped for emergency situations, we can
              connect you with the resources and support you need. How can we
              assist you today? We're here for you.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Mental Health Resources.
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo.
                  </p>
                  <Link
                    href="#"
                    className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center"
                  >
                    <span className="absolou"></span>
                    Read More
                  </Link>
                </div>
                <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                    <img
                      className="size-full object-cover object-top"
                      src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Pattern Interupts
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit
                    maiores impedit.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                  <img
                    className="w-full max-lg:max-w-xs"
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    In Crisis? Need Help?
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                    suspendisse semper morbi.
                  </p>
                </div>
                <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                  <img
                    className="h-[min(152px,40cqw)] object-cover"
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
            </div>
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Powerful APIs
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Sit quis amet rutrum tellus ullamcorper ultricies libero
                    dolor eget sem sodales gravida.
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow">
                  <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                      <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                        <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                          NotificationSetting.jsx
                        </div>
                        <div className="border-r border-gray-600/10 px-4 py-2">
                          App.jsx
                        </div>
                      </div>
                    </div>
                    <div className="px-6 pt-6 pb-14">
                      {/* Your code example */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </div>
          </div>
        </section>

        {/* Call To Action - Get Involved With Us. */}
        <section className="relative rounded-3xl bg-primary/10 overflow-hidden">
          <div className="relative isolate h-80 overflow-hidden fill-primary/60 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
            <span className="w-full absolute z-10 h-full backdrop-saturate-200 backdrop-brightness-50 bg-primary/10"></span>
            <img
              className="size-full object-cover"
              src="https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
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
        </section>
      </main>
    </>
  );
}
