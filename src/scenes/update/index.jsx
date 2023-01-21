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
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const UpdateForm = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);
  const [status, setStatus] = useState("error");
  const [message, setMessage] = useState("");
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showBackdrop, setShowBackkDrop] = useState(false);
  const [podcasts, setPodcasts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const [coverPreview, setCoverPreview] = useState("");
  const [previewCoverImage, setPreviewCoverImage] = useState();
  const [values, setValues] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    cover: null,
    podcast: null,
  });

  const selectedPodcast = useSelector((store) => store.podcast.selectedPodcast);
  console.log(selectedPodcast);
  const submit = () => {
    if (values.cover === null) {
      setMessage("Cover photo for the podcast is required");
      setShowAlert(true);
      setStatus("error");
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return;
    }
    if (values.podcast === null) {
      setMessage(".mp3 file for the podcast is required");
      setShowAlert(true);
      setStatus("error");
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
      setStatus("error");
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("podcast", values.podcast);
    formData.append("cover", values.cover);
    formData.append("description", values.description);
    formData.append("category", values.category);
    formData.append("price", values.price);

    axios({
      method: "PATCH",
      url: baseUrl + `/admin/podcast/${selectedPodcast.id}`,
      data: formData,
      headers: headers,
    })
      .then((response) => {
        console.log(response.data);
        if (
          response.data.statusCode === 200 ||
          response.data.statusCode === 201
        ) {
          setStatus("success");
          setMessage("Podcast updated successfully");
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 3000);
          setLoading(false);
          return;
        }
        console.log(response);
        setLoading(false);
        setShowAlert(true);
      })
      .catch((error) => {
        console.log(error);
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
  return (
    <Box className="h-[93%]">
      <Box className="flex h-[20%] justify-between w-[90%] mx-auto items-center">
        <Header
          title={"Update Podcast"}
          subtitle="Update Podcast  for your users"
        />
        {showAlert ? (
          <Alert className="w-[60%] mx-auto" severity={status}>
            {message}
          </Alert>
        ) : null}
      </Box>
      <Container className="items-center  md:flex-row flex-col flex h-[80%]">
        <Box className="h-[100%] shadow-3xl border border-x-0 border-b-0 p-2 ">
          <Typography className="text-center  h-[10%] p-4">
            Update your podcast
          </Typography>
          <FormControl
            onSubmit={(e) => e.preventDefault()}
            className="w-[95%]  mx-auto  h-[100%]"
          >
            <Box className="w-[100%]  h-[100%] md:max-[1074px]:flex-col flex-col md:space-y-0 space-y-5 flex md:flex-row justify-between ">
              <Box classNAme="md:w-[50%]  w-[95%] flex flex-col h-[100%]">
                <Box className="md:w-[24vw] md:max-[1074px]:w-[70%] md:max-[1074px]:h-[12vh] w-[100%] border-[3.6px] border-[#212529]  border-dashed border h-[16vh] md:h-[32%] flex items-center justify-center mx-auto">
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
                      Please drag/drop here a podcast .mp3 file
                    </label>
                    <CloudUploadIcon className="text-center " />
                  </Box>
                </Box>
                <Box className=" w-[100%] md:max-[1074px]:w-[70%] md:max-[1074px]:h-[12vh]  md:w-[24vw] mt-5 border-[3.6px] border-[#212529] border-dashed border h-[16vh] md:h-[32%] flex items-center justify-center mx-auto">
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
                      Please drag/drop here a podcast cover photo
                    </label>
                    <CloudUploadIcon className="text-center " />
                  </Box>
                </Box>
                {/* <Box className="p-4">
                  <p>sdfsdf</p>
                </Box> */}
              </Box>
              <Box className=" md:max-[1074px]:w-[70%]  md:max-[1074px]:mx-auto md:max-[1074px]:justify-center  w-[95%] md:w-[50%] flex mx-auto flex-col space-y-4 h-[100%]">
                {podcastFields.map((field, index) => (
                  <Box key={index}>
                    {field.name === "Category" ? (
                      <Box>
                        <Select
                          defaultValue={selectedPodcast.category}
                          value={values.category}
                          onChange={(e) =>
                            setValues({ ...values, category: e.target.value })
                          }
                          className="md:w-[90%] md:max-[1074px]:w-[100%] w-[99.5%]  border mx-auto"
                        >
                          {field.options.map((option, index) => (
                            <MenuItem
                              value={option}
                              className="bg-black w-[100%]"
                            >
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </Box>
                    ) : (
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
                <Box className="md:w-[80%]  md:max-[1074px]:w-[100%] md:max-[1074px]:w-[99.5%] w-[99.5%] mx-auto flex justify-end">
                  <button
                    onClick={submit}
                    className="float-left   bg-[#4CCEAC] h-[5vh] rounded font-bold  md:max-[1074px]:w-[100%]  w-[100%] md:w-[30%]"
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
