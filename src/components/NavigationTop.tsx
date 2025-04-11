"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { X } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { SidebarTrigger } from "./ui/sidebar";
import { topNavgation } from "@/lib/data";

export default function NavigationTop() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const dismissBanner = () => {
    sessionStorage.setItem("bannerDismissed", "true");
    setIsBannerVisible(false);
  };

  useEffect(() => {
    const bannerDismissed = sessionStorage.getItem("bannerDismissed");
    if (bannerDismissed === "true") {
      setIsBannerVisible(false);
    }
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <Card className="pt-0 border-none rounded-none shadow-sm">
        {/* Announcement Banner */}
        {isBannerVisible && (
          <CardHeader className="px-0">
            <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2 sm:px-3.5 sm:before:flex-1">
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
              <p className="text-gray-900 text-xs/6">
                GeneriCon 2023 is on June 7 – 9 in Denver.{" "}
                <a href="#" className="font-semibold whitespace-nowrap">
                  Get your ticket&nbsp;<span aria-hidden="true">&rarr;</span>
                </a>
              </p>
              <div className="flex justify-end flex-1">
                <button
                  type="button"
                  onClick={dismissBanner}
                  aria-label="Dismiss announcement"
                  className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
                >
                  <span className="sr-only">Dismiss</span>
                  <X aria-hidden="true" className="text-gray-900 size-4" />
                </button>
              </div>
            </div>
          </CardHeader>
        )}

        {/* Main Navigation */}
        <CardContent
          className={`flex items-center justify-between container mx-auto ${
            isBannerVisible ? "pt-0" : "pt-8"
          }`}
        >
          <div className="flex items-center gap-4">
            <SidebarTrigger />
            <Link href="/" aria-label="Home">
              <Image
                className="w-40 h-auto dark:invert sm:w-60"
                src="/media/logo/theLifeLineApp.png"
                alt="The Lifeline App Logo"
                width={240}
                height={56}
                priority
              />
            </Link>
          </div>
          <nav className="">
            <ul className="flex">
              {topNavgation.map((items) => {
                return (
                  <li>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="hidden text-xs xl:flex"
                    >
                      <Link href={items.url}>{items.name}</Link>
                    </Button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </CardContent>
      </Card>
    </header>
  );
}
