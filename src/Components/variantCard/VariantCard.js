import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import VariantSubCard from './VariantSubCard';
import { useDispatch } from 'react-redux';
import { setID } from '../../actions/action';
export default function VariantCard(props) {
    const dispatch = useDispatch();
    return (
        <Card sx={{
            width: '100%',
        }}>
            
            <CardHeader
                action={
                    
                    <IconButton aria-label="settings">
                        <ClearIcon  onClick={(e)=>{dispatch(setID(-1));e.stopPropagation()} }/>
                    </IconButton>
                }
            />
            <CardMedia />
            <CardContent sx={{
                    width: '95%',
                    margin:'0 auto',
                }}>
                <VariantSubCard/>
            </CardContent>
            <CardActions disableSpacing>

            </CardActions>

        </Card>
    );
}
