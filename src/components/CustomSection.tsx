import { Link } from "react-router-dom";
import CostumButton from "./CostumButton";
const CustomSection = () => {
  return (
    <section className="customInfo">
      <div className="container">
        <div className="img">
          {/* top  */}
          <div className="centersTop">
            <h2 className="centersTopTitle">DQ Café & Experience Center</h2>
            <p className="centersTopText">
              Indulge in and celebrate the iconic flavor of our coffee while
              immersing yourself in the essence of Saudi hospitality.
            </p>
            <div className="centersBtn">
              <CostumButton
                text={["GET", "DIRECTIONS"]}
                backgroundColor="#f7e9de"
                color="#000"
                url="https://maps.app.goo.gl/TKVxwTSNZFr686369"
              />
            </div>
          </div>
          {/* bottom  */}
          <div className="centersBottom">
            {/* block  */}
            <div className="centersBottomBlock">
              <h2 className="centersBottomBlockTitle">OPENING HOURS</h2>
              <p className="centersBottomBlockText">
                Saturday - Wednesday: 8:00 AM to 11:30 PM
              </p>
              <p className="centersBottomBlockText">
                Thursday: 8:00 AM - 12:30 AM
              </p>
              <p className="centersBottomBlockText">
                Friday: 8:00 AM - 11:30 AM & 12:30 PM - 12:30 AM
              </p>
            </div>
            {/* block  */}
            <div className="centersBottomBlock">
              <h2 className="centersBottomBlockTitle">LOCATION</h2>
              <p className="centersBottomBlockText">
                Street- Roundabout, 2 – 1364, Mall,
              </p>
              <p className="centersBottomBlockText">
                Diplomatic Quarter- Amr Ibn Omaya Al Damri, Riyadh
              </p>
            </div>
            {/* block  */}
            <div className="centersBottomBlock">
              <h2 className="centersBottomBlockTitle">MENU</h2>
              <Link
                to={
                  "https://www.instagram.com/stories/highlights/18051617773510512/"
                }
                className="centersBottomBlockMenu"
              >
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSection;
