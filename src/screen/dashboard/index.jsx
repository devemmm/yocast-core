import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import StatBox from "../../components/StatBox";
import React from "preact/compat";
import { Link } from "react-router-dom";
import Side from "../global/Side";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const [statistics, setStatics] = useState({
    temperature: 0,
    humidity: 0,
    soilmoisture: 0,
  });

  // useEffect(() => {
  //   // fetch("http://10.10.109.85:5000/api/v1/latest")
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setStatics({ ...result });
  //     });
  // }, []);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px" className="flex flex-col md:space-y-0 space-y-10">
      {/* HEADER */}
      <Box
        className="flex  md:flex-row flex-col"
        justifyContent="space-between"
        alignItems="center"
      >
        <Header
          title="Yocast"
          subtitle="Welcome to Harvest Prediction Dashboard"
        />
        <Side />
        <Box className="w-[95%] md:w-[17%]">
          <Link to="/create" className="w-[100%] mb-8">
            <Button
              sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
                width: "100%",
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
              }}
            >
              <DownloadOutlinedIcon sx={{ mr: "10px" }} />
              Add a Podcast
            </Button>
          </Link>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box className="flex  flex-col space-y-6">
        {/* ROW 1 */}
        <Box className="flex  h-[60vh] md:h-[20vh] flex-col md:flex-row w-[95%] mx-auto md:w-[95%] justify-between">
          <Box
            className=" w-[100%] md:w-[23%] md:h-[90%] h-[20%] duration-200  delay-150  ease-in-out rounded-lg hover:-translate-y-1 transition "
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="between"
          >
            <StatBox
              title={statistics.temperature + "k"}
              subtitle="Podcasts"
              progress="0.75"
              increase="+1.5%"
            />
          </Box>
          <Box
            className="md:w-[22%] w-[100%] md:h-[90%] h-[20%] duration-200  delay-150  ease-in-out rounded-lg hover:-translate-y-1 transition "
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title={statistics.humidity + "k"}
              subtitle="Subscriptions"
              progress="0.50"
              increase="+21%"
            />
          </Box>
          <Box
            className="md:w-[22%] w-[100%] md:h-[90%] h-[20%] duration-200  delay-150  ease-in-out rounded-lg hover:-translate-y-1 transition "
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="$1,023"
              subtitle="My balance"
              progress="0.30"
              increase="+5%"
            />
          </Box>
          <Box
            gridColumn="span 3"
            className="md:w-[25%] w-[100%] md:h-[90%] h-[20%] duration-200  delay-150  ease-in-out rounded-lg hover:-translate-y-1 transition "
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title={54334 + "M"}
              subtitle="Users"
              progress="0.80"
              increase="59%"
            />
          </Box>
        </Box>

        {/* ROW 2 */}
        <Box
          className="md:w-[100%] md:p-0 md:h-[90%] h-[20%] p-4 w-[100%] duration-200  delay-150  ease-in-out rounded-lg hover:-translate-y-1 transition "
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          marginBottom="0px"
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Current Subscriptions prediction
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                103,135 M
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Podcasts
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                {transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
      </Box>
    </Box>
  );
};

export default Dashboard;
