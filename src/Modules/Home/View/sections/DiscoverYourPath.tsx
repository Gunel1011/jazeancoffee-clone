import { LuUserRound } from "react-icons/lu";
import { Link } from "react-router-dom";
import Line from "../../../../assets/img/svg/line.svg?react";
import Coffe from "../../../../assets/img/svg/coffe.svg?react";
import Bag from "../../../../assets/img/svg/bag.svg?react";
import patter from "../../../../assets/img/sectionPattern.webp";
const DiscoverYourPath = () => {
  return (
    <section className="discover" id="dicoverSection">
      <div className="container">
        <div className="row">
          <div className="discoverBlockTop">
            <div className="discoverBlock">
              <Line className="line" />
              <LuUserRound className="user" />
              <h2 className="discoverTitle">INDIVIDUAL</h2>
              <Link to={"/story"}>
                <span>DISCOVER</span>
                <span>NOW</span>
              </Link>
            </div>
            {/* tree  */}
            <div className="discoverBlock">
              <Coffe />
            </div>
            <div className="discoverBlock">
              <Line className="line lineRota" />
              <Bag className="user" />
              <h2 className="discoverTitle">INDIVIDUAL</h2>
              <Link to={"/story"}>
                <span>DISCOVER</span>
                <span>NOW</span>
              </Link>
            </div>
          </div>
          <div className="patterBlock">
            <img src={patter} alt="patter" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverYourPath;
