import React from "react";
import { Card, CardContent } from "./ui/card";

export default function NavigationBottom() {
  return (
    <footer className="">
      <Card className="bg-neutral-950 rounded-none shadow-none border-none">
        <CardContent>
          <p className="text-white">Bottom Navigation</p>
        </CardContent>
      </Card>
    </footer>
  );
}
