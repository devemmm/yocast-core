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
import { baseUrl, headers } from "../../data/authData";
import axios from "axios";
import ErrorAlert from "../helpers/ErrorAlert";
import SuccessAlert from "../helpers/SuccessAlert";
import { useSelector } from "react-redux";
import { setShowAlert } from "../../features/pageSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loggedInSuccessfully, setLoggedInSuccessfully] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(false);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const showAlerts = useSelector((store) => store.page.showAlert);
  const login = (e) => {
    e.preventDefault();
    if (values.email == "") {
      setMessage("Email is required");
      dispatch(setShowAlert(true));
      setLoggedInSuccessfully(true);
      setTimeout(() => {
        dispatch(setShowAlert(false));
      }, 100);
    } else if (values.password == "") {
      setMessage("Password is required");
      dispatch(setShowAlert(true));
      setLoggedInSuccessfully(true);
      setTimeout(() => {
        dispatch(setShowAlert(false));
      }, 100);
    } else {
      axios({
        method: "POST",
        url: baseUrl + "/signin",
        data: {
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
          if (response.data.statusCode == 200) {
            setMessage("You loggedIn successfully");
            dispatch(setShowAlert(true));
            setLoggedInSuccessfully(true);
            setTimeout(() => {
              dispatch(setShowAlert(false));
            }, 500);
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
            }, 100);
            return;
          }
          setMessage("Invalid email or password");
          dispatch(setShowAlert(true));
          setTimeout(() => {
            dispatch(setShowAlert(false));
          }, 100);
        });
    }
  };

  const initializeValues = (index, value) => {
    if (index == 0) {
      setValues({ ...values, email: value });
    } else {
      setValues({ ...values, password: value });
    }
  };
  return (
    <Box className="md:w-[60%]  md:border-0  bg-white border border-x-0 border-b-0   w-[97%] flex items-center  h-[100%]   ">
      <Box className="h-[90%] pt-4 w-[100%] md:w-[80%] mx-auto  shadow-2xl">
        <Box className="w-[100%]  h-[18%] flex flex-col justfy-center items-center">
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
              Sign in to your account and manage your podcasts
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
            onSubmit={login}
            className="w-[90%] flex flex-col space-y-3 mx-auto"
          >
            {loginInputs.map((input, index) => (
              <Box key={index} className="w-[100%] ">
                <TextField
                  onChange={(e) => initializeValues(index, e.target.value)}
                  type={input.type}
                  className="w-[100%]"
                  variant="outlined"
                  label={input.name}
                  key={index}
                />
              </Box>
            ))}
            <Box className="h-[5vh] ">
              <button
                type="submit"
                className="text-center hover:bg-[#1F60F0]  w-[100%] bg-[#1F60F0] h-[100%] font-bold font-poppins text-white rounded font-sans"
              >
                Login
              </button>
            </Box>
            <Box className="w-[100%]   mt-4 items-center text-center  flex space-y-4">
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
