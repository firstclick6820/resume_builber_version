import { Height } from "@mui/icons-material";
import { Box , Typography, useTheme, Grid, Container, Divider} from "@mui/material";


// import React Components
import React from 'react';




// Import Custom Components

import { tokens } from "../../theme";


// Import Custom COmopnents
import Notification from "../../components/Notifications/Notification";

import SubHeader from "../../components/SubHeader";
import Permissions from "../../components/Permission/permissions";

const Privicy = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


  return (
    // Box Container
    <Box mt="2em"
        display="grid"
        gridTemplateColumns="repeat(1, 1fr)"
        gap="2em">



        


        {/* Privicy */}
        <Box >
            <SubHeader subtitle="Privicy" mb="3px"/>
            <Box 
                display="grid"
                gridTemplateColumns="1fr 2fr"
                gap="0.3em"
                sx={{
                    background: `${colors.primary[400]}`,
                    borderRadius: "0.3em"}}>

                        <Typography variant="h6" fontWeight="bold" p={2}>Permissions</Typography>


                        
                        <Permissions />

                    </Box>
        </Box>

    
        {/* End of Privicy */}


        {/* Notifications*/}
        <Box>
            <SubHeader subtitle="Notifications" mb="3px"/>

            {/* First Element */}
            <Box 
                display="grid"
                gridTemplateColumns="1fr 2fr"
                sx={{
                    background: `${colors.primary[400]}`,
                    borderRadius: "0.3em"}}>

                        <Typography variant="h6" fontWeight="bold" p={2}>Email Notifications</Typography>


                        <Notification />


                    </Box>

                    <Divider variant="inset" textAlign="right"  />
            {/* Second Element */}
            <Box 
                display="grid"
                gridTemplateColumns="1fr 2fr"
                sx={{
                    background: `${colors.primary[400]}`,
                    borderRadius: "0.3em"}}>

                        <Typography variant="h6" fontWeight="bold" p={2}>Phone Notifications</Typography>


                        <Notification />


                    </Box>
        </Box>
        {/* End of Notifications */}



    </Box>
  );
};



export default Privicy;
