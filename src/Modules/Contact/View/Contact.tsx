import CustomButton from "../../../components/CostumButton";
const Contact = () => {
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
          <form>
            <div className="inputBlock">
              <input type="text" placeholder="name" className="nameInput" />
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="inputBlock">
              <input type="number" placeholder="phone" />
              <input type="text" placeholder="Reason for Inquiry" />
            </div>
            <textarea name="" id="" placeholder="Message..."></textarea>
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
