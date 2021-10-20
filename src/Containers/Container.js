import { withStyles } from '@material-ui/styles';
import Navbar from '../Components/navbar/Navbar';
import Footer from '../Components/footer/Footer';
import Dashboard from '../Components/dashboard/Dashboard';
import Measurement from '../Components/madetomeasure/Measurement';
import CartPagesContainer from '../Components/CartPages/CartPagesContainer';
import ThanksForShopping from '../Components/ThanksForShopping/ThanksForShopping';

import Invoice from '../Components/CartPages/Invoice';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { autocompleteClasses } from '@mui/material';
import Box from '@material-ui/core/Box';

const Container = () => {

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Dashboard />} />

                <Route path="/thanksforshop" element={<ThanksForShopping />} />

                <Route path="/varity" element={<Measurement />} />
                <Route path='/varity/cart' element={<CartPagesContainer />} />
                <Route path='/varity/cart/:type' element={<CartPagesContainer />} />
                <Route path='/invoice' element={<Invoice />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default Container;