import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';

import Typography from '@mui/material/Typography';


import Container from '@mui/material/Container';


import { useTheme } from "@mui/material";

import { tokens } from "../../theme";



const tiers = [
  {
    title: 'Free',
    price: '0',
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'contained',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'contained',
  },
];


function PricingContent() {

  

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  return (

    <Box mt="1em">


      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 2, pb: 6 }}>
        <Typography
          component="h1"
          variant="h3"
          fontWeight="bold"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Change Plan
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          You can upgrade and downgrade whenever you want
        </Typography>
      </Container>

      {/* End hero unit */}
      <Container maxWidth="md">

        <Grid container spacing={3} alignItems="flex-end">

          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid 
              
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >

                
              <Card  
                   sx = {{
                    background: `${colors.primary[400]}`,
                    }}>

                <CardHeader
                  title={tier.title}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx = {{background: `${colors.primary[400]}`,
                        color: `${colors.greenAccent[300]} `}}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" >
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>

                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>


            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
}

export default function Pricing() {
  return <PricingContent />;
}