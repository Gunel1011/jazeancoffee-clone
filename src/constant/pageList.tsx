import type { ReactNode } from "react";
import Home from "../Modules/Home/View/Home";
import CoffeeDeatils from "../Modules/Home/View/CoffeeDeatils";
import Store from "../Modules/Store/View/Store";
import Contact from "../Modules/Contact/View/Contact";
import Centers from "../Modules/Centers/View/Centers";
import Cart from "../Modules/Cart/Cart";
import NotFound from "../components/NotFound";

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
    id: "cart",
    title: "Cart",
    path: "/cart",
    elemet: <Cart />,
    is_visible: true,
    for_header: false,
  },
  // {
  //   id: "ourStory",
  //   title: "Our Story",
  //   path: "/our-story",
  //   is_visible: true,
  //   elemet: <Home />,
  //   for_header: true,
  // },
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
    elemet: <Store />,
  },
  // {
  //   id: "businesses",
  //   title: "Businesses",
  //   path: "/businesses",
  //   is_visible: true,
  //   for_header: true,
  //   elemet: <Home />,
  // },
  {
    id: "centers",
    title: "Centers",
    path: "/centers",
    is_visible: true,
    elemet: <Centers />,
    for_header: true,
  },
  // {
  //   id: "blogNews",
  //   title: "Blog & News",
  //   path: "/blog-news",
  //   elemet: <Home />,
  //   is_visible: true,
  //   for_header: true,
  // },
  {
    id: "contact",
    title: "Contact Us",
    path: "/contact",
    is_visible: true,
    elemet: <Contact />,
    for_header: true,
  },
  {
    id: "not-found",
    title: "Not Found",
    path: "*",
    is_visible: true,
    elemet: <NotFound />,
    for_header: false,
  },
];

export default pageList;
