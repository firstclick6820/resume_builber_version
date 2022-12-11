import React from 'react';
// Import Material UI Components
import { Box, IconButton, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";


// Immport React Compoonents
import { useContext } from "react";

// import react Router Components
import {Link} from 'react-router-dom'

// Imoprt Custom Components
import { ColorModeContext, tokens } from "../../theme";
import Search from "../../components/Search";


// Import ICONS
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";





const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
          {/* <Search /> */}
          {/* If remove search bar from the topbar then have to make one empty div */}
          <div></div>
      {/* ICONS */}
      <Box display="flex">

        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>

        <IconButton>
          <Link to="/messages" ><NotificationsOutlinedIcon sx={{ color: colors.grey[100] }}/></Link>
          
        </IconButton>


        <IconButton>
          <Link to="/account" ><SettingsOutlinedIcon  sx={{ color: colors.grey[100] }}/></Link>
          
        </IconButton>


        <IconButton>
          <Link to="/profile" ><PersonOutlinedIcon sx={{ color: colors.grey[100] }} /></Link>
        </IconButton>



      </Box>
    </Box>
  );
};

export default Topbar;
