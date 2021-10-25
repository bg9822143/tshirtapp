import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles({
    totalCartItems: {
        position: 'relative',
        bottom: '22px',
        left: '-10px',
        borderStyle: 'none',
        fontSize: '12px',
        padding: '1px 6px',
        borderRadius: '50px',
        backgroundColor: '#ec514d',
    }
});

const Navbar = () => {
    const classes = useStyles();
    //todo utilize setTotalCart or remove it as state
    const [totalCart] = useState(5);

    return (
        <Box
            sx={{
                margin: "0 4% 5% 4%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: '2px solid #e6e6e6',
            }}
        >
            <Box>
                <Link to="/">
                    <img src="/logo.png" width="200px" height="auto" alt="" />
                </Link>
            </Box>
            <Box>
                <LocalMallOutlinedIcon fontSize='large' />
                {totalCart !== 0 ? <span className={classes.totalCartItems}>{totalCart}</span> : ""}
            </Box>
        </Box>
    );
}

export default Navbar;
