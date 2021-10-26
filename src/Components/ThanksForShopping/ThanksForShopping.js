import React from 'react';
import { styles } from './ThanksForShopping.style';
import { withStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';


const ThanksForShopping = ({ classes }) => {
    return (
        <Box className={classes.thanksForShoppingText}>
            <Typography variant='h6' sx={{ fontSize: '15px', fontWeight: 'bold' }}>Thank you for your order
            </Typography>
            <Typography variant='h6' sx={{ fontSize: '12px', fontWeight: 'normal' }}>
                We will send you all order details immediately by email. As soon as there is news about your delivery, we will contact you by email.
            </Typography>
            <Typography variant='h6' sx={{ fontSize: '12px', fontWeight: 'normal' }}>
                If we have any questions about your order, we will contact you by phone or email. You have questions to your order? Then write us a message at <Link sx={{textDecoration:'none'}}>service @walbusch.de</Link>
            </Typography>
        </Box>
    )
}

export default withStyles(styles)(ThanksForShopping);