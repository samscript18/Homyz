import Button from "../button/Button";
import "./contact.css";

const Contact = ({ icon, heading, contact, detail }) => {
  return (
    <div className="contact">
      <div className="contact-content">
        <span>{icon}</span>
        <div className="contact-title">
          <h5>{heading}</h5>
          <p className="secondaryText">{contact}</p>
        </div>
      </div>
      <Button text={detail} />
    </div>
  );
};
export default Contact;
