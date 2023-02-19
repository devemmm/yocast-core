import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Select,
  ListItem,
  Button,
  Avatar,
  MenuItem,
  Backdrop,
  Alert,
} from "@mui/material";
import Side from "../global/Side";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector } from "react-redux";
import { baseUrl } from "../../data/authData";
import axios from "axios";
import { headers } from "../../data/authData";
import ReactAudioPlayer from "react-audio-player";
import { BsEarbuds, BsTrash } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import Form from "../../components/aut/updateProfile";
import { setShowAlert, setShowFormPortal } from "../../features/pageSlice";
import { useDispatch } from "react-redux";
import { BiPhotoAlbum } from "react-icons/bi";
import { setShowDeleteAlert } from "../../features/pageSlice";
import { setSelected } from "../../features/podcastSlice";
import Loading from "../../components/global/Loading";
import { LazyLoadImage } from "react-lazy-load-image-component";
import OptionsBackdrop from "../global/OptionsBackdrop";
function Settings() {
  const [showAlert, setShowAlert] = useState(false);
  const [status, setStatus] = useState("error");
  const [message, setMessage] = useState("");
  const [showBackdrop, setShowBackkDrop] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const [showDescription, setShowDescription] = useState(false);
  const navigate = useNavigate();
  const [podcasts, setPodcasts] = useState([]);
  const [hoveredPodcast, setHoveredPodcast] = useState(podcasts[0]);
  const showDeleteAlert = useSelector((store) => store.page.showDeleteAlert);
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  useEffect(() => {
    setHoveredPodcast(podcasts[0]);
    if (!user || user == null) {
      navigate("/auth/login");
    }
    axios({
      method: "GET",
      url: baseUrl + "/podcasts",
      headers: headers,
    })
      .then((response) => {
        setPodcasts(response.data.podcast);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const deletePodcast = () => {
    axios({
      method: "DELETE",
      url: baseUrl + `/admin/podcast/${hoveredPodcast.id}`,
      headers: headers,
    })
      .then((response) => {
        setShowDeleteAlert(false);
        setMessage("Podcast deleted successfully");
        setStatus("success");
        setShowAlert(true);
        dispatch(setShowDeleteAlert(false));
        setTimeout(() => {
          setShowAlert(false);
        }, 1000);
      })
      .catch((error) => {
        setShowDeleteAlert(false);
        setMessage(
          "Some thing went wrong please try again and make sure that podcast is selected"
        );
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 1000);
      });
  };

  const hovered = (podcast) => {
    setHoveredPodcast(hoveredPodcast);
    setShowDescription(true);
  };

  const edit = (podcast) => {
    dispatch(setSelected(podcast));
    navigate("/update");
  };
  return (
    <Box>
      <Box className="w-[95%]  mx-auto h-[100%]">
        <Side />
        <Form />
        <OptionsBackdrop />
        {showAlert ? (
          <Alert className="w-[60%] mx-auto" severity={status}>
            {message}
          </Alert>
        ) : null}
        <Backdrop
          className=" h-[10%] p-2 rounded flex flex-col  w-[80%] md:w-[20%] mx-auto flex items-center"
          open={showDeleteAlert}
          sx={{
            top: "10%",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Typography>
            Are you sure do you want to delete this podcast?
          </Typography>
          <Side />
          <Box className="flex flex-row  space-x-3 text-white ">
            <Button
              onClick={() => dispatch(setShowDeleteAlert(false))}
              sx={{ color: "white", fontWeight: "bold", font: "poppins" }}
            >
              Cancel
            </Button>
            <Button
              onClick={deletePodcast}
              sx={{ color: "white", fontWeight: "bold", font: "poppins" }}
            >
              ok
            </Button>
          </Box>
        </Backdrop>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Settings
        </Typography>
        <Box className="h-[100%] w-[90%] mx-auto mt-4 ">
          <Typography variant="h4I">My profile</Typography>
          <Box
            className="flex  h-[30vh]  flex-col space-y-4"
            justifyContent="center"
            alignItems="center"
          >
            <Avatar
              sx={{ width: 70, height: 70 }}
              alt="profile-user"
              src={user.avatar}
            />
            <input type="file" hidden id="file" />
            <label htmlFor="file">
              <BiPhotoAlbum className="-translate-y-5 z-100 font-bold hover:cursor-pointer" />
            </label>
            <Box className="flex flex-row items-center  justify-center space-x-2">
              <Typography variant="h3">{user.names}</Typography>
              <EditIcon
                onClick={() => dispatch(setShowFormPortal(true))}
                className="hover:cursor-pointer"
              />
            </Box>
          </Box>
          <Box className="flex flex-col space-y-4">
            <Typography variant="h3" sx={{ fonWeight: "bold" }}>
              {" "}
              Posted podcasts
            </Typography>
            <Box className="flex gap-5 flex-wrap">
              {podcasts.length < 0 ? (
                <Loading />
              ) : (
                <Box className="flex  relative md:w-[22%] w-[100%]">
                  {podcasts.slice(0, 8).map((podcast, index) => (
                    <Box
                      key={index}
                      onMouseEnter={() => hovered(podcast)}
                      className="flex  relative md:w-[100%] w-[100%]  flex-col"
                    >
                      <img
                        className={
                          showDescription && hoveredPodcast.id != podcast.id
                            ? "hover:scale-110 transition ease-in-out delay-0"
                            : "scale-105 transition ease-in-out delay-0"
                        }
                        src={podcast.cover}
                        alt=""
                      />
                      <Box
                        className={
                          showDescription && hoveredPodcast.id != podcast.id
                            ? " hidden "
                            : "h-[100%] hover:cursor-pointer  space-y-5 flex flex-col justify-center  absolute  w-[100%] rounded  z-[20%]"
                        }
                      >
                        <Typography sx={{ paddingLeft: "10%" }}>
                          {podcast.name}
                        </Typography>
                        <Box className="w-[96%]  mx-auto h-[60%]">
                          <Box className="h-full  flex flex-row    flex-col space-y-4  w-full">
                            <ReactAudioPlayer
                              className="md:w-[80%] mx-auto  w-[90%] h-[100%]"
                              RxCross1
                              src={podcast.url}
                              controls
                            />
                            <Box className="flex justify-end flex-row">
                              <BiPencil
                                onClick={() => edit(podcast)}
                                className="hover:cursor-pointer  text-2xl"
                              />
                              <BsTrash
                                onClick={() =>
                                  dispatch(setShowDeleteAlert(true))
                                }
                                className="hover:cursor-pointer  text-2xl"
                              />
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
            <Typography
              onClick={() => navigate("/podcast")}
              className="hover:cursor-pointer hover:cursor-pointer "
              sx={{ textAlign: "right" }}
            >
              View all
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Settings;
