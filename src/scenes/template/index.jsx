import React from 'react';

import { Box } from "@mui/material";



// Import Custom Components

import Header from "../../components/Header";



const Templates = () => {
  

  return (
    <Box m="20px">
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="Templates" subtitle="Your Templates" />
        </Box>



        {/* Tasks 
        ]  1. Load All The Templates that user have created
           2. Showcase the newest Templates that user might be looking to purchase*/}

    </Box>
  );
};

export default Templates;
