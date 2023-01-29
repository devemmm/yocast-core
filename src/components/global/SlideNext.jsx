import { useSwiper } from "swiper/react";

const SlideNextButton = (props) => {
  const swiper = useSwiper();

  return (
    <button
      className="hidden"
      onClick={() => swiper.slideNext()}
      ref={props.swipingButtonRef}
    ></button>
  );
};

export default SlideNextButton;
