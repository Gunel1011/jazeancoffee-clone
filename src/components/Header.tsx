import { NavLink } from "react-router-dom";
import logo from "../assets/img/svg/logo.svg";
import pageList from "../constant/pageList";
const Header = () => {
  return (
    <header className="header">
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
          {/* <div className="lang">
            <p>esdsd3</p>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
