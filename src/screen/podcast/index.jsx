import { Box, Typography, useTheme, Button, Alert } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockPodcast } from "../../data/mockData";
import Header from "../../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import { columns } from "../../data/mockData";
import { baseUrl, headers } from "../../data/authData";
import { BsEarbuds, BsTrash } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import Backdrop from "@mui/material/Backdrop";
import ReactAudioPlayer from "react-audio-player";
import { RxCross1 } from "react-icons/rx";
import { setMessage } from "../../features/pageSlice";
import SuccessAlert from "../../components/helpers/SuccessAlert";
import { setSelected } from "../../features/podcastSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import { setPodcastss } from "../../features/podcastSlice";
import {
  setIsLoggedOut,
  setShowLogoutBackDrop,
} from "../../features/pageSlice";
import OptionsBackdrop from "../global/OptionsBackdrop";
import Side from "../global/Side";

const USER = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [status, setStatus] = useState("error");
  const [message, setMessage] = useState("");
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showBackdrop, setShowBackkDrop] = useState(false);
  const [selectedPodcast, setSelectedPodcast] = useState({});
  const [podcasts, setPodcasts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const user = localStorage.getItem("loggedInUser");
  const colors = tokens(theme.palette.mode);

  const isLoggedOut = useSelector((store) => store.page.isLoggedOut);
  const showLogoutBackDrop = useSelector(
    (store) => store.page.showLogoutBackDrop
  );
  useEffect(() => {
    if (user == null || !user) {
      navigate("/auth/login");
    }
    axios({
      method: "GET",
      url: baseUrl + "/podcasts",
      headers: headers,
    })
      .then((response) => {
        dispatch(setPodcastss(response.data.podcast));
        setPodcasts(response.data.podcast);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [podcasts]);
  const deletePodcast = () => {
    axios({
      method: "DELETE",
      url: baseUrl + `/admin/podcast/${selectedPodcast.id}`,
      headers: headers,
    })
      .then((response) => {
        setShowDeleteAlert(false);
        setMessage("Podcast deleted successfully");
        setStatus("success");
        setShowAlert(true);
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
          setLoading(false);
          navigate("/dashboard");
          dispatch(setShowLogoutBackDrop(false));
          return;
        } else if (error.response.data.error.statusCode == 401) {
          navigate("/auth/login");
          return;
        }
        navigate("/auth/login");
        dispatch(setShowLogoutBackDrop(false));
      });
  };
  const edit = () => {
    dispatch(setSelected(selectedPodcast));
    navigate("/update");
  };

  return (
    <Box m="20px">
      <OptionsBackdrop />
      <Header
        podcast={false}
        title="Podcast"
        subtitle="Manage all yocast podcast here ..."
      />
      {showAlert ? (
        <Alert className="w-[60%] mx-auto" severity={status}>
          {message}
        </Alert>
      ) : null}
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <Backdrop
          className=" h-[10%] p-2 rounded flex flex-col  w-[20%] mx-auto flex items-center"
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
              onClick={() => setShowDeleteAlert(false)}
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
        <Backdrop
          className=" h-[15%] md:h-[11%] md:flex-row flex-col md:space-y-0 space-y-4 flex items-center justify-center"
          open={showBackdrop}
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Box className="h-[100%] flex md:flex-row flex-col md:space-y-0 space-y-1   items-center -translate-y-4 flex  flex-row justify-between  items-center  w-[100%] md:w-[90%] mx-auto">
            <Box className=" w-[100%]   md:w-[50%]">
              <p className="w-[100%] text-white font-bold text-2xl font-poppins font-sans">
                {selectedPodcast.name}
              </p>
              <p className="w-[100%] text-white">{selectedPodcast.category}</p>
            </Box>
            <ReactAudioPlayer
              className="md:w-[30%] w-[90%] h-[100%]"
              RxCross1
              src={selectedPodcast.url}
              controls
            />
            <Box className="flex w-[100%] md:w-[20%] justify-end translate-y-2  flex-col items-center justify-center">
              <Box className="flex flex-row space-x-3 font-sans text-[0.9rem]">
                <BiPencil
                  onClick={() => edit()}
                  className="hover:cursor-pointer"
                />
                <BsTrash
                  onClick={() => setShowDeleteAlert(true)}
                  className="hover:cursor-pointer"
                />
                <RxCross1
                  className="hover:font-bold hover:cursor-pointer"
                  onClick={() => setShowBackkDrop(false)}
                />
              </Box>
            </Box>
          </Box>
        </Backdrop>
        <DataGrid
          onRowClick={(rows) => {
            setShowBackkDrop(true);
            setSelectedPodcast(rows.row);
          }}
          loading={isLoading}
          checkboxSelection
          rows={podcasts}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default USER;
