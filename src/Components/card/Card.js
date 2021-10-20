import React from 'react';
import { withStyles } from '@material-ui/styles';
import { styles } from './Card.style';
import Photo from '../../assets/Client.jpg';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CheckIcon from '@mui/icons-material/Check';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
const Card = ({ classes }) => {
    return (
        <div className={classes.cardContainer}>
            <div className={classes.cardImage}>
                <img src={Photo} />
            </div>
            <div className={classes.cardDetailings}>
                <div className={classes.cardDetailingsTop}>WALBUSCH NEWSLETTER - secure benefits now!</div>
                <div className={classes.cardDetailingsMiddle}>
                    <div className={classes.cardDetailingsMiddleBenefits}><CheckIcon />Exclusive discounts
                    </div>
                    <div className={classes.cardDetailingsMiddleBenefits}><CheckIcon />Limited offers
                    </div>
                    <div className={classes.cardDetailingsMiddleBenefits}><CheckIcon />Personal recommendations
                    </div>
                    <div className={classes.cardDetailingsMiddleBenefits}><CheckIcon />Register and get a € 10 voucher **</div>
                </div>
                <div className={classes.cardDetailingsEmail}>


                    <Box
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                        }}
                    >
                        <TextField fullWidth label="Email" id="fullWidth" />
                    </Box>


                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" endIcon={<SendIcon />}>
                            Send
                        </Button>
                    </Stack>



                </div>
            </div>

        </div>
    )
}

export default withStyles(styles)(Card);