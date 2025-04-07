import React from "react";

export default function page() {
  return (
    <main className="container mx-auto min-h-dvh px-6 lg:py-24">
      <section className="mx-auto max-w-3xl lg:mx-0 text-balance space-y-4">
        <h1 className="text-lg font-semibold">About Us.</h1>
        <p className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl capitalize">
          Our strength is collaboration
        </p>
        <p className="text-xl text-muted-foreground">
          We believe that our strength lies in our collaborative approach, which
          puts our clients at the center of everything we do.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Studio was started by three friends who noticed that developer studios
          were charging clients double what an in-house team would cost. Since
          the beginning, we have been committed to doing things differently by
          charging triple instead.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          At Studio, we’re more than just colleagues — we’re a family. This
          means we pay very little and expect people to work late. We want our
          employees to bring their whole selves to work. In return, we just ask
          that they keep themselves there until at least 6:30pm.
        </p>
      </section>
    </main>
  );
}
