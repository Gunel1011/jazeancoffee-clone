import { Link, NavLink } from "react-router-dom";
import logo from "../assets/img/jazeanLogo.png";
import pageList from "../constant/pageList";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdPhoneAndroid } from "react-icons/md";
import CostumButton from "./CostumButton";
import { object, string } from "yup";
import { EMAIL_REGEX } from "../utils/helper";
import { useForm } from "react-hook-form";
import { sendContactEmail } from "../Modules/Contact/Service/ContactService";
import showNotification from "../utils/showNotification";
import { yupResolver } from "@hookform/resolvers/yup";

interface IFooterEmail {
  email: string;
}
const Footer = () => {
  const contactChema = object({
    email: string()
      .trim()
      .required("Email is a required field")
      .matches(EMAIL_REGEX, "Please enter a valid email address"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFooterEmail>({
    resolver: yupResolver(contactChema),
  });
  const onSubmit = async (data: IFooterEmail) => {
    try {
      const payload = {
        name: "",
        phone: "",
        reason: "",
        message: "",
        email: data.email,
      };

      await sendContactEmail(payload);
      showNotification("success", "Message Send");
      reset();
    } catch (errors: any) {
      showNotification("error", errors?.response?.data);
    }
  };
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
                data-aos-delay="100"
              />
              <div
                className="footerNavigation"
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="200"
              >
                <h2 className="footerTitle">Jazean</h2>
                {pageList
                  .filter((page) => page.for_header)
                  .map((item) => (
                    <li className="listItem" key={item.id}>
                      <NavLink to={item.path}>{item.title}</NavLink>
                    </li>
                  ))}
              </div>
            </div>
            <div
              className="footerCal"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="300"
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
              <div className="contactFotter">
                <MdPhoneAndroid className="phone" />
                <Link to={`tel:920012063`}>920012063</Link>
              </div>
            </div>
            <div
              className="footerCal"
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-delay="100"
            >
              <h2 className="footerTitle">SUBSCRIBE TO OUR NEWSLETTER</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="emailBlog">
                  <input
                    type="email"
                    placeholder="Email Addres"
                    {...register("email")}
                  />
                  {errors.email?.message && (
                    <span className="footerErr">{errors.email.message}</span>
                  )}
                  <CostumButton
                    text={["SUBSCRIBE", "TO", "OUR", "NEWSLETTER"]}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
