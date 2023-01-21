import React from "react";
import { Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import problem from "../../asstes/images/problem.jpg";
import { statistics } from "../../data/pageData";
import Footer from "../../components/home/Footer";
import Slidding from "../../components/home/Slidding";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { constacts } from "../../data/pageData";
import wellcomeImage from "../../asstes/images/welcome.png";
import { services } from "../../data/pageData";
import instagram from "../../asstes/images/instagram1.png";
import linkedin from "../../asstes/images/linkedin1.png";
import twiter from "../../asstes/images/twitter.png";
import facebook from "../../asstes/images/fb.png";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import Navbar from "../../components/global/Navbar";

const navlinks = ["Home", "About", "SERVICES", "CONTACT", "LOGIN"];
const Home = () => {
  const year = new Date().getFullYear();
  const images = [facebook, twiter, linkedin, instagram];
  return (
    <Box>
      <Box className="h-[100vh]">
        <Box className="h-[95%] header">
          {/* Navigation bar */}
          <Navbar />
          {/* slidding component */}
          <Slidding />
          {/* wellcome screen */}
        </Box>
      </Box>
      {/* wellcome  */}
      <Box className="h-[70vh]">
        <Box className=" items-center mt-6 flex flex-col space-y-10 w-[90%] md:w-[50%] mx-auto ">
          <h1 className="text-center border border-[#feb543]  border-x-0 border-t-0 font-bold text-3xl">
            Welcome To Yocast Business LTD
          </h1>
          <Box className="w-[100%] flex items-center justify-center ">
            <img className="w-[70%]" src={wellcomeImage} alt="" />
          </Box>
          <Box className="w-[100%]">
            <p
              className="text-center font-poopins font-sans text-[1rem] tetx-black  w-[100%]  "
              variant="p"
            >
              We started Arches Audio with one goal in mind: to empower
              individuals and businesses to use audio to connect with their
              audience and tell their stories in an impactful way
            </p>
            {/* <Typography className="text-center font-poppins font-sans">
              their stories in an impactful way
            </Typography> */}
          </Box>
          <Box className="w-[100%] flex justify-center items-center ">
            <button className="bg-[#FEB543] max-[234px]:w-[100%] transition ease-in-out duration-300 delay-3 hover:-translate-y-[10%]   w-[50%] md:w-[20%]  text-white font-poppins font-sans  font-bold rounded-full p-3">
              Read More
            </button>
          </Box>
        </Box>
      </Box>
      {/* services */}
      <Box className="w-[100%]  md:h-[120vh] service_section ">
        <Box className="w-[100%]  h-[100%] space-y-10 flex-col text-center flex justify-center">
          <Box className="flex w-[100%] items-end text-[#FBB543] md:text-white sm:text-white lg:text-white xl:text-white justify-end sm:justify-center sm:items-center">
            <Typography
              variant="h4"
              className="  underline h-[10%] mx-auto "
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              Our Services
            </Typography>
          </Box>
          <Box className="flex  sm:space-x-5 h-[70%]   justify-center items-center sm:justify-between   flex-col space-y-4 md:space-y-0  md:flex-row md:w-[67%] sm:w-[100%] w-[95%]  mx-auto">
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
          <Box className="w-[100%] flex justify-center items-center ">
            <button className="bg-[#FEB543] max-[234px]:w-[90%] transition ease-in-out duration-300 delay-3 hover:-translate-y-[10%] md:w-[25%]  sm:w-[30%] w-[50%] lg:w-[12%]   text-white font-poppins font-sans  font-bold rounded-full p-3">
              Read More
            </button>
          </Box>
        </Box>
      </Box>
      {/* business problem */}
      <Box className=" items-center mt-6 flex flex-col space-y-10 w-[90%] md:w-[50%] mx-auto ">
        <h1 className="text-center border border-[#feb543]  border-x-0 border-t-0 font-bold text-3xl">
          Do you have any business problem ?
        </h1>
        <Box className="w-[100%] flex items-center justify-center ">
          <img className="w-[70%]" src={problem} alt="" />
        </Box>
        <Box className="w-[100%]">
          <Typography
            className="text-center text-[1rem] tetx-black  w-[100%]  "
            variant="p"
          >
            We started Arches Audio with one goal in mind: to empower
            individuals and businesses to use audio to connect with their
            audience and tell
          </Typography>
          <Typography className="text-center font-poppins font-sans">
            their stories in an impactful way
          </Typography>
        </Box>
        <Box className="w-[100%] flex justify-center items-center ">
          <button className="bg-[#FEB543] max-[234px]:w-[90%] transition ease-in-out duration-300 delay-3 hover:-translate-y-[10%] md:w-[40%]  sm:w-[30%] w-[50%] lg:w-[24%]  text-white font-poppins font-sans  font-bold rounded-full p-3">
            Read More
          </button>
        </Box>
      </Box>

      {/* choose us */}
      <Box className="w-[100%] py-20 flex mt-10 why_section  p-4 md:h-[18%]">
        <Box className="h-[96%] md:h-[80%] justify-center items-center flex flex-col space-y-8 w-[100%]">
          <Typography
            sx={{ textAlign: "center" }}
            variant="h4"
            className="text-white  border w-fit text-center mx-auto border-x-0 border-t-0 h-[10%] mx-auto "
          >
            Why choose us
          </Typography>
          <Box className="flex flex-col  pace-y-8">
            <Box className="w-[60%] mt-9 flex flex-col space-y-5  mx-auto">
              <p className="text-center font-poppins font-sans   mx-auto font-poppins">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis aliqua. Ut enim ad minim veniam, quis
                aliqua. Ut enim ad minim veniam, quis aliqua. Ut enim ad minim
                veniam, quis
              </p>
              <Box className="w-[90%]   space-x-3 flex  flex-wrap justify-between items-center  mx-auto">
                {statistics.map((stat, index) => (
                  <Box className="flex flex-row space-x-2 items-center">
                    <Box>
                      <img src={stat.image} alt="" />
                    </Box>
                    <Box>
                      <Typography
                        className="font-sans font-poppins"
                        sx={{
                          font: "poppins",
                          fontStyle: "sans-serif",
                          fontSize: "2em",
                        }}
                      >
                        {index === 0 ? stat.number + "%" : stat.number + "+"}
                      </Typography>
                      <Typography className="text-3xl">{stat.title}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className=" flex-col flex items-center ">
        <Box className="h-[80%] flex justify-between flex-col space-y-10 ">
          {/* cleints reviews */}
          <Box className=" w-[90%] md:w-[40%] h-[20%] md:h-[40%]   mx-auto justify-between flex flex-col my-24">
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                font: "poppins",
                textAlign: "center",
              }}
            >
              What Our Clients Says
            </Typography>
            <Box className="flex h-[80%] items-center justify-between flex-row items-center">
              <Box className="w-[8%] rounded flex items-center justify-center text-white  hover:bg-[#FEB545] bg-[#383a90] h-[25%]">
                <ArrowBack className="rounded-full" />
              </Box>
              <Box className="w-[80%]  flex items-center flex-col justify-center p-3 h-[100%] border">
                <img
                  className="w-24 h-24 rounded-full mb-4"
                  src={problem}
                  alt=""
                />
                <Typography sx={{ font: "poppins", font: "sans" }}>
                  psum dolor sit amet, consectetur adipiscing elit, sed do
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                </Typography>
              </Box>
              <Box className="w-[8%] rounded flex items-center justify-center text-white font-bold text-4xl hover:bg-[#FEB545] bg-[#383a90] h-[50%]">
                <ArrowForward
                  className="rounded-full h-[100%]"
                  sx={{ font: "bold" }}
                />
              </Box>
            </Box>
          </Box>
          {/* contact  */}

          <Box className="h-[70%] w-[100%] flex flex-col space-y-10">
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
              psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor
            </p>
            <Box className="w-[70%]  h-[90%]  mx-auto">
              <form className="flex w-[100%] flex-col h-[100%]">
                <Box className="flex  h-[100%] w-[100%] items-center justify-between flex-col md:flex-row">
                  <Box className="w-full md:w-[48%] flex flex-col space-y-2  h-[100%]">
                    {constacts.slice(0, 2).map((contact, index) => (
                      <Box className="flex w-full h-[40%] flex-col space-y-3">
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
                      <Box className="flex  h-[40%] flex-col space-y-3">
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
          {/* footer */}
        </Box>
      </Box>
      <Box className=" mt-24 md:h-[68vh] text-[0.80rem] w-full">
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
