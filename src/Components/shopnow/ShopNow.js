import React from 'react';
import { styles } from './ShopNow.style';
import { withStyles } from '@material-ui/styles';
import EuroIcon from '@material-ui/icons/Euro';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PrintIcon from '@mui/icons-material/Print';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {
    Link
} from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ShopNow = ({ classes }) => {
    return (
        <Box component="span" className={classes.shopNowParentContainer} >
            <div className={classes.shopNowCost}>110<EuroIcon /></div>
            <div className={classes.showNowBtn}>
                <Link to='/varity'>
                    <Button variant="contained" size="large" color="primary" className={classes.btnClr}>
                        SHOP NOW <AddShoppingCartIcon />
                    </Button>
                </Link>
            </div>
            <div className={classes.shopNowIcons}>
                <div className={classes.shopNowIcons1}> <ArrowUpwardIcon /></div>
                <div className={classes.shopNowIcons2}><ArrowDownwardIcon /></div>
                <div className={classes.shopNowIcons3}>  <AlternateEmailIcon /></div>
                <div className={classes.shopNowIcons4}><PrintIcon /></div>
            </div>
        </Box>
    )
}

export default withStyles(styles)(ShopNow);