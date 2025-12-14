import Origin from "../../../../assets/video/coffe.mp4";
import LeafBuble from "../../../../assets/img/svg/leafBubbles.svg?react";
import { initScrollPath } from "../../../../scrollGsap/scroll";
import { useGSAP } from "@gsap/react";

const OurOrigin = () => {
  useGSAP(() => {
    initScrollPath();
  })
  return (
    <section className="ourOrigin" id="ourOriginSection">
      <div className="ourVideo">
        <video id="vide" autoPlay muted loop playsInline>
          <source src={Origin} type="video/mp4" />
        </video>
      </div>
      <div className="container">
        <div className="row">

          <div className="ourLine">
            <svg width="350" height="423" viewBox="0 0 465 623" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="half_line" d="M231.999 1C320.5 2 455.877 36.0774 462.999 280C470.999 554 374.5 619.5 231.999 622" stroke="#FF652D" strokeWidth="1.5" style={{ strokeDashoffset: 0, strokeDasharray: 'none' }}></path>
              <path className="half_line" d="M232.464 1C143.963 2 8.5857 36.0774 1.46387 280C-6.53613 554 89.9629 619.5 232.464 622" stroke="#FF652D" strokeWidth="1.5" style={{ strokeDashoffset: 0, strokeDasharray: 'none' }}></path>
            </svg>
          </div>
          <div className="ourSvg">
            <svg width="332" height="580" viewBox="0 0 532 1018" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M27.9999 1C153 295 -130.194 407.564 85.9999 464C210.5 496.5 287.5 612 251 881.5C214.5 1151 347.791 937.098 360.5 918.5C422 828.5 472.5 737.5 531 868" stroke="url(#g2)" strokeWidth="1.5" style={{ strokeDashoffset: 0.00001, strokeDasharray: '1546.12px, 16.3311px' }}></path>
              <defs style={{ strokeDashoffset: 0.00001, strokeDasharray: 'none' }}>
                <linearGradient id="g2" x1="266.372" y1="1" x2="266.372" y2="1016.56" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF652D"></stop>
                  <stop offset="1" stopColor="#FEFCF7"></stop>
                </linearGradient>
              </defs>
            </svg>

          </div>
        
          <div className="origin">
            <div className="originContent">
              <h2 className="originTitle" data-aos="fade-up">
                A GREEN GOLD “COFFEA”
              </h2>
              <p className="originText" data-aos="fade-up">
                Nestled in the abundant green mountainscapes and unrivalled
                beauty of the southern region
              </p>
              <LeafBuble className="leaf" data-aos="fade-up" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOrigin;
