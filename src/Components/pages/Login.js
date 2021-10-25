import { Link as RouterLink } from 'react-router-dom';

import {
    Box,
    Button,
    Grid,
    Link,
    TextField,
    Typography
} from '@material-ui/core';

import React from 'react';

const Login = () => {
    return (
        <Box
            sx={{
                width: '500px',
                margin: '25vh auto 0 auto',
                textAlign: "center",
            }}
        >
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
                        Sign in
                    </Typography>

                </Box>
                <Grid
                    container
                    spacing={3}
                >

                </Grid>

                <TextField
                    // error={Boolean(touched.email && errors.email)}
                    fullWidth
                    // helperText={touched.email && errors.email}
                    label="Email Address"
                    margin="normal"
                    name="email"
                    // onBlur={handleBlur}
                    //   onChange={(e) => { setEmail(e.target.value)}}
                    type="email"
                    //   value={email}
                    variant="outlined"
                />
                <TextField
                    // error={Boolean(touched.password && errors.password)}
                    fullWidth
                    // helperText={touched.password && errors.password}
                    label="Password"
                    margin="normal"
                    name="password"
                    // onBlur={handleBlur}
                    //   onChange={(e) => { setPassword(e.target.value)}}
                    type="password"
                    //   value={password}
                    variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                    <Button
                        color="primary"
                        // disabled={isSubmitting}
                        fullWidth
                        size="large"

                        variant="contained"

                    >
                        Sign in 
                    </Button>
                </Box>
                <Box style={{ display: "flex", justifyContent: "end", marginBottom: "15px" }}>

                    <Link component={RouterLink} to="/recoverypassword" variant="h6" underline="hover" >
                        <p style={{fontSize:"12px"}}>Forget Password?</p>
                    </Link>
                </Box>
            </form>
        </Box>
    );
};

export default Login;
