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
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { sliddingDivs } from "../../data/pageData";
import bghil from "../../asstes/images/bghil.png";
import welcom from "../../asstes/images/welcome.png";
import problem from "../../asstes/images/problem.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { services } from "../../data/pageData";
import { statistics } from "../../data/pageData";
import { padding } from "@mui/system";
import Footer from "../../components/home/Footer";
const navlinks = ["Home", "About", "SERVICES", "CONTACT", "LOGIN"];
const Home = () => {
  return (
    <Box>
      <Box className="  h-[95vh] header">
        {/* Navigation bar */}
        <Box className="flex justify-between w-[95%] mx-auto h-[9%] items-center ">
          <Box className="text-white flex items-center  flex-row space-x-6">
            <Typography
              sx={{ font: "bold", fontWeight: "bold" }}
              className="text-white font-bold"
              variant="h5"
            >
              YOCAST
            </Typography>
            <ul className="flex flex-row  md:flex hidden space-x-10 items-center ">
              {navlinks.map((link, index) => (
                <li className="hover:cursor-pointer" key={index}>
                  {link}
                </li>
              ))}
            </ul>
            <SearchIcon />
          </Box>
          <Box className="md:hidden ">
            <MenuIcon className="text-white hidden  font-bold text-3xl" />
          </Box>
        </Box>
        {/* slidding component */}
        <Box className="h-[91%]   text-white   flex  relative z-100">
          <Box className="md:w-[60%]  w-[100%] md:-translate-y-[10%] flex md:space-y-0 space-y-20  md:justify-between flex-col items-center     md:flex-row   mx-auto">
            <Box className="flex  md:max-[991px]:w-[48%] items-center justify-start space-y-4  w-[80%] sm:w-[60%]  md:w-[30%] flex-col ">
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
              <Box className=" flex  sm:w-[] justify-center md:justify-start w-[100%]  h-[20%]">
                <button className="bg-[#FEB543] w-[50%]  font-poppins font-sans  font-bold rounded-full p-3">
                  Read More
                </button>
              </Box>
            </Box>
            <Box className=" w-[96%] md:max-[991px]:w-[60%] md:w-[70%] slider-img-box  flex items-center justify-center ">
              <img className="w-[50%]" src={sliddingDivs[0].image} alt="" />
            </Box>
          </Box>
          <Box className="bottom-0 w-[70%] mx-auto flex justify-start  absolute">
            <Box className="w-[80%] translate-y-5 flex  space-x-4 mx-auto">
              <button className="rounded-full md:w-[10%] lg:w-[4%]  sm:w-[10%]  bg-[#383A90] w-[20%] md:w-[4%] p-2 font-bold h-[100%]">
                {" "}
                <ArrowBackIcon
                  sx={{ fontWeight: "bold" }}
                  className="text-white font-bold "
                />
              </button>
              <button className="rounded-full bg-[#383A90]  lg:w-[4%]  w-[20%] md:w-[10%] md:w-[4%] sm:w-[10%] p-2 font-bold h-[100%]">
                <ArrowForwardIcon className="text-white " />
              </button>
            </Box>
          </Box>
        </Box>
        {/* wellcome screen */}
      </Box>
      <Box className="h-[300vh]">
        <Box className=" flex w-[100%]   flex-col space-y-5 pt-5  items-center ">
          <Box className="h-[30%] items-center mt-6 flex flex-col space-y-10 w-[90%] md:w-[50%] mx-auto ">
            <h1 className="text-center border border-[#feb543]  border-x-0 border-t-0 font-bold text-3xl">
              Welcome To Yocast Business LTD
            </h1>
            <Box className="w-[100%] flex items-center justify-center ">
              <img className="w-[70%]" src={welcom} alt="" />
            </Box>
            <Box className="w-[100%]">
              <Typography
                className="text-center text-[1rem] tetx-black  w-[100%]  "
                variant="p"
              >
                We started Arches Audio with one goal in mind: to empower
                individuals and businesses to use audio to connect with their
                audience and tell
              </Typography>
              <Typography className="text-center font-poppins font-sans">
                their stories in an impactful way
              </Typography>
            </Box>
            <Box className="w-[100%] flex justify-center items-center ">
              <button className="bg-[#FEB543] w-[20%]  text-white font-poppins font-sans  font-bold rounded-full p-3">
                Read More
              </button>
            </Box>
          </Box>
          {/* Services screen */}
          <Box className="w-[100%]  service_section ">
            <Box className="w-[100%]  h-[100%] space-y-10 flex-col text-center flex justify-between">
              <Typography
                variant="h4"
                className=" md:text-white text-[#FEB543] underline h-[10%] mx-auto "
                sx={{ fontWeight: "bold", textAlign: "center" }}
              >
                Our Services
              </Typography>
              <Box className="flex  h-[70%] justify-center md:justify-between sm:space-x-4  flex-col space-y-4 md:space-y-0  md:flex-row sm:w-[95%] md:w-[67%] w-[95%]  mx-auto">
                {services.map((service, index) => (
                  <Box className="">
                    <img className="rounded-xl" src={service.image} />
                    <Box className="text-center  w-[95%] md:w-[70%] mt-3 mx-auto">
                      <Typography
                        className="w-[100%] mx-auto text-center "
                        sx={{ fontWeight: "bold", textAlign: "center" }}
                        variant="h4"
                      >
                        {service.title}
                      </Typography>
                      <Typography className="w-[100%]" variant="p">
                        {service.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box className="w-[100%] h-[20%] flex  items-end  justify-center ">
                <button className="bg-[#FEB543]  w-[40%] md:w-[10%]   text-white font-poppins font-sans  font-bold rounded-full p-3">
                  Read More
                </button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="h-[25%] items-center mt-6 flex flex-col space-y-10 w-[90%] md:w-[50%] mx-auto ">
          <h1 className="text-center border border-[#feb543]  border-x-0 border-t-0 font-bold text-3xl">
            Welcome To Yocast Business LTD
          </h1>
          <Box className="w-[100%] flex items-center justify-center ">
            <img className="w-[70%]" src={problem} alt="" />
          </Box>
          <Box className="w-[100%]">
            <Typography
              className="text-center text-[1rem] tetx-black  w-[100%]  "
              variant="p"
            >
              We started Arches Audio with one goal in mind: to empower
              individuals and businesses to use audio to connect with their
              audience and tell
            </Typography>
            <Typography className="text-center font-poppins font-sans">
              their stories in an impactful way
            </Typography>
          </Box>
          <Box className="w-[100%] flex justify-center items-center ">
            <button className="bg-[#FEB543] w-[20%]  text-white font-poppins font-sans  font-bold rounded-full p-3">
              Read More
            </button>
          </Box>
        </Box>
        <Box className="h-[70%]    flex items-center ">
          <Box className="w-[100%]  h-[98%]">
            <Box className="w-[100%] flex mt-10 why_section  p-4 md:h-[18%]">
              <Box className="h-[96%] md:h-[80%] justify-center flex flex-col space-y-8 w-[100%]">
                <Typography
                  variant="h4"
                  className="text-white  underline h-[10%] mx-auto "
                  sx={{ textAlign: "center" }}
                >
                  Why choose us
                </Typography>
                <Box className="flex flex-col  pace-y-8">
                  <Box className="w-[60%] mt-9 flex flex-col space-y-5  mx-auto">
                    <p className="text-center font-poppins font-sans   mx-auto font-poppins">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis aliqua. Ut enim ad
                      minim veniam, quis aliqua. Ut enim ad minim veniam, quis
                      aliqua. Ut enim ad minim veniam, quis
                    </p>
                    <Box className="w-[80%]  flex  flex-wrap justify-between items-center  mx-auto">
                      {statistics.map((stat, index) => (
                        <Box className="flex flex-row space-x-2 items-center">
                          <Box>
                            <img src={stat.image} alt="" />
                          </Box>
                          <Box>
                            <Typography
                              className="font-sans font-poppins"
                              sx={{
                                font: "poppins",
                                fontStyle: "sans-serif",
                                fontSize: "2em",
                              }}
                            >
                              {index == 0
                                ? stat.number + "%"
                                : stat.number + "+"}
                            </Typography>
                            <Typography className="text-3xl">
                              {stat.title}
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
