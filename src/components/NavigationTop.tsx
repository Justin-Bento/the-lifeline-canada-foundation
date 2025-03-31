"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { navigationLinks } from "@/lib/data";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { createSlug } from "@/lib/utils";

export default function NavigationTop() {
  const [isVisible, setIsVisible] = useState(false); // Start with mobile menu hidden

  // Toggle the visibility of the mobile menu
  const toggleMenu = () => setIsVisible(!isVisible);

  return (
    <header>
      <Card className="rounded-none p-0">
        <CardHeader className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
              }}
              className="aspect-577/310 w-[36.0625rem] bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
              }}
              className="aspect-577/310 w-[36.0625rem] bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>
          <p className="text-sm/6 text-gray-900">
            Volunteering with TLC is rewarding and fun!{" "}
            <Link
              href="/get-involved"
              className="font-semibold whitespace-nowrap"
            >
              Get Involved&nbsp;<span aria-hidden="true">&rarr;</span>
            </Link>
          </p>
          <div className="flex flex-1 justify-end">
            <button
              type="button"
              className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
            >
              <span className="sr-only">Dismiss</span>
              <X aria-hidden="true" className="size-5 text-gray-900" />
            </button>
          </div>
        </CardHeader>
        <CardContent className="container mx-auto space-y-6 pb-6">
          <span className="flex items-center justify-between">
            <Link href="/">
              <Image
                className="dark:invert"
                src="/media/logo/theLifeLineApp.png"
                alt="Next.js logo"
                width={240}
                height={56}
              />
            </Link>
            {/* Mobile menu toggle button */}
            {isVisible ? (
              <Button
                size="icon"
                variant="outline"
                onClick={toggleMenu}
                className="shadow-none hover:cursor-pointer lg:hidden"
              >
                <X />
              </Button>
            ) : (
              <Button
                variant="outline"
                size="icon"
                onClick={toggleMenu}
                className="shadow-none hover:cursor-pointer lg:hidden"
              >
                <Menu />
              </Button>
            )}
          </span>
          {/* List of navigation links */}
          <ul
            className={`${
              isVisible ? "flex" : "hidden"
            } flex-col items-start gap-4 pt-4 lg:flex-row lg:items-center lg:pt-0 lg:flex`}
          >
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <Link href={createSlug(link)}>
                  <Button
                    size="sm"
                    variant="outline"
                    className="shaodw-none text-foreground"
                  >
                    {link}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </header>
  );
}
