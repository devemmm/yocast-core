import React, { useEffect, lazy, Suspense } from "react";
import Header from "../../components/Header";
import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
  Alert,
  Container,
  Backdrop,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { SelectChangeEvent } from "@mui/material/Select";
import { podcastFields } from "../../data/authData";
import { useState } from "react";
import { baseUrl } from "../../data/authData";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { headers } from "../../data/authData";
import Loader from "../../components/Loader";
import ReactAudioPlayer from "react-audio-player";
import axios from "axios";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import Side from "../../screen/global/Side";
import SelectCategory from "../../components/global/Select";
import LogoutIcon from "@mui/icons-material/Logout";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
const UpdateForm = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef();
  const podcastCover = useRef();
  const redirect = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [status, setStatus] = useState("error");
  const [message, setMessage] = useState("");
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showBackdrop, setShowBackkDrop] = useState(false);
  const [podcasts, setPodcasts] = useState([]);
  const [isDraggedOver1, setIsDraggedOver1] = useState(false);
  const [isDraggedOver2, setIsDraggedOver2] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [showEditFirst, setShowEditFirst] = useState(true);

  const [coverPreview, setCoverPreview] = useState("");
  const [previewCoverImage, setPreviewCoverImage] = useState();

  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const selectedPodcast = useSelector((store) => store.podcast.selectedPodcast);
  const category = useSelector((store) => store.podcast.category);
  const [values, setValues] = useState({
    title: selectedPodcast.name,
    description: selectedPodcast.description,
    price: selectedPodcast.price,
    category: selectedPodcast.category,
    cover: null,
    podcast: null,
  });

  useEffect(() => {
    if (
      user == null ||
      !user ||
      !user.token.token ||
      user.token.token == "" ||
      user.token.token == null
    ) {
      redirect("/auth/login");
    } else if (
      selectedPodcast == null ||
      selectedPodcast == "" ||
      selectedPodcast.cover == ""
    ) {
      redirect("/podcast");
    }
  }, []);
  const submit = () => {
    // if (values.cover === null) {
    //   setMessage("Cover photo for the podcast is required");
    //   setShowAlert(true);
    //   setStatus("error");
    //   setTimeout(() => {
    //     setShowAlert(false);
    //   }, 3000);
    //   return;
    // }
    // if (values.podcast === null) {
    //   setMessage(".mp3 file for the podcast is required");
    //   setShowAlert(true);
    //   setStatus("error");
    //   setTimeout(() => {
    //     setShowAlert(false);
    //   }, 3000);

    //   return;
    // }
    if (
      values.title === "" ||
      values.description === "" ||
      values.category === ""
    ) {
      setMessage("Invalid inputs please fillout all the fields are required");
      setShowAlert(true);
      setStatus("error");
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append(
      "podcast",
      values.podcast == null ? selectedPodcast.podcast : values.podcast
    );
    formData.append(
      "cover",
      values.cover == null ? selectedPodcast.cover : values.cover
    );
    formData.append("description", values.description);
    formData.append("category", category);
    formData.append("price", values.price);

    axios({
      method: "PATCH",
      url: baseUrl + `/admin/podcast/${selectedPodcast.id}`,
      data: formData,
      headers: headers,
    })
      .then((response) => {
        if (
          response.data.statusCode === 200 ||
          response.data.statusCode === 201
        ) {
          setStatus("success");
          setMessage("Podcast updated successfully");
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
            navigate("/podcast");
          }, 3000);
          setLoading(false);
          return;
        }
        setLoading(false);
        setShowAlert(true);
      })
      .catch((error) => {
        setLoading(false);
        setMessage("Some thing went wrong please try again");
        setStatus("error");
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

  const getValue = (index) => {
    if (index === 0) {
      return selectedPodcast.name;
    } else if (index === 1) {
      return selectedPodcast.price;
    } else if (index === 2) {
      return selectedPodcast.description;
    } else {
      return 4;
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
          title={"Update Podcast"}
          subtitle="Update Podcast  for your users"
        />
        {showAlert ? (
          <Alert className="w-[100%] md:w-[60%] mx-auto" severity={status}>
            {message}
          </Alert>
        ) : null}
      </Box>
      <Box className="relative">
        <Side />
      </Box>
      <Backdrop
        onDragOver={(e) => draggedOver2(e)}
        onDrop={(e) => e.preventDefault()}
        className=" h-[90%]  mt-[14%]  md:h-[60%] p-2 rounded  flex flex-col  rounded  w-[95%] md:w-[60%] mx-auto flex items-center"
        open={showEditFirst}
        sx={{
          // top: "25%",
          zIndex: (theme) => theme.zIndex.drawer + 10,
        }}
      >
        <Box className="h-[85%] shadow-3xl w-[100%] p-2 ">
          <Box className="p-2">
            <Box className="flex justify-end">
              <LogoutIcon
                onClick={() => setShowEditFirst(false)}
                className="bounce hover:font-bold hover:cursor-pointer"
              />
            </Box>
            <Typography sx={{ textAlign: "center" }} variant="h4">
              Would you like to edit podcast and it cover photo?
            </Typography>

            <Typography className="text-center ">
              Update your podcast
              {/* <Sidebar /> */}
            </Typography>
          </Box>
          <FormControl
            onSubmit={(e) => e.preventDefault()}
            className="w-[100%]   mx-auto  h-[100%]"
          >
            <Box className="w-[100%]  h-[100%] md:max-[1074px]:flex-col flex-col md:space-y-0 space-y-5 flex md:flex-row justify-between ">
              <Box
                onClick={() => podcastCover.current.Click()}
                classNAme="md:w-[65%]  w-[95%] flex flex-col h-[100%]"
              >
                <Box
                  onDragOver={(e) => draggedOver1(e)}
                  onDrop={(e) =>
                    handleDrop1(e, e.nativeEvent.dataTransfer.files[0])
                  }
                  className={
                    isDraggedOver1
                      ? " w-[100%] md:max-[1074px]:w-[70%] md:max-[1074px]:h-[12vh]  md:w-[24vw] mt-5 border-[5.6px] border-[grey] border-dashed border h-[16vh] md:h-[32%] flex items-center justify-center mx-auto"
                      : " w-[100%] md:max-[1074px]:w-[70%] md:max-[1074px]:h-[12vh]  md:w-[24vw] mt-5 border-[3.6px] border-[grey] border-dashed border h-[16vh] md:h-[32%] flex items-center justify-center mx-auto"
                  }
                >
                  <input
                    ref={podcastCover}
                    onChange={(e) =>
                      setValues({ ...values, podcast: e.target.files[0] })
                    }
                    id="podcast"
                    hidden
                    type="file"
                  />
                  <Box className="flex flex justify-center items-center flex-col">
                    <label>
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
                      ? " w-[100%] md:max-[1074px]:w-[70%] md:max-[1074px]:h-[12vh]  md:w-[24vw] mt-5 border-[5.6px] border-[grey] border-dashed border h-[16vh] md:h-[32%] flex items-center justify-center mx-auto"
                      : " w-[100%] md:max-[1074px]:w-[70%] md:max-[1074px]:h-[12vh]  md:w-[24vw] mt-5 border-[3.6px] border-[grey] border-dashed border h-[16vh] md:h-[32%] flex items-center justify-center mx-auto"
                  }
                >
                  <input
                    ref={inputRef}
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
              <Box className=" md:max-[1074px]:w-[70%]  md:max-[1074px]:mx-auto md:max-[1074px]:justify-center  w-[95%] md:w-[35%] rounded flex mx-auto flex-col space-y-4 h-[100%]">
                <Box
                  className="w-[100%] h-[70%] md:h-[50%]"
                  component="img"
                  src={selectedPodcast.cover}
                  alt="podcast cover image"
                ></Box>
                <Box className="w-[100%] h-[30%] md:h-[50%] flex items-center">
                  <ReactAudioPlayer
                    className="md:w-[100%]  w-[90%] h-[100%]   md:h-[30%]"
                    RxCross1
                    src={selectedPodcast.url}
                    controls
                  />
                </Box>
              </Box>
            </Box>
          </FormControl>
        </Box>
      </Backdrop>
      <Container className="items-center   md:flex-row flex-col flex h-[80%]">
        <Box className="h-[100%] shadow-3xl border border-x-0 border-b-0 p-2 ">
          <Typography className="text-center  h-[10%] p-4">
            Update your podcast details
            {/* <Sidebar /> */}
          </Typography>
          <FormControl
            onSubmit={(e) => e.preventDefault()}
            className={
              showEditFirst
                ? "w-[95%]  mx-auto  invisible h-[100%]"
                : "w-[95%]  mx-auto  h-[100%]"
            }
          >
            <Box className="w-[100%]  h-[100%] md:max-[1074px]:flex-col flex-col md:space-y-0 space-y-5 flex md:flex-row justify-between ">
              {selectedPodcast.category == "" ? (
                <Box className="text-center flex flex-col items-center h-[60%] justify-center">
                  <Typography>No podcast selected </Typography>
                  <HourglassEmptyIcon className="animate-ping" />
                </Box>
              ) : (
                <Box
                  className={
                    showEditFirst
                      ? " md:max-[1074px]:w-[70%] invisible  md:max-[1074px]:mx-auto md:max-[1074px]:justify-center  w-[95%] md:w-[35%] rounded flex mx-auto flex-col space-y-4 h-[70%]"
                      : " md:max-[1074px]:w-[70%]  md:max-[1074px]:mx-auto md:max-[1074px]:justify-center  w-[95%] md:w-[35%] rounded flex mx-auto flex-col space-y-4 h-[70%]"
                  }
                >
                  <Box>
                    <EditIcon
                      onClick={() => setShowEditFirst(true)}
                      className="bounce   hover:font-bold hover:cursor-pointer"
                    />
                  </Box>
                  <Box
                    className="w-[100%]  h-[70%] md:h-[50%]"
                    component="img"
                    src={selectedPodcast.cover}
                    alt="podcast cover image"
                  ></Box>
                  <Box className="w-[100%] md:h-[50%]  h-[30%] flex items-center">
                    <ReactAudioPlayer
                      className="md:w-[100%] w-[100%] md:w-[90%] h-[100%] md:h-[30%]"
                      RxCross1
                      src={selectedPodcast.url}
                      controls
                    />
                  </Box>
                </Box>
              )}

              <Box className=" md:max-[1074px]:w-[70%]  md:max-[1074px]:mx-auto md:max-[1074px]:justify-center  w-[95%] md:w-[50%] flex mx-auto flex-col space-y-4 h-[100%]">
                {podcastFields.map((field, index) => (
                  <Box key={index}>
                    {field.name === "Category" ? null : (
                      <TextField
                        key={index}
                        defaultValue={getValue(index)}
                        onChange={(e) => setValue(e.target.value, index)}
                        variant="outlined"
                        className="border  md:max-[1074px]:w-[100%]  w-[100%] md:w-[90%] mx-auto bg-[#1F2A40]"
                        label={field.name}
                      />
                    )}
                  </Box>
                ))}
                <Box className="w-[88%]">
                  <SelectCategory />
                </Box>
                <Box className="md:w-[80%]  md:max-[1074px]:w-[100%] md:max-[1074px]:w-[99.5%] w-[99.5%] mx-auto flex justify-end">
                  <button
                    onClick={submit}
                    className="float-left  flex items-center justify-center  bg-[#4CCEAC] h-[5vh] rounded font-bold  md:max-[1074px]:w-[100%]  w-[100%] md:w-[30%]"
                  >
                    {isLoading ? <Loader /> : "Update Podcast"}
                  </button>
                </Box>
              </Box>
            </Box>
          </FormControl>
        </Box>
      </Container>
    </Box>
  );
};
export default UpdateForm;
