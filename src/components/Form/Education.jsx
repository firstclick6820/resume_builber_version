import React from 'react';

import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';



import ReactQuill from 'react-quill';



const Education = () => {
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
                label="School"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder ="e.g. University Of Haward"
                value={values.job_title}
                name="Institution_name"
                error={!!touched.Institution_name && !!errors.Institution_name}
                helperText={touched.Institution_name && errors.Institution_name}
                sx={{ gridColumn: "span 2" }}
              />

              {/* Company */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Degree"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.degree}
                placeholder="e.g Master"
                name="degree"
                error={!!touched.degree && !!errors.degree}
                helperText={touched.degree && errors.degree}
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
                InputLabelProps={{
                  shrink: true,
                }}
                name="start_date"
                error={!!touched.start_date && !!errors.start_date}
                helperText={touched.start_date && errors.start_date}
                sx={{ gridColumn: "span 1" }}
              />

        
              {/* End Date */}
             <TextField
                fullWidth
                variant="filled"
                type="date"
                label="End Date"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.end_date}
                InputLabelProps={{
                  shrink: true,
                }}
       
                name="end_date"
                error={!!touched.end_date && !!errors.end_date}
                helperText={touched.end_date && errors.end_date}
                sx={{ gridColumn: "span 1" }}
              />
       


          <Select
              fullWidth
              value={values.country}
              label="Country"
              onChange={handleChange}
              onBlur={handleBlur}
              sx={{ gridColumn: "span 2" }}
              error={!!touched.country && !!errors.country}
              helperText={touched.country && errors.country}
              placeholder="Country"
   
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>

        </Select>




              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Grade"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.country}
                placeholder="e.g. A"
                name="grade"
                error={!!touched.grade && !!errors.grade}
                helperText={touched.grade && errors.grade}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Summary"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.country}
                placeholder="e.g Short Summary"
                name="summary"
                error={!!touched.summary && !!errors.summary}
                helperText={touched.summary && errors.summary}
                sx={{ gridColumn: "span 2" }}
              />

          
            <TextField
                fullWidth
                variant="filled"
                type="file"
                label="Media"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.country}
                placeholder="e.g Short Summary"
                name="summary"
                error={!!touched.summary && !!errors.summary}
                helperText={touched.summary && errors.summary}
                sx={{ gridColumn: "span 2" }}
              />

        
            </Box>

            <ReactQuill
                
                className="full"
                name="description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                placeholder="Enter your description here"
    
                style={{
                    margin: '1.2em 0 1.5em 0',
                    lineHeight: '1.5em',
                    height:'20vh',
                  

                  }}

            />


    
            <Box display="flex" justifyContent="end" mt="30px">
              <Button type="submit" color="secondary" variant="contained">
                 Add Education
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

  Institution_name: yup.string().required("required"),

  degree: yup.string().required("required"),

  start_date: yup
    .string()
    .required('Date is required')
    .typeError('Invalid Date Format')
    .matches(dateRegExp, 'Date must be in YYYY-MM-DD format'),

    end_date: yup
     .string()
    .required('Date is required')
    .typeError('Invalid date')
    .matches(dateRegExp,'Date must be in YYYY-MM-DD format'),
 
    grade: yup
    .string()
    .required("Grade is required"),

    description: yup
    .string()
    .required('Description is Required'),

    summary: yup
    .string()
    .required('Description is Required'),

});
const initialValues = {
  Institution_name: "",
  degree: "",
  field_of_study: "",
  start_date: "",
  end_date: "",
  grade: "",
  description: '',
  summary: ''

};




  

export default Education;
