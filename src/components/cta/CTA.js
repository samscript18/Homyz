import Button from "../button/Button";
import "./cta.css";
const CTA = () => {
  return (
    <section id="cta" className="homyz-cta">
      <div className="homyz-cta-container">
        <h2>Get Started With Homyz</h2>
        <p>
          Subscribe and find super attractive price quotes from us. <br /> Find
          your residence soon.
        </p>
        <Button text={"Get Started"} />
      </div>
    </section>
  );
};
export default CTA;
