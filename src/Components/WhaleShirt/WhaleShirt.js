import React, { useState } from 'react';
import { styles } from './WhaleShirt.style';
import { withStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const WhaleShirt = ({ classes }) => {

    return (
        <Box className={classes.measurementSelectionContainer}>
            <Box className={classes.measurementChoices} sx={{ marginTop: '10px', padding: '10px' }}>
                <Typography variant='h6' sx={{ fontSize: '15px', fontWeight: 'bold' }}>Please specify sizes
                </Typography>
                <Box className={classes.radioOptions} sx={{fontSize:'5px'}}> 
                    <FormControl component="fieldset" >
                        <FormLabel component="fit">Fit</FormLabel>
                        <RadioGroup row aria-label="fit" name="row-radio-buttons-group">
                            <FormControlLabel value="comfort" control={<Radio size="small"/>} label="Comfort" />
                            <FormControlLabel value="Regular" control={<Radio size="small"/>} label="Regular" />
                            <FormControlLabel value="modern" control={<Radio size="small"/>} label="Modern" />
                        </RadioGroup>
                    </FormControl>
                </Box>
                <Box className={classes.radioOptions}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" >Collar size:</FormLabel>
                        <RadioGroup row aria-label="coloarsize" name="row-radio-buttons-group" >
                            <FormControlLabel value="38" control={<Radio size="small"/> }  sx={{fontSize:'10px'}} label="38" />
                            <FormControlLabel value="39" control={<Radio size="small"/>} label="39" />
                            <FormControlLabel value="40" control={<Radio size="small"/>} label="40" />
                            <FormControlLabel value="41" control={<Radio size="small" />} label="41" />
                            <FormControlLabel value="42" control={<Radio size="small"/>} label="42" />
                            <FormControlLabel value="43" control={<Radio size="small"/>} label="43" />
                            <FormControlLabel value="44" control={<Radio size="small"/>} label="44" />
                            <FormControlLabel value="45/46" control={<Radio size="small"/>} label="45/46" />
                            <FormControlLabel value="47/48" control={<Radio size="small"/>} label="47/48" />
                            <FormControlLabel value="49/50" control={<Radio size="small"/>} label="49/50" />
                            <FormControlLabel value="51/52" control={<Radio size="small"/>} label="51/52" />
                        </RadioGroup>
                    </FormControl>
                </Box>
                <Box className={classes.radioOptions}>
                    <FormControl component="fieldset"  sx={{fontSize:'10px'}}>
                        <FormLabel component="legend">Sleeve Length:
                        </FormLabel>
                        <RadioGroup row aria-label="sleevelength" name="row-radio-buttons-group">
                            <FormControlLabel value="normalsize" control={<Radio size="small"/>} label="normal size 63cm"  />
                            <FormControlLabel value="extralarge" control={<Radio size="small"/>} label="normal size 68cm"  />
                            <FormControlLabel value="xxl" control={<Radio size="small"/>} label="XXL" />
                            <FormControlLabel value="tent" control={<Radio size="small" sx={{fontSize:'10px'}}/>} label="XXXL" />
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Box>
            <Box className={classes.measurementImg}>
                <img src="https://konfigurator.walbusch.de/images/91f0729.png" />
            </Box>
            <Box className={classes.measurementdescription}>
                <Typography variant='h6' sx={{ fontSize: '15px', fontWeight: 'bold' }}>How to find out your shoulder width</Typography>
                <Typography variant='p' sx={{ fontSize: '13px' }}>Measure the shoulder width on the front of the shirt spread out flat. Open the collar slightly and press it flat. The measuring line runs in a straight line between the two corner points of the shoulder and is limited by the base of the sleeves.</Typography>
            </Box>
        </Box>
    )
}

export default withStyles(styles)(WhaleShirt);