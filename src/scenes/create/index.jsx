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
import axios from "axios";
const Create = () => {
  const [coverPreview, setCoverPreview] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [alertStatus, setAlertStatus] = useState("success");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [previewCoverImage, setPreviewCoverImage] = useState();
  const [values, setValues] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    cover: null,
    podcast: null,
  });

  const submit = () => {
    if (values.cover == null) {
      setMessage("Cover photo for the podcast is required");
      setShowAlert(true);
      setAlertStatus("error");
      return;
    }
    if (values.podcast == null) {
      setMessage(".mp3 file for the podcast is required");
      setShowAlert(true);
      setAlertStatus("error");
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
      method: "POST",
      url: baseUrl + "/admin/podcast",
      data: formData,
      headers: headers,
    })
      .then((response) => {
        console.log(response.data);
        if (
          response.data.statusCode === 200 ||
          response.data.statusCode == 201
        ) {
          setAlertStatus("success");
          setMessage("Podcast created successfully");
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 3000);
          return;
        }
        console.log(response);
        setLoading(false);
        setShowAlert(true);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setAlertStatus("error");
        setShowAlert(true);
      });
  };
  const setValue = (value, index) => {
    if (index == 0) {
      setValues({ ...values, title: value });
    } else if (index == 1) {
      setValues({ ...values, price: value });
    } else if (index == 2) {
      setValues({ ...values, description: value });
    }
  };
  return (
    <Box className="h-[93%]">
      <Box className="flex h-[20%] justify-between w-[90%] mx-auto items-center">
        <Header
          title={"Create Podcast"}
          subtitle="Create podcsts for your users"
        />
        {showAlert ? <Alert severity={alertStatus}>{message}</Alert> : null}
      </Box>
      <Container className="items-center  flex h-[80%]">
        <Box className="h-[70%] shadow-3xl border border-x-0 border-b-0 p-2 ">
          <Typography className="text-center  h-[10%] p-4">
            create your podcast
          </Typography>
          <FormControl
            onSubmit={(e) => e.preventDefault()}
            className="w-[95%]  mx-auto  h-[90%]"
          >
            <Box className="w-[100%]  h-[100%] flex flex-row justify-between ">
              <Box classNAme="w-[50%] flex flex-col h-[100%]">
                <Box className="w-[24vw] border-[3.6px] border-[#212529]  border-dashed border h-[32%] flex items-center justify-center mx-auto">
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
                <Box className="w-[24vw] mt-5 border-[3.6px] border-[#212529] border-dashed border h-[32%] flex items-center justify-center mx-auto">
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
              <Box className="w-[50%] flex flex-col space-y-4 h-[100%]">
                {podcastFields.map((field, index) => (
                  <Box key={index}>
                    {field.name === "Category" ? (
                      <Box>
                        <Select
                          onChange={(e) =>
                            setValues({ ...values, category: e.target.value })
                          }
                          className="w-[90%]  border mx-auto"
                          value={1}
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
                        onChange={(e) => setValue(e.target.value, index)}
                        variant="outlined"
                        className="border w-[90%] mx-auto bg-[#1F2A40]"
                        label={field.name}
                      />
                    )}
                  </Box>
                ))}
                <Box className="w-[80%] mx-auto flex justify-end">
                  <button
                    onClick={submit}
                    className="flooat-left bg-[#4CCEAC] h-[5vh] rounded font-bold  w-[30%]"
                  >
                    Create Podcast
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
export default Create;
