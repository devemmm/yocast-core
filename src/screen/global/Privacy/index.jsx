import React from "react";
import { Box } from "@mui/material";
import Navbar from "../../../components/global/Navbar";
import Footer from "../../../components/home/Footer";
import wellcomeImage from "../../../asstes/images/welcome.png";
import { Slide } from "react-reveal";

const TermsAndConditions = () => {
  return (
    <Slide up className="h-screen">
      <Box classNAme='h-[100%]'>
        <Box className="h-[8%] flex items-center justify-center head">
          <Navbar />
        </Box>
        <Box className="h-[79%] flex items-center justify-centerI">
          <Box className="W-[55%]  h-[95%]">
            <Box className="h-[70vh]">
              <Box className=" items-center mt-6 flex flex-col space-y-10 w-[90%] md:w-[50%] mx-auto ">
                <h1 className="text-center border border-[#feb543]  border-x-0 border-t-0 font-bold text-3xl">
                  Welcome To Yocast LTD
                </h1>
                {/* <Box className="w-[100%] flex items-center justify-center ">
                  <img
                    className=" w-[90%]  max-[243px]:w-[100%] md:w-[70%]"
                    src={wellcomeImage}
                    alt=""
                  />
                </Box> */}
                <Box className="w-[100%]">
                  <p className="text-center font-poopins text-[0.70rem] font-sans text-[1rem] tetx-black  w-[100%]  ">
                    Any media material uploaded on Yocast, is reserved to the podcast audience.
                    YoCast Subscribers have their right to the content have chosen to purchase.
                    Any inquiry from our audience, are immediately submitted to our customer email: info@yocast.rw, or our chat room.
                    Content consumers information are secured in YoCast server for subscription purpose. All of those information are kept as private.
                    To access and use YoCast Services, you must register using your names, your names and your mobile number.
                    Your Full subscription is confirmed by email you received or notification in your mobile app.
                  </p>
                </Box>
                {/* <Box className="w-[100%] flex justify-center items-center ">
                  <button className="bg-[#FEB543] transition ease-in-out duration-300 delay-3 hover:-translate-y-[10%]   w-[50%] md:w-[20%]   text-white font-poppins font-sans  font-bold rounded-full p-3 text-[0.70rem]">
                    Read More
                  </button>
                </Box> */}
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

export default TermsAndConditions;
