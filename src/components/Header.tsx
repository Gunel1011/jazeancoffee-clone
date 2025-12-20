import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/img/svg/logo.svg";
import pageList from "../constant/pageList";
import { motion } from "framer-motion";
import CartIMg from "../assets/img/svg/cartBag.svg";
import { FiMenu } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useAppSelector } from "../redux/hooks";

const Header = () => {
  const location = useLocation();
  const cart = useAppSelector((state) => state.productSlice.cart);
  console.log(cart);
  const cartCount = useAppSelector((state) => state.productSlice.cartCount);
  const detailPages = [
    "/car-details",
    "/story",
    "/centers",
    "/blog-news",
    "/contact",
    "/cart",
  ];
  const isDetailPage = detailPages.some((path) =>
    location.pathname.startsWith(path)
  );
  const isStorePage = location.pathname.startsWith("/story");
  const listVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: { opacity: 1, y: 0 },
  };
  const [menuToggle, setMenuToggle] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <header
      className="header"
      style={{
        backgroundColor: isDetailPage ? "#180D0A" : "",
      }}
    >
      <div
        className={`headerOvarley ${menuToggle ? "active" : ""}`}
        onClick={() => setMenuToggle(false)}
      ></div>
      <div className="container">
        <div className="row">
          <div className="menu">
            <Link to={"/"} className="logo" data-aos="fade-down">
              <img src={logo} alt="logo" />
            </Link>
            <FiMenu
              className="menuIcon"
              onClick={() => setMenuToggle(!menuToggle)}
            />
          </div>
          <nav
            className="navBar"
            style={{
              display: isMobile ? (menuToggle ? "flex" : "none") : "flex",
            }}
          >
            <motion.ul
              className="navList"
              variants={listVariants}
              initial="hidden"
              animate={
                isMobile ? (menuToggle ? "visible" : "hidden") : "visible"
              }
            >
              {pageList
                .filter((page) => page.for_header)
                .map((item, index) => (
                  <motion.li
                    key={index}
                    className="listItem"
                    variants={itemVariants}
                  >
                    <NavLink
                      onClick={() => isMobile && setMenuToggle(false)}
                      to={item.path}
                    >
                      {item.title}
                    </NavLink>
                  </motion.li>
                ))}
            </motion.ul>
          </nav>
          {isStorePage && (
            <div className="cart">
              <Link to={`/cart`}>
                <span className="count">{cartCount}</span>
                <img src={CartIMg} alt="cartImg" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
