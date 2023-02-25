import React from "react";
import Header from "../../components/Header";
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
import { podcastFields } from "../../data/authData";
import { useState } from "react";
import { baseUrl } from "../../data/authData";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { headers } from "../../data/authData";
import Loader from "../../components/Loader";
import axios from "axios";
import Side from "../../screen/global/Side";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setShowLogoutBackDrop } from "../../features/pageSlice";
import OptionsBackdrop from "../../screen/global/OptionsBackdrop";
import { useSelector } from "react-redux";
import CreatePodcastSelect from "../../components/global/CreatePodcastSelect";
const Create = () => {
  const [isLoading, setLoading] = useState(false);
  const [alertStatus, setAlertStatus] = useState("success");
  const isDarkMode = useSelector((store) => store.page.isDarkMode);
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isDraggedOver1, setIsDraggedOver1] = useState(false);
  const [isDraggedOver2, setIsDraggedOver2] = useState(false);

  const navigate = useNavigate();
  const category = useSelector((store) => store.podcast.category);
  const [values, setValues] = useState({
    title: "",
    description: "",
    price: "",
    category: category,
    cover: null,
    podcast: null,
  });
  const user = localStorage.getItem("loggedInUser");
  useEffect(() => {
    if (!user || user == null) {
      navigate("/auth/login");
    }
  });

  const alert = (message, status) => {
    setMessage(message);
    setShowAlert(true);
    setAlertStatus(status);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const submit = () => {
    console.log("Available category " + values.category);
    console.log(values);
    if (values.cover === null) {
      setMessage("Cover photo for the podcast is required");
      setShowAlert(true);
      setAlertStatus("error");
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return;
    }
    if (values.podcast === null) {
      setMessage(".mp3 file for the podcast is required");
      setShowAlert(true);
      setAlertStatus("error");
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return;
    }
    if (
      values.title === "" ||
      values.description === "" ||
      values.category === ""
    ) {
      setMessage("Invalid inputs please fillout all the fields are required");
      setShowAlert(true);
      setAlertStatus("error");
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append("name", values.title);
    formData.append("podcast", values.podcast);
    formData.append("cover", values.cover);
    formData.append("description", values.description);
    formData.append("category", values.category);
    formData.append("price", values.price);
    axios({
      method: "POST",
      url: baseUrl + "/admin/podcast",
      data: formData,
      headers: headers,
    })
      .then((response) => {
        setLoading(false);
        console.log(response.data);
        if (
          response.data.statusCode === 200 ||
          response.data.statusCode === 201
        ) {
          setAlertStatus("success");
          setMessage("Podcast created successfully");
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
            navigate("/podcast");
          }, 3000);
          return;
        }
        setShowAlert(true);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setMessage("Some thing went wrong please try again");
        setAlertStatus("error");
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      });
  };

  const setValue = (value, index) => {
    if (index === 0) {
      setValues({ ...values, title: value });
    } else if (index === 1) {
      setValues({ ...values, price: value });
    } else if (index === 2) {
      setValues({ ...values, description: value });
    }
  };

  const handleDrop2 = (event, file) => {
    event.preventDefault();
    const extensions = ["jpg", "jpeg", "png", "web"];
    console.log(extensions);
    let i = 0;
    console.log(extensions[i]);
    if (!extensions.includes(file.name.split(".")[1])) {
      alert("The  cover photo is required", "error");
      return;
    }

    setValues({ ...values, cover: file });
    setIsDraggedOver2(false);
  };

  const handleDrop1 = (event, file) => {
    event.preventDefault();
    console.log(file);
    if (file.name.split(".")[1] != "mp3") {
      alert("The podcast file should be .mp3 type", "error");
      return;
    }
    setValues({ ...values, podcast: file });
    event.preventDefault();
    setIsDraggedOver1(false);
  };

  const draggedOver1 = (e) => {
    e.preventDefault();
    setIsDraggedOver1(true);
  };
  const draggedOver2 = (e) => {
    e.preventDefault();
    setIsDraggedOver2(true);
  };
  return (
    <Box className="h-[85%]">
      <Box className="flex h-[20%] justify-between w-[90%] mx-auto items-center">
        <Header
          title={"Create Podcast"}
          subtitle="Create podcsts for your users"
        />
        {showAlert ? <Alert severity={alertStatus}>{message}</Alert> : null}
      </Box>
      <Side />
      <OptionsBackdrop />
      <setShowLogoutBackDrop />
      <Container className="items-center  md:flex-row flex-col flex h-[80%]">
        <Box className="h-[100%] shadow-3xl border border-x-0 border-b-0 p-2 ">
          <Typography className="text-center  h-[10%] p-4">
            create your podcast
          </Typography>
          <FormControl
            onSubmit={(e) => e.preventDefault()}
            className="w-[95%]  mx-auto  h-[100%]"
          >
            <Box className="w-[100%]  h-[100%] md:max-[1074px]:flex-col flex-col md:space-y-0 space-y-5 flex md:flex-row justify-between ">
              <Box classNAme="md:w-[50%]  w-[95%] flex flex-col h-[100%]">
                <Box
                  onDragOver={(e) => draggedOver1(e)}
                  onDrop={(e) =>
                    handleDrop1(e, e.nativeEvent.dataTransfer.files[0])
                  }
                  className={
                    isDraggedOver1
                      ? " w-[100%] md:max-[1074px]:w-[70%] md:max-[1074px]:h-[12vh]  md:w-[24vw] mt-5 border-[2.6px] border-[grey] border-dashed border h-[16vh] md:h-[32%] flex items-center justify-center mx-auto"
                      : " w-[100%] md:max-[1074px]:w-[70%] md:max-[1074px]:h-[12vh]  md:w-[24vw] mt-5 border-[0.6px] border-[grey] border-dashed border h-[16vh] md:h-[32%] flex items-center justify-center mx-auto"
                  }
                >
                  <input
                    onChange={(e) =>
                      setValues({ ...values, podcast: e.target.files[0] })
                    }
                    id="podcast"
                    hidden
                    type="file"
                  />
                  <Box className="flex flex justify-center items-center flex-col">
                    <label htmlFor="podcast">
                      {values.podcast == null
                        ? "Please drag/drop here a podcast .mp3 file"
                        : values.podcast.name.length >
                          "what_a_friend_we_have_in_jesus_mp3_71462".length
                        ? values.podcast.name
                        : values.podcast.name + "yes"}
                    </label>
                    <CloudUploadIcon className="text-center " />
                  </Box>
                </Box>
                <Box
                  onDragOver={(e) => draggedOver2(e)}
                  onDrop={(e) =>
                    handleDrop2(e, e.nativeEvent.dataTransfer.files[0])
                  }
                  className={
                    isDraggedOver2
                      ? " w-[100%] md:max-[1074px]:w-[70%] md:max-[1074px]:h-[12vh]  md:w-[24vw] mt-5 border-[2.6px] border-[grey] border-dashed border h-[16vh] md:h-[32%] flex items-center justify-center mx-auto"
                      : " w-[100%] md:max-[1074px]:w-[70%] md:max-[1074px]:h-[12vh]  md:w-[24vw] mt-5 border-[0.6px] border-[grey] border-dashed border h-[16vh] md:h-[32%] flex items-center justify-center mx-auto"
                  }
                >
                  <input
                    onChange={(e) =>
                      setValues({ ...values, cover: e.target.files[0] })
                    }
                    id="main"
                    hidden
                    type="file"
                  />
                  <Box className="flex justify-center items-center flex-col">
                    <label htmlFor="main">
                      {values.cover == null
                        ? "Please drag/drop here a podcast cover photo"
                        : values.cover.name}
                    </label>
                    <CloudUploadIcon className="text-center " />
                  </Box>
                </Box>
              </Box>
              <Box className=" md:max-[1074px]:w-[70%]  md:max-[1074px]:mx-auto md:max-[1074px]:justify-center  w-[95%] md:w-[50%] flex mx-auto  flex-col space-y-4 h-[100%]">
                {podcastFields.map((field, index) => (
                  <Box key={index}>
                    {field.name === "Category" ? null : (
                      <TextField
                        onChange={(e) => setValue(e.target.value, index)}
                        variant="outlined"
                        className={
                          isDarkMode
                            ? "border  md:max-[1074px]:w-[100%]  w-[100%] md:w-[90%] mx-auto bg-[#1F2A40]"
                            : "border  md:max-[1074px]:w-[100%]  w-[100%] md:w-[90%] mx-auto bg-[white]"
                        }
                        label={field.name}
                      />
                    )}
                  </Box>
                ))}
                <Box className="w-[90%] -translate-x-1 ">
                  <CreatePodcastSelect />
                </Box>
                <Box className="md:w-[80%]  md:max-[1074px]:w-[100%] md:max-[1074px]:w-[99.5%] w-[99.5%] mx-auto flex justify-end">
                  {!isLoading ? (
                    <button
                      onClick={submit}
                      className="float-left  text-center flex items-center justify-center    bg-[#4CCEAC] h-[5vh] rounded font-bold  md:max-[1074px]:w-[100%]  w-[100%] md:w-[30%]"
                    >
                      Create Podcast
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={submit}
                      className="float-left   disabled:opacity-50 text-center flex items-center justify-center    bg-[#4CCEAC] h-[5vh] rounded font-bold  md:max-[1074px]:w-[100%]  w-[100%] md:w-[30%]"
                      disabled="true"
                    >
                      {isLoading ? <Loader /> : "Create Podcast"}
                    </button>
                  )}
                </Box>
              </Box>
            </Box>
          </FormControl>
        </Box>
      </Container>
    </Box>
  );
};
export default Create;
