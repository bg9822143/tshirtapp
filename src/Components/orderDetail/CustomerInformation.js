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

const CustomerInformation = ({ ...props }) => {
    const classes = useStyle();
    return (
        <Box>
            <Typography variant='body2' className={classes.subHeading}>
                Kundeninformation
            </Typography>
            {props.data.schema.map((field) =>
                <Box>
                    <Typography variant='body2' className={classes.fieldName}>
                        {field.title + ":"}
                    </Typography>
                    <Typography variant='body2' className={classes.fieldValue}>
                        {props.data.customerDetails[field.id]}
                    </Typography>
                </Box>
            )}
        </Box>
    );
}

export default CustomerInformation;
