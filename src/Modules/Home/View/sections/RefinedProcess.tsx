import Sun from "../../../../assets/img/svg/sunburst.svg?react";
import bean from "../../../../assets/video/bean.mp4";
import CoffeBag from "../../../../assets/img/svg/coffeeBag.svg?react";
import CoffeeBean from "../../../../assets/img/svg/coffeeBean.svg?react";
const RefinedProcess = () => {
  return (
    <section className="rafined" id="rafindedSection">
      <div className="container">
        <div className="row">
          {/* leftSide  */}
          <div className="rafineContext" data-aos="fade-up">
            <h2 className="title">MASTERS OF TECHNIQUE</h2>
            <p className="text">
              With a fine eye for detail, the farmers process the cherries to
              deliver masterful beans each time
            </p>
            <Sun className="sun" />
          </div>
          {/* img  */}
          <div className="img">
            <video id="videHarvest" autoPlay muted loop playsInline>
              <source src={bean} type="video/mp4" />
            </video>
          </div>

          <div className="rafineSvg">
            <svg width="649" height="800" viewBox="0 0 649 1081" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M648 1C643.667 96.6667 580.707 261.4 367.5 231C118.5 195.496 1 272 1 506.5C1 741 28.5001 798 161.5 853.5C298.153 910.524 286.999 1005.42 265 1032C253 1046.5 239.5 1059 243 1080" stroke="#341212" stroke-width="1.5" style={{
                strokeDashoffset: 0,
                strokeDasharray: "none",
              }}></path>
            </svg>
          </div>

          {/* rightSide  */}
          <div className="coffeBag">
            <CoffeeBean className="bean" />
            <CoffeeBean className="bean" />
            <CoffeeBean className="bean" />
            <CoffeeBean className="bean" />
            <CoffeeBean className="bean" />
            <CoffeeBean className="bean" />
            <CoffeeBean className="bean" />
            <CoffeeBean className="bean" />
            <CoffeeBean className="bean" />
            <CoffeeBean className="bean" />
            <CoffeeBean className="bean" />
            <CoffeBag className="bag" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefinedProcess;
