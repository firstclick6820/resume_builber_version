import { Box, Typography } from "@mui/material";



// import React Components
import React from 'react';


// Import React Tab Components
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';






// Import Custom Components
import Header from "../../components/Header";

import Pricing from "../pricing";
import Settings from "../settings";
import Privicy from "../privicy";

// Import CSS
import 'react-tabs/style/react-tabs.css';





const Account = () => {



  return (
    // Box Container
    <Box m="10px 50px" >

      {/* First Element Header */}
      <Header title="Account" />

      {/* Second Element Tabs */}
      <Tabs>

        <TabList>
        
            <Tab>
                <Typography
                  variant="h6"
                  fontWeight="bold">Subscriptions
                  </Typography>
            </Tab>


            <Tab>
                <Typography
                  variant="h6"
                  fontWeight="bold">Billing
                  </Typography>
            </Tab>


            <Tab>
                <Typography
                  variant="h6"
                  fontWeight="bold">Privicy
                  </Typography>
            </Tab>


            <Tab>
                <Typography
                  variant="h6"
                  fontWeight="bold">Settings
                  </Typography>
            </Tab>
         
   
        </TabList>

        
        <TabPanel>
          <Pricing />
        </TabPanel>

        <TabPanel>
         
        </TabPanel>

        <TabPanel>
            <Privicy />
        </TabPanel>
     

        <TabPanel>
          <Settings />
        </TabPanel>

      
      </Tabs>


      {/* End of Tabs */}
    </Box>
  );
};



export default Account;
