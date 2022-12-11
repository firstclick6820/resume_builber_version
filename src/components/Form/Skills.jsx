import React from 'react';

import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";



import ReactQuill from 'react-quill';


const Skills = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box mt="1.5em" >
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit} style={{
            display:'flex',
            flexDirection: 'column'
          }} >
            <Box
              display="grid"
              gap="1.2em"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >

                {/* Job Title  */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Skill"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder ="e.g. Full-Stack Developer"
                value={values.skill}
                name="skill"
                error={!!touched.skill && !!errors.skill}
                helperText={touched.skill && errors.skill}
                sx={{ gridColumn: "span 4" }}
              />


          
        
            </Box>


    
            <Box display="flex" justifyContent="end" mt="30px">
              <Button type="submit" color="secondary" variant="contained">
                Add Skill
              </Button>
            </Box>


          </form>
        )}
      </Formik>
      </Box>
  );
};






const checkoutSchema = yup.object().shape({

  skill: yup.string().required("Skill is Required"),


});
const initialValues = {
  skill: "",
  
};




  

export default Skills;
