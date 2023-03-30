import React from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
  Alert,
  Container,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { services } from "../../data/pageData";
import { statistics } from "../../data/pageData";
import { padding } from "@mui/system";
import Footer from "../../components/home/Footer";
import { sliddingDivs } from "../../data/pageData";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import { Autoplay } from "swiper";
import SlideNextButton from "../global/SlideNext";
import SlidePrevButton from "../global/SlidePrev";
import { Fade, Slide } from "react-reveal";
function Slidding() {
  const ref1 = useRef(HTMLButtonElement);
  const ref2 = useRef(null);

  return (
    <Box className="h-[91%] w-full  text-white   flex  relative z-100 ">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={2}
        autoplay={true}
        loop={true}
        className=" h-full  w-[95%] md:w-[65%] flex items-center justify-center mx-auto"
      >
        <SwiperSlide
          id="main"
          className="w-full h-[100%] flex md:space-y-0 space-y-20  md:justify-between flex-col items-center     md:flex-row  bg-[b  "
        >
          <Box className="flex  md:max-[991px]:w-[48%] max-[317px]:w-[95%] items-center justify-start space-y-4  w-[80%] sm:w-[60%]  md:w-[29.8%] flex-col ">
            <Typography
              sx={{ fontWeight: "bold" }}
              variant="h3"
              className="font-bold text-center font-poppins font-sans md:text-start"
            >
              {sliddingDivs[0].title}
            </Typography>
            <Typography className="w-[100%] md:text-start text-center">
              {sliddingDivs[0].subtitle}
            </Typography>
            <Box className=" flex  justify-center md:justify-start w-[100%]  h-[20%]">
              <Link
                className="w-[70%] sm:w-[100%] flex items-center justify-center lg:justify-start sm:justify-center"
                to="/auth/login"
              >
                <button className="bg-[#FEB543] md:w-[50%]  sm:w-[100%]  max-[639px]:w-[100%] max-[304px]:w-[100%]  sm:w-[40%] w-[50%]   transition ease-in-out duration-300 delay-3 hover:-translate-y-[10%] w-[50%]  font-poppins font-sans  font-bold rounded-full p-3">
                  Login
                </button>
              </Link>
            </Box>
          </Box>
          
          <Box className=" w-[96%] md:max-[991px]:w-[60%] md:w-[70%] slider-img-box  flex items-center justify-center ">
            <img className=" w-[100%] md:w-[50%]" src={sliddingDivs[0].image} alt="" />
          </Box>
        </SwiperSlide>
        <SlideNextButton swipingButtonRef={ref2} />
        <SlidePrevButton swipingButtonRefPrev={ref1} />
      </Swiper>
      <Box className="bottom-0 w-[70%] mx-auto flex justify-start  absolute">
        <Box className="w-[80%]  flex  space-x-4 mx-auto">
          <button
            className="rounded-full hover:bg-[#FEB545] min-[601px]:w-[46px] bg-[#383A90] max-[600px]:w-[46px] over:bg-[#FEB545]  lg:w-[5%]  w-[20%]  sm:w-[10%] p-2 font-bold h-[100%]"
            onClick={() => ref1.current.click()}
          >
            {" "}
            <ArrowBackIcon
              sx={{ fontWeight: "bold" }}
              className="text-white font-bold "
            />
          </button>
          <button
            className="rounded-full  max-[600px]:w-[46px] min-[601px]:w-[46px] bg-[#383A90] hover:bg-[#FEB545]  lg:w-[5%]  w-[20%]  sm:w-[10%] p-2 font-bold h-[100%]"
            onClick={() => ref2.current?.click()}
          >
            <ArrowForwardIcon className="text-white " />
          </button>
        </Box>
      </Box>
    </Box>
  );
}

export default Slidding;
