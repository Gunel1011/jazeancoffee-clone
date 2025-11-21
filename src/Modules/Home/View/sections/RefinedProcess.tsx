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
