import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import ProductDetail from '../orderDetail/ProductDetail';
import CustomerInformation from '../orderDetail/CustomerInformation';
import { customerSchema, productCustomizationSchema, measurementOptions } from '../../Data/Schema';
import OrderSummary from '../orderDetail/OrderSummary';
import Typography from '@mui/material/Typography';

import {
    getCustomerInfo,
    getProductDetail,
    getOrderSummary
} from '../../Data/GlobalData'

const OrderDetail = ({ classes, ...props }) => {
    const { orderid } = useParams();
    const [customerInfo, setCustomerInfo] = useState(null);
    const [productDetail, setProductDetail] = useState(null);
    const [orderSummary, setOrderSummary] = useState(null);

    useEffect(async () => {

        const custInfo = await getCustomerInfo(orderid);
        setCustomerInfo(custInfo);

        const prodDetail = await getProductDetail(orderid);
        setProductDetail(prodDetail);

        const ordSummary = await getOrderSummary(orderid);
        setOrderSummary(ordSummary)

    }, []);

    return (
        <Box>
            <Navbar />
            <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", flexWrap: "wrap" }}>

                <Box>
                    <Typography variant='body2' sx={{ textAlign: "center", marginBottom: "20px", fontSize: "80px", fontWeight: 500, fontFamily: "Brush Script MT, Brush Script Std, cursive" }}>
                        Bestelldetails
                    </Typography>
                    {customerInfo && customerInfo !== null && customerInfo !== undefined ?
                        <CustomerInformation
                            data={{
                                customerDetails: customerInfo,
                                schema: customerSchema,
                            }}
                        />
                        : null
                    }
                    {orderSummary && orderSummary !== null && orderSummary !== undefined ?
                        <OrderSummary
                            data={{
                                summary: orderSummary
                            }}
                        />
                        : null
                    }
                </Box>

                {productDetail && productDetail !== null && productDetail !== undefined ?
                    <Box>
                        <ProductDetail
                            data={{
                                order: productDetail,
                                proCustschema: productCustomizationSchema,
                                proMeaSchema: measurementOptions(productDetail["measurementtype"]),
                            }}
                        />
                    </Box>
                    : null
                }
            </Box>
            <Footer />
        </Box>
    );
}

export default OrderDetail;