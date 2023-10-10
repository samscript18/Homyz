import { img1, img2, img3, img4 } from "./import";
import "./brands.css";

const Brands = () => {
  return (
    <section className="homyz-brands">
      <div>
        <img src={img1} alt="equinix" />
      </div>
      <div>
        <img src={img2} alt="realty" />
      </div>
      <div>
        <img src={img3} alt="tower" />
      </div>
      <div>
        <img src={img4} alt="prologis" />
      </div>
    </section>
  );
};
export default Brands;
