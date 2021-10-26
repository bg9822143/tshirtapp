import React from 'react';
import { styles } from './CartPagesContainer.style';
import { withStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MaterialLink from '@mui/material/Link';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import TextField from '@mui/material/TextField';

import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Link } from 'react-router-dom';

const SignUp = ({ classes }) => {
    const [gender, setGender] = React.useState('');
    const [country, setCountry] = React.useState('');
    const handleChange = (event) => {
        setGender(event.target.value);
    };
    const handleCountryChange = (_event) => {
        setCountry(_event.target.value);
    }
    return (
        <Grid container spacing={5} sx={{ width: '100%', margin: '0 auto', display: 'flex', justifyContent: 'space-evenly', }}>
            <Grid xs={6} sx={{ paddingTop: '10px', backgroundColor: '#d3d9de' }}>
                <Box>
                    <FormControl sx={{ width: '95%', paddingTop: '5px', paddingBottom: '5px', paddingRight: '8px', paddingLeft: '8px' }}>
                        <OutlinedInput placeholder="Please enter Email" sx={{ backgroundColor: '#fff', height: '35px', width: '100%', fontSize: '13px' }} />
                    </FormControl>
                </Box>
                <Box>
                    <FormControl size='medium' sx={{ width: '95%', paddingTop: '5px', paddingBottom: '5px', paddingRight: '8px', paddingLeft: '8px' }}>
                        <InputLabel id="demo-simple-select-label" sx={{ backgroundColor: '#fff', height: '20px', fontSize: '13px' }}>Saluation</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={gender}
                            label="Saluation"
                            onChange={handleChange}
                            sx={{ backgroundColor: '#fff' }}
                        >
                            <MenuItem value='male' sx={{ fontSize: '13px' }}>Male</MenuItem>
                            <MenuItem value='female' sx={{ fontSize: '13px' }}>Female</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box>
                    <FormControl sx={{ width: '95%', paddingTop: '5px', paddingBottom: '5px', paddingRight: '8px', paddingLeft: '8px' }}>
                        <OutlinedInput placeholder="Please enter First Name" sx={{ backgroundColor: '#fff', height: '35px', width: '100%', fontSize: '13px' }} />

                    </FormControl>
                </Box>
                <Box>
                    <FormControl sx={{ width: '95%', paddingTop: '5px', paddingBottom: '5px', paddingRight: '8px', paddingLeft: '8px' }}>
                        <OutlinedInput placeholder="Please enter Last Name" sx={{ backgroundColor: '#fff', height: '35px', width: '100%', fontSize: '13px' }} />

                    </FormControl>
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <FormControl sx={{ width: '25ch', padding: '5px', paddingTop: '5px', paddingBottom: '5px', paddingRight: '8px', paddingLeft: '8px' }}>
                        <OutlinedInput placeholder="PostalCode" sx={{ backgroundColor: '#fff', height: '35px', width: '100%', fontSize: '13px' }} />

                    </FormControl>
                    <FormControl sx={{ width: '40ch', padding: '5px', paddingTop: '5px', paddingBottom: '5px', paddingRight: '8px', paddingLeft: '8px' }}>
                        <OutlinedInput placeholder="Location" sx={{ backgroundColor: '#fff', height: '35px', width: '100%', fontSize: '13px' }} />

                    </FormControl>
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <FormControl sx={{ width: '35ch', paddingTop: '5px', paddingBottom: '5px', paddingRight: '8px', paddingLeft: '8px' }}>
                        <OutlinedInput placeholder="State" sx={{ backgroundColor: '#fff', height: '35px', width: '100%', fontSize: '13px' }} />

                    </FormControl>
                    <FormControl sx={{ width: '25ch', paddingTop: '5px', paddingBottom: '5px', paddingRight: '8px', paddingLeft: '8px' }}>
                        <OutlinedInput placeholder="Enter Number" sx={{ backgroundColor: '#fff', height: '35px', width: '100%', fontSize: '13px' }} />

                    </FormControl>
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <FormControl sx={{ width: '40ch', paddingTop: '5px', paddingBottom: '5px', paddingRight: '8px', paddingLeft: '8px' }}>
                        <OutlinedInput placeholder="Please enter Address" sx={{ backgroundColor: '#fff', height: '35px', width: '100%', fontSize: '13px' }} />

                    </FormControl>
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <FormControl fullWidth sx={{ padding: '5px', width: '40ch' }}>
                        <InputLabel id="demo-simple-select-label" sx={{ backgroundColor: '#fff', height: '35px', }}>Country</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={country}
                            label="Saluation"
                            onChange={handleCountryChange}
                            sx={{ backgroundColor: '#fff', fontSize: '12px' }}
                        >
                            <MenuItem value='male' sx={{ fontSize: '13px' }}>Pakistan</MenuItem>
                            <MenuItem value='female' sx={{ fontSize: '13px' }}>Ireland</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ display: 'flex', margin: '10px auto', width: '100%', textAlign: 'center', padding: '15px auto' }}>


                    <Button variant="contained" size="large" color='primary' fullWidth={true} sx={{ borderRadius: 'none', margin: '10px auto', }} className={classes.btn}>
                        <Link to='/varity/cart/order'>       CheckOut   </Link>
                    </Button>

                </Box>
            </Grid>
            <Grid xs={6}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', marginLeft: '10%' }}>
                    <Box className={classes.itemImg}>
                        <img src='https://konfigurator.walbusch.de/savedconfigurations/XR026A_s.png' width='100%' />
                    </Box>
                    <Box>
                        <Typography variant='h6' sx={{ fontSize: '15px', fontWeight: 'bold' }}>
                            1x made-to-measure shirt
                        </Typography>
                        <List sx={{ width: '100%', maxWidth: 360, fontSize: '14px', lineHeight: '0.7px' }}>
                            <ListItem>
                                Uni red
                            </ListItem>
                            <ListItem>
                                Shirt poplin

                            </ListItem>
                            <ListItem>
                                Comfort Fit

                            </ListItem>
                            <ListItem>
                                Kent

                            </ListItem>
                            <ListItem>
                                Button placket: tucked in

                            </ListItem>
                            <ListItem>
                                Article no.XR026A
                            </ListItem>

                        </List>

                    </Box>
                    <Grid container spacing={3} sx={{ margin: '10px', display: 'flex', alignItems: 'center' }}>
                        <Grid xs={8}>
                            <Typography variant='p' sx={{ fontSize: '13px', display: 'flex' }}>
                                <Brightness1Icon fontSize='small' color='success' />   Delivery in 3-4 weeks
                            </Typography>
                        </Grid>
                        <Grid xs={4}>
                            <Typography variant='p' sx={{ fontSize: '13px' }}>
                                € 110.00
                            </Typography>
                        </Grid>


                    </Grid>
                    <Box sx={{ borderTop: '2px solid silver', width: '100%', margin: '0 auto', }}></Box>
                    <Box container sx={{ width: '98%', marginTop: '10px', marginLeft: '12px', }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{ width: '25%' }}>
                                <Typography variant='p' sx={{ fontSize: '13px', textAlign: 'left' }}>
                                    Shipping
                                </Typography>
                            </Box>
                            <Box sx={{ width: '25%' }}>
                                <Typography variant='p' sx={{ fontSize: '13px', paddingLeft: '15%' }}>
                                    € 110.00
                                </Typography>
                            </Box>
                        </Box>
                        <Box xs={6} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{ width: '20%' }}>
                                <Typography variant='p' sx={{ fontSize: '13px' }}>
                                    Total
                                </Typography>
                            </Box>
                            <Box sx={{ width: '20%' }}>
                                <Typography variant='p' sx={{ fontSize: '11px' }}>
                                    € 110.00
                                </Typography>
                            </Box>
                        </Box>

                    </Box></Box>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(SignUp);