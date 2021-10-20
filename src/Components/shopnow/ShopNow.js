import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import PrintIcon from '@mui/icons-material/Print';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

const useStyle = makeStyles({
    shopNowButton:{
        color: 'white',
        backgroundColor:'#152e59',
        width:'200px',
        height:'50px',
        textDecoration: 'none',
        '&:hover':{
            backgroundColor:'#152e55',
        }
    },
});

const ShopNow = () => {
    const classes = useStyle();

    return (
        <Box
            sx={{ width: '200px', textAlign: 'center' }}
            display="flex"
            flexDirection="column"
            spacing="2"
        >
            <Typography variant='body1' sx={{ textAlign: 'right' }}>110,00 €</Typography>
            <Box
                margin='8px 0 10px 0'
            >
                <Link to='/varity' style={{ textDecoration: 'none' }}>
                    <Button variant="contained" className={classes.shopNowButton}>
                        SHOP NOW
                    </Button>
                </Link>
            </Box>
            <Box
                display='flex'
                flexDirection='row'
                justifyContent='space-evenly'
            >
                <Box>
                    <FileUploadOutlinedIcon color="disabled" />
                </Box>
                <Box>
                    <FileDownloadOutlinedIcon color="disabled" />
                </Box>
                <Box>
                    <AlternateEmailIcon color="disabled" />
                </Box>
                <Box>
                    <PrintIcon color="disabled" />
                </Box>
            </Box>
        </Box>
    )
}

export default ShopNow;