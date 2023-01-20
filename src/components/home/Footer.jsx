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
    <Box className="text-white footer flex items-center h-[100%] w-full pt-[190px] md:pt-[24px] justify-center ">
      <Box className=" flex flex-col space-y-20 md:w-[70%]  w-[95%] mx-auto ">
        <Typography
          sx={{ fontWeight: "bold" }}
          className="text-white text-[#FEB543] md:text-white  "
          variant="h4"
        >
          YOCAST
        </Typography>
        <Box className="flex md:flex-row flex-col  space-x-[10%]">
          {rightAndBackButtons.map((btn, index) => (
            <Box className="flex flex-col md:my-2 my-8 space-y-5">
              <Typography
                className="hover:border text-center md:text-start  hover:border-t-0 hover:border-[#feb543]  hover:cursor-pointer hover:border-x-0"
                variant="h6"
                sx={{ font: "poppins", fontWeight: "bold" }}
              >
                {btn.title}
              </Typography>
              <ul className="font-poppins text-center md:text-start flex flex-col space-y-2 font-sans">
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
        <Box className="flex md:flex-row  w-[100%] sm:flex-row flex-col md:justify-between items-center  md:space-y-0 space-y-10   h-40 md:h-11">
          <Box className="flex space-x-3 items-center flex-row md:w-[40%]">
            {images.map((image, index) => (
              <img className="md:w-[7%]" src={image} alt="image" />
            ))}
          </Box>
          <Box className="md:w-[60%] md:flex-row flex-col w-[90%] space-y-4  md:space-y-0 flex items-center h-[100%] flex-row  space-x-4">
            <Typography>NEWSLETTER</Typography>
            <input
              type="text"
              className="md:w-[40%] w-[100%] focus:outline-0 pl-2 md:h-[100%] h-[8vh]"
              placeholder="Enter  Your email"
            />
            <button className="bg-[#FEB543] h-[50%] md:h-[100%] md:w-[20%]  w-[100%] font-poppins font-sans  font-bold rounded p-3">
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
