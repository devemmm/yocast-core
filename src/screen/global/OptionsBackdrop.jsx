import React from "react";
import { setSelected } from "../../features/podcastSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { Box, Typography, Button, Backdrop } from "@mui/material";
import { headers, baseUrl } from "../../data/authData";
import {
  setIsLoggedOut,
  setShowLogoutBackDrop,
} from "../../features/pageSlice";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import axios from "axios";

function OptionsBackdrop() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedOut = useSelector((store) => store.page.isLoggedOut);
  const showLogoutBackDrop = useSelector(
    (store) => store.page.showLogoutBackDrop
  );

  const logout = () => {
    axios({
      method: "POST",
      url: baseUrl + "/user/signout",
      headers: headers,
    })
      .then((response) => {
        dispatch(setIsLoggedOut(true));
        console.log("loggout");
        localStorage.removeItem("loggedInUser");
        navigate("/auth/login");
        dispatch(setShowLogoutBackDrop(false));
      })
      .catch((error) => {
        if (error.response.data.error.statusCode == 500) {
          dispatch(setIsLoggedOut(true));
          navigate("/dashboard");
          dispatch(setShowLogoutBackDrop(false));
          return;
        }
        navigate("/auth/login");
        dispatch(setShowLogoutBackDrop(false));
      });
  };
  return (
    <Backdrop
      className=" h-full p-2 rounded  justify-center  w-full mx-auto flex items-center"
      open={showLogoutBackDrop}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Box className="bg-white flex items-center justify-between text-black   w-[80%] md:w-[25%] rounded  h-[25%] mx-auto ">
        <Box className="w-[95%] flex flex-col justify-between mx-auto h-[90%] ">
          <Box className="h-[20%]">
            <Box>
              <PodcastsIcon className="text-[red] font-bold text-5xl" />
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", font: "poppins" }}
                className="font-bold"
              >
                Yocast
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography sx={{ textAlign: "center", fontWeight: "bold" }}>
              Are you sure do you want to logout?
            </Typography>
            <Typography className="font-bold" sx={{ textAlign: "center" }}>
              This will completely log out you of your data
            </Typography>
          </Box>
          <Box className="w-[95%] f mx-auto flex items-cenetr justify-center space-x-4">
            <Button
              onClick={() => dispatch(setShowLogoutBackDrop(false))}
              sx={{ backgroundColor: "#000084", color: "white" }}
            >
              Cancel
            </Button>
            <Button
              onClick={() => logout()}
              sx={{
                backgroundColor: "red",
                color: "white",
                fontWeight: "bold",
              }}
            >
              {isLoggedOut ? <Loader /> : "OK"}
            </Button>
          </Box>
        </Box>
      </Box>
    </Backdrop>
  );
}

export default OptionsBackdrop;
