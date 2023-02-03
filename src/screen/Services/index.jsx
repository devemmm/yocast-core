import React from "react";
import {
  Box,
  Typography,
  TextField,
  Select,
  ListItem,
  Button,
  MenuItem,
} from "@mui/material";
import Navbar from "../../components/global/Navbar";
import Footer from "../../components/home/Footer";
import wellcomeImage from "../../asstes/images/welcome.png";
import { Slide } from "react-reveal";

const Services = () => {
  return (
    <Slide right className="h-screen">
      <Box classNAme="h-[100%]">
        <Box className="h-[8%] flex items-center justify-center head">
          <Navbar />
        </Box>
        <Box className="h-[79%] flex items-center justify-centerI">
          <Box className="W-[55%]  h-[95%]">
            <Box className="h-[70vh]">
              <Box className=" items-center mt-6 flex flex-col space-y-10 w-[90%] md:w-[50%] mx-auto ">
                <h1 className="text-center border border-[#feb543]  border-x-0 border-t-0 font-bold text-3xl">
                  Welcome To Yocast Business LTD
                </h1>
                <Box className="w-[100%] flex items-center justify-center ">
                  <img
                    className=" w-[90%]  max-[243px]:w-[100%] md:w-[70%]"
                    src={wellcomeImage}
                    alt=""
                  />
                </Box>
                <Box className="w-[100%]">
                  <p className="text-center font-poopins text-[0.70rem] font-sans text-[1rem] tetx-black  w-[100%]  ">
                    Yocast is the online platform for podacasting different
                    categories of podcasts to all peaples arround the world. We
                    started Arches Audio with one goal in mind: to empower
                    individuals and businesses to use audio to connect with
                    their audience and tell their stories in an impactful way
                  </p>
                </Box>
                <Box className="w-[100%] flex justify-center items-center ">
                  <button className="bg-[#FEB543] transition ease-in-out duration-300 delay-3 hover:-translate-y-[10%]   w-[50%] md:w-[20%]   text-white font-poppins font-sans  font-bold rounded-full p-3 text-[0.70rem]">
                    Read More
                  </button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className=" mt-24 md:h-[75vh] text-[0.70rem]  w-full">
          <Footer />
        </Box>
      </Box>
    </Slide>
  );
};

export default Services;
