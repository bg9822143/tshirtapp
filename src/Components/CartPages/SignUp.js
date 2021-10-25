import React from 'react';
import { styles } from './CartPagesContainer.style';
import { withStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import FormControlLabel from '@mui/material/FormControlLabel';
import CustomInput from "./CustomInput";
import { useFormik } from "formik";
import Checkbox from '@mui/material/Checkbox';
import CustomButton from "./CustomButton";
import { useDispatch, useSelector } from 'react-redux';
import * as yup from "yup";
import {useNavigate} from 'react-router-dom';
import { userInfo } from '../../redux/actions';

const validationSchema = yup.object({
    firstName: yup
        .string()
        .trim()
        .max(25, "Must be 15 characters or less")
        .matches(
            /[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/,
            "Name cannot contain numbers or special Characters"
        )
        .required("Required"),
    lastName: yup
        .string()
        .max(20, "Must be 20 characters or less")
        .trim()
        .matches(
            /[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/,
            "Name cannot contain numbers or special Characters"
        )
        .required("Required"),
    phoneNumber: yup
        .string()
        .max(11, "Must be less than 11 characters")
        .trim()
        .matches(
            /([0-9]|[1-9][0-9])/,
            "Invalid Number"
        )
        .required("Required"),
    billingAddress: yup
        .string("Enter your Billing Address")
        .min(8, "Billing Address should be of minimum 8 characters length")
        .matches(
            /^[ A-Za-z0-9_@./#&+-]*$/,
            "Name cannot contain numbers or special Characters"
        )
        .required("Billing Address is required"),
    shippingAddress: yup
        .string("Enter your Shipping Address")
        .min(8, "Shipping Address should be of minimum 8 characters length")
        .matches(
            /^[ A-Za-z0-9_@./#&+-]*$/,
            "Name cannot contain numbers or special Characters"
        )
        .required("Shipping Address is required"),

});

const SignUp = ({ classes }) => {
    const [sameAsBilling, setsameAsBilling] = React.useState(false);

    const handleCheckChange = (event) => {
        setsameAsBilling(event.target.checked);
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            billingAddress: "",
            shippingAddress: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            dispatch(userInfo(values));
            navigate('/varity/cart/order')
            resetForm();
        },
    });

    
    if (sameAsBilling) {
        formik.values.shippingAddress = formik.values.billingAddress
    }
    

    const state = useSelector(state => state.reducer.userInfo)
    console.log(state)
    return (
        <Grid container spacing={5} sx={{ width: '100%', margin: '0 auto', display: 'flex', justifyContent: 'space-evenly',flexWrap:'wrap',border:'1px solid red' }}>
            <Grid xs={6} sx={{width:'500px', paddingTop: '10px', backgroundColor: '#d3d9de' ,border:'1px solid green'}}>
                <form onSubmit={formik.handleSubmit}>
                    <Box sx={{ textAlign: 'center', fontSize: '10px' }}>
                        <CustomInput
                            id="firstName"
                            name="firstName"
                            type="text"
                            textlabel="First Name"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                            onBlur={formik.handleBlur}
                            sx={{ fontFamily: 'initial' }}
                            error={
                                formik.touched.firstName && Boolean(formik.errors.firstName)
                            }
                            helperText={formik.touched.firstName && formik.errors.firstName}
                        />
                    </Box>

                    <Box sx={{ textAlign: 'center' }}>
                        <CustomInput
                            id="lastName"
                            name="lastName"
                            type="text"
                            textlabel="Last Name"
                            sx={{ fontFamily: 'initial' }}
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                            onBlur={formik.handleBlur}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                        />
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                        <CustomInput
                            id="phoneNumber"
                            name="phoneNumber"
                            type="text"
                            textlabel="Phone Number"
                            onChange={formik.handleChange}
                            value={formik.values.phoneNumber}
                            sx={{ fontFamily: 'initial' }}
                            onBlur={formik.handleBlur}
                            error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                        />
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                        <CustomInput
                            id="billingAddress"
                            name="billingAddress"
                            type="text"
                            textlabel="Billing Address"
                            sx={{ fontFamily: 'initial' }}
                            onChange={formik.handleChange}
                            value={formik.values.billingAddress}
                            onBlur={formik.handleBlur}
                            error={formik.touched.billingAddress && Boolean(formik.errors.billingAddress)}
                            helperText={formik.touched.billingAddress && formik.errors.billingAddress}
                        />
                    </Box>
                    <Box sx={{ width: '80%', margin: '0 auto -12px auto', fontSize: '14px' }}>
                        <FormControlLabel
                            label={<Typography variant="body2" color="textSecondary" sx={{ fontSize: '12px' }}>Same as Billing Address</Typography>}
                            control={
                                <Checkbox
                                    onChange={handleCheckChange}
                                    size='small'
                                />
                            }
                        />
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                        <CustomInput
                            id="shippingAddress"
                            name="shippingAddress"
                            type="text"
                            disabled={sameAsBilling}
                            textlabel="Shipping Address"
                            onChange={formik.handleChange}
                            value={formik.values.shippingAddress}
                            sx={{ fontFamily: 'initial' }}
                            onBlur={formik.handleBlur}
                            error={formik.touched.shippingAddress && Boolean(formik.errors.shippingAddress)}
                            helperText={formik.touched.shippingAddress && formik.errors.shippingAddress}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', margin: '10px auto', width: '100%', textAlign: 'center', padding: '15px auto', justifyContent: 'center' }}>
                     <CustomButton onSubmit={formik.onSubmit} onClick={()=>dispatch(userInfo(formik.values))} />
                    </Box>
                </form>
            </Grid>
            <Grid xs={6} sx={{border:'1px solid pink',width:'500px'}}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', marginLeft: '10%' }}>
                    <Box className={classes.itemImg}>
                        <img src='https://konfigurator.walbusch.de/savedconfigurations/XR026A_s.png' width='100%' alt="" />
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

                    </Box>
                    <Grid container spacing={3} sx={{ margin: '10px', display: 'flex', alignItems: 'center' }}>
                        <Grid xs={8}>
                            <Typography variant='p' sx={{ fontSize: '14px', display: 'flex' }}>
                                <Brightness1Icon fontSize='small' color='success' />   Delivery in 3-4 weeks
                            </Typography>
                        </Grid>
                        <Grid xs={4}>
                            <Typography variant='p' sx={{ fontSize: '16px' }}>
                                € 110.00
                            </Typography>
                        </Grid>


                    </Grid>
                    <Box sx={{ borderTop: '2px solid silver', width: '100%', margin: '0 auto', }}></Box>
                    <Box container sx={{ width: '98%', marginTop: '10px', marginLeft: '12px', }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{ width: '25%' }}>
                                <Typography variant='p' sx={{ fontSize: '16px', textAlign: 'left' }}>
                                    Shipping
                                </Typography>
                            </Box>
                            <Box sx={{ width: '25%' }}>
                                <Typography variant='p' sx={{ fontSize: '16px', paddingLeft: '15%' }}>
                                    € 110.00
                                </Typography>
                            </Box>
                        </Box>
                        <Box xs={6} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{ width: '20%' }}>
                                <Typography variant='p' sx={{ fontSize: '16px' }}>
                                    Total
                                </Typography>
                            </Box>
                            <Box sx={{ width: '20%' }}>
                                <Typography variant='p' sx={{ fontSize: '16px' }}>
                                    € 110.00
                                </Typography>
                            </Box>
                        </Box>

                    </Box></Box>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(SignUp);