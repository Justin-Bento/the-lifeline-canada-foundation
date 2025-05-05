import React from "react";
import PageHeader from "@/components/PageHeader";
import Wrapper from "@/components/Wrapper";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  let content = {
    media: {
      URL: "/media/image/image-1.png", // Can be string URL or StaticImageData
      ALT: "Group of actionable words about volenteering.",
    },
    title: "In Crisis? Need Help?",
    description: `In Crisis? Call or Text 988 Canada’s new suicide prevention hotline. If you or someone you know is in danger of hurting themselves or others, call 911 immediately. See our directory of mental health crisis support in your area below. Seek the advice of an appropriately qualified healthcare professional before making decisions about your circumstances.`,
  };
  return (
    <>
      <div className="">
        <PageHeader
          Banner={content.media}
          Title={content.title}
          Description={content.description}
        />
        <Wrapper height="screen" spacing="md">
          <article className="space-y-16">
            <section className="">
              <h2 className="scroll-m-20 pb-10 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Crisis Centres
              </h2>
              <ul className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <li className="">
                  <Card className=" group isolate relative shadow-none pt-0 overflow-hidden">
                    <div className="relative h-60 w-full">
                      <Image
                        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                        alt="Photo by Drew Beamer"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent>
                      <p className="text-md font-semibold">Canada</p>
                      <p className="text-sm/relaxed text-muted-foreground pb-3 pt-1">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Reprehenderit, consequuntur? Sit, totam?
                        Blanditiis
                      </p>
                      <Link
                        href="/in-crisis/canadian-crisis-centres"
                        className="text-sm/relaxed text-muted-foreground group-hover:underline"
                      >
                        <span className="absolute group-hover:bg-gray-50/10 inset-0 w-full h-full z-10 group-hover:cursor-pointer"></span>
                        View All Resources
                      </Link>
                    </CardContent>
                  </Card>
                </li>
                <li className="">
                  <Card className=" group isolate relative shadow-none pt-0 overflow-hidden">
                    <div className="relative h-60 w-full">
                      <Image
                        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                        alt="Photo by Drew Beamer"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent>
                      <p className="text-md font-semibold">United States</p>
                      <p className="text-sm/relaxed text-muted-foreground pb-3 pt-1">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Reprehenderit, consequuntur? Sit, totam?
                        Blanditiis
                      </p>
                      <Link
                        href="/in-crisis/us-crisis-centres"
                        className="text-sm/relaxed text-muted-foreground group-hover:underline"
                      >
                        <span className="absolute group-hover:bg-gray-50/10 inset-0 w-full h-full z-10 group-hover:cursor-pointer"></span>
                        View All Resources
                      </Link>
                    </CardContent>
                  </Card>
                </li>
                <li className="">
                  <Card className=" group isolate relative shadow-none pt-0 overflow-hidden">
                    <div className="relative z-20 h-60 w-full">
                      <Image
                        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                        alt="Photo by Drew Beamer"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent>
                      <p className="text-md font-semibold">International</p>
                      <p className="text-sm/relaxed text-muted-foreground pb-3 pt-1">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Reprehenderit, consequuntur? Sit, totam?
                        Blanditiis
                      </p>
                      <Link
                        href="/in-crisis/international-crisis-centres"
                        className="text-sm/relaxed text-muted-foreground group-hover:underline"
                      >
                        <span className="absolute group-hover:bg-gray-50/10 inset-0 w-full h-full z-10 group-hover:cursor-pointer"></span>
                        View All Resources
                      </Link>
                    </CardContent>
                  </Card>
                </li>
              </ul>
            </section>
            <section className="">
              <h2 className="scroll-m-20 pb-10 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Additional Crisis Resources
              </h2>
              <ul className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <li className="">
                  <Card className=" group isolate relative shadow-none pt-0 overflow-hidden">
                    <div className="relative z-20 h-60 w-full">
                      <Image
                        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                        alt="Photo by Drew Beamer"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent>
                      <p className="text-md font-semibold">OnLine Chats</p>
                      <p className="text-sm/relaxed text-muted-foreground pb-3 pt-1">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Reprehenderit, consequuntur? Sit, totam?
                        Blanditiis
                      </p>
                      <Link
                        href="/canadian-crisis-centres"
                        className="text-sm/relaxed text-muted-foreground group-hover:underline"
                      >
                        <span className="absolute group-hover:bg-gray-50/10 inset-0 w-full h-full z-10 group-hover:cursor-pointer"></span>
                        View All Resources
                      </Link>
                    </CardContent>
                  </Card>
                </li>
                <li className="">
                  <Card className=" group isolate relative shadow-none pt-0 overflow-hidden">
                    <div className="relative z-20 h-60 w-full">
                      <Image
                        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                        alt="Photo by Drew Beamer"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent>
                      <p className="text-md font-semibold">Call Lines</p>
                      <p className="text-sm/relaxed text-muted-foreground pb-3 pt-1">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Reprehenderit, consequuntur? Sit, totam?
                        Blanditiis
                      </p>
                      <Link
                        href="/canadian-crisis-centres"
                        className="text-sm/relaxed text-muted-foreground group-hover:underline"
                      >
                        <span className="absolute group-hover:bg-gray-50/10 inset-0 w-full h-full z-10 group-hover:cursor-pointer"></span>
                        View All Resources
                      </Link>
                    </CardContent>
                  </Card>
                </li>
                <li className="">
                  <Card className=" group isolate relative shadow-none pt-0 overflow-hidden">
                    <div className="relative z-20 h-60 w-full">
                      <Image
                        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                        alt="Photo by Drew Beamer"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent>
                      <p className="text-md font-semibold">International</p>
                      <p className="text-sm/relaxed text-muted-foreground pb-3 pt-1">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Reprehenderit, consequuntur? Sit, totam?
                        Blanditiis
                      </p>
                      <Link
                        href="/canadian-crisis-centres"
                        className="text-sm/relaxed text-muted-foreground group-hover:underline"
                      >
                        <span className="absolute group-hover:bg-gray-50/10 inset-0 w-full h-full z-10 group-hover:cursor-pointer"></span>
                        View All Resources
                      </Link>
                    </CardContent>
                  </Card>
                </li>
              </ul>
            </section>
          </article>
        </Wrapper>
      </div>
    </>
  );
}
