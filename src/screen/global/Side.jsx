import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import WaterDamageIcon from "@mui/icons-material/WaterDamage";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { setShowSidebar } from "../../features/pageSlice";
import { setShowLogoutBackDrop } from "../../features/pageSlice";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const logout = () => {
  console.log("loggout");
  localStorage.removeItem("loggedInUser");
};

const Side = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const showSidebar = useSelector((store) => store.page.showSidebar);
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  return showSidebar
    ? ReactDOM.createPortal(
        <div className="fixed h-[100%] max-[321px]:w-[100%]    top-0 border">
          <Box
            className="md:hidden max-[321px]:w-[100%]    bg-[#d0d1d5] h-[100%] "
            sx={{
              "& .pro-sidebar-inner": {
                background: `${colors.primary[400]} !important`,
              },
              "& .pro-icon-wrapper": {
                backgroundColor: "transparent !important",
              },
              "& .pro-inner-item": {
                padding: "5px 35px 5px 20px !important",
              },
              "& .pro-inner-item:hover": {
                color: "#868dfb !important",
              },
              "& .pro-menu-item.active": {
                color: "#6870fa !important",
              },
            }}
          >
            <ProSidebar collapsed={isCollapsed} height="80px">
              <Menu iconShape="square">
                {/* LOGO AND MENU ICON */}
                <MenuItem
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                  style={{
                    margin: "10px 0 20px 0",
                    color: colors.grey[100],
                  }}
                >
                  {!isCollapsed && (
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      ml="15px"
                    >
                      <Typography
                        variant="h2"
                        color={colors.grey[100]}
                        fontWeight="bold"
                      >
                        Yocast
                      </Typography>
                      <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                        <MenuOutlinedIcon />
                      </IconButton>
                    </Box>
                  )}
                </MenuItem>

                {!isCollapsed && (
                  <Box mb="25px">
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <img
                        alt="profile-user"
                        width="100px"
                        height="100px"
                        src={user.avatar}
                        style={{ cursor: "pointer", borderRadius: "50%" }}
                      />
                    </Box>
                    <Box textAlign="center">
                      <Typography
                        variant="h3"
                        color={colors.grey[100]}
                        fontWeight="bold"
                        sx={{ m: "10px 0 0 0" }}
                      >
                        {user.names.split(" ")[0]}
                      </Typography>
                      <Typography variant="h5" color={colors.greenAccent[500]}>
                        {user.type == "admin" ? " Super Admin" : "User"}
                      </Typography>
                    </Box>
                  </Box>
                )}
                <Box
                  onClick={() => dispatch(setShowSidebar(false))}
                  paddingLeft={isCollapsed ? undefined : "10%"}
                >
                  <Item
                    title="Dashboard"
                    to="/dashboard"
                    icon={<HomeOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <Item
                    title="Manage Users"
                    to="/USER"
                    icon={<PeopleOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <Item
                    title="Subscription"
                    to="/subscription"
                    icon={<WaterDamageIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <Item
                    title="Podcast"
                    to="/podcast"
                    icon={<PodcastsIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <Item
                    title="Create Podcast"
                    to="/create"
                    icon={<PodcastsIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />

                  <Typography
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{ m: "15px 0 5px 20px" }}
                  >
                    Other actions
                  </Typography>
                  <Item
                    to="/admin/settings"
                    title="Settings"
                    icon={<SettingsOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <Box onClick={() => dispatch(setShowLogoutBackDrop(true))}>
                    <Item
                      title="Logout"
                      icon={<LogoutIcon />}
                      selected={selected}
                      setSelected={setSelected}
                    />
                  </Box>

                  {/* <Item
              title="RainFall Data"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Harvest Data"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Farm metadata"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Device Tracking"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
                </Box>
              </Menu>
            </ProSidebar>
          </Box>
        </div>,
        document.getElementById("sideRoot")
      )
    : null;
};

export default Side;
