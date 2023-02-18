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
function Settings() {
  const dispatch = useDispatch();
  const [showDescription, setShowDescription] = useState(false);
  const navigate = useNavigate();
  const [podcasts, setPodcasts] = useState([]);
  const [hoveredPodcast, setHoveredPodcast] = useState(podcasts[0]);
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  useEffect(() => {
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

  const hovered = (podcast) => {
    setHoveredPodcast(podcast);
    setShowDescription(true);
  };

  const edit = () => {
    // dispatch(setSelected(selectedPodcaIst));
    navigate("/update");
  };
  return (
    <Box>
      <Box className="w-[95%]  mx-auto h-[100%]">
        <Side />
        <Form />
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
              {podcasts.slice(0, 8).map((podcast, index) => (
                <Box
                  key={index}
                  onMouseEnter={() => hovered(podcast)}
                  className="flex  relative md:w-[22%] w-[100%]  flex-col"
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
                            // onClick={() => navigate("/update")}
                            className="hover:cursor-pointer"
                          />
                          <BsTrash
                            // onClick={() => setShowDeleteAlert(true)}
                            className="hover:cursor-pointer"
                          />
                          <RxCross1
                            className="hover:font-bold hover:cursor-pointer"
                            // onClick={() => setShowBackkDrop(false)}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
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
