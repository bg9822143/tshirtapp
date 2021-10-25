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
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Order = ({ classes }) => {
    const data = useSelector(state => state.reducer.userInfo);
    const shirtData = [
        {
            color: 'Uni red',
            shirtType: ' Shirt poplin',
            sizeSpecify: 'Comfort Fit',
            catergory: 'Kent',
            placket: 'Button placket: tucked in',
            article: 'Article no. XR026A',
            shippingBill: '5.95',
            subTotal: '110.00',
            total: '114.95'
        }
    ]
    return (
        <Grid container spacing={2} sx={{ width: '95%', margin: '0 auto', display: 'flex', justifyContent: 'space-evenly', }}>
            <Grid xs={6}>
                <Box sx={{ textAlign: 'left', }}>
                    <Typography variant='h6' sx={{ fontSize: '16px' }}>
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

                    <MaterialLink href="#" className={classes.editLink}>
                        edit
                    </MaterialLink>

                </Box>
                <Grid xs={12} sx={{ paddingTop: '10px', width: '100%' }}>
                    <Button fullWidth={true} variant="contained" size="large" color='primary' className={classes.orderCheckout}>
                        <Link to='/invoice'>     CheckOut   </Link>
                    </Button>

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
                        {shirtData.map((details) => {
                            return <List sx={{ width: '100%', maxWidth: 360, fontSize: '14px', lineHeight: '0.7px' }}>
                                <ListItem>
                                    {details.color}
                                </ListItem>
                                <ListItem>
                                    {details.shirtType}

                                </ListItem>
                                <ListItem>
                                    {details.sizeSpecify}

                                </ListItem>
                                <ListItem>
                                    {details.catergory}

                                </ListItem>
                                <ListItem>
                                    {details.placket}

                                </ListItem>
                                <ListItem>
                                    {details.article}
                                </ListItem>

                            </List>
                        })}
                        <Grid container spacing={4} sx={{ margin: '10px', display: 'flex', alignItems: 'center', }}>
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
                        <Box container sx={{ width: '110%', marginTop: '10px', marginLeft: '12px' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ width: '20%' }}>
                                    <Typography variant='p' sx={{ fontSize: '14px' }}>
                                        Shipping
                                    </Typography>
                                </Box>
                                <Box sx={{ width: '28%' }}>
                                    {shirtData.map((details) => {
                                        return <Typography variant='p' sx={{ fontSize: '14px' }}>
                                            € {details.subTotal}
                                        </Typography>
                                    })}
                                </Box>
                            </Box>
                            <Box xs={6} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ width: '20%' }}>
                                    <Typography variant='p' sx={{ fontSize: '14px' }}>
                                        Total
                                    </Typography>
                                </Box>
                                <Box sx={{ width: '28%' }}>
                                    {shirtData.map((details) => {
                                        return <Typography variant='p' sx={{ fontSize: '14px' }}>
                                            € {details.total}
                                        </Typography>
                                    })}
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