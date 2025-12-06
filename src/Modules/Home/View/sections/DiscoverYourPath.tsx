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
            <div className="discoverLineSvg">
              <svg
                width={26}
                height={336}
                viewBox="0 0 26 231"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M16.5002 0.5C19.5007 32.5 27.6475 52.1882 4.50111 126.5C-14.499 187.5 50.4995 179 12 230"
                  stroke="white"
                  strokeWidth={1.5}
                  style={{
                    strokeDashoffset: 0.000196,
                    strokeDasharray: "194.026px, 47.26px",
                  }}
                />
              </svg>
            </div>
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
