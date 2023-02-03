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
import { constacts } from "../../data/pageData";

const Contact = () => {
  return (
    <Slide right className="h-screen">
      <Box classNAme="h-[100%]">
        <Box className="h-[8%] flex items-center justify-center head">
          <Navbar />
        </Box>
        <Box className="h-[79%] flex items-center justify-centerI">
          <Box className="h-[100%] w-[100%] flex flex-col space-y-10">
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                font: "poppins",
                textAlign: "center",
              }}
            >
              Contact us
            </Typography>
            <p className="text-center font-poppins font-sans">
            COntact yocast for bettwe podcast streaming with critical messages in on friendly consts and efective onesI
            </p>
            <Box className="w-[70%]  h-[90%]  mx-auto">
              <form className="flex w-[100%] flex-col h-[100%]">
                <Box className="flex  h-[100%] w-[100%] items-center justify-between flex-col md:flex-row">
                  <Box className="w-full md:w-[48%] flex flex-col space-y-2  h-[100%]">
                    {constacts.slice(0, 2).map((contact, index) => (
                      <Box
                        key={index}
                        className="flex w-full h-[40%] flex-col space-y-3"
                      >
                        <label htmlFor={contact.name}>{contact.name}</label>
                        <input
                          placeholder={contact.name}
                          className="h-12 pl-3 focus:outline-0 bg-[#f2f3f4]"
                          id={contact.name}
                          type={contact.type}
                        />
                      </Box>
                    ))}
                  </Box>
                  <Box className="w-full md:w-[50%] flex flex-col space-y-2  h-[100%]">
                    {constacts.slice(2, 4).map((contact, index) => (
                      <Box
                        key={index}
                        className="flex  h-[40%] flex-col space-y-3"
                      >
                        <label htmlFor={contact.name}>{contact.name}</label>
                        <input
                          className="h-12 pl-3 focus:outline-0 bg-[#f2f3f4]"
                          placeholder={contact.name}
                          id={contact.name}
                          type={contact.type}
                        />
                      </Box>
                    ))}
                  </Box>
                </Box>
                <Box className="w-[100%] flex flex-col space-y-2 mt-4 h-[41%]">
                  <textarea
                    placeholder="Enter the message here"
                    className="bg-[#f2f3f4] docus:outline-0  p-2 focus:outline-0"
                    name=""
                    id=""
                    cols="30"
                    rows="7"
                  ></textarea>
                  <Box className="flex items-center justify-center">
                    <button className="bg-[#a053f9] transition ease-in-out duration-300 delay-3 hover:-translate-y-[10%] w-[50%] md:w-[12%]  mt-5 text-white font-poppins font-sans  font-bold rounded p-3">
                      Send
                    </button>
                  </Box>
                </Box>
              </form>
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

export default Contact;
