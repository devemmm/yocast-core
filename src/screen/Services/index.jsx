import React from "react";
import {
  Box,
  Typography,
  TextField,
  Select,
  ListItem,
  Button,
  MenuItem,
} from "@mui/material";
import Navbar from "../../components/global/Navbar";
import Footer from "../../components/home/Footer";
import wellcomeImage from "../../asstes/images/welcome.png";
import { Slide } from "react-reveal";
import { services } from "../../data/pageData";
const Services = () => {
  return (
    <Slide right className="h-screen">
      <Box classNAme="h-[100%]">
        <Box className="h-[8%] flex items-center justify-center head">
          <Navbar />
        </Box>
        <Box className="h-[79%] flex items-center justify-centerI">
          <Box className="w-[100%] mt-2  md:h-[120vh] service_section ">
            <Box className="w-[100%]  h-[100%] space-y-20 flex-col text-center flex justify-center">
              <Box className="flex w-[100%] items-end text-[#FBB543] md:text-white sm:text-white lg:text-white xl:text-white justify-end sm:justify-center sm:items-center">
                <Typography
                  variant="h4"
                  className="  underline  mx-auto "
                  sx={{ fontWeight: "bold", textAlign: "center" }}
                >
                  Our Services
                </Typography>
              </Box>
              <Box className="flex  sm:space-x-5 h-[70%]   justify-center items-center sm:justify-between   flex-col space-y-4 md:space-y-0  md:flex-row md:w-[67%] sm:w-[100%] w-[95%]  mx-auto">
                {services.map((service, index) => (
                  <Box key={index} className="">
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
              <Box className="w-[100%] flex justify-center items-center ">
                <button className="bg-[#FEB543] max-[234px]:w-[90%] transition ease-in-out duration-300 delay-3 hover:-translate-y-[10%] md:w-[25%]  sm:w-[30%] w-[50%] lg:w-[12%]   text-white font-poppins font-sans  font-bold rounded-full p-3">
                  Read More
                </button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className=" mt-24 md:h-[75vh] text-[0.70rem]  w-full">
          <Footer />
        </Box>
      </Box>
    </Slide>
  );
};

export default Services;
