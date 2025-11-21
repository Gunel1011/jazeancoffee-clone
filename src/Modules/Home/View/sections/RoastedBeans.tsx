import BeanVedoe from "../../../../assets/video/coffee.beanVedoe.mp4";
import Star from "../../../../assets/img/svg/star.svg?react";
const RoastedBeans = () => {
  return (
    <section className="roastedBeans" id="roastedBeansSection">
      <div className="ourVideo">
        <video id="vide" autoPlay muted loop playsInline>
          <source src={BeanVedoe} type="video/mp4" />
        </video>
      </div>
      <div className="container">
        <div className="row">
          <div className="origin">
            <div className="originContent" data-aos="fade-up">
              <h2 className="originTitle">ROASTED TO PERFECTION</h2>
              <p className="originText">
                A little floral, a little nutty, a little smokey and a little
                herby - Jazean beans are roasted to perfection, revealing a rich
                bouquet in every sip
              </p>
              <Star className="leaf" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoastedBeans;
