import React, { useState, useEffect } from 'react';
import { styles } from './Measurement.style';
import { withStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MeasurementVariants from '../measurementvariants/MeasurementVariants';
import MeasurementChoiceSelection from '../measurementchoiceselection/MeasurementChoiceSelection';
import Button from '@material-ui/core/Button';
import BodyMeasurements from '../bodymeasurements/BodyMeasurements';
import WhaleShirt from '../WhaleShirt/WhaleShirt';
import SpecifySizes from '../specifysizes/SpecifySizes';
import {
    Link
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import { measurementVariantData } from '../../redux/actions';
import { fetchMeasurements } from '../../api/apiUtils';


const Measurement = ({ classes }) => {
    const dispatch = useDispatch()
    const [visibility, setVisibility] = useState(true);
    const state = useSelector(state => state.reducer.measurement);
    const measure = useSelector(state => state.reducer.measurementValues)
    console.log(measure)
    useEffect(() => {
        const getVariantData = async (id) => {
            const myRequest = new Request('http://localhost:9000/measurementvariantdata', {
                method: 'GET',
                mode: 'cors',
                cache: 'default',
            });
            fetchMeasurements(myRequest).then(data => dispatch(measurementVariantData(data)));
        }
        getVariantData();
    }, [dispatch])
    const MeasurementVariantsData = useSelector(state => state.reducer.measurementVariantData)
    return (
        <Box>
            <Navbar />
            <Box className={classes.measurementParentContainer}>

                {(visibility) ? <Box className={classes.measurementText} >
                    <Typography variant='h6'>On what basis would you like to determine your measurements?
                    </Typography>
                </Box> : null}
                <Box className={classes.measurementCategories} >
                    <MeasurementVariants onclick={() => setVisibility(false)} MeasurementVariantsdata={MeasurementVariantsData} />
                </Box>
                <Box className={classes.measurementMultiSelection}>
                    {(state === '-1') ? null : null}
                    {(state === '0') ? <WhaleShirt /> : null}
                    {(state === '1') ? <SpecifySizes /> : null}
                    {(state === '2') ? <BodyMeasurements /> : null}
                    {(state === '3') ? <MeasurementChoiceSelection /> : null}

                </Box>
                <Box className={classes.measurementquantity}>
                    Unit <input type='text' className={classes.inputLot} />
                </Box>
                <Box className={classes.measurementquantity} sx={{ marginBottom: '10%' }}>
                    <Link to='/varity/cart/item'>
                        <Button variant="contained" size="large" color="primary" full>
                            IN THE CART
                        </Button>
                    </Link>
                </Box>
                <Box sx={{ position: "fixed", bottom: "0px", width: "99%" }}>
                    <Footer />
                </Box>
            </Box >
        </Box>
    )
}

export default withStyles(styles)(Measurement);