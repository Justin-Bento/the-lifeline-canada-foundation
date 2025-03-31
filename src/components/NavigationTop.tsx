import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

export default function NavigationTop() {
  return (
    <header>
      <Card>
        <CardHeader>
          <p className="">Card Header</p>
        </CardHeader>
        <CardContent>
          <p className="">Card Content</p>
        </CardContent>
        <CardFooter>
          <p className="">Card Footer</p>
        </CardFooter>
      </Card>
    </header>
  );
}
