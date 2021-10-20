import React, { useState } from 'react';
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
import { useSelector } from 'react-redux';
import { selectMeasurement } from '../../redux/selectors';

const Measurement = ({ classes }) => {
    const [visibility, setVisibility] = useState(true);
    const measurement = useSelector(selectMeasurement);
    
    return (
        <Box className={classes.measurementParentContainer}>

            {(visibility) ? <Box className={classes.measurementText} >
                <Typography variant='h6'>On what basis would you like to determine your measurements?
                </Typography>
            </Box> : null}
            <Box className={classes.measurementCategories} >
                <MeasurementVariants onclick={() => setVisibility(false)} />
            </Box>
            <Box className={classes.measurementMultiSelection}>
                {(measurement === '-1') ? null : null}
                {(measurement === '0') ? <WhaleShirt /> : null}
                {(measurement === '1') ? <SpecifySizes /> : null}
                {(measurement === '2') ? <BodyMeasurements /> : null}
                {(measurement === '3') ? <MeasurementChoiceSelection /> : null}

            </Box>
            <Box className={classes.measurementquantity}>
                Unit <input type='text' className={classes.inputLot} />
            </Box>
            <Box className={classes.measurementquantity}>
                <Link to='/varity/cart/item'>
                    <Button variant="contained" size="large" color="primary" full>
                        IN THE CART
                    </Button>
                </Link>
            </Box>
        </Box >
    )
}

export default withStyles(styles)(Measurement);