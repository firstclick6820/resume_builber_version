import React from 'react';



import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";



const SubHeader = ({ subtitle , mb}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb={mb}>
      <Typography variant="h5" fontWeight="bold" color={colors.grey[500]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default SubHeader;
