import coffe2 from "../../../../assets/video/coffe.2.mp4";
import chery from "../../../../assets/img/cherry.webp";
import Leaf from "../../../../assets/img/svg/fourLeafFlower.svg?react";
const CoffeeHarvest = () => {
  return (
    <section className="harvest">
      <div className="container">
        {/* cery  */}
        <div className="imgCerry">
          <img src={chery} alt="chery" />
        </div>
        <div className="imgCerry top">
          <img src={chery} alt="chery" />
        </div>
        <div className="imgCerry bottom">
          <img src={chery} alt="chery" />
        </div>
        <div className="row">
          {/* left side  */}
          <div className="contentLefth" data-aos="fade-up">
            <h2 className="text">SELECTIVELY HAND-PICKED, GRAIN BY GRAIN</h2>
            <Leaf className="leaf" />
          </div>
          {/* video  */}
          <div className="img">
            <video id="videHarvest" autoPlay muted loop playsInline>
              <source src={coffe2} type="video/mp4" />
            </video>
          </div>
          {/* right side  */}
          <div className="contentRigth">
            <p className="text" data-aos="fade-up">
              Proud of their heritage and the bounty of their sprawling green
              lands
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeHarvest;
