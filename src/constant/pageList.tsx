interface IPage {
  id: string;
  title: string;
  path: string;
  //   elemet: ReactNode;
  is_visible: boolean;
  for_header: boolean;
}
const pageList: IPage[] = [
  {
    id: "home",
    title: "Home",
    path: "/",
    is_visible: true,
    for_header: false,
  },
  {
    id: "ourStory",
    title: "Our Story",
    path: "/our-story",
    is_visible: true,
    for_header: true,
  },
  {
    id: "story",
    title: "Story",
    path: "/story",
    is_visible: true,
    for_header: true,
  },
  {
    id: "businesses",
    title: "Businesses",
    path: "/businesses",
    is_visible: true,
    for_header: true,
  },
  {
    id: "centers",
    title: "Centers",
    path: "/centers",
    is_visible: true,
    for_header: true,
  },
  {
    id: "blogNews",
    title: "Blog & News",
    path: "/blog-news",
    is_visible: true,
    for_header: true,
  },
  {
    id: "contact",
    title: "Contact Us",
    path: "/contact",
    is_visible: true,
    for_header: true,
  },
];

export default pageList;
