import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { resourceAid } from "@/lib/data";
import { HeartHandshake, HeartPulse, PawPrint } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="container mx-auto lg:px-6 min-h-dvh space-y-32 py-32">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
            <div className="flex items-center gap-6">
              <Button className="shadow-none">Start Reading &rarr;</Button>
              <Button variant="secondary" className="shadow-none">
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
        <section className=""></section>
        <section className="space-y-3">
          <HeartHandshake className="text-purple-500 size-8" />
          <h2 className="scroll-m-20 text-4xl font-bold tracking-tight capitalize">
            What Can We Help You With?
          </h2>
          <ul className="grid grid-cols-1 lg:grid-cols-3 gap-12 my-12">
            {resourceAid.map((resource) => {
              return (
                <li key={resource.id}>
                  <Card className="group relative isolate shadow-none p-0 overflow-hidden border-neutral-300 hover:border-neutral-500 hover:cursor-pointer">
                    <CardHeader className="p-0">
                      <div className="relative w-full aspect-[16/10]">
                        <Image
                          fill
                          src={`/media/image/landingPage/${resource.image.name}`}
                          alt={resource.image.alt}
                          className="object-fill object-center"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2 pb-6">
                      <CardTitle className="text-xl capitalize group-hover:underline">
                        {resource.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3 text-base/6 line-clamp-1">
                        {resource.description}
                      </CardDescription>
                      <Link
                        href="#"
                        className="pl-0 text-muted-foreground text-sm"
                      >
                        <span className="absolute inset-0 z-10"></span>
                        Read More &rarr;
                      </Link>
                    </CardContent>
                  </Card>
                </li>
              );
            })}
          </ul>
          <Button
            size="lg"
            variant="outline"
            className="relative isolate shadow-none"
          >
            <Link href="#">
              <span className="absoloute z-10"></span>
              View More
            </Link>
          </Button>
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
            <h2 className="scroll-m-20 text-4xl font-bold tracking-tight capitalize">
              Projects Going On The Lifeline Canada Foundation
            </h2>
          </div>
          <ul className="grid grid-cols-2 gap-12">
            <li>
              <Card>
                <CardContent className="p-8 px-12 space-y-4">
                  <HeartPulse className="text-purple-500 size-6" />
                  <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0 capitalize">
                    The Lifeline App
                  </h3>
                  <p className="line-clamp-3">
                    The LifeLine App is a free Suicide Prevention and Awareness
                    App that offers access and guidance to support for those
                    suffering in crisis, and those who have suffered the
                    devastating loss of a loved one from suicide, as well as for
                    those struggling with any degree of anxiety or depression.
                  </p>
                  <ul className="list-disc list-inside pl-4">
                    <li>One touch dialing from anywhere in Canada.</li>
                    <li className="">
                      Fast and easy access to crisis centres all across Canada
                    </li>
                    <li className="">
                      Fast and easy access to crisis centres all across Canada
                    </li>
                    <li className="">
                      Fast and easy access to crisis centres all across Canada
                    </li>
                    <li className="">
                      Fast and easy access to crisis centres all across Canada
                    </li>
                  </ul>
                  <Button>Learn More</Button>
                </CardContent>
              </Card>
            </li>
            <li>
              <Card className="">
                <CardContent className="p-8 px-12 space-y-4">
                  <PawPrint className="text-purple-500 size-6" />
                  <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0 capitalize">
                    Companion Paws Canada
                  </h3>
                  <p className="max-w-[100ch] text-balance">
                    Companion Paws is dedicated to supporting Canadians in need
                    while also providing a second chance for pets in rescues.
                    The main programs are:
                  </p>
                  <ul className="list-disc list-inside pl-4">
                    <li>Personal Therapy Dog Adoption Program</li>
                    <li>Assisted Therapy Dog Adoption Program</li>
                    <li>Certify Your Own Therapy Dog Program</li>
                  </ul>
                  <p className="max-w-[100ch] text-balance">
                    These programs are available in all Provinces across Canada.
                    All information and the steps involved are at
                    CompanionPaws.ca
                  </p>
                  <Button>Visit Companion Paw Website</Button>
                </CardContent>
              </Card>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
