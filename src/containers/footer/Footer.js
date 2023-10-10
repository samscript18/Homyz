import "./footer.css";
import logo from "../../assets/logo2.png";

const Footer = () => {
  return (
    <section className="homyz-footer">
      <div className="homyz-footer-container">
        <div className="homyz-vision">
          <img src={logo} alt="footer-logo" />
          <p className="secondaryText">
            Our vision is to make all the people have the best place for them to
            live.
          </p>
        </div>
        <div className="homyz-information">
          <div className="info-content">
            <h2 className="primaryText">Information</h2>
            <p className="secondaryText">145 New York, Fl, 5467, USA</p>
          </div>
          <div className="footer-links">
            <a href="#home">Property</a>
            <a href="#residency">Services</a>
            <a href="#value">Product</a>
            <a href="#contact">About Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
