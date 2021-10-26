import React, { useEffect } from 'react';
import { styles } from './CartPagesContainer.style';
import { withStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ShoppingCart from './ShoppingCart';
import SignUp from './SignUp';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import Order from './Order'

import {
    useParams,
    useNavigate
} from "react-router-dom";


const CartPagesContainer = ({ classes }) => {
    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
        navigate(`./../${newValue}`);
    };
    const { type } = useParams();

    useEffect(() => {
        console.log(type);
    }, [type]);
    return (
        <Box>
            <Navbar />
            <Grid container spacing={3} sx={{ width: '95%', margin: '0 auto', display: 'flex' }}>
                <Box className={classes.cartNav}>
                    <TabContext value={type}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="1.SHOPPING CART" value="item" />
                                <Tab label="2.SIGN UP" value="signup" />
                                <Tab label="3.ORDER" value="order" />
                            </TabList>
                        </Box>
                        <TabPanel value="item"><ShoppingCart /></TabPanel>
                        <TabPanel value="signup"><SignUp /> </TabPanel>
                        <TabPanel value="order"><Order/> </TabPanel>
                    </TabContext>
                </Box>

            </Grid>
            <Box sx={{position: "fixed", bottom: "0px", width: "99%"}}>
                <Footer />
            </Box>
        </Box>
    )
}

export default withStyles(styles)(CartPagesContainer);