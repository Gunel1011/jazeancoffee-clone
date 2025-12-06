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
            <div className="beanLineSvg">
              <svg
                width={26}
                height={153}
                viewBox="0 0 26 231"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M16.5002 0.5C19.5007 32.5 27.6475 52.1882 4.50111 126.5C-14.499 187.5 50.4995 179 12 230"
                  stroke="white"
                  strokeWidth={1.5}
                  style={{
                    strokeDashoffset: 0.000196,
                    strokeDasharray: "194.026px, 47.26px",
                  }}
                />
              </svg>
            </div>
            <div className="beanSvg">
              <svg
                width={365}
                height={423}
                viewBox="0 0 465 623"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="half_line"
                  d="M231.999 1C320.5 2 455.877 36.0774 462.999 280C470.999 554 374.5 619.5 231.999 622"
                  stroke="white"
                  strokeWidth={1.5}
                  style={{
                    strokeDashoffset: 0,
                    strokeDasharray: "none",
                  }}
                />
                <path
                  className="half_line"
                  d="M232.464 1C143.963 2 8.5857 36.0774 1.46387 280C-6.53613 554 89.9629 619.5 232.464 622"
                  stroke="white"
                  strokeWidth={1.5}
                  style={{
                    strokeDashoffset: 0,
                    strokeDasharray: "none",
                  }}
                />
              </svg>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default RoastedBeans;
