import React from 'react';
import { styles } from './CartPagesContainer.style';
import { withStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import MaterialLink from '@mui/material/Link'
import Button from '@material-ui/core/Button';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Link } from 'react-router-dom'
const Order = ({ classes }) => {
    debugger;
    return (
        <Grid container spacing={2} sx={{ width: '95%', margin: '0 auto', display: 'flex', justifyContent: 'space-evenly',border:'1px solid red'}}>
            <Grid xs={6}>
                <Box sx={{ textAlign: 'left',border:'1px solid black' }}>
                    <Typography variant='h6' sx={{ fontSize: '16px' }}>
                        BILLING ADDRESS
                    </Typography>
                    <Typography variant='h6' sx={{ fontSize: '14px', fontWeight: 'light' }}>
                        Ibrahim Alvisss
                    </Typography>
                    <Typography variant='h6' sx={{ fontSize: '14px', fontWeight: 'light' }}>
                        Sindh
                    </Typography>
                    <Typography variant='h6' sx={{ fontSize: '14px', fontWeight: 'light' }}>
                        075471 Karachi
                    </Typography>
                    <MaterialLink href="#" className={classes.editLink}>
                        edit
                    </MaterialLink>

                </Box>
                <Grid xs={12} sx={{ paddingTop: '10px', backgroundColor: '#d3d9de', width: '100%' }}>
                    <FormControl component="fieldset" sx={{border:'1px solid black' }}>

                        <RadioGroup
                            aria-label="gender"
                            defaultValue="Billing Address"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="Billing Address" control={<Radio />} label="Billing Address" />
                            <FormControlLabel value="Different Shipping Address" control={<Radio />} label="Different Shipping Address" />

                        </RadioGroup>
                    </FormControl>
                    
                        <Button fullWidth={true} variant="contained" size="large" color='primary' className={classes.orderCheckout}>
                        <Link to='/invoice'>     CheckOut   </Link>
                        </Button>
                 
                </Grid>
            </Grid>
            <Grid xs={6}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', }}>
                    <Box className={classes.itemImg}>
                        <img src='https://konfigurator.walbusch.de/savedconfigurations/XR026A_s.png' width='100%' />
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
                        <Grid container spacing={4} sx={{ margin: '10px', display: 'flex', alignItems: 'center',border:'1px solid black' }}>
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
                        <Box container sx={{ width: '110%', borderTop: '3px solid silver', marginTop: '10px', marginLeft: '12px' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ width: '20%' }}>
                                    <Typography variant='p' sx={{ fontSize: '14px' }}>
                                        Shipping
                                    </Typography>
                                </Box>
                                <Box sx={{ width: '28%' }}>
                                    <Typography variant='p' sx={{ fontSize: '14px' }}>
                                        € 110.00
                                    </Typography>
                                </Box>
                            </Box>
                            <Box xs={6} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ width: '20%' }}>
                                    <Typography variant='p' sx={{ fontSize: '14px' }}>
                                        Total
                                    </Typography>
                                </Box>
                                <Box sx={{ width: '28%' }}>
                                    <Typography variant='p' sx={{ fontSize: '14px' }}>
                                        € 110.00
                                    </Typography>
                                </Box>
                            </Box>

                        </Box>

                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(Order);