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

const USER = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [subscriptions, setSubscriptions] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.2 },
    {
      field: "owner",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "transactionId",
      headerName: "Transaction Id",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "paymentMode",
      headerName: "Payment Mode",
      flex: 0.5,
      cellClassName: "name-column--cell",
    },

    {
      field: "type",
      headerName: "Type",
      flex: 0.3,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 0.3,
    },
    {
      field: "currency",
      headerName: "Currency",
      flex: 0.3,
    },
    {
      field: "createdAt",
      headerName: "ActivationDate",
      flex: 0.5,
    },
    {
      field: "desactivationDate",
      headerName: "DesactivationDate",
      flex: 0.5,
    },
  ];
  useEffect(() => {
    axios({
      method: "GET",
      url: baseUrl + "/subscription?type=last",
      headers: headers,
    })
      .then((response) => {
        setSubscriptions(response.data.subscription);
        console.log(response);
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
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default USER;
