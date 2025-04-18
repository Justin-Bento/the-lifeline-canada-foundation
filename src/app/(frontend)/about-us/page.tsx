import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

export default function page() {
  return (
    <>
      <main className="container mx-auto min-h-dvh px-6 lg:py-24 space-y-24">
        <section className="mx-auto max-w-3xl lg:mx-0 text-balance space-y-4">
          <h1 className="text-lg font-semibold">About Us.</h1>
          <p className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl capitalize">
            Our strength is our Commitment
          </p>
          <p className="text-xl text-muted-foreground">
            The LifeLine Canada Foundation (or TLC) is a registered non-profit,
            committed to positive mental health and suicide prevention &
            awareness and is constantly developing new initiatives in support of
            these goals.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            The LifeLine Canada Foundation was started To aid in suicide
            reduction across Canada by raising awareness of risk factors,
            delivering programs for positive mental health development,
            providing access to available resource options, and promoting local
            programs to build mental health resilience for all. .
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            At The Lifeline Canada Foundation, we’re more than just enthusiastic
            volunteers — we’re make a significant difference, by raising
            awareness to continue to lower the risk of suicide to where it is a
            rare event across the country and to build mental health resilience
            for all.
          </p>
        </section>
        <section className="">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl capitalize">
            Our mission
          </h2>
          <p className="text-lg leading-7 [&:not(:first-child)]:mt-6">
            Is to open minds, save lives and restore hope. Whether it be through
            the information provided on this website, through the LifeLine App,
            or through any of our initiatives like Companion Paws Canada, we are
            constantly looking for ways to reduce the suicide rate and minimize
            the consequences of suicidal behavior.
          </p>
          <p className="text-lg leading-7 [&:not(:first-child)]:mt-6">
            A gift to The LifeLine Canada Foundation helps fund our mission to
            save lives and give hope to those affected by suicide, depression,
            anxiety and PTSD. If you have questions about your gift or about
            other ways in which one could contribute, please don’t hesitate to
            contact us.
          </p>
        </section>
        <section className="">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl capitalize">
            Why Volunteer with us?
          </h2>
          <p className="text-lg leading-7 [&:not(:first-child)]:mt-6">
            If you’d like to get involved, we are always looking for dedicated
            and committed volunteers for short, long term and task specific
            help. We offer enthusiastic volunteers an opportunity to make a
            significant difference in the lives of Canadians in keeping with our
            vision:
          </p>
          <blockquote className="text-lg leading-7 [&:not(:first-child)]:mt-6 max-w-4xl text-balance">
            “To continue to lower the risk of suicide to where it is a rare
            event across the country and to build mental health resilience for
            all.” It is also an opportunity to gain important experience in
            specific vocational areas and/or with the non-profit sector.
          </blockquote>
        </section>
        <section className="grid  grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="shadow-none border-none bg-primary/10">
            <CardContent className="text-balance space-y-2 p-12">
              <CardTitle className="text-xl font-semibold">
                Remember: Help Exists for Adults– Call 988 for Suicide
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
    </>
  );
}
