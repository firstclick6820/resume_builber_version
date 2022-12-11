import React from 'react';

import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";



import ReactQuill from 'react-quill';



const Certificates = () => {
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

                {/* Certificate Name  */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Name"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder ="e.g Python Crash Course"
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 4" }}
              />

              {/* Issuing organization */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Issuing organization"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.issuing_org}
                placeholder="e.g Google"
                name="issuing_org"
                error={!!touched.issuing_org && !!errors.issuing_org}
                helperText={touched.issuing_org && errors.issuing_org}
                sx={{ gridColumn: "span 2" }}
              />

              {/* Start Date */}
              <TextField
                fullWidth
                variant="filled"
                type="date"
                label="Start Date"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.start_date}
                name="start_date"
                error={!!touched.start_date && !!errors.start_date}
                helperText={touched.start_date && errors.start_date}
                sx={{ gridColumn: "span 1" }}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              {/* End Date */}
             <TextField
                fullWidth
                variant="filled"
                type="date"
                label="Expiry Date"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.expiry_date}
                name="expiry_date"
                error={!!touched.expiry_date && !!errors.expiry_date}
                helperText={touched.expiry_date && errors.expiry_date}
                sx={{ gridColumn: "span 1" }}
                InputLabelProps={{
                  shrink: true,
                }}
              />

               <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Credential ID"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.credential_id}
                name="credential_id"
                error={!!touched.credential_id && !!errors.credential_id}
                helperText={touched.credential_id && errors.credential_id}
                sx={{ gridColumn: "span 4" }}
              />

            <TextField
                fullWidth
                variant="filled"
                type="url"
                label="Credential URL"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.credential_url}
                name="credential_url"
                error={!!touched.credential_url && !!errors.credential_url}
                helperText={touched.credential_url && errors.credential_url}
                sx={{ gridColumn: "span 4" }}
              />


            <TextField
                fullWidth
                variant="filled"
                type="file"
                label="Media"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.media}
                name="media"
                error={!!touched.media && !!errors.media}
                helperText={touched.media && errors.media}
                sx={{ gridColumn: "span 4" }}
              />

          
        
            </Box>

           


    
            <Box display="flex" justifyContent="end" mt="30px">
              <Button type="submit" color="secondary" variant="contained">
                Add Certificate
              </Button>
            </Box>


          </form>
        )}
      </Formik>
      </Box>
  );
};



const dateRegExp = /^\d{4}-\d{2}-\d{2}$/


const checkoutSchema = yup.object().shape({

  name: yup.string().required("required"),

  issuing_org: yup.string().required("required"),

  start_date: yup
    .string()
    .required('Date is required')
    .typeError('Invalid Date Format')
    .matches(dateRegExp, 'Date must be in YYYY-MM-DD format'),

  expiry_date: yup
     .string()
    .required('Date is required')
    .typeError('Invalid date')
    .matches(dateRegExp,'Date must be in YYYY-MM-DD format'),
 
  credential_id: 
      yup
      .string()
      .required("required"),

  credential_url: 
      yup
      .string()
      .required("required"),

  media: yup
  .string()
  .required('Media is required')
  
  

});
const initialValues = {
  name: "",
  issuing_org: "",
  start_date: "",
  expiry_date: "",
  credential_id: "",
  credential_url:"",
  media: ""

};




  

export default Certificates;
