import Star from "../../../assets/img/svg/yellowStar.svg?react";
import Balance from "../../../assets/img/svg/balance.svg?react";
import CustomSection from "../../../components/CustomSection";
const Centers = () => {
  return (
    <section className="centers">
      <div className="container">
        <div className="row">
          <div className="centersTopSide">
            <Star className="centersStar" />
            <Balance className="centersBalance" />
            <h2 className="centersTitle">EXPERIENCE CENTERS</h2>
          </div>
        </div>
      </div>
      <div className="centersBottomSide">
        <CustomSection />
      </div>
    </section>
  );
};

export default Centers;
