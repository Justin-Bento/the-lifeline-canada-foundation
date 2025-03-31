"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { navigationLinks } from "@/lib/data";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function NavigationTop() {
  const [isVisible, setIsVisible] = useState(false); // Start with mobile menu hidden

  // Toggle the visibility of the mobile menu
  const toggleMenu = () => setIsVisible(!isVisible);

  return (
    <header>
      <Card className="rounded-none p-0">
        <CardHeader className="bg-purple-500 p-2">
          <div className="container mx-auto flex">
            <p className="text-white text-sm">English Support</p>
            <p className="text-white text-sm">French Support</p>
            <p className="text-white text-sm">Site Map</p>
          </div>
        </CardHeader>
        <CardContent className="container mx-auto lg:px-6 grid grid-cols-1 lg:grid-cols-2 pb-6">
          <span className="flex items-center justify-between">
            <Image
              className="dark:invert"
              src="/media/logo/theLifeLineApp.png"
              alt="Next.js logo"
              width={240}
              height={56}
            />
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
                <Button size="sm" variant="link" className="text-foreground">
                  {link}
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </header>
  );
}
