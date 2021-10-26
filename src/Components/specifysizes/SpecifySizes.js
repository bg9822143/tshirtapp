import React, { useState } from 'react';
import { styles } from './SpecifySizes.style';
import { withStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { measurementSelection } from '../../redux/actions/actions';
import { useDispatch } from 'react-redux';

const SpecifySizes = ({ classes }) => {
    const dispatch = useDispatch();
    const [specifySizes, setSpecifySizes] = useState({ itemState: '1', collarsize: '', chestwidth: '', bellywidth: '', shoulderwidth: '', sleevelength: '', shirtlength: '' });
    const handleChange = e => {
        setSpecifySizes({ ...specifySizes, [e.target.name]: e.target.value });
        dispatch(measurementSelection(specifySizes))
    }
    return (
        <Box className={classes.measurementSelectionContainer}>
            <Box className={classes.measurementChoices} sx={{ marginTop: '10px', padding: '10px' }}>
                <Typography variant='h6' sx={{ fontSize: '16px', fontWeight: 'bold' }}>Please specify sizes</Typography>
                <Grid container spacing={3} sx={{ fontSize: '14px', paddingTop: '15px' }}>
                    <Grid item xs={5}>
                        Collar size
                    </Grid>
                    <Grid item xs={3}>
                        <input type='text' className={classes.inputField} name="collarsize" onChange={(e) => handleChange(e)} />
                    </Grid>
                    <Grid item xs={4}>
                        (34 - 54 cm)
                    </Grid>
                </Grid>
                <Grid container spacing={3} sx={{ fontSize: '14px', paddingTop: '8px', paddingBottom: '8px' }}>
                    <Grid item xs={5}>
                        Chest width
                    </Grid>
                    <Grid item xs={3}>
                        <input type='text' className={classes.inputField} name="chestwidth" onChange={(e) => handleChange(e)} />
                    </Grid>
                    <Grid item xs={4}>
                        (34 - 54 cm)
                    </Grid>
                </Grid>
                <Grid container spacing={3} sx={{ fontSize: '14px', paddingBottom: '5px' }}>
                    <Grid item xs={5}>
                        Belly width

                    </Grid>
                    <Grid item xs={3}>
                        <input type='text' className={classes.inputField} name="bellywidth" onChange={(e) => handleChange(e)} />
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
                        Sleeve length
                    </Grid>
                    <Grid item xs={3}>
                        <input type='text' className={classes.inputField} name="sleevelength" onChange={(e) => handleChange(e)} />
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
                <img src="https://konfigurator.walbusch.de/images/b74b594.png" alt="measurementimg" />
            </Box>
            <Box className={classes.measurementdescription}>
                <Typography variant='h6' sx={{ fontSize: '16px', fontWeight: 'bold' }}>How to find out your shoulder width</Typography>
                <Typography variant='p' sx={{ fontSize: '14px' }}>Measure the shoulder width on the front of the shirt spread out flat. Open the collar slightly and press it flat. The measuring line runs in a straight line between the two corner points of the shoulder and is limited by the base of the sleeves.</Typography>
            </Box>
        </Box>
    )
}

export default withStyles(styles)(SpecifySizes);