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
import wellcomeImage from "../../asstes/images/welcome.png";
function Welcome() {
  return (
    <Box className="h-[70vh]">
      <Box className=" items-center mt-6 flex flex-col space-y-10 w-[90%] md:w-[50%] mx-auto ">
        <h1 className="text-center border border-[#feb543]  border-x-0 border-t-0 font-bold text-3xl">
          Welcome To Yocast LTD
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
            individuals and businesses to use audio to connect with their
            audience and tell their stories in an impactful way
          </p>
          {/* <Typography className="text-center font-poppins font-sans">
          their stories in an impactful way
        </Typography> */}
        </Box>
        <Box className="w-[100%] flex justify-center items-center ">
          <button className="bg-[#FEB543] w-[50%] md:w-[20%]  text-white font-poppins font-sans  font-bold rounded-full p-3">
            Read More
          </button>
        </Box>
      </Box>
    </Box>
  );
}

export default Welcome;
