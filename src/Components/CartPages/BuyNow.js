import React from 'react';
import { styles } from './CartPagesContainer.style';
import { withStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';
import Brightness1Icon from '@mui/icons-material/Brightness1';


import Button from '@material-ui/core/Button';



const BuyNow = ({ classes }) => {
    return (
        <Grid container spacing={2} sx={{ width: '70%', margin: '0 auto', display: 'flex', justifyContent: 'space-evenly' }}>
            <Grid xs={6}>
                <Box sx={{ textAlign: 'left' }}>
                    <Typography variant='h6' sx={{ fontSize: '16px' }}>
                        BILLING ADDRESS
                    </Typography>
                    <Typography variant='h6' sx={{ fontSize: '14px', fontWeight: 'light' }}>
                        Ibrahim Alvi
                    </Typography>
                    <Typography variant='h6' sx={{ fontSize: '14px', fontWeight: 'light' }}>
                        Sindh
                    </Typography>
                    <Typography variant='h6' sx={{ fontSize: '14px', fontWeight: 'light' }}>
                        075471 Karachi
                    </Typography>
                    <Link href="#" className={classes.editLink}>
                        edit to
                    </Link>

                </Box>
                <Box sx={{ textAlign: 'left' }}>
                    <Typography variant='h6' sx={{ fontSize: '16px' }}>
                        DELIVERY OPTIONS

                    </Typography>
                    <Typography variant='h6' sx={{ fontSize: '14px', fontWeight: 'light' }}>
                        like invoice address
                    </Typography>
                    <Link href="#" className={classes.editLink}>
                        edit to
                    </Link>

                </Box>
                <Box sx={{ textAlign: 'left' }}>
                    <Typography variant='h6' sx={{ fontSize: '16px' }}>
                        PAYMENT OPTIONS
                    </Typography>
                    <Typography variant='h6' sx={{ fontSize: '14px', fontWeight: 'light' }}>
                        On Bill
                    </Typography>
                    <Link href="#" className={classes.editLink}>
                        edit to
                    </Link>

                </Box>
            </Grid>
            <Grid xs={6}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    <Box className={classes.itemImg}>
                        <img src='https://konfigurator.walbusch.de/savedconfigurations/XR026A_s.png' width='100%' />
                    </Box>
                    <Box >
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
                        <Grid container spacing={3} sx={{ margin: '10px', display: 'flex', alignItems: 'center' }}>
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
                    <Box container sx={{ width: '100%', borderTop: '3px solid silver', margin: '0 auto', marginTop: '10px', }}>

                    </Box>
                    <Box sx={{ width: '90%', margin: '0 auto', backgroundColor: '#d3d9de',marginTop:'15px',paddingBottom:'5px' }}>
                        <Box container sx={{ width: '90%', marginTop: '10px', marginLeft: '12px' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ width: '45%' }}>
                                    <Typography variant='p' sx={{ fontSize: '14px' }}>
                                        Shipping
                                    </Typography>
                                </Box>
                                <Box sx={{ width: '45%' }}>
                                    <Typography variant='p' sx={{ fontSize: '14px' }}>
                                        € 110.00
                                    </Typography>
                                </Box>
                            </Box>
                            <Box xs={6} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ width: '45%' }}>
                                    <Typography variant='p' sx={{ fontSize: '14px' }}>
                                        Total
                                    </Typography>
                                </Box>
                                <Box sx={{ width: '45%' }}>
                                    <Typography variant='p' sx={{ fontSize: '14px' }}>
                                        € 110.00
                                    </Typography>
                                </Box>

                            </Box>
                            <Button variant="contained" size="large" color='primary' fullWidth={true}>
                                BuyNow
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(BuyNow);