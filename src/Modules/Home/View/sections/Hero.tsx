import Coffe from "../../../../assets/img/svg/coffe.svg?react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { initScrollPath } from "../../../../scrollGsap/scroll";

const Hero = () => {
  useGSAP(() => {
    gsap.to(".coffe", {
      y: 100,
      duration: 2.5,
      ease: "back.out(1.7)",
      delay: 2,
    });
    gsap.to(".heroText", {
      y: 100,
      duration: 2.5,
      ease: "back.out(1.7)",
      opacity: 0,
      delay: 2,
    });

    gsap.to(".heroTitle", {
      y: 100,
      duration: 2.5,
      ease: "back.out(1.7)",
      opacity: 0,
      delay: 2,
    });

    initScrollPath();
  });

  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="center">
            <Coffe className="coffe" />
            <div className="svgContain">
              <svg
                width="119"
                height="100%"
                viewBox="0 0 119 715"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M48.0001 0.999998C48.0001 0.999998 11.5003 53.5 25.5003 132C39.5003 210.5 86.5022 217 115.501 317C144.5 417 -97.9997 496.5 49 714"
                  stroke="url(#g1)"
                  strokeWidth="1.5"
                ></path>
                <defs
                  style={{ strokeDashoffset: 0.001, strokeDasharray: "none" }}
                >
                  <linearGradient
                    id="g1"
                    x1="59.3098"
                    y1="0.999997"
                    x2="59.3098"
                    y2="714"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FEFCF7"></stop>
                    <stop offset="1" stopColor="#FF652D"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p className="heroText ">home of arabica</p>
            <h2 className="heroTitle">JAZEAN</h2>
            <p className="heroText">
              a treasure that has been brewing for centuries
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
