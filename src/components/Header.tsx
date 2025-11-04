import { NavLink } from "react-router-dom";
import logo from "../assets/img/svg/logo.svg";
import pageList from "../constant/pageList";
import Flover from "../assets/img/svg/fourLeafFlower.svg?react";
import Leaf from "../assets/img/svg/leaf.svg?react";
import Sunburst from "../assets/img/svg/sunburst.svg?react";
import Star from "../assets/img/svg/star.svg?react";
import Square from "../assets/img/svg/square.svg?react";
import LeafBubbles from "../assets/img/svg/leafBubbles.svg?react";
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

          <div className="navigation">
            <LeafBubbles className="navigationIcon" />
            <Flover className="navigationIcon" />
            <Sunburst className="navigationIcon" />
            <Star className="navigationIcon" />
            <Square className="navigationIcon" />
            <Leaf className="navigationIcon" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
