import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { Button } from "../../components";
import home from "../../assets/hero-image.png";
import "./header.css";

const Home = () => {
  return (
    <section className="homyz-home">
      <div className="homyz-content-text">
        <h1>Discover The Most Suitable Property</h1>
        <div className="orange-container"></div>
        <p className="secondaryText">
          Find a variety of properties that suits you very easily and forget all
          difficulties in finding a residence for you
        </p>
        <div className="input-field">
          <HiLocationMarker size={30} style={{ color: "#4066ff" }} />
          <input type="text" name="location" id="location" />
          <Button text={"Search"} />
        </div>
        <div className="home-countup">
          <div className="countup-content">
            <div className="countup">
              <CountUp start={8800} end={9000} duration={5} />
              <span className="orangeText">+</span>
            </div>
            <h5 className="secondaryText">Premium Product</h5>
          </div>
          <div className="countup-content">
            <div className="countup">
              <CountUp start={1850} end={2000} duration={5} />
              <span className="orangeText">+</span>
            </div>
            <h5 className="secondaryText">Happy Customer</h5>
          </div>
          <div className="countup-content">
            <div className="countup">
              <CountUp end={28} duration={5} />
              <span className="orangeText">+</span>
            </div>
            <h5 className="secondaryText">Awards Winning</h5>
          </div>
        </div>
      </div>
      <div className="homyz-content-image">
        <img src={home} alt="home" />
      </div>
    </section>
  );
};
export default Home;
