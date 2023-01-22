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
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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

  const colors = tokens(theme.palette.mode);
  useEffect(() => {
    axios({
      method: "GET",
      url: baseUrl + "/podcasts",
      headers: headers,
    })
      .then((response) => {
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
  const edit = () => {
    dispatch(setSelected(selectedPodcast));
    navigate("/update");
  };

  return (
    <Box m="20px">
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
          className="h-[10%] p-2 rounded flex flex-col  w-[20%] mx-auto flex items-center"
          open={showDeleteAlert}
          sx={{
            top: "10%",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Typography>
            Are you sure do you want to delete this podcast?
          </Typography>
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
          className="h-[11%] flex items-center justify-center"
          open={showBackdrop}
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Box className="h-[100%] flex flex-row   -translate-y-4 flex  flex-row justify-between  items-center  w-[90%] mx-auto">
            <Box className="w-[50%]">
              <p className="w-[100%] text-white">{selectedPodcast.name}</p>
            </Box>
            <ReactAudioPlayer
              className="w-[30%]  h-[100%]"
              RxCross1
              src={selectedPodcast.url}
              controls
            />
            <Box className="flex w-[20%] justify-end translate-y-2  flex-col items-center justify-center">
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
