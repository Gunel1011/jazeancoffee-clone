import BeanVedoe from "../../../../assets/video/coffeeRoasted.mp4";
import Square from "../../../../assets/img/svg/square.svg?react";

const PerfectFusion = () => {
  return (
    <div>
      <section className="perfectFusion" id="perfectFusionSection">
        <div className="ourVideo">
          <video id="vide" autoPlay muted loop playsInline>
            <source src={BeanVedoe} type="video/mp4" />
          </video>
        </div>
        <div className="container">
          <div className="row">
            <div className="origin">
              <div
                className="originContent"
                data-aos="fade-up"
                data-aos-offset="500"
                data-aos-delay="600"
              >
                <h2 className="originTitle">FLAWLESS FLAVORS</h2>
                <p className="originText">
                  A little floral, a little nutty, a little smokey and a little
                  herby - Jazean beans are roasted to perfection, revealing a
                  rich bouquet in every sip Mixing and matching old techniques
                  and new technologies, our blends balance the past and future
                  of Saudi heritage
                </p>
                <Square className="leaf" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PerfectFusion;
