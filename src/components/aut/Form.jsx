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
import { Link } from "react-router-dom";
function Form() {
  const [values, setValues] = useState({
    category: "",
    fullName: "",
    email: "",
    password: "",
    country: "",
  });
  return (
    <Box className="md:w-[60%] bg-white border border-x-0 border-b-0  w-[97%] flex items-center  h-[100%]   ">
      <Box className="h-[96%] pt-4 w-[100%] md:w-[80%] mx-auto  shadow-2xl">
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
            {formInputs.map((input, index) => (
              <Box className="w-[100%] ">
                {input.type == "text" ||
                input.type == "email" ||
                input.type == "password" ? (
                  <Box className="w-[100%]">
                    <TextField
                      type={input.type}
                      className="w-[100%]"
                      variant="outlined"
                      label={input.name}
                      key={index}
                    />
                  </Box>
                ) : (
                  <Box className="w-[100%]">
                    <Select
                      value={values.category}
                      onChange={(e) =>
                        setValues({
                          ...values,
                          category: e.target.value,
                        })
                      }
                      className="w-[100%]  border mx-auto"
                    >
                      {input.options.map((option, index) => (
                        <MenuItem value={option} className="bg-black w-[100%]">
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                )}
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
                Signup
              </Button>
            </Box>
            <Box className="w-[100%] mt-4 items-center text-center  flex space-y-4">
              <Box className="w-[40%] translate-y-2 md:block hidden   border border-x-0 border-t-0 "></Box>
              <Box className=" w-[100%] md:w-[20%]">
                <Typography variant="p">Signup with</Typography>
              </Box>
              <Box className="border w-[40%]  md:block hidden  border-x-0 border-t-0"></Box>
            </Box>
            <Box className="w-[100%]  items-center  flex flex-row justify-between">
              <Button
                sx={{
                  width: "45%",
                  backgroundColor: "",
                  height: "100%",
                }}
                className="w-[100%] h-[100%] bg-black"
              >
                <BsFacebook />
                <span>facebook</span>
              </Button>
              <Button
                sx={{
                  widht: "45%",
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
            <Box className="flex  items-center  flex-row space-x-3">
              <Typography variant="p">Already have an account</Typography>
              <Link to="/auth/login">
                <span className="text-sm text-[#1F60F0] hover:underline">
                  Login
                </span>
              </Link>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default Form;
