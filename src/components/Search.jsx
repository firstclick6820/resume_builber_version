import React from 'react';


// Import Material UI Components
import { Box, IconButton, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";




// Imoprt Custom Components
import { tokens } from "../theme";


// Import ICONS

import SearchIcon from "@mui/icons-material/Search";




const Search = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  return (
  
            <Box
                display="flex"
                backgroundColor={colors.primary[400]}
                borderRadius="3px">


                                    
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                <IconButton type="button" sx={{ p: 1 }}>
                <SearchIcon />
                </IconButton>
            </Box>
  );
};

export default Search;
