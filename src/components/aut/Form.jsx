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
import { baseUrl, headers } from "../../data/authData";
import axios from "axios";
import ErrorAlert from "../helpers/ErrorAlert";
import SuccessAlert from "../helpers/SuccessAlert";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { setShowAlert } from "../../features/pageSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function Form() {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    password: "",
    country: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loggedInSuccessfully, setLoggedInSuccessfully] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(false);

  const actionAfterResponse = () => {
    dispatch(setShowAlert(true));
    setLoggedInSuccessfully(true);
    setTimeout(() => {
      dispatch(setShowAlert(false));
    }, 6000);
  };
  const showAlerts = useSelector((store) => store.page.showAlert);
  const signup = (e) => {
    console.log(values);
    e.preventDefault();
    if (values.email == "") {
      setMessage("Email is required");
      actionAfterResponse();
    } else if (values.password == "") {
      setMessage("Password is required");
      actionAfterResponse();
    } else if (values.country == "") {
      setMessage("Country  is required");
      actionAfterResponse();
    } else if (values.fullName == "") {
      setMessage("Your names are  is required");
      actionAfterResponse();
    } else {
      axios({
        method: "POST",
        url: baseUrl + "/signup",
        data: {
          names: values.fullName,
          country: values.country,
          email: values.email,
          password: values.password,
        },
      })
        .then((response) => {
          console.log(response.data);
          localStorage.setItem(
            "loggedInUser",
            JSON.stringify(response.data.user)
          );
          if (
            response.data.statusCode == 200 ||
            response.data.statusCode == 201
          ) {
            setMessage("Account created successfull");
            actionAfterResponse();
            navigate("/dashboard");
            return;
          }
          setMessage("Some thing went wrong");
          dispatch(setShowAlert(true));
          setLoggedInSuccessfully(true);
          setTimeout(() => {
            dispatch(setShowAlert(false));
          }, 500);
        })
        .catch((error) => {
          console.log(error.response.data.error);
          if (error.response.data.error === 500) {
            setMessage("Some thing went wrong! try again please");
            dispatch(setShowAlert(true));
            setTimeout(() => {
              dispatch(setShowAlert(false));
            }, 6000);
            return;
          }
          setMessage(error.response.data.error.message);
          dispatch(setShowAlert(true));
          setTimeout(() => {
            dispatch(setShowAlert(false));
          }, 6000);
        });
    }
  };

  const initializeValues = (index, value) => {
    if (index == 0) {
      setValues({ ...values, fullName: value });
    } else if (index == 2) {
      setValues({ ...values, email: value });
    } else if (index == 3) {
      setValues({ ...values, password: value });
    } else {
      setValues({ ...values });
    }
  };
  return (
    <Box className="md:w-[45%] bg-white border border-x-0 border-b-0  w-[97%] flex items-center  h-[100%]   ">
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
          {!showAlerts ? (
            <p className="text-[0.80rem] font-poppins font-sans">
              Create your account and manage your podcasts
            </p>
          ) : loggedInSuccessfully ? (
            <SuccessAlert
              sx={{ width: "w-[100%]" }}
              className="w-[100%]"
              message={message}
              status={"success"}
            />
          ) : (
            <ErrorAlert
              sx={{ width: "w-[100%]" }}
              className="w-[100%]"
              message={message}
              status={"error"}
            />
          )}
        </Box>
        <Box className="h-[98%] flex flex-col ">
          <form
            onSubmit={signup}
            className="w-[90%] flex flex-col space-y-3 mx-auto"
          >
            {formInputs.map((input, index) => (
              <Box className="w-[100%] ">
                {input.type == "text" ||
                input.type == "email" ||
                input.type == "password" ? (
                  <Box className="w-[100%]">
                    <TextField
                      onChange={(e) => initializeValues(index, e.target.value)}
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
                      onChange={(e) =>
                        setValues({ ...values, country: e.target.value })
                      }
                      defaultValue={"Rwanda"}
                      value={values.country}
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
              <button
                type="submit"
                className="text-center w-[100%] bg-[#1F60F0] text-white h-[100%] font-bold"
              >
                Signup
              </button>
            </Box>
            <Box className="w-[100%] mt-4 items-center text-center  flex space-y-4">
              <Box className="w-[38%] translate-y-2 md:block hidden   border border-x-0 border-t-0 "></Box>
              <Box className=" w-[100%] md:w-[30%]">
                <p className="w-[100%] font-poppins font-sans text-[0.80rem]">
                  Signup with
                </p>
              </Box>
              <Box className="border w-[38%]  md:block hidden  border-x-0 border-t-0"></Box>
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
