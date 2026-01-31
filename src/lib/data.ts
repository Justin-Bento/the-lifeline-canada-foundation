export type TopNavigationItem = {
  id: number;
  title: string;
  url: string;
};

export const top_navigation: TopNavigationItem[] = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About", url: "/about-us" },
  { id: 3, title: "Resources", url: "/resources" },
  { id: 4, title: "Patterns", url: "/pattern-interrupts" },
  { id: 5, title: "Crisis Centers", url: "/in-crisis-need-help" },
  { id: 6, title: "Contact", url: "/contact" },
];

export const resources = [
  {
    id: 1,
    title: "Depression",
    description: "Sadness is a natural part of being human, find ways to cope.",
    url: "/resources/depression",
    thumbnail: {
      src: "/media/images/resources/Mission-img-400x423.png",
      alt: "",
    },
  },
  {
    id: 2,
    title: "Anxiety",
    description:
      "Resources to help with feeling of fear, worry, and uneasiness.",
    url: "/resources/anxiety",
    thumbnail: {
      src: "/media/images/resources/coping-400x287.jpg",
      alt: "",
    },
  },
  {
    id: 3,
    title: "Grief Support",
    description: "Need help with the loss of a loved one? You’re not alone.",
    url: "/resources/grief-support",
    thumbnail: {
      src: "/media/images/resources/griefSupport-400x225.png",
      alt: "",
    },
  },
  {
    id: 4,
    title: "Crisis Centers",
    description: "Seek immediate help through call, text or email.",
    url: "/resources/crisis-centers",
    thumbnail: {
      src: "/media/images/resources/crisis-centers-400x211.png",
      alt: "",
    },
  },
  {
    id: 5,
    title: "E-Counselling",
    description:
      "Connect with caring people for online therapy and counselling.",
    url: "/resources/e-counselling",
    thumbnail: {
      src: "/media/images/resources/christina-wocintechchat-com-UTw3j_aoIKM-unsplash-1-400x253.png",
      alt: "",
    },
  },
  {
    id: 6,
    title: "Resources for Parents",
    description:
      "Advice and tools to help guide parents through their journey.",
    url: "/resources/resources-for-parents",
    thumbnail: {
      src: "/media/images/resources/resoureces-for-parents.png",
      alt: "",
    },
  },
  // {
  //   id: 3,
  //   title: "",
  //   description: "",
  //   url: "",
  // },
];
