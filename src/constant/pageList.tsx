import type { ReactNode } from "react";
import Home from "../Modules/Home/View/Home";
import CoffeeDeatils from "../Modules/Home/View/CoffeeDeatils";
import Store from "../Modules/Store/View/Store";
import Contact from "../Modules/Contact/View/Contact";
import Centers from "../Modules/Centers/View/Centers";
import Cart from "../Modules/Cart/Cart";
import NotFound from "../components/NotFound";
import CartBuy from "../components/CartBuy";

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
    for_header: true,
  },
  {
    id: "cart",
    title: "Cart",
    path: "/cart",
    elemet: <Cart />,
    is_visible: true,
    for_header: false,
  },
  {
    id: "cartBuy",
    title: "Cart Buy",
    path: "/cartBuy",
    elemet: <CartBuy />,
    is_visible: true,
    for_header: false,
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
    elemet: <Store />,
  },
  {
    id: "centers",
    title: "Centers",
    path: "/centers",
    elemet: <Centers />,
    is_visible: true,
    for_header: true,
  },
  {
    id: "contact",
    title: "Contact Us",
    path: "/contact",
    elemet: <Contact />,
    is_visible: true,
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
