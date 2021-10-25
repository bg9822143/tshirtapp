import React from 'react';
import { styles } from './ThanksForShopping.style';
import { withStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';


const ThanksForShopping = ({ classes }) => {
    return (
        <Box>
            <Navbar />
            <Box className={classes.thanksForShoppingText}>
                <Typography variant='h6' sx={{ fontSize: '16px', fontWeight: 'bold' }}>Thank you for your order
                </Typography>
                <Typography variant='h6' sx={{ fontSize: '14px', fontWeight: 'normal' }}>
                    We will send you all order details immediately by email. As soon as there is news about your delivery, we will contact you by email.
                </Typography>
                <Typography variant='h6' sx={{ fontSize: '14px', fontWeight: 'normal' }}>
                    If we have any questions about your order, we will contact you by phone or email. You have questions to your order? Then write us a message at <Link sx={{ textDecoration: 'none' }}>service @walbusch.de</Link>
                </Typography>
                <Box sx={{ position: "fixed", bottom: "0px", width: "99%" }}>
                    <Footer />
                </Box>
            </Box>
        </Box>
    )
}

export default withStyles(styles)(ThanksForShopping);