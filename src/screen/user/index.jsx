import React, { useEffect, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { tokens } from "../../theme";
import { mockUsers } from "../../data/mockData";
import { baseUrl, headers } from "../../data/authData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import Side from "../global/Side";
import { useNavigate } from "react-router-dom";
import { setShowLogoutBackDrop } from "../../features/pageSlice";
import OptionsBackdrop from "../global/OptionsBackdrop";
import { setPodcastss } from "../../features/podcastSlice";

const USER = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const user = localStorage.getItem("loggedInUser");
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.2 },
    {
      field: "names",
      headerName: "names",
      flex: 0.6,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 0.6,
      cellClassName: "name-column--cell",
    },
    {
      field: "country",
      headerName: "country",
      flex: 0.3,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "phone",
      flex: 0.4,
      cellClassName: "name-column--cell",
    },
    {
      field: "type",
      headerName: "Type",
      flex: 0.2,
      cellClassName: "name-column--cell",
    },
    {
      field: "status",
      headerName: "status",
      flex: 0.2,
      cellClassName: "name-column--cell",
    },
    {
      field: "createdAt",
      headerName: "Date Joined",
      flex: 0.5,
      cellClassName: "name-column--cell",
    },
    // {
    //   field: "accessLevel",
    //   headerName: "Access Level",
    //   flex: 1,
    //   renderCell: ({ row: { access } }) => {
    //     return (
    //       <Box
    //         width="60%"
    //         m="0 auto"
    //         p="5px"
    //         display="flex"
    //         justifyContent="center"
    //         backgroundColor={
    //           access === "admin"
    //             ? colors.greenAccent[600]
    //             : access === "manager"
    //             ? colors.greenAccent[700]
    //             : colors.greenAccent[700]
    //         }
    //         borderRadius="4px"
    //       >
    //         {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
    //         {access === "manager" && <SecurityOutlinedIcon />}
    //         {access === "user" && <LockOpenOutlinedIcon />}
    //         <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
    //           {access}
    //         </Typography>
    //       </Box>
    //     );
    //   },
    // },
  ];


  useEffect(() => {
    if (user == null || !user) {
      navigate("/auth/login");
    }
    axios({
      method: "GET",
      url: baseUrl + "/admin/users",
      headers: headers,
    })
      .then((response) => {
        console.log(response.data.user)
        // dispatch(setPodcastss(response.data.podcast));
        setUsers(response.data.user);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [users]);


  return (
    <Box m="20px">
      <Header title="USER" subtitle="Managing the USER Members" />
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
        <Side />
        <OptionsBackdrop />
        <DataGrid loading={isLoading} checkboxSelection rows={users} columns={columns} getRowId={(row)=> row.createdAt}/>
      </Box>
    </Box>
  );
};

export default USER;
