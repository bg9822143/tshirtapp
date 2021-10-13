import { styles } from './Footer.style';
import { withStyles } from '@material-ui/styles';
import { IconData } from './IconData';
import Typography from '@mui/material/Typography';
import CopyrightIcon from '@material-ui/icons/Copyright';
const Footer = ({ classes }) => {
    let year = new Date().getFullYear();

    return (
        <div className={classes.footerContainer}>
            <div className={classes.footerPartOne}>
                    <div className={classes.footerPartTwo}>
                        <Typography variant="p" sx={{ fontSize: '14px', fontWeight: 'bold', marginLeft: '20%' }}>
                            CopyRight Reserved 
                            {/* <CopyrightIcon fontSize="small" /> */}
                            {year}
                        </Typography>
                    </div>

                    <div className={classes.footerPartOne}>
                        <Typography variant='p' sx={{ fontSize: '14px', fontWeight: 'bold' }}>
                            Designed By Tech-Inferno
                        </Typography>
                    </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(Footer);