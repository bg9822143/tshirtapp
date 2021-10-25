import Dashboard from '../Components/dashboard/Dashboard';
import Measurement from '../Components/madetomeasure/Measurement';
import CartPagesContainer from '../Components/CartPages/CartPagesContainer';
import ThanksForShopping from '../Components/ThanksForShopping/ThanksForShopping';
import Login from '../Components/pages/Login';
import ForgetSome from '../Components/pages/ForgetSome';
import ChangePassword from '../Components/pages/ChangePassword';
import AdminDashboard from '../Components/pages/AdminDashboard';

import Invoice from '../Components/CartPages/Invoice';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import OrderDetail from "../Components/pages/OrderDetail";

const Container = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/thanksforshop" element={<ThanksForShopping />} />
                <Route path="/varity" element={<Measurement />} />
                <Route path='/varity/cart' element={<CartPagesContainer />} />
                <Route path='/varity/cart/:type' element={<CartPagesContainer />} />
                <Route path='/invoice' element={<Invoice />} />
                <Route path='/login' element={<Login />} />
                <Route path='/admin' element={<Login />} />
                <Route path='/recoverypassword' element={<ForgetSome />} />
                <Route path='/changepassword' element={<ChangePassword />} />
                <Route path='/admin/dashboard' element={<AdminDashboard />} />
                <Route path='/order/:orderid' element={<OrderDetail />} />
            </Routes>
        </Router>
    );
}

export default Container;