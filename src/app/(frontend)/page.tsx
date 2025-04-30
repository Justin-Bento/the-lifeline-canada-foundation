import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Wrapper from "@/components/Wrapper";
import {
  CircleAlert,
  CornerDownRight,
  PawPrint,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Wrapper layout="fullHeight" whiteSpace="medium">
        <section className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
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
          <div className="relative w-full aspect-video xl:aspect-[16/12]">
            <Image
              fill
              src="/media/image/landingPage/landing-image-0.jpg"
              alt="Crisis Resources for Suicide Prevention"
              className="rounded-xl object-center"
            />
          </div>
        </section>

        {/* Products / Services Section */}
        <section className="">
          <div className="space-y-4">
            <h2 className="mt-2 capitalize text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
              Where Here to Support You!
            </h2>
            <p className="mt-4 max-w-3xl text-balance">
              While we may not be equipped for emergency situations, we can
              connect you with the resources and support you need. How can we
              assist you today? We&#39;re here for you.
            </p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 mt-12">
            <Card className="col-span-3 aspect-video lg:col-span-2 relative overflow-hidden">
              <Image
                src="/media/image/landingPage/landing-image-2.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </Card>
            <Card className="col-span-3 lg:h-full lg:col-span-1 flex items-center justify-center  aspect-square">
              <CardContent className="">
                <CircleAlert className="my-4" />
                <CardTitle className="text-xl capitalize text-balance">
                  We&#39;re not a crisis hotline, but we&#39;re here to help in
                  any way we can.
                </CardTitle>
                <CardDescription className="text-base/relaxed text-balance mt-2">
                  In Crisis? Call or Text 988 Canada’s new suicide prevention
                  hotline. If you or someone you know is in danger of hurting
                  themselves or others, call 911 immediately. Additionally, see
                  our directory of mental health crisis support in your area.
                </CardDescription>
                <Button
                  size="sm"
                  variant="link"
                  className="pl-0 text-xs text-muted-foreground"
                >
                  view page &rarr;
                </Button>
              </CardContent>
            </Card>
            <Card className="col-span-3 lg:col-span-1 group relative isolate shadow-none pt-0 overflow-hidden">
              <CardHeader className="relative w-full aspect-video bg-gray-200">
                <Image
                  fill
                  src="/media/image/landingPage/landing-image-3.png"
                  alt=""
                  className="object-cover "
                />
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="#">
                  <span className="absolute inset-0 hover:bg-gray-200/10"></span>
                  <CardTitle className="group-hover:underline mb-2">
                    Depression
                  </CardTitle>
                </Link>
                <CardDescription>
                  Sadness is a natural part of being human, find ways to cope.
                </CardDescription>
                <Button
                  size="sm"
                  variant="link"
                  className="pl-0 text-xs text-muted-foreground"
                >
                  view page &rarr;
                </Button>
              </CardContent>
            </Card>
            <Card className="col-span-3 lg:col-span-1 group relative isolate shadow-none pt-0 overflow-hidden">
              <CardHeader className="relative w-full aspect-video bg-gray-200">
                <Image
                  fill
                  src="/media/image/landingPage/landing-image-4.jpg"
                  alt=""
                  className="object-cover"
                />
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="#">
                  <span className="absolute inset-0 hover:bg-gray-200/10"></span>
                  <CardTitle className="group-hover:underline mb-2">
                    Anxiety
                  </CardTitle>
                </Link>
                <CardDescription>
                  Resources to help with feeling of fear, worry, and uneasiness.
                </CardDescription>
                <Button
                  size="sm"
                  variant="link"
                  className="pl-0 text-xs text-muted-foreground"
                >
                  view page &rarr;
                </Button>
              </CardContent>
            </Card>
            <Card className="col-span-3 lg:col-span-1 group relative isolate shadow-none pt-0 overflow-hidden">
              <CardHeader className="relative w-full aspect-video bg-gray-200">
                <Image
                  fill
                  src="/media/image/landingPage/landing-image-5.png"
                  alt=""
                  className="object-cover"
                />
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="#">
                  <span className="absolute inset-0 hover:bg-gray-200/10"></span>
                  <CardTitle className="group-hover:underline mb-2">
                    Grief Support
                  </CardTitle>
                </Link>
                <CardDescription>
                  Need help with the loss of a loved one? You’re not alone.
                </CardDescription>
                <Button
                  size="sm"
                  variant="link"
                  className="pl-0 text-xs text-muted-foreground"
                >
                  view page &rarr;
                </Button>
              </CardContent>
            </Card>
            <Card className="col-span-3 lg:col-span-1 group relative isolate shadow-none pt-0 overflow-hidden">
              <CardHeader className="relative w-full aspect-video bg-gray-200">
                <Image
                  fill
                  src="/media/image/landingPage/landing-image-6.png"
                  alt=""
                  className="object-cover"
                />
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="#">
                  <span className="absolute inset-0 hover:bg-gray-200/10"></span>
                  <CardTitle className="group-hover:underline mb-2">
                    Crisis Centers
                  </CardTitle>
                </Link>
                <CardDescription>
                  Connect with caring people for online therapy & counseling.
                </CardDescription>
                <Button
                  size="sm"
                  variant="link"
                  className="pl-0 text-xs text-muted-foreground"
                >
                  view page &rarr;
                </Button>
              </CardContent>
            </Card>
            <Card className="col-span-3 lg:col-span-1 group relative isolate shadow-none pt-0 overflow-hidden">
              <CardHeader className="relative w-full aspect-video bg-gray-200">
                <Image
                  fill
                  src="/media/image/landingPage/landing-image-7.png"
                  alt=""
                  className="object-cover"
                />
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="#">
                  <span className="absolute inset-0 hover:bg-gray-200/10"></span>
                  <CardTitle className="group-hover:underline mb-2">
                    E-Counselling
                  </CardTitle>
                </Link>
                <CardDescription>
                  Advice and tools to help guide parents through their journey.
                </CardDescription>
                <Button
                  size="sm"
                  variant="link"
                  className="pl-0 text-xs text-muted-foreground"
                >
                  view page &rarr;
                </Button>
              </CardContent>
            </Card>
            <Card className="col-span-3 lg:col-span-1 group relative isolate shadow-none pt-0 overflow-hidden">
              <CardHeader className="w-full aspect-video grid place-content-center">
                <CornerDownRight className="size-40" />
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="#">
                  <span className="absolute inset-0 group-hover:cursor-pointer group-hover:bg-purple-400/50 -z-10"></span>
                  <CardTitle className="group-hover:underline mb-2 text-center">
                    Click Here to Continue Reading
                  </CardTitle>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call To Action - Get Involved With Us. */}
        <section className="relative rounded-3xl bg-primary/10 overflow-hidden">
          <div className="relative isolate h-80 overflow-hidden fill-primary/60 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
            <span className="w-full absolute z-10 h-full backdrop-saturate-200 backdrop-brightness-50 bg-primary/10"></span>
            <div className="relative size-full">
              <Image
                fill
                className=" object-cover"
                src="https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
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

        {/* Project - Happening Within The LifeLine Canada.  */}
        <section className="">
          <div className="text-blance">
            <h2 className="max-w-2xl mt-2 text-4xl font-semibold tracking-tight text-foreground capitalize sm:text-5xl/16">
              A Fresh Chapter for LifeLine Canada – Discover What&#39;s Next!
            </h2>
            <p className="text-base/7 mt-4 max-w-[100ch] text-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              corporis placeat voluptates odit commodi minus fugit totam impedit
              ipsum autem molestiae, modi, soluta itaque molestias quos
              praesentium id minima. Quibusdam?
            </p>
          </div>
          <Card className="flex flex-col justify-center shadow-none bg-purple-200 h-96 mt-20 text-foreground">
            <CardContent className="space-y-4 px-14 py-24 lg:px-20">
              <Smartphone />
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                The Lifeline App
              </h3>
              <p className="max-w-4xl text-balance">
                The LifeLine App is a free Suicide Prevention and Awareness App
                that offers access and guidance to support for those suffering
                in crisis, and those who have suffered the devastating loss of a
                loved one from suicide, as well as for those struggling with any
                degree of anxiety or depression. The LifeLine App also provides
                awareness, education and prevention strategies to guide people
                in crisis.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col justify-center shadow-none bg-purple-200 h-96 mt-20 text-foreground">
            <CardContent className="space-y-4 px-14 py-24 lg:px-20">
              <PawPrint />
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Companion Paws Canada
              </h3>
              <p className="max-w-4xl text-balance">
                Companion Paws is dedicated to supporting Canadians in need
                while providing a second chance for pets in rescues through The
                LifeLine Canada’s (T.L.C.) Companion Paws Therapy Dog Adoption
                Program and a Certify Your Own Dog Program for ones with their
                own fully trained and temperament suitable dogs. TLC’s Companion
                Paws programs are available in all Provinces across Canada.
              </p>
            </CardContent>
          </Card>
        </section>
      </Wrapper>
    </main>
  );
}
