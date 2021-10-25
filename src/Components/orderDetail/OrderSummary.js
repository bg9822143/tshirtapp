import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
    subHeading: {
        textAlign: "center",
        marginBottom: "5px",
        fontSize: '18px !important',
        fontWeight: '500 !important',
    },
    fieldName: {
        display: 'inline-block',
        fontSize: '16px !important',
        fontWeight: '500 !important',
    },
    fieldValue: {
        display: 'inline-block',
        color: "#757575",
        paddingLeft: '3px',
        fontSize: '16px !important',
        fontWeight: '500 !important',
    }
});

const OrderSummary = ({ ...props }) => {
    const classes = useStyle();
    return (
        <Box sx={{ margin: "15px 0" }}>
            <Typography variant='body2' className={classes.subHeading}>
                Bestellübersicht
            </Typography>
            <Box>
                <Typography variant='body2' className={classes.fieldName}>
                    Gesamt:
                </Typography>
                <Typography variant='body2' className={classes.fieldValue}>
                    {"€" + props.data.summary.total}
                </Typography>
            </Box>
            <Box>
                <Typography variant='body2' className={classes.fieldName}>
                    Bestellstatus:
                </Typography>
                <Typography variant='body2' className={classes.fieldValue}>
                    {props.data.summary.status}
                </Typography>
            </Box>
        </Box>
    );
}

export default OrderSummary;
