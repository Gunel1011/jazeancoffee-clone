import Flover from "../assets/img/svg/fourLeafFlower.svg?react";
import Leaf from "../assets/img/svg/leaf.svg?react";
import Sunburst from "../assets/img/svg/sunburst.svg?react";
import Star from "../assets/img/svg/star.svg?react";
import Square from "../assets/img/svg/square.svg?react";
import LeafBubbles from "../assets/img/svg/leafBubbles.svg?react";
const Navgitaion = () => {
  return (
    <div className="navigation">
      <a href="#ourOriginSection">
        <LeafBubbles className="navigationIcon" />
      </a>
      <a href="#harvestSection">
        <Flover className="navigationIcon" />
      </a>
      <a href="#rafindedSection">
        <Sunburst className="navigationIcon" />
      </a>
      <a href="#roastedBeansSection">
        <Star className="navigationIcon" />
      </a>
      <a href="#perfectFusionSection">
        <Square className="navigationIcon" />
      </a>
      <a href="#dicoverSection">
        <Leaf className="navigationIcon" />
      </a>
    </div>
  );
};

export default Navgitaion;
