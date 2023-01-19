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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { padding } from "@mui/system";
const navlinks = ["Home", "About", "SERVICES", "CONTACT", "LOGIN"];
const Home = () => {
  return (
    <Box className="h-screen ">
      <Box className="h-[95%]  header">
        {/* Navigation bar */}
        <Box className="flex justify-between w-[95%] mx-auto h-[9%] items-center ">
          <Box className="text-white flex items-center  flex-row space-x-6">
            <Typography
              sx={{ font: "bold" }}
              className="text-white font-bold"
              variant="h4"
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
        <Box className="h-[91%]   text-white   flex  relative z-100">
          <Box className="w-[60%] md:-translate-y-[10%] flex  justify-between flex-col items-center     md:flex-row   mx-auto">
            <Box className="flex  items-center justify-start space-y-4  w-[30%] flex-col ">
              <Typography
                sx={{ fontWeight: "bold" }}
                variant="h3"
                className="font-bold"
              >
                {sliddingDivs[0].title}
              </Typography>
              <Typography className="w-[100%]">
                {sliddingDivs[0].subtitle}
              </Typography>
              <Box className="w-[100%] h-[20%]">
                <button
                className="bg-[#FEB543] w-[50%]  font-bold rounded-full p-3"
                >
                  Read More
                </button>
              </Box>
            </Box>
            <Box className="w-[70%] sider-img-box flex items-center justify-center ">
              <img className="w-[58%]" src={sliddingDivs[0].image} alt="" />
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
      </Box>
    </Box>
  );
};

export default Home;
