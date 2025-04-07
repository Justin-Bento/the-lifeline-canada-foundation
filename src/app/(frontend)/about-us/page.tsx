import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

export default function page() {
  return (
    <main className="container mx-auto min-h-dvh px-6 lg:py-24 space-y-24">
      <section className="mx-auto max-w-3xl lg:mx-0 text-balance space-y-4">
        <h1 className="text-lg font-semibold">About Us.</h1>
        <p className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl capitalize">
          Our strength is our Commitment
        </p>
        <p className="text-xl text-muted-foreground">
          The LifeLine Canada Foundation (or TLC) is a registered non-profit,
          committed to positive mental health and suicide prevention & awareness
          and is constantly developing new initiatives in support of these
          goals.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The LifeLine Canada Foundation was started To aid in suicide reduction
          across Canada by raising awareness of risk factors, delivering
          programs for positive mental health development, providing access to
          available resource options, and promoting local programs to build
          mental health resilience for all. .
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          At The Lifeline Canada Foundation, we’re more than just enthusiastic
          volunteers — we’re make a significant difference, by raising awareness
          to continue to lower the risk of suicide to where it is a rare event
          across the country and to build mental health resilience for all.
        </p>
      </section>
      <section className="grid  grid-cols-1 lg:grid-cols-2 gap-12">
        <Card className="shadow-none border-none bg-primary/10">
          <CardContent className="text-balance space-y-2 p-12">
            <CardTitle className="text-xl font-semibold">
              Remember: Help Exists for Adults– Call 988 for Suicide Prevention
              (Canada),
            </CardTitle>
            <CardDescription className="text-md/7 text-foreground">
              The LifeLine Canada Foundation is not a crisis hotline. If in
              Crisis, call or text 988 for Canada’s new suicide prevention
              hotline. If you or someone you know is in danger of hurting
              themselves or others, call 911 immediately. See our directory of
              mental health crisis support in your area. .
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="shadow-none border-none bg-primary/10">
          <CardContent className="text-balance space-y-2 p-12">
            <CardTitle className="text-xl font-semibold">
              Remember: Help Exists For Young Adults – Call 988 for Suicide
              Prevention (Canada),
            </CardTitle>
            <CardDescription className="text-md/7 text-foreground">
              The LifeLine Canada Foundation is not a crisis hotline. If in
              Crisis, call or text 988 for Canada’s new suicide prevention
              hotline. If you or someone you know is in danger of hurting
              themselves or others, call 911 immediately. See our directory of
              mental health crisis support in your area. .
            </CardDescription>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
