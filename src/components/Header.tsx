import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/img/svg/logo.svg";
import pageList from "../constant/pageList";

const Header = () => {
  const location = useLocation();
  const isDetailPage = location.pathname.startsWith("/car-details");
  return (
    <header
      className="header"
      style={{
        backgroundColor: isDetailPage ? "#180D0A" : "",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <nav className="navBar">
            <ul className="navList">
              {pageList
                .filter((page) => page.for_header)
                .map((item) => (
                  <li className="listItem">
                    <NavLink to={item.path}>{item.title}</NavLink>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
