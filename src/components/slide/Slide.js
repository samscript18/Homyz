import "./slide.css";

export const Slide = ({ name, price, detail, image }) => {
  return (
    <div className="slide">
      <div className="slide-img">
        <img src={image} alt={name} />
      </div>
      <div className="slide-content">
        <h5>
          <span className="orangeText">$</span>
          <span className="secondaryText">{price}</span>
        </h5>
        <h2 className="primaryText">{name}</h2>
        <p className="secondaryText">{detail}</p>
      </div>
    </div>
  );
};
