import { styles } from './Navbar.style';
import { withStyles } from '@material-ui/styles';
import Typography from '@mui/material/Typography';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Link } from 'react-router-dom';
const Navbar = ({ classes }) => {
    return (
        <div className={classes.navParent}>
            <div className={classes.navHeaderMiddle}>
                <div className={classes.headerlogo}>
                    <Link to='/'>
                    Hemden
                    </Link>
                </div>
                <div className={classes.headerUserParent}>
                    <div className={classes.userCart}>
                        <div className={classes.cartText}>
                            <Typography variant='h6' sx={{ fontSize: '13px', fontWeight: 'light' }}>
                                Warenkorb
                            </Typography>
                            <Typography variant='h6' sx={{ fontSize: '13px', fontWeight: 'light' }}>
                                Test
                            </Typography>
                        </div>
                        <div className={classes.cartLogo}>
                            <LocalMallOutlinedIcon fontSize='large' />
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.navHeaderBottom}>
            </div>
        </div>
    );
}

export default withStyles(styles)(Navbar);
