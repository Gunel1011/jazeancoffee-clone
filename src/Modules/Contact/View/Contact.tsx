import { object, string } from "yup";
import CustomButton from "../../../components/CostumButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  EMAIL_REGEX,
  MIN_TWO_LATTER,
  PHONE_REGEX,
} from "../../../utils/helper";
import type { IContactFormValues } from "../Models/contactModel";
import { sendContactEmail } from "../Service/ContactService";
import showNotification from "../../../utils/showNotification";

const Contact = () => {
  const contactChema = object({
    name: string()
      .trim()
      .required("Name is a required field")
      .matches(MIN_TWO_LATTER, "Name must contain at least 2 letters"),
    email: string()
      .trim()
      .required("Email is a required field")
      .matches(EMAIL_REGEX, "Please enter a valid email address"),
    phone: string()
      .trim()
      .required("Phone is a required field")
      .matches(PHONE_REGEX, "Please enter a valid phone number"),
    reason: string().trim().required("Reason is a required field"),
    message: string().trim().required("Message field cannot be empty"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IContactFormValues>({
    resolver: yupResolver(contactChema),
  });
  const onSubmit = async (data: IContactFormValues) => {
    try {
      await sendContactEmail(data);
      showNotification("success", "Message Send");
      reset();
    } catch (error: any) {
      showNotification("error", error?.response?.data);
    }
  };

  return (
    <section className="contact">
      <div className="row">
        {/* left Side  */}
        <div className="leftSide">
          <h2 className="leftSideTitle">LET'S GET IN TOUCH</h2>
        </div>
        {/* Right side  */}
        <div className="rightSide">
          <h2 className="rightSideTitle">CONTACT US</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inputBlock">
              {/* name  */}
              <div className="inputMessage">
                <input
                  type="text"
                  placeholder="name"
                  className="nameInput"
                  {...register("name")}
                />
                {errors.name?.message && (
                  <span className="contactFormSpanMessage">
                    {errors.name.message}
                  </span>
                )}
              </div>
              {/* email  */}
              <div className="inputMessage">
                <input
                  type="email"
                  placeholder="Email Address"
                  {...register("email")}
                />
                {errors.email?.message && (
                  <span className="contactFormSpanMessage">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>
            <div className="inputBlock">
              {/* phone  */}
              <div className="inputMessage">
                <input
                  type="number"
                  placeholder="phone"
                  {...register("phone")}
                />
                {errors.phone?.message && (
                  <span className="contactFormSpanMessage">
                    {errors.phone.message}
                  </span>
                )}
              </div>

              {/* reason  */}
              <div className="inputMessage">
                <input
                  type="text"
                  placeholder="Reason for Inquiry"
                  {...register("reason")}
                />
                {errors.reason?.message && (
                  <span className="contactFormSpanMessage">
                    {errors.reason.message}
                  </span>
                )}
              </div>
            </div>

            <textarea
              id=""
              placeholder="Message..."
              {...register("message")}
            ></textarea>
            {errors.message?.message && (
              <span className="contactFormSpanMessage">
                {errors.message.message}
              </span>
            )}

            <div className="btn">
              <CustomButton text={["SEND", "MESSAGE"]} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
