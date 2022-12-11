import React from 'react';
import { Box, Button, TextField} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";


import ReactQuill from 'react-quill';



const WorkExperienceForm = () => {
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
                label="Job Title"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder ="e.g. Full-Stack Developer"
                value={values.job_title}
                name="job_title"
                error={!!touched.job_title && !!errors.job_title}
                helperText={touched.job_title && errors.job_title}
                sx={{ gridColumn: "span 2" }}
              />

              {/* Company */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Company"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.company}
                placeholder="e.g Google"
                name="company"
                error={!!touched.company && !!errors.company}
                helperText={touched.company && errors.company}
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
                InputLabelProps={{
                  shrink: true,
                }}
                value={values.start_date}
                name="start_date"
                error={!!touched.email && !!errors.start_date}
                helperText={touched.email && errors.start_date}
                sx={{ gridColumn: "span 1" }}
              />

              {/* End Date */}
             <TextField
                fullWidth
                variant="filled"
                type="date"
                label="End Date"
                onBlur={handleBlur}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
                value={values.end_date}
                name="end_date"
                error={!!touched.end_date && !!errors.end_date}
                helperText={touched.end_date && errors.end_date}
                sx={{ gridColumn: "span 1" }}
              />

                {/* Country */}
               <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Location"
                onBlur={handleBlur}
                placeholder="e.g. New Industrial Area, UAQ, UAE."
                onChange={handleChange}
                value={values.Location}
                name="location"
                error={!!touched.location && !!errors.location}
                helperText={touched.location && errors.location}
                sx={{ gridColumn: "span 2" }}
              />

          
        
            </Box>

            <ReactQuill
                
                className="full"
                name="description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
    
                style={{
                    margin: '1.2em 0 1.5em 0',
                    lineHeight: '1.5em',
                    height:'20vh',

                  }}

            />


    
            <Box display="flex" justifyContent="end" mt="30px">
              <Button type="submit" color="secondary" variant="contained">
                Add Experience
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

  job_title: yup.string().required("required"),

  company: yup.string().required("required"),

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
 


});
const initialValues = {
  job_title: "",
  company: "",
  start_date: "",
  end_date: "",

};




  

export default WorkExperienceForm;
