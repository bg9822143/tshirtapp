import React, { useState } from 'react';
import { styles } from './WhaleShirt.style';
import { withStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
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

const WhaleShirt = ({ classes }) => {
    const dispatch = useDispatch();

    const [whaleShirtMeasures, setWhaleShirtMeasures] = useState({ itemState: '0', fit: '', collarsize: '', sleevelength: '' });
    const handleChange = (e) => {
        setWhaleShirtMeasures({ ...whaleShirtMeasures, [e.target.name]: e.target.value });
        dispatch(measurementSelection(whaleShirtMeasures));

    }

    return (
        <Box className={classes.measurementSelectionContainer} sx={{ marginBottom: "30px" }}>
            <Box className={classes.measurementChoices} sx={{ marginTop: '10px', padding: '10px' }}>
                <Typography variant='h6' sx={{ fontSize: '16px', fontWeight: 'bold' }}>Please specify sizes
                </Typography>
                <Box className={classes.radioOptions} sx={{ fontSize: '5px' }}>
                    <FormControl component="fieldset" >
                        <FormLabel component="fit" sx={{ textDecoration: 'underline', color: 'black' }}>Fit:</FormLabel>
                        <RadioGroup row aria-label="fit" name="fit" onChange={(e) => handleChange(e)}>
                            <FormControlLabel value="comfort" control={<Radio size="small" />} label={<Typography variant="p" color="textSecondary" sx={{ fontSize: '14px' }} >Comfort</Typography>} />
                            <FormControlLabel value="Regular" control={<Radio size="small" />} label={<Typography variant="p" color="textSecondary" sx={{ fontSize: '14px' }} >Regular</Typography>} />
                            <FormControlLabel value="modern" control={<Radio size="small" />} label={<Typography variant="p" color="textSecondary" sx={{ fontSize: '14px' }} >Large</Typography>} />
                        </RadioGroup>
                    </FormControl>
                </Box>
                <Box className={classes.radioOptions}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{ textDecoration: 'underline', color: 'black' }}>Collar size:</FormLabel>
                        <RadioGroup row aria-label="coloarsize" name="collarsize" onChange={(e) => handleChange(e)}>
                            <FormControlLabel value="38" control={<Radio size="small" />} label={<Typography variant="p" color="textSecondary" sx={{ fontSize: '14px' }} >38</Typography>} />
                            <FormControlLabel value="39" control={<Radio size="small" />} label={<Typography variant="p" color="textSecondary" sx={{ fontSize: '14px' }} >39</Typography>} />
                            <FormControlLabel value="40" control={<Radio size="small" />} label={<Typography variant="p" color="textSecondary" sx={{ fontSize: '14px' }} >40</Typography>} />
                            <FormControlLabel value="41" control={<Radio size="small" />} label={<Typography variant="p" color="textSecondary" sx={{ fontSize: '14px' }} >41</Typography>} />
                            <FormControlLabel value="42" control={<Radio size="small" />} label={<Typography variant="p" color="textSecondary" sx={{ fontSize: '14px' }} >42</Typography>} />
                            <FormControlLabel value="43" control={<Radio size="small" />} label={<Typography variant="p" color="textSecondary" sx={{ fontSize: '14px' }} >43</Typography>} />
                            <FormControlLabel value="44" control={<Radio size="small" />} label={<Typography variant="p" color="textSecondary" sx={{ fontSize: '14px' }} >44</Typography>} />
                            <FormControlLabel value="45/46" control={<Radio size="small" />} label={<Typography variant="p" color="textSecondary" sx={{ fontSize: '14px' }} >45</Typography>} />
                            <FormControlLabel value="47/48" control={<Radio size="small" />} label={<Typography variant="p" color="textSecondary" sx={{ fontSize: '14px' }} >47/48</Typography>} />
                            <FormControlLabel value="49/50" control={<Radio size="small" />} label={<Typography variant="p" color="textSecondary" sx={{ fontSize: '14px' }} >49/50</Typography>} />
                            <FormControlLabel value="51/52" control={<Radio size="small" />} label={<Typography variant="p" color="textSecondary" sx={{ fontSize: '14px' }} >51/52</Typography>} />
                        </RadioGroup>
                    </FormControl>
                </Box>
                <Box className={classes.radioOptions}>
                    <FormControl component="fieldset" sx={{ fontSize: '5px' }}>
                        <FormLabel component="legend" sx={{ textDecoration: 'underline', color: 'black' }}>Sleeve Length:
                        </FormLabel>
                        <RadioGroup row aria-label="sleevelength" name="sleevelength" sx={{ fontSize: '5px' }} onChange={(e) => handleChange(e)}>
                            <FormControlLabel value="normalsize" control={<Radio size="small" sx={{ fontSize: '5px' }} />} label={<Typography variant="p" color="textSecondary" sx={{ fontSize: '14px' }} >normal size 63cm</Typography>} />
                            <FormControlLabel value="extralarge" control={<Radio size="small" sx={{ fontSize: '5px' }} />} label={<Typography variant="p" color="textSecondary" sx={{ fontSize: '14px' }} >normal size 62cm</Typography>} />
                            <FormControlLabel value="xxl" control={<Radio size="small" sx={{ fontSize: '5px' }} />} label={<Typography variant="p" color="textSecondary" sx={{ fontSize: '14px' }} >XXL</Typography>} />
                            <FormControlLabel value="tent" control={<Radio size="small" sx={{ fontSize: '5px' }} />} label={<Typography variant="p" color="textSecondary" sx={{ fontSize: '14px' }} >TENT</Typography>} />
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Box>
            <Box className={classes.measurementImg}>
                <img src="https://konfigurator.walbusch.de/images/82359d0.png" alt="" />
            </Box>
            <Box className={classes.measurementdescription}>
                <Typography variant='h6' sx={{ fontSize: '16px', fontWeight: 'bold' }}>How to find out your shoulder width</Typography>
                <Typography variant='p' sx={{ fontSize: '14px' }}>Measure the shoulder width on the front of the shirt spread out flat. Open the collar slightly and press it flat. The measuring line runs in a straight line between the two corner points of the shoulder and is limited by the base of the sleeves.</Typography>
            </Box>
        </Box>
    )
}

export default withStyles(styles)(WhaleShirt);
