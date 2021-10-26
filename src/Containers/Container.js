import { styles } from './Container.style';
import { withStyles } from '@material-ui/styles';
import Navbar from '../Components/navbar/Navbar';
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
const Container = ({ classes }) => {



    return (

        <div className={classes}>
            <div className={classes.header}>
                <Router>

                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />

                        <Route path="/thanksforshop" element={<ThanksForShopping />} />

                        <Route path="/varity" element={<Measurement />} />
                        <Route path='/varity/cart' element={<CartPagesContainer/>}/>
                        <Route path='/varity/cart/:type' element={<CartPagesContainer />} />
                        <Route path='/invoice' element={<Invoice />} />
                    </Routes>
                </Router>


            </div>
        </div>
    );
}

export default withStyles(styles)(Container);