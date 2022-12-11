import { Box , Typography} from "@mui/material";



// import React Components
import React from 'react';


// Import React Tab Components
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';






// Import Custom Components
import Header from "../../components/Header";
import Form from '../../components/Form/Form'
import WorkExperienceForm from '../../components/Form/WorkExperience';

import Education from '../../components/Form/Education';
import Languages from '../../components/Form/Languages';
import Skills from '../../components/Form/Skills';
import Certificates from '../../components/Form/Certificates';

// Import CSS
import 'react-tabs/style/react-tabs.css';
import './style.css'




const Profile = () => {



  return (
    // Box Container
    <Box  m="10px 50px" >

      {/* First Element Header */}
      <Header title="Profile" />

      {/* Second Element Tabs */}
      <Tabs>

        <TabList>
        


            
            <Tab>
                <Typography
                  variant="h6"
                  fontWeight="bold">Basic Info
                  </Typography>
            </Tab>


            <Tab>
                <Typography
                  variant="h6"
                  fontWeight="bold">Experience
                  </Typography>
            </Tab>


            <Tab>
                <Typography
                  variant="h6"
                  fontWeight="bold">Education
                  </Typography>
            </Tab>


            <Tab>
                <Typography
                  variant="h6"
                  fontWeight="bold">Certificates
                  </Typography>
            </Tab>


            <Tab>
                <Typography
                  variant="h6"
                  fontWeight="bold">Skills
                  </Typography>
            </Tab>


            <Tab>
                <Typography
                  variant="h6"
                  fontWeight="bold">Languages
                  </Typography>
            </Tab>
   
   
        </TabList>

        
        <TabPanel>
          <Form />
        </TabPanel>


        <TabPanel>
          <WorkExperienceForm />
        </TabPanel>

        <TabPanel>
          <Education />
        </TabPanel>


        <TabPanel>
          <Certificates />
        </TabPanel>

        <TabPanel>
          <Skills />
        </TabPanel>


        <TabPanel>
          <Languages />
        </TabPanel>

      
      </Tabs>


      {/* End of Tabs */}
    </Box>
  );
};



export default Profile;
