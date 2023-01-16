import {
  Box,
  Button,
  Container,
  FormLabel,
  IconButton,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "preact/hooks";
import { Options } from "../../data/stats";
import { Close, CloudUpload } from "@mui/icons-material";
import axios from "axios";
const Form = ({
  values,
  setValues,
  coverPhotoPreview,
  setCoverPhotoPreview,
  podcastPreview,
  setPodcastPreview,
}) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const formdata = new FormData();
  const handleFormSubmit = async (e) => {
    formdata.append("podcast", values.podcast);
    formdata.append("name", values.title);
    formdata.append("description", values.description);
    formdata.append("cover", values.coverPhoto);
    formdata.append("price", values.price);

    formdata.append("category", values.category);
    e.preventDefault();
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InV3YXZhbGVuczIwMDNAZ21haWwuY29tIiwiaWF0IjoxNjczODkyMDY2fQ.Hp44NctfCbA4qtQmmwYFdM_rUwYdT6RPQHqkWsiQysU";
    axios({
      url: "https://yocast.rw/admin/podcast",
      method: "post",
      data: formdata,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
    <Box m="20px">
      <Header title="CREATE Podcast" subtitle="Create a New Podcast " />
      <Container>
        <form className="w-[70%] mx-auto" onSubmit={handleFormSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            <TextField
              fullWidth
              variant="filled"
              type="number"
              value={values.title}
              onChange={(e) => {
                setValues({ ...values, title: e.target.value });
              }}
              label="Podcast title"
              sx={{ gridColumn: "span 4" }}
            />

            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Description"
              name="description"
              values={values.description}
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Price"
              name="Price"
              values={values.price}
              onChange={(e) => setValues({ ...values, price: e.target.price })}
              sx={{ gridColumn: "span 4" }}
            />
            <Box className="flex flex-col gap-5">
              <FormControl>
                <InputLabel>Enter category</InputLabel>
                <Select
                  name="category"
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  label="category"
                  value={values.category}
                  onChange={(e) => {
                    setValues({ ...values, category: e.target.value });
                  }}
                >
                  {Options.map((option, index) => (
                    <MenuItem value={option} key={index}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Box>
                <FormLabel
                  htmlFor="cover_photo"
                  className="flex cursor-pointer items-center gap-2"
                >
                  <input
                    type="file"
                    id="cover_photo"
                    accept="image/*"
                    hidden
                    onChange={(e) => {
                      setCoverPhotoPreview(
                        URL.createObjectURL(e.target.files[0])
                      );
                      setValues({ ...values, coverPhoto: e.target.files[0] });
                    }}
                  />

                  <CloudUpload />
                  <Typography>Upload cover photo</Typography>
                </FormLabel>
              </Box>
              {coverPhotoPreview && (
                <div className="relative">
                  <div className="flex justify-end w-full">
                    <IconButton
                      onClick={() => {
                        setCoverPhotoPreview(null);
                        setValues({ ...values, coverPhoto: null });
                      }}
                      className="absolute right-0 top-0"
                    >
                      <Close />
                    </IconButton>
                  </div>
                  <img
                    src={coverPhotoPreview}
                    className="h-32 w-32 object-cover object-top"
                  />
                </div>
              )}
              <Box>
                <FormLabel
                  htmlFor="podcast"
                  className="flex items-center cursor-pointer gap-2"
                >
                  <input
                    type="file"
                    id="podcast"
                    hidden
                    onChange={(e) => {
                      setPodcastPreview(URL.createObjectURL(e.target.files[0]));
                      setValues({ ...values, podcast: e.target.files[0] });
                    }}
                  />
                  <CloudUpload />
                  <Typography>Upload Podcast</Typography>
                </FormLabel>
              </Box>
            </Box>
          </Box>
          <Box display="flex" justifyContent="end" mt="20px">
            <Button type="submit" color="secondary" variant="contained">
              Create Podcast
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default Form;
