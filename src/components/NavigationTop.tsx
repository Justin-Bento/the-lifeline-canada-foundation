import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { navigationLinks } from "@/lib/data";
import Image from "next/image";

export default function NavigationTop() {
  return (
    <header>
      <Card className="rounded-none p-0">
        <CardHeader className="bg-purple-500 p-2">
          <div className="container mx-auto lg:px-6 flex items-center justify-end px-10">
            <p className="text-white text-sm">English Support</p>
            <p className="text-white text-sm">French Support</p>
            <p className="text-white text-sm">Site Map</p>
          </div>
        </CardHeader>
        <CardContent className="container mx-auto lg:px-6 flex items-center justify-between pb-6">
          <Image
            className="dark:invert"
            src="/media/logo/theLifeLineApp.png"
            alt="Next.js logo"
            width={320}
            height={56}
          />
          <ul className="flex items-center">
            {navigationLinks.map((link, index) => {
              return (
                <li key={index} className="">
                  <Button variant="link" className="text-sm text-foreground">
                    {link}
                  </Button>
                </li>
              );
            })}
          </ul>
        </CardContent>
      </Card>
    </header>
  );
}
