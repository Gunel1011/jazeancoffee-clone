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
    title: "OUR STORY",
    path: "/our-story",
    is_visible: true,
    for_header: true,
  },
  {
    id: "story",
    title: "STORY",
    path: "/story",
    is_visible: true,
    for_header: true,
  },
  {
    id: "businesses",
    title: "BUSINESSES",
    path: "/businesses",
    is_visible: true,
    for_header: true,
  },
  {
    id: "centers",
    title: "CENTERS",
    path: "/centers",
    is_visible: true,
    for_header: true,
  },
  {
    id: "blogNews",
    title: "BLOG & NEWS",
    path: "/blog-news",
    is_visible: true,
    for_header: true,
  },
  {
    id: "contact",
    title: "CONTACT US",
    path: "/contact",
    is_visible: true,
    for_header: true,
  },
];

export default pageList;
