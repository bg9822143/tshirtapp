import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const Footer = () => {
    let year = new Date().getFullYear();

    return (
        <Box
            sx={{
                margin: "5% 4% 0% 4%",
                borderTop: '2px solid #e6e6e6',
            }}
        >
            <Grid container md={12}>
                <Grid item md={4} xs={12}>
                    <Typography variant="body2" sx={{ textAlign: 'left', fontWeight: 'bold' }}>©{year}. All Rights Reserved </Typography>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Typography variant="body2" sx={{ textAlign: 'center', fontWeight: 'bold' }}>Designed by <a href="mailto:nomansarwar663@gmail.com">Tech-Inferno</a></Typography>
                </Grid>
                <Grid item md={4} xs={12}></Grid>
            </Grid>
        </Box>
    );
}

export default Footer;
