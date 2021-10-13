import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import { styles } from './variants.style';
import MaterialCollapse from '../collapse/MaterialCollapse';
import DetailsModal from '../DetailModal/DetailsModal';

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer  `;
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function VariantSubCard({ classes }) {

    const variantState = useSelector(state => state.reducer.variants);
    return (
        <Card sx={{
            // boxShawdow:'none',
            overflowY: 'scroll',
            height: '600px',
            // border:'1px solid black',
            boxShadow: 'none',
            borderBottom: 'none'
        }}>
            <CardContent>
                {(variantState.id === 'stoff12') ? <Grid>
                    <MaterialCollapse />
                </Grid> : null}
            </CardContent>
            <CardContent >
                <Box>
                    {variantState.collection.map((item) => {
                        return <Grid container spacing={2} alignItems="center" className={classes.gridContent}>
                            <Grid item xs={3}>
                                <img src={item.imgSrc} />
                            </Grid>
                            <Grid item xs={7}>
                                <Typography sx={{
                                    fontSize: '18px',
                                    fontWeight: 'bold'
                                }} variant='h6' align='left'>{item.variantItem}</Typography>
                                <Typography variant='p'>Items Are availble in Good Price Items Are availble in Good Price</Typography>
                                <DetailsModal />
                            </Grid>
                            <Grid item xs={2}>
                                <Typography>{item.Price}</Typography>
                            </Grid>
                        </Grid>

                    })}
                </Box>
            </CardContent>
            <CardActions disableSpacing>

            </CardActions>

        </Card >

    );
}

export default withStyles(styles)(VariantSubCard);