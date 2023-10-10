import "./values.css";
import img from "../../assets/value.png";
import { accordionData } from "../../utils/accordionData";
// import { Accordion } from "../../components";
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from "react-icons/md";
import { useState } from "react";

const Values = () => {
  const [activeIndex, SetActiveIndex] = useState(null);

  const handleChange = (index) => {
    SetActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section id="value" className="homyz-values">
      <div className="homyz-values-container">
        <div className="homyz-values-img">
          <img src={img} alt=" our value" />
        </div>
        <div className="homyz-values-content">
          <div className="heading">
            <h5 className="orangeText">Our Value</h5>
            <h3 className="primaryText">Value We Give To You</h3>
            <p className="secondaryText">
              Ware always ready to help by providing the best services for
              you.We believe a good place to live can make your life better
            </p>
          </div>
          <div className="accordion-container">
            {accordionData.map(({ id, icon, heading, detail }, index) => {
              return (
                <div className="accordion" id={id}>
                  <div className="accordion-heading">
                    <span>{icon}</span>
                    <h6 className="primaryText">{heading}</h6>
                    <button type="button" onClick={() => handleChange(index)}>
                      {activeIndex === index ? (
                        <MdOutlineArrowDropUp size={22} />
                      ) : (
                        <MdOutlineArrowDropDown size={22} />
                      )}
                    </button>
                  </div>
                  {activeIndex === index && (
                    <div className="accordion-content">
                      <p className="secondaryText">{detail}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Values;
