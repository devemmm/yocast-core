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
import { setShowAlert, setShowFormPortal } from "../../features/pageSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";
import { setShowLogoutBackDrop } from "../../features/pageSlice";
import { createPortal } from "react-dom";
import { BsChevronRight } from "react-icons/bs";
function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loggedInSuccessfully, setLoggedInSuccessfully] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const showFormPortal = useSelector((store) => store.page.showFormPortal);
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const [values, setValues] = useState({
    fullName: user.names,
    email: user.email,
    password: user.password,
    country: user.country,
  });

  const actionAfterResponse = () => {
    dispatch(setShowAlert(true));
    setLoggedInSuccessfully(true);
    setTimeout(() => {
      dispatch(setShowAlert(false));
    }, 6000);
  };
  const showAlerts = useSelector((store) => store.page.showAlert);
  const signup = (e) => {
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
      setIsLoading(true);
      axios({
        method: "PATCH",
        url: baseUrl + "/user/account",
        data: {
          names: values.fullName,
          phone: "",
          country: values.country,
        },
        headers: headers,
      })
        .then((response) => {
          dispatch(setShowLogoutBackDrop(false));
          //   localStorage.setItem(
          //     "loggedInUser",
          //     JSON.stringify(response.data.user)
          //   );
          if (
            response.data.statusCode == 200 ||
            response.data.statusCode == 201
          ) {
            setMessage("Account updated successfull");
            actionAfterResponse();
            navigate("/dashboard");
            setIsLoading(false);
            return;
          }
          setMessage("Some thing went wrong");
          dispatch(setShowAlert(true));
          setLoggedInSuccessfully(true);
          setTimeout(() => {
            dispatch(setShowAlert(false));
          }, 500);
          setIsLoading(false);
        })
        .catch((error) => {
          if (error.response.data.error === 500) {
            setMessage("Some thing went wrong! try again please");
            dispatch(setShowAlert(true));
            setTimeout(() => {
              dispatch(setShowAlert(false));
            }, 6000);
            setIsLoading(false);
            return;
          }
          setMessage(error.response.data.error.message);
          dispatch(setShowAlert(true));
          setTimeout(() => {
            dispatch(setShowAlert(false));
          }, 6000);
          setIsLoading(false);
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

  const getValue = (input) => {
    if (input == "Email") {
      return user.email;
    } else if (input == "Password") {
      return "";
    } else {
      return user.names;
    }
  };
  return !showFormPortal
    ? null
    : createPortal(
        <Box className="md:w-[23%] ml-2 md:ml-[40%]  bg-[#1F2A40] rounded  h-[64%]  w-[95%] absolute top-[16%] z-40 flex items-center">
          <Box className="h-[96%] pt-4 w-[100%] md:w-[100%] mx-auto    shadow-2xl">
            <Box className="flex  w-[95%] mx-auto flex-row justify-end items-center">
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                <BsChevronRight
                  onClick={() => dispatch(setShowFormPortal(false))}
                  className="hover:cursor-pointer"
                />
              </Typography>
            </Box>
            <Box className="w-[100%] h-[18%] flex flex-col justfy-center items-center">
              <Typography>Yocast!</Typography>
              {!showAlerts ? (
                <p className="text-[0.70rem]  font-poppins font-sans">
                  Update your account
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
                  <Box key={index} className="w-[100%] ">
                    {input.type == "text" ||
                    input.type == "email" ||
                    input.type == "password" ? (
                      <Box className="w-[100%]">
                        <TextField
                          onChange={(e) =>
                            initializeValues(index, e.target.value)
                          }
                          type={input.type}
                          className="w-[100%]"
                          defaultValue={getValue(input.name)}
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
                          defaultValue={user.country}
                          value={values.country}
                          className="w-[100%]  border mx-auto"
                        >
                          {input.options.map((option, index) => (
                            <MenuItem
                              key={index}
                              value={option}
                              className="bg-black w-[100%]"
                            >
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
                    className="text-center flex items-center justify-center w-[100%]  bg-[#1F2A40]  border-[0.2px]  border text-white h-[100%] font-bold"
                  >
                    {isLoading ? <Loader /> : "Update account"}
                  </button>
                </Box>
              </form>
            </Box>
          </Box>
        </Box>,
        document.getElementById("portal-root")
      );
}

export default Form;
