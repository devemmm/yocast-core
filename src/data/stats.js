import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

export const Options = ["Business", "Arts", "Polytical", "Music"];

export const stats = [
    {
        title:"Podcasts",
        progress:0.75,
        increase:1.5
    },
    {
        title:"SUbscriptions",
        progress:0.75,
        increase:1.5
    },
    {
        title:"Clients",
        progress:0.75,
        increase:1.5
    },
    {
        title:"Upcomings",
        progress:0.75,
        increase:1.5
    }

]
export const Links = [
    {
        title:"Dashboard",
        to:"/",
        icon:<HomeOutlinedIcon />,
        selected:true,
    },
    {
        title:"Manage Users",
        to:"/USER",
        icon:<PeopleOutlinedIcon />,
        selected:false,
    },
    {
        title:"Create  POdcast",
        to:"/USER",
        icon:<PeopleOutlinedIcon />,
        selected:false,
    }
]