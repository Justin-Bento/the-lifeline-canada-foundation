import React from "react";

export default function page() {
  return (
    <main className="container mx-auto min-h-dvh px-6 lg:py-24">
      <h1 className="scroll-m-20 text-4xl font-semibold lg:text-5xl">
        Resources
      </h1>
      <div className="max-w-2xl text-balance space-y-4 mt-4">
        <p className="">
          In Crisis? Call or Text 988 Canada’s new suicide prevention hotline.
          If you or someone you know is in danger of hurting themselves or
          others, call 911 immediately. See our directory of mental health
          crisis support in your area.
        </p>
        <p>
          This site provides information about anxiety, depression and suicide.
          Online resources alone are not a substitute for professional medical
          advice, diagnosis or treatment. Seek the advice of an appropriately
          qualified healthcare professional before making decisions about your
          circumstances.
        </p>
        <p>
          The guides, tool kits and resources throughout this site represent a
          compilation of curated suicide prevention resources from various
          sources around the world. When clicking 3rd party links, you will be
          redirected to websites not affiliated with, but supported by The
          LifeLine Canada Foundation.
        </p>
      </div>
    </main>
  );
}
