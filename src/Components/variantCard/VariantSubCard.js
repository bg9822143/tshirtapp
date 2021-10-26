import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import { styles } from './variants.style';
import MaterialCollapse from '../collapse/MaterialCollapse';
import { getReplacementOption } from '../../redux/actions/thunkActions';
import { selectCurrentVariant } from '../../redux/selectors';
function VariantSubCard({ classes }) {

    const dispatch = useDispatch();
    const currentVariant = useSelector(selectCurrentVariant);

    const handleVariantChange = (value) => {
        dispatch(getReplacementOption(value));
    }
    return (
        <Card sx={{
            overflowY: 'scroll',
            height: '600px',
            boxShadow: 'none',
            borderBottom: 'none'
        }}>
            <CardContent>
                {(currentVariant.id === '1stoff') ? <Grid>
                    <MaterialCollapse />
                </Grid> : null}
            </CardContent>
            <CardContent >
                <Box>
                    {currentVariant.collection.map((item, i) => {
                        return <Grid container spacing={2} key={i}
                            onClick={() => { handleVariantChange(item.identifier); }}
                            alignItems="center" className={classes.gridContent} >
                            <Grid item xs={3}>
                                <img src={item.inactiveImg} alt="inactive img" />
                            </Grid>
                            <Grid item xs={7}>
                                <Typography sx={{
                                    fontSize: '18px',
                                    fontWeight: 'bold'
                                }} variant='h6' align='left'>{item.name}</Typography>
                                <Typography variant='p'>{item.description}</Typography>
                                {/* <DetailsModal /> */}
                            </Grid>
                            {item.price &&
                                <Grid item xs={2}>
                                    <Typography>{item.price}</Typography>
                                </Grid>
                            }
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