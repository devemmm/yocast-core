import {
  Box,
  Typography,
  TextField,
  Select,
  ListItem,
  Button,
  MenuItem,
} from "@mui/material";
import React from "react";
import Footer from "../../components/home/Footer";
import Welcome from "../../components/home/Welcome";
import wellcomeImage from "../../asstes/images/welcome.png";
import { formInputs } from "../../data/pageData";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import Navbar from "../../components/global/Navbar";
import Form from "../../components/aut/Form";

function Signup() {
  return (
    <Box className="h-screen">
      <Box className="h-[7%] flex items-center w-[100%] nav">
        <Navbar />
      </Box>
      <Box className="h-[80%]  flex items-center flex-col justify-center ">
        <Box className="h-[90%] w-[100%]">
          <Typography sx={{ textAlign: "center" }}>
            Login or create account on yocast
          </Typography>
          <Box className="flex mt-3 flex-row  h-[100%] justify-between   w-[95%]  md:w-[80%] mx-auto">
            <Box className="W-[40%] md:block hidden h-[100%]">
              <Box className="h-[70vh]">
                <Box className=" items-center mt-6 flex flex-col space-y-10 w-[90%] md:w-[50%] mx-auto ">
                  <h1 className="text-center border border-[#feb543]  border-x-0 border-t-0 font-bold text-3xl">
                    Welcome To Yocast Business LTD
                  </h1>
                  <Box className="w-[100%] flex items-center justify-center ">
                    <img className="w-[70%]" src={wellcomeImage} alt="" />
                  </Box>
                  <Box className="w-[100%]">
                    <p
                      className="text-center font-poopins font-sans text-[1rem] tetx-black  w-[100%]  "
                      variant="p"
                    >
                      We started Arches Audio with one goal in mind: to empower
                      individuals and businesses to use audio to connect with
                      their audience and tell their stories in an impactful way
                    </p>
                  </Box>
                  <Box className="w-[100%] flex justify-center items-center ">
                    <button className="bg-[#FEB543] w-[50%] md:w-[50%]   text-white font-poppins font-sans  font-bold rounded-full p-3">
                      Read More
                    </button>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Form />
          </Box>
        </Box>
      </Box>
      <Box className="bottom-0 ">
        <Footer />
      </Box>
    </Box>
  );
}

export default Signup;