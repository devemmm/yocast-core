import { useSwiper } from "swiper/react";

const SlidePrevButton = (props) => {
  const swiper = useSwiper();

  return (
    <button
      className="hidden"
      onClick={() => swiper.slidePrev()}
      ref={props.swipingButtonRefPrev}
    ></button>
  );
};

export default SlidePrevButton;
