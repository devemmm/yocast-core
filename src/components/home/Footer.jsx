import React from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
  Alert,
  Container,
} from "@mui/material";
import { rightAndBackButtons } from "../../data/pageData";
import { BsFacebook } from "react-icons/bs";
import instagram from "../../asstes/images/instagram1.png";
import linkedin from "../../asstes/images/linkedin1.png";
import twiter from "../../asstes/images/twitter.png";
import facebook from "../../asstes/images/fb.png";
function Footer() {
  const year = new Date().getFullYear();
  const images = [facebook, twiter, linkedin, instagram];
  return (
    <Box className="footer text-white flex items-center justify-center ">
      <Box className="h-[78%] flex flex-col space-y-20   bottom-0 absolute w-[70%] mx-auto ">
        <Typography
          sx={{ fontWeight: "bold" }}
          className="text-white "
          variant="h4"
        >
          YOCAST
        </Typography>
        <Box className="flex md:flex-row flex-col  space-x-[10%]">
          {rightAndBackButtons.map((btn, index) => (
            <Box className="flex flex-col space-y-5">
              <Typography
                className="hover:border hover:border-t-0 hover:border-[#feb543]  hover:cursor-pointer hover:border-x-0"
                variant="h6"
                sx={{ font: "poppins", fontWeight: "bold" }}
              >
                {btn.title}
              </Typography>
              <ul className="font-poppins flex flex-col space-y-2 font-sans">
                {btn.links.map((link, index) => (
                  <li
                    className="hover:cursor-pointer hover:underline hover:scale-100"
                    key={index}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </Box>
          ))}
        </Box>
        <Box className="flex justify-between items-center">
          <Box className="flex space-x-3 items-center flex-row w-[40%]">
            {images.map((image, index) => (
              <img className="w-[7%]" src={image} alt="image" />
            ))}
          </Box>
          <Box className="w-[60%] flex items-center h-[100%] flex-row justify-between">
            <Typography>NEWSLETTER</Typography>
            <input
              type="text"
              className="w-[40%] pl-2 h-[100%]"
              placeholder="Enter  Your email"
            />
            <button className="bg-[#FEB543] h-[100%] w-[40%]  font-poppins font-sans  font-bold rounded p-3">
              Read More
            </button>
          </Box>
        </Box>
        <Box className="w-[80%]  flex items-center justify-center border border-x-0 border-b-0 mx-auto">
          <p className="text-center h-[30%]" variant="p">
            &copy; {year + " All Rights Reserved By devemm"}{" "}
          </p>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
