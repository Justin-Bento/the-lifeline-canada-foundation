import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Wrapper from "@/components/Wrapper";
import React from "react";

export default function page() {
  const products = [
    {
      id: 1,
      name: "The LifeLine Mobile App",
      href: "/projects/the-lifeline-app",
      imageSrc:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 2,
      name: "Companion Paws Canada (CPC)",
      href: "https://companionpaws.ca/",
      imageSrc:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    // More products...
  ];
  return (
    <>
      <PageHeader>
        <PageHeader.Banner
          image="/media/image/image-9.jpg"
          alt="Group of actionable words about volenteering."
        />
        <PageHeader.Container>
          <PageHeader.Headline className="flex flex-col-reverse">
            See How We&#39;re Making a Difference!
            <span className="text-xs font-medium tracking-wide text-purple-500 m-0 p-0">
              TLC Projects
            </span>
          </PageHeader.Headline>
          <PageHeader.Description>
            From community outreach to large-scale initiatives, each of our
            projects is a deliberate step toward a brighter, more equitable
            future. Through education, empowerment programs, we&#39;re creating
            measurable change by being a central hub for all things mental
            health.
          </PageHeader.Description>
        </PageHeader.Container>
      </PageHeader>
      <Wrapper
        height="screen"
        spacing="md"
        className="space-y-16 lg:space-y-24"
      >
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:gap-x-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group relative p-0 overflow-hidden"
            >
              <div className="">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
              </div>
              <CardContent className="pb-6">
                <h3 className="leading-7 text-xl font-bold group-hover:underline">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="leading-snug mt-2">
                  The king, seeing how much happier his subjects were, realized
                  the error of his ways and repealed the joke tax.
                </p>
                <Button
                  size="sm"
                  variant="ghost"
                  className="pl-0 mt-4 group-hover:opacity-50"
                >
                  View Project
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Wrapper>
    </>
  );
}
