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
import { services } from "../../data/pageData";
function Wellcome() {
  return (
    <Box className="w-[100%]  service_section ">
      <Box className="w-[100%]  h-[100%] space-y-10 flex-col text-center flex justify-center">
        <Typography
          variant="h4"
          className=" underline h-[10%] mx-auto "
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          Our Services
        </Typography>
        <Box className="flex  h-[70%] justify-between  flex-col space-y-4 md:space-y-0  md:flex-row md:w-[67%] w-[95%]  mx-auto">
          {services.map((service, index) => (
            <Box className="">
              <img className="rounded-xl" src={service.image} />
              <Box className="text-center w-[95%] md:w-[70%] mt-3 mx-auto">
                <Typography
                  className="w-[100%] mx-auto text-center "
                  sx={{ fontWeight: "bold", textAlign: "center" }}
                  variant="h4"
                >
                  {service.title}
                </Typography>
                <Typography className="w-[100%]" variant="p">
                  {service.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Wellcome;
