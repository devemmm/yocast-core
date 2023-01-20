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
import bghil from "../../asstes/images/bghil.png";

import problem from "../../asstes/images/problem.jpg";
import { statistics } from "../../data/pageData";
import { padding } from "@mui/system";
import Footer from "../../components/home/Footer";
import Slidding from "../../components/home/Slidding";
import Wellcome from "../../components/home/Wellcome";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { constacts } from "../../data/pageData";
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
        <Slidding />
        {/* wellcome screen */}
      </Box>
      <Box className="h-[300vh]">
        <Box className=" items-center mt-6 flex flex-col space-y-10 w-[90%] md:w-[50%] mx-auto ">
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
        <Wellcome />
        <Box className="h-[70%] flex items-center ">
          <Box className="w-[100%] h-[98%]">
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
                              {index === 0
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
            <Box className="h-[70%] flex items-center justify-center">
              <Box className="h-[90%]  flex flex-col space-y-[20%] w-[70%] mx-auto ">
                <Box className="h-[25%] w-[70%]  mx-auto justify-between flex flex-col space-y-4">
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      font: "poppins",
                      textAlign: "center",
                    }}
                  >
                    What Our Clients Says
                  </Typography>
                  <Box className="flex h-[80%] items-center justify-between flex-row items-center">
                    <Box className="w-[8%] rounded flex items-center justify-center text-white  hover:bg-[#FEB545] bg-[#383a90] h-[25%]">
                      <ArrowForwardIcon
                        sx={{ font: "bold" }}
                        className="font-bold"
                      />
                    </Box>
                    <Box className="w-[80%]  flex items-center justify-center p-3 h-[100%] border">
                      <Typography sx={{ font: "poppins", font: "sans" }}>
                        psum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum
                      </Typography>
                    </Box>
                    <Box className="w-[8%] rounded flex items-center justify-center text-white font-bold text-4xl hover:bg-[#FEB545] bg-[#383a90] h-[25%]">
                      <ArrowBackIcon />
                    </Box>
                  </Box>
                </Box>



                
                <Box className="h-[70%] w-[100%] flex flex-col space-y-10">
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      font: "poppins",
                      textAlign: "center",
                    }}
                  >
                    Contact us
                  </Typography>
                  <p className="text-center font-poppins font-sans">
                    psum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor
                  </p>
                  <Box className="w-[90%] h-[90%]  mx-auto">
                    <form className="flex w-[100%] flex-col h-[100%]">
                      <Box className="flex  w-[100%] h-[4%] items-center justify-between flex-row">
                        <Box className="w-[48%] flex flex-col space-y-2  h-[100%]">
                          {constacts.slice(0, 2).map((contact, index) => (
                            <Box className="flex  h-[30%] flex-col space-y-3">
                              <label htmlFor={contact.name}>
                                {contact.name}
                              </label>
                              <input
                                className="h-[80%] pl-3 focus:outline-0 bg-[#f2f3f4]"
                                id={contact.name}
                                type={contact.type}
                              />
                            </Box>
                          ))}
                        </Box>
                        <Box className="w-[50%] flex flex-col space-y-2  h-[100%]">
                          {constacts.slice(2, 4).map((contact, index) => (
                            <Box className="flex  h-[24%] flex-col space-y-3">
                              <label htmlFor={contact.name}>
                                {contact.name}
                              </label>
                              <input
                                className="h-[80%] pl-3  bg-[#f2f3f4] focus:outline-0"
                                id={contact.name}
                                type={contact.type}
                              />
                            </Box>
                          ))}
                        </Box>
                      </Box>
                      <Box className="w-[48%] flex flex-col space-y-2 bg-black  h-[41%]">
                        <textarea
                          className="bg-[#f2f3f4]"
                          name=""
                          id=""
                          cols="30"
                          rows="7"
                        ></textarea>
                      </Box>
                    </form>
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
