import React from "react";
import { Box } from "@mui/material";


function YocastLogo({height, width}) {
  return (
    <Box
      component="img"
      sx={{
        height: height,
        width: width,
        maxHeight: { xs: 233, md: 167 },
        maxWidth: { xs: 350, md: 250 },
      }}
      src={require('./icon.png')}
    />
  )
}

export default YocastLogo;