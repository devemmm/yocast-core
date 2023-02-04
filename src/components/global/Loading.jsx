import React from "react";
import Loader from "../Loader";
import { Box } from "@mui/material";

function Loading() {
  return (
    <Box className="h-screen flex items-center justify-center">
      <Box>
        <Loader />
        <p className="font-sans text-center animate-ping font-poppins">Yocast</p>
      </Box>
    </Box>
  );
}

export default Loading;
