import "./contacts.css";
import img from "../../assets/contact.jpg";
import { contactData } from "../../utils/contactData";
import { Contact } from "../../components";

const Contacts = () => {
  return (
    <section id="contact" className="homyz-contact">
      <div className="homyz-contact-container">
        <div className="homyz-contact-content">
          <div className="heading">
            <h5 className="orangeText">Our Contact</h5>
            <h3 className="primaryText">It Is Easy To Contact Us</h3>
            <p className="secondaryText">
              Ware always ready to help by providing the best services for
              you.We believe a good place to live can make your life better
            </p>
          </div>
          <div className="contacts-container">
            {contactData.map((data, index) => {
              return <Contact key={index} {...data} />;
            })}
          </div>
        </div>
        <div className="homyz-contact-img">
          <img src={img} alt="contact-img" />
        </div>
      </div>
    </section>
  );
};
export default Contacts;
