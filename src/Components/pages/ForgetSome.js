import {
  Box,
  Button,
  Grid,
  TextField,
  Typography
} from '@material-ui/core';

import React from 'react';



const ForgetSome = () => {
  

  return (
   

          <Box
            sx={{
              width: '500px',
                margin: '25vh auto 0 auto',
                textAlign: "center",
        
            }}
          >
                {/* {({
                  errors,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                  touched,
                  values
                }) => ( */}
                  <form >
                    <Box style={{ display: 'flex', justifyContent: "center", marginBottom: "20px", marginTop: "20px" }}>
                      <img width="250px" src="logo.png" alt="" />
                    </Box>
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        color="textPrimary"
                        variant="h4"
                        paddingLeft="10px"
                      >
                        Recovery Password
                      </Typography>

                    </Box>
                    <Grid
                      container
                      spacing={3}
                    >


                    </Grid>

                    <TextField
                      
                      fullWidth
                      
                      label="Email Address"
                      margin="normal"
                      name="email"
                      
                      type="email"
                      
                      variant="outlined"
                      style={{width: "500px"}}
                    />
                    
                    <Box sx={{ py: 2 }}>
                      <Button
                        color="primary"
                        
                        fullWidth
                        size="large"
                        
                        variant="contained"
                       
                        style={{marginBottom: "10pxx"}}
                      >
                        Recovery Password
                      </Button>
                    </Box>

                  </form>
            
          </Box>
   
  );
};

export default ForgetSome;
