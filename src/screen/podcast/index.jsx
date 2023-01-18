import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockPodcast } from "../../data/mockData";
import Header from "../../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl, headers } from "../../data/authData";

const USER = () => {
  const theme = useTheme();
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(false);
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.2 },
    {
      field: "ownerName",
      headerName: "Owner",
      flex: 0.5,
      cellClassName: "name-column--cell",
    },
    {
      field: "name",
      headerName: "name",
      flex: 0.5,
      cellClassName: "name-column--cell",
    },
    {
      field: "url",
      headerName: "url",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "category",
      headerName: "category",
      flex: 0.5,
      cellClassName: "name-column--cell",
    },
    {
      field: "description",
      headerName: "description",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "likes",
      headerName: "likes",
      flex: 0.2,
      cellClassName: "name-column--cell",
    },
    {
      field: "isFree",
      headerName: "isFree",
      flex: 0.1,
      cellClassName: "name-column--cell",
    },
    {
      field: "createdAt",
      headerName: "Date uploaded",
      flex: 0.4,
      cellClassName: "name-column--cell",
    },
  ];

  useEffect(() => {
    axios({
      method: "GET",
      url: baseUrl + "/podcasts",
      headers: headers,
    })
      .then((response) => {
        setPodcasts(response.data.Podcast);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <Box m="20px">
      <Header title="Podcast" subtitle="Manage all yocast podcast here ..." />
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
        <DataGrid checkboxSelection rows={mockPodcast} columns={columns} />
      </Box>
    </Box>
  );
};

export default USER;
