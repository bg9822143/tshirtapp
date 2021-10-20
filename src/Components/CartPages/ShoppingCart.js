import React, { useState } from 'react';
import { styles } from './CartPagesContainer.style';
import { withStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button';
import MaterialLink from '@mui/material/Link';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

const ShoppingCart = ({ classes }) => {
    const [country, setCountry] = React.useState('');

    const handleCountryChange = (_event) => {
        setCountry(_event.target.value);
    }
    return (
        <Grid container spacing={3} sx={{ width: '100%', margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
            <Grid className={classes.itemDetails}>
                <Typography variant='h6' sx={{ fontSize: '16px', textAlign: 'left' }}>1.On what basis u r born </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', textAlign: 'left', width: '405px', marginRight: '105px' }}>
                    <Box className={classes.itemImg}>
                        <img src='https://konfigurator.walbusch.de/savedconfigurations/XR026A_s.png' width='100%' />
                    </Box>
                    <Box sx={{ paddingLeft: '0%' }}>
                        <Typography variant='h6' sx={{ fontSize: '16px', fontWeight: 'bold', paddingLeft: '7.5%' }}>
                            Made-to-measure shirt
                        </Typography>

                        <List sx={{ width: '95%', maxWidth: 360, fontSize: '14px', lineHeight: '0.7px', textAlgin: 'left' }} >
                            <ListItem sx={{ textAlign: 'left' }}>
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
                                Article no. XR026A
                            </ListItem>

                        </List>
                        <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>
                            <FormControl fullWidth sx={{ padding: '5px', width: '80%', display: 'flex' }}>
                                <InputLabel id="demo-simple-select-label" sx={{ backgroundColor: '#fff', }}>Quantity</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={country}
                                    label="quantity"
                                    onChange={handleCountryChange}
                                    sx={{ backgroundColor: '#fff', width: '60%', display: 'flex', marginLeft: '10px', paddingLeft: '15px' }}
                                >
                                    <MenuItem value='1'>1</MenuItem>
                                    <MenuItem value='2'>2</MenuItem>
                                </Select>
                            </FormControl>
                            <MaterialLink sx={{ color: 'black', cursor: 'pointer', paddingLeft: '5px', textDecoration: 'none' }}>Clear</MaterialLink>
                        </Box>
                        <Grid container spacing={3} sx={{ marginTop: '5px', marginLeft: '1px', display: 'flex', alignItems: 'center', textAlign: 'left', }}>
                            <Grid xs={8}>
                                <Typography variant='p' sx={{ fontSize: '14px', display: 'flex' }}>
                                    <Brightness1Icon fontSize='small' color='success' />   Delivery in 3-4 weeks
                                </Typography>
                            </Grid>
                            <Grid xs={4}>
                                <Typography variant='p' sx={{ fontSize: '14px' }}>
                                    € 110.00
                                </Typography>
                            </Grid>

                        </Grid>
                    </Box>
                </Box>
            </Grid>
            <Grid className={classes.checkoutItem}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', }}>
                    <TextField id="outlined-basic" label="Enter voucher" variant="outlined" /><Typography variant='p' sx={{ color: 'grey', marginLeft: '10%', fontSize: '13px' }}>Redeem</Typography>
                </Box>
                <Box sx={{ marginTop: '20px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant='p' sx={{ fontSize: '14px' }}>
                            Shipping
                        </Typography>
                        <Typography variant='p'>
                            € 5.95
                        </Typography>

                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', marginBottom: '10px' }}>
                        <Typography variant='p' sx={{ fontSize: '14px', fontWeight: 'bold' }}>
                            Total
                        </Typography>
                        <Typography variant='p' sx={{ fontWeight: 'bold' }}>
                            € 112.95
                        </Typography>

                    </Box>
                    <Button variant="contained" size="large" color='primary' fullWidth={true} sx={{ borderRadius: 'none' }} className={classes.btnCheckOut}>

                    <Link to='/varity/cart/signup' sx={{textDecoratiion:'none'}}>

                            CheckOut
                    </Link>
                    </Button>

                </Box>
                <Box>

                </Box>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(ShoppingCart);