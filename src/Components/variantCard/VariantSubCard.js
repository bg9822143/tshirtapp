import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import { styles } from './variants.style';
import MaterialCollapse from '../collapse/MaterialCollapse';
import DetailsModal from '../DetailModal/DetailsModal';
import { getReplacementOption } from '../../redux/actions/thunkActions';
import { selectCurrentVariant } from '../../redux/selectors';

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer  `;
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function VariantSubCard({ classes }) {

    const dispatch = useDispatch();
    const currentVariant = useSelector(selectCurrentVariant);

    const handleVariantChange = (value) => {
        dispatch(getReplacementOption(value));
    }
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
                {(currentVariant.id === 'stoff') ? <Grid>
                    <MaterialCollapse />
                </Grid> : null}
            </CardContent>
            <CardContent >
                <Box>
                    {currentVariant.collection.map((item) => {
                        return <Grid container spacing={2}
                            onClick={() => { handleVariantChange(item.identifier); }}
                            alignItems="center" className={classes.gridContent} >
                            <Grid item xs={3}>
                                <img src={item.inactiveImg} />
                            </Grid>
                            <Grid item xs={7}>
                                <Typography sx={{
                                    fontSize: '18px',
                                    fontWeight: 'bold'
                                }} variant='h6' align='left'>{item.name}</Typography>
                                <Typography variant='p'>{item.description}</Typography>
                                <DetailsModal />
                            </Grid>
                            { item.price &&
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