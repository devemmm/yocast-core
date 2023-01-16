import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockUsers } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import Form from "../form";
// import { useState } from "preact/hooks";
import { useState } from "react";

const USER = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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

  const [coverPhotoPreview, setCoverPhotoPreview] = useState(null);
  const [podcastPreview, setPodcastPreview] = useState(null);
  const [values, setValues] = useState({
    title: "",
    category: "",
    description: "",
    price: null,
    coverPhoto: null,
    podcast: null,
  });
  return (
    <Box m="20px">
      {/* <Header title="USER" subtitle="Managing the USER Members" /> */}
      <Form
        coverPhotoPreview={coverPhotoPreview}
        podcastPreview={podcastPreview}
        values={values}
        setValues={setValues}
        setCoverPhotoPreview={setCoverPhotoPreview}
        setPodcastPreview={setPodcastPreview}
      />
    </Box>
  );
};

export default USER;
