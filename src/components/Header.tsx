import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/img/svg/logo.svg";
import pageList from "../constant/pageList";
import { motion } from "framer-motion";
import CartIMg from "../assets/img/svg/cartBag.svg";
const Header = () => {
  const location = useLocation();
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
    visible: { opacity: 1, y: -15 },
  };
  return (
    <header
      className="header"
      style={{
        backgroundColor: isDetailPage ? "#180D0A" : "",
      }}
    >
      <div className="container">
        <div className="row">
          <Link to={"/"} className="logo" data-aos="fade-down">
            <img src={logo} alt="logo" />
          </Link>
          <nav className="navBar">
            <motion.ul
              className="navList"
              variants={listVariants}
              initial="hidden"
              animate="visible"
            >
              {pageList
                .filter((page) => page.for_header)
                .map((item, index) => (
                  <motion.li
                    key={index}
                    className="listItem"
                    variants={itemVariants}
                  >
                    <NavLink to={item.path}>{item.title}</NavLink>
                  </motion.li>
                ))}
            </motion.ul>
          </nav>
          {isStorePage && (
            <div className="cart">
              <Link target="_blank" to={`/cart`}>
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
