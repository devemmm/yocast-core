import { Box, Typography, useTheme, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockPodcast } from "../../data/mockData";
import Header from "../../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import { columns } from "../../data/mockData";
import { baseUrl, headers } from "../../data/authData";
import { BsEarbuds, BsTrash } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";

const USER = () => {
  const theme = useTheme();
  const [podcasts, setPodcasts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    axios({
      method: "GET",
      url: baseUrl + "/podcasts",
      headers: headers,
    })
      .then((response) => {
        setPodcasts(response.data.podcast);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [podcasts]);

  const clicked = () => {
    console.log(clicked);
  };
  return (
    <Box m="20px">
      <Header
        podcast={false}
        title="Podcast"
        subtitle="Manage all yocast podcast here ..."
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
          onRowClick={(rows) => {
            console.log(rows.row.url);
          }}
          loading={isLoading}
          checkboxSelection
          rows={podcasts}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default USER;
