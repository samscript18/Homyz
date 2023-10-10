import "./sliderButton.css";

export const SliderButtons = ({ useSwiper }) => {
  const swiper = useSwiper();
  return (
    <div className="slideButtons">
      <button type="button" onClick={() => swiper.slidePrev()}>
        &lt;
      </button>
      <button type="button" onClick={() => swiper.slideNext()}>
        &gt;
      </button>
    </div>
  );
};
