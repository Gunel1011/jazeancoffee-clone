import { Link, NavLink } from "react-router-dom";
import logo from "../assets/img/jazeanLogo.png";
import pageList from "../constant/pageList";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdPhoneAndroid } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="topSide">
            <div className="footerCalLogo">
              <img
                src={logo}
                alt="logo"
                data-aos="fade-left"
                data-aos-offset="100"
                data-aos-delay="200"
              />
              <div
                className="footerNavigation"
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="400"
              >
                <h2 className="footerTitle">Jazean</h2>
                {pageList
                  .filter((page) => page.for_header)
                  .map((item) => (
                    <li className="listItem">
                      <NavLink to={item.path}>{item.title}</NavLink>
                    </li>
                  ))}
              </div>
            </div>
            <div
              className="footerCal"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="400"
            >
              <h2 className="footerTitle">FOLLOW US</h2>
              {/* sosial media icons  */}
              <div className="sosialMediaIcons">
                {/* instagram */}
                <Link
                  to={"https://www.instagram.com/jazeancoffee"}
                  target="_blnak"
                  className="FooterSosialMediaIconBorder"
                >
                  <FaInstagram className="FooterSosialMediaIcon" />
                </Link>
                {/* youtube */}
                <Link
                  to={
                    "https://www.youtube.com/channel/UCaabhhkqzM8dP7u4DgPMMRg"
                  }
                  target="_blnak"
                  className="FooterSosialMediaIconBorder"
                >
                  <FaYoutube className="FooterSosialMediaIcon" />
                </Link>
                {/* x  */}
                <Link
                  to={"https://x.com/Jazeancoffee"}
                  target="_blnak"
                  className="FooterSosialMediaIconBorder"
                >
                  <FaXTwitter className="FooterSosialMediaIcon" />
                </Link>
              </div>
              <h2 className="footerTitle">CALL US</h2>
              <div className="contact">
                <MdPhoneAndroid className="phone" />
                <Link to={"callto:920012063"}>920012063</Link>
              </div>
            </div>
            <div
              className="footerCal"
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-delay="300"
            >
              <h2 className="footerTitle">SUBSCRIBE TO OUR NEWSLETTER</h2>
              <div className="emailBlog">
                <input type="email" placeholder="Email Addres" />
                <button>
                  <span>SUBSCRIBE </span>
                  <span>TO </span>
                  <span>OUR </span>
                  <span>NEWSLETTER</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
