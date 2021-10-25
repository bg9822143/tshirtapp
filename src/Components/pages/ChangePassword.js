import {
    Box,
    Button,
    Grid,
    TextField,
    Typography
} from '@material-ui/core';

import React from 'react';






const ChangePasswword = () => {
    return (
            <Box
                sx={{
                    width: '500px',
                    margin: '20vh auto 0 auto',
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
                            Change Password
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
                        label="Current Password"
                        margin="normal"
                        name="password"
                        // onBlur={handleBlur}
                        //   onChange={(e) => { setEmail(e.target.value)}}
                        type="password"
                        //   value={email}
                        variant="outlined"
                    />
                    <TextField
                        // error={Boolean(touched.password && errors.password)}
                        fullWidth
                        // helperText={touched.password && errors.password}
                        label="New Password"
                        margin="normal"
                        name="password"
                        // onBlur={handleBlur}
                        //   onChange={(e) => { setPassword(e.target.value)}}
                        type="password"
                        //   value={password}
                        variant="outlined"
                    />
                    <TextField
                        // error={Boolean(touched.password && errors.password)}
                        fullWidth
                        // helperText={touched.password && errors.password}
                        label="Confirm Password"
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
                            Change Password
                        </Button>
                    </Box>


                </form>
            </Box>
    );
};

export default ChangePasswword;
