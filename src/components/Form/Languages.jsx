import React from 'react';

import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";



import ReactQuill from 'react-quill';



const Languages = () => {
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
                label="Language"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder ="e.g. English"
                value={values.language}
                name="language"
                error={!!touched.language && !!errors.language}
                helperText={touched.language && errors.language}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="select"
                label="Proficiency"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder ="Expert"
                value={values.proficiency}
                name="proficiency"
                error={!!touched.proficiency && !!errors.proficiency}
                helperText={touched.proficiency && errors.proficiency}
                sx={{ gridColumn: "span 2" }}
              />



            </Box>
    
            <Box display="flex" justifyContent="end" mt="30px">
              <Button type="submit" color="secondary" variant="contained">
                Add Language
              </Button>
            </Box>


          </form>
        )}
      </Formik>
      </Box>
  );
};




const checkoutSchema = yup.object().shape({

  language: yup.string().required("required"),

  proficiency: yup.string().required("required"),

 


});
const initialValues = {
    language: "",
  proficiency: "",


};




  

export default Languages;
