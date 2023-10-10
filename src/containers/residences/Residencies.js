import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { sliderData } from "../../utils/sliderData";
import "./residencies.css";
import { sliderSettings } from "../../utils/sliderSetting";
import { Slide, SliderButtons } from "../../components";

const Residencies = () => {
  return (
    <section id="residency" className="homyz-residencies">
      <div className="homyz-residencies-container">
        <div className="homyz-residencies-heading">
          <h3 className="orangeText">Best Choice</h3>
          <h5 className="primaryText">Popular Residencies</h5>
        </div>
        <div className="homyz-residencies-content">
          <Swiper {...sliderSettings}>
            <SliderButtons useSwiper={useSwiper} />
            {sliderData.map((slide, index) => {
              return (
                <SwiperSlide key={index}>
                  <Slide id={slide.id} {...slide} />;
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Residencies;
