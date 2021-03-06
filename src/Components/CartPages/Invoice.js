import React from 'react';
import { styles } from './CartPagesContainer.style';
import { withStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MaterialLink from '@mui/material/Link';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import Footer from '../footer/Footer';

const Invoice = ({ classes }) => {
    const data = useSelector(state => state.reducer.userInfo)
    return (
        <Box>
            <Grid container spacing={2} sx={{ width: '70%', margin: '0 auto', display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                <Grid xs={6} >
                    <Box sx={{ textAlign: 'left', }}>
                        <Typography variant='h6' sx={{ fontSize: '14px' }}>
                            BILLING ADDRESS
                        </Typography>
                        {data.map((item, ind) => {
                      return (<Box><Typography variant='h6' sx={{ fontSize: '14px', fontWeight: 'light' }}>
                            {item._userInfo.firstName}
                        </Typography>
                        <Typography variant='h6' sx={{ fontSize: '14px', fontWeight: 'light' }}>
                        {item._userInfo.lastName}
                    </Typography>
                    <Typography variant='h6' sx={{ fontSize: '14px', fontWeight: 'light' }}>
                    {item._userInfo.phoneNumber}
                </Typography>
                <Typography variant='h6' sx={{ fontSize: '14px', fontWeight: 'light' }}>
                {item._userInfo.billingAddress}
            </Typography>
            <Typography variant='h6' sx={{ fontSize: '14px', fontWeight: 'light' }}>
                {item._userInfo.shippingAddress}
            </Typography>
            </Box>
                        )
                    })}
                    </Box>
                    <Box sx={{ textAlign: 'left' }}>
                        <Typography variant='h6' sx={{ fontSize: '14px' }}>
                            DELIVERY OPTIONS

                        </Typography>
                        <Typography variant='h6' sx={{ fontSize: '14px', fontWeight: 'light' }}>
                            like invoice address
                        </Typography>
                        <MaterialLink href="#" className={classes.editLink}>
                            edit to
                        </MaterialLink>

                    </Box>
                    <Grid xs={12} sx={{ paddingTop: '10px', backgroundColor: '#d3d9de', width: '100%', textAlign: 'left', padding: '15px', }}>
                       
                        <Link to='/thanksforshop' sx={{textDecoratiion:'none'}}>
                            <Button fullWidth={true} variant="contained" size="large" color='primary' >
                                CheckOut
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
                <Grid xs={6}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', }}>
                        <Box className={classes.itemImg}>
                            <img src='https://konfigurator.walbusch.de/savedconfigurations/XR026A_s.png' width='100%' alt="" />
                        </Box>
                        <Box>
                            <Typography variant='h6' sx={{ fontSize: '16px', fontWeight: 'bold' }}>
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
                            <Grid container spacing={3} sx={{ margin: '10px', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                <Grid xs={8}>
                                    <Typography variant='p' sx={{ fontSize: '14px', display: 'flex' }}>
                                        <Brightness1Icon fontSize='small' color='success' />   Delivery in 3-4 weeks
                                    </Typography>
                                </Grid>
                                <Grid xs={4}>
                                    <Typography variant='p' sx={{ fontSize: '14px' }}>
                                        ??? 110.00
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Box container sx={{ width: '105%', borderTop: '3px solid silver', marginTop: '10px', marginLeft: '12px' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Box sx={{ width: '25%' }}>
                                        <Typography variant='p' sx={{ fontSize: '14px' }}>
                                            Shipping
                                        </Typography>
                                    </Box>
                                    <Box sx={{ width: '25%' }}>
                                        <Typography variant='p' sx={{ fontSize: '14px' }}>
                                            ??? 110.00
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box xs={6} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Box sx={{ width: '15%' }}>
                                        <Typography variant='p' sx={{ fontSize: '14px' }}>
                                            Total
                                        </Typography>
                                    </Box>
                                    <Box sx={{ width: '25%' }}>
                                        <Typography variant='p' sx={{ fontSize: '14px' }}>
                                            ??? 110.00
                                        </Typography>
                                    </Box>
                                </Box>

                            </Box>

                        </Box></Box>
                </Grid>
            </Grid>
            <Box sx={{ position: "fixed", bottom: "0px", width: "99%" }}>
                <Footer />
            </Box>
        </Box>
    )
}

export default withStyles(styles)(Invoice);