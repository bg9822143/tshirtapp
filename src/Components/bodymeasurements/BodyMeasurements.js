import React, { useState } from 'react';
import { styles } from './BodyMeasurements.style';
import { withStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { measurementSelection } from '../../redux/actions/actions';
import { useDispatch } from 'react-redux';

/*
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
*/



const BodyMeasurements = ({ classes }) => {
    const dispatch = useDispatch();
    const [bodyMeasurementsState, setBodyMeasurementsState] = useState({ itemState: '2', neckcircumference: '', chestcircumference: '', waistcircumference: '', collarsize: '', shoulderwidth: '', armlength: '', shirtlength: '' });
    const handleChange = e => {
        setBodyMeasurementsState({ ...bodyMeasurementsState, [e.target.name]: e.target.value });
        dispatch(measurementSelection(bodyMeasurementsState))
    }
    return (
        <Box className={classes.measurementSelectionContainer}>
            <Box className={classes.measurementChoices} sx={{ marginTop: '10px', padding: '10px' }}>
                <Typography variant='h6' sx={{ fontSize: '16px', fontWeight: 'bold' }}>Please specify sizes</Typography>
                <Grid container spacing={3} sx={{ fontSize: '14px', paddingTop: '15px' }}>
                    <Grid item xs={5}>
                        Neck circumference
                    </Grid>
                    <Grid item xs={3}>
                        <input type='text' className={classes.inputField} name="neckcircumference" onChange={(e) => handleChange(e)} />
                    </Grid>
                    <Grid item xs={4}>
                        (34 - 54 cm)
                    </Grid>
                </Grid>
                <Grid container spacing={3} sx={{ fontSize: '14px', paddingBottom: '5px' }}>
                    <Grid item xs={5}>
                        Chest circumference
                    </Grid>
                    <Grid item xs={3}>
                        <input type='text' className={classes.inputField} name="chestcircumference" onChange={(e) => handleChange(e)} />
                    </Grid>
                    <Grid item xs={4}>
                        (34 - 54 cm)
                    </Grid>
                </Grid>
                <Grid container spacing={3} sx={{ fontSize: '14px', paddingBottom: '3px' }}>
                    <Grid item xs={5}>
                        Waist circumference
                    </Grid>
                    <Grid item xs={3}>
                        <input type='text' className={classes.inputField} name="waistcircumference" onChange={(e) => handleChange(e)} />
                    </Grid>
                    <Grid item xs={4}>
                        (34 - 54 cm)
                    </Grid>
                </Grid>
                <Grid container spacing={3} sx={{ fontSize: '14px', paddingBottom: '5px' }}>
                    <Grid item xs={5}>
                        Shoulder width
                    </Grid>
                    <Grid item xs={3}>
                        <input type='text' className={classes.inputField} name="shoulderwidth" onChange={(e) => handleChange(e)} />
                    </Grid>
                    <Grid item xs={4}>
                        (34 - 54 cm)
                    </Grid>
                </Grid>
                <Grid container spacing={3} sx={{ fontSize: '14px', paddingBottom: '5px' }}>
                    <Grid item xs={5}>
                        Arm length
                    </Grid>
                    <Grid item xs={3}>
                        <input type='text' className={classes.inputField} name="armlength" onChange={(e) => handleChange(e)} />
                    </Grid>
                    <Grid item xs={4}>
                        (34 - 54 cm)
                    </Grid>
                </Grid>
                <Grid container spacing={3} sx={{ fontSize: '14px', paddingBottom: '5px' }}>
                    <Grid item xs={5}>
                        Shirt length
                    </Grid>
                    <Grid item xs={3}>
                        <input type='text' className={classes.inputField} name="shirtlength" onChange={(e) => handleChange(e)} />
                    </Grid>
                    <Grid item xs={4}>
                        (34 - 54 cm)
                    </Grid>
                </Grid>

            </Box>
            <Box className={classes.measurementImg}>
                <img src="https://konfigurator.walbusch.de/images/91f0729.png" alt="" />
            </Box>
            <Box className={classes.measurementdescription}>
                <Typography variant='h6' sx={{ fontSize: '16px', fontWeight: 'bold' }}>How to find out your shoulder width</Typography>
                <Typography variant='p' sx={{ fontSize: '14px' }}>Measure the shoulder width on the front of the shirt spread out flat. Open the collar slightly and press it flat. The measuring line runs in a straight line between the two corner points of the shoulder and is limited by the base of the sleeves.</Typography>
            </Box>
        </Box>
    )
}

export default withStyles(styles)(BodyMeasurements);
