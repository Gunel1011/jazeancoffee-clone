import Coffe from "../../../../assets/img/svg/coffe.svg?react";
import Flover from "../../../../assets/img/svg/fourLeafFlower.svg?react";
import Leaf from "../../../../assets/img/svg/leaf.svg?react";
import Sunburst from "../../../../assets/img/svg/sunburst.svg?react";
import Star from "../../../../assets/img/svg/star.svg?react";
import Square from "../../../../assets/img/svg/square.svg?react";
import LeafBubbles from "../../../../assets/img/svg/leafBubbles.svg?react";
const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="navigation">
            <LeafBubbles className="navigationIcon" />
            <Flover className="navigationIcon" />
            <Sunburst className="navigationIcon" />
            <Star className="navigationIcon" />
            <Square className="navigationIcon" />
            <Leaf className="navigationIcon" />
          </div>
          <div className="center">
            <Coffe className="coffe" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
