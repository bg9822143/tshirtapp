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
                    WALBUSCH
                    </Link>
                </div>
                <div className={classes.headerUserParent}>
                    <div className={classes.userCart}>
                        <div className={classes.cartText}>
                            <Typography variant='h6' sx={{ fontSize: '13px', fontWeight: 'light' }}>
                                Lor Warkorab
                            </Typography>
                            <Typography variant='h6' sx={{ fontSize: '13px', fontWeight: 'light' }}>
                                Enta 0 aklt
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