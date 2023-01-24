import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockSubscription } from "../../data/mockData";
import Header from "../../components/Header";
import { useEffect } from "react";
import { headers } from "../../data/authData";
import { baseUrl } from "../../data/authData";
import axios from "axios";
import { useState } from "react";
import { subscriptionColumns } from "../../data/mockData";
import Side from "../global/Side";

const USER = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [subscriptions, setSubscriptions] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios({
      method: "GET",
      url: baseUrl + "/user/subscription?type=last",
      headers: headers,
    })
      .then((response) => {
        setSubscriptions(response.data.subscription);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [subscriptions]);

  return (
    <Box m="20px">
      <Header
        title="Subscriptions"
        subtitle="Manage all yocast Subscriptions here ..."
      />
      <Side />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          loading={isLoading}
          rows={subscriptions}
          columns={subscriptionColumns}
        />
      </Box>
    </Box>
  );
};

export default USER;
