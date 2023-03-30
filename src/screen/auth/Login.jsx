import {
  Box,
  Button,
} from "@mui/material";
import React from "react";
import Footer from "../../components/home/Footer";
import wellcomeImage from "../../asstes/images/welcome.png";
import LoginForm from "../../components/aut/LoginForm";
import { Link } from "react-router-dom";
function Login() {
  return (
    <Box className="h-screen">
      <Box className="h-[7%]   flex items-center w-[100%] ">
        <Box>
          <Link to="/">
            <Button>Back home</Button>
          </Link>
        </Box>
      </Box>
      <Box className="h-[80%]   flex items-center flex-col justify-center ">
        <Box className="h-[100%] w-[100%]">
          <Box className="flex mt-3 flex-row  h-[100%] justify-between   w-[95%]  md:w-[78%] mx-auto">
            <Box className="W-[65%] md:block hidden h-[100%]">
              <Box className="h-[70vh]">
                <Box className=" items-center mt-6 flex flex-col space-y-10 w-[90%] md:w-[50%] mx-auto ">
                  <h1 className="text-center border border-[#feb543]  border-x-0 border-t-0 font-bold text-3xl">
                    Welcome To Yocast Business
                  </h1>
                  <Box className="w-[100%] flex items-center justify-center ">
                    <img className="w-[70%]" src={wellcomeImage} alt="" />
                  </Box>
                  <Box className="w-[100%]">
                    <p className="text-center font-poopins text-[0.66rem] font-sans text-[1rem] tetx-black  w-[100%]  ">
                      We started Arches Audio with one goal in mind: to empower
                      individuals and businesses to use audio to connect with
                      their audience and tell their stories in an impactful way
                    </p>
                  </Box>
                  <Box className="w-[100%] flex justify-center items-center ">
                    <button className="bg-[#FEB543] transition ease-in-out duration-300 delay-3 hover:-translate-y-[10%]   w-[50%] md:w-[30%]   text-white font-poppins font-sans  font-bold rounded-full p-3 text-[0.70rem]">
                      Read More
                    </button>
                  </Box>
                </Box>
              </Box>
            </Box>
            <LoginForm />
          </Box>
        </Box>
      </Box>
      <Box className=" mt-24 md:h-[75vh] text-[0.70rem]  w-full">
        <Footer />
      </Box>
    </Box>
  );
}

export default Login;
