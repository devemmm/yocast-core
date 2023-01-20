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
import Navbar from "../../components/global/Navbar";
import Footer from "../../components/home/Footer";
import Welcome from "../../components/home/Welcome";
import wellcomeImage from "../../asstes/images/welcome.png";
import { formInputs } from "../../data/pageData";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import ios from "../../asstes/images/android.png";
import android from "../../asstes/images/ios.png";
import { loginInputs } from "../../data/pageData";
import { Link } from "react-router-dom";
function LoginForm() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    country: "",
  });
  return (
    <Box className="md:w-[60%]  md:border-0  bg-white border border-x-0 border-b-0  w-[97%] flex items-center  h-[100%]   ">
      <Box className="h-[90%] pt-4 w-[100%] md:w-[80%] mx-auto  shadow-2xl">
        <Box className="w-[100%] h-[18%] flex flex-col justfy-center items-center">
          <Typography
            variant="h6"
            className="text-[0.80rem] font-poppins"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              font: "poppins",
            }}
          >
            YOCAST
          </Typography>
          <Typography>Wellcome back!</Typography>
          <p className="text-[0.80rem] font-poppins font-sans">
            Sign in to your account and manage your podcasts
          </p>
        </Box>
        <Box className="h-[98%] flex flex-col ">
          <form className="w-[90%] flex flex-col space-y-3 mx-auto">
            {loginInputs.map((input, index) => (
              <Box className="w-[100%] ">
                <TextField
                  type={input.type}
                  className="w-[100%]"
                  variant="outlined"
                  label={input.name}
                  key={index}
                />
              </Box>
            ))}
            <Box className="h-[5vh]">
              <Button
                className="text-center"
                sx={{
                  textAlign: "center",
                  width: "100%",
                  backgroundColor: "#1F60F0",
                  color: "white",
                  height: "100%",
                  font: "bold",
                }}
              >
                Login
              </Button>
            </Box>
            <Box className="w-[100%] mt-4 items-center text-center  flex space-y-4">
              <Box className="w-[40%] translate-y-2 md:block hidden   border border-x-0 border-t-0 "></Box>
              <Box className=" w-[100%] md:w-[20%]">
                <Typography variant="p">Login with</Typography>
              </Box>
              <Box className="border w-[40%]  md:block hidden  border-x-0 border-t-0"></Box>
            </Box>
            <Box className="w-[100%] space-y-4  items-center  flex flex-col">
              <Button
                sx={{
                  width: "100%",
                  backgroundColor: "",
                  height: "100%",
                  border: "1px solid  black",
                }}
                className="w-[100%] h-[100%] bg-black"
              >
                <BsFacebook />
                <span>facebook</span>
              </Button>
              <Button
                className="border"
                sx={{
                  border: "1px solid  black",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FcGoogle />
                <span>google</span>
              </Button>
            </Box>
            <Box className="flex justify-center  items-center  flex-row space-x-3">
              <Typography variant="p">Don't you have an account ?</Typography>
              <Link to="/auth/signup">
                <span className="text-sm text-[#1F60F0] hover:underline">
                  Register
                </span>
              </Link>
            </Box>
            <Box className="flex flex-row space-x-4 mt-4 justify-center">
              <img className="w-[40%] h-[90%]" src={ios} alt="ios image" />
              <img
                src={android}
                className="w-[40%] h-[90%]"
                alt="android image"
              />
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginForm;
