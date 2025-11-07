import type { ReactNode } from "react";
import Home from "../Modules/Home/View/Home";
import CoffeeDeatils from "../Modules/Home/View/CoffeeDeatils";

interface IPage {
  id: string;
  title: string;
  path: string;
  elemet: ReactNode;
  is_visible: boolean;
  for_header: boolean;
}
const pageList: IPage[] = [
  {
    id: "home",
    title: "Home",
    path: "/",
    elemet: <Home />,
    is_visible: true,
    for_header: false,
  },
  {
    id: "ourStory",
    title: "Our Story",
    path: "/our-story",
    is_visible: true,
    elemet: <Home />,
    for_header: true,
  },
  {
    id: "car-details",
    title: "Car Details",
    path: "/car-details/:id",
    elemet: <CoffeeDeatils />,
    is_visible: true,
    for_header: false,
  },
  {
    id: "story",
    title: "Story",
    path: "/story",
    is_visible: true,
    for_header: true,
    elemet: <Home />,
  },
  {
    id: "businesses",
    title: "Businesses",
    path: "/businesses",
    is_visible: true,
    for_header: true,
    elemet: <Home />,
  },
  {
    id: "centers",
    title: "Centers",
    path: "/centers",
    is_visible: true,
    elemet: <Home />,
    for_header: true,
  },
  {
    id: "blogNews",
    title: "Blog & News",
    path: "/blog-news",
    elemet: <Home />,
    is_visible: true,
    for_header: true,
  },
  {
    id: "contact",
    title: "Contact Us",
    path: "/contact",
    is_visible: true,
    elemet: <Home />,
    for_header: true,
  },
];

export default pageList;
