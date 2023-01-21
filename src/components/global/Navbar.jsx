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
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { navlinks } from "../../data/pageData";
function Navbar() {
  return (
    <Box className="flex   justify-between w-[95%] mx-auto h-[9%] items-center ">
      <Box className="text-white flex items-center  flex-row space-x-6">
        <Typography
          sx={{ font: "bold", fontWeight: "bold" }}
          className="text-white font-bold"
          variant="h5"
        >
          YOCAST
        </Typography>
        <ul className="flex flex-row  md:flex hidden space-x-10 items-center ">
          {navlinks.map((link, index) => (
            <Link
              key={index}
              to={`${link.link}`}
              className="hover:cursor-pointer"
            >
              <li className="hover:cursor-pointer" key={index}>
                {link.name}
              </li>
            </Link>
          ))}
        </ul>
        <SearchIcon />
      </Box>
      <Box className="md:hidden ">
        <MenuIcon className="text-white hidden  font-bold text-3xl" />
      </Box>
    </Box>
  );
}

export default Navbar;
