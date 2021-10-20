import React, { useState } from 'react';
import { styles } from './MeasurementVariants.style';
import { withStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { MeasurementVariantsData } from '../GlobalData';
import { showMeasurement } from '../../redux/actions/actions';
import { useDispatch } from 'react-redux';
const MeasurementVariants = ({ classes, ...props }) => {
    console.log(MeasurementVariantsData)
    const [selectedOptionID, setSelectedOptionID] = useState(-1);
    const dispatch = useDispatch();
    return (
        <Box className={classes.measurementVariantsContainer}>
            {MeasurementVariantsData.map((item, ind) => {
                return <Box className={classes.measurementVariants} onClick={() => props.onclick()}>
                    <Box className={classes.measurementVariantsPicture} >
                        <Box onClick={() => { setSelectedOptionID(item.index); dispatch(showMeasurement(item.index)) }} >
                            {(selectedOptionID === item.index) ? <img src={item.imgActive} /> : <img src={item.img} />}
                        </Box>
                    </Box>
                    <Box className={classes.measurementVariantsTitle}>
                        <Typography variant='h6' sx={{ fontSize: '16px', fontWeight: 'bold' }}> {item.title}</Typography>
                    </Box>
                    <Box className={classes.measurementVariantsDescription}>
                        <Typography variant='p' sx={{ fontSize: '14px' }}>{item.details}</Typography>
                    </Box>
                </Box>
            })}
        </Box>
    )
}

export default withStyles(styles)(MeasurementVariants);