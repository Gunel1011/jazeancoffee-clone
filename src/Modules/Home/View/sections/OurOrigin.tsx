import Origin from "../../../../assets/video/coffe.mp4";
import LeafBuble from "../../../../assets/img/svg/leafBubbles.svg?react";

const OurOrigin = () => {
  return (
    <section className="ourOrigin">
      <div className="ourVideo">
        <video id="vide" autoPlay muted loop playsInline>
          <source src={Origin} type="video/mp4" />
        </video>
      </div>
      <div className="container">
        <div className="row">
          <div className="origin">
            <div className="originContent">
              <h2 className="originTitle">A GREEN GOLD “COFFEA”</h2>
              <p className="originText">
                Nestled in the abundant green mountainscapes and unrivalled
                beauty of the southern region
              </p>
                <LeafBuble className="leaf" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOrigin;
