import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/styles';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';

const useStyle = makeStyles({
    subHeading: {
        textAlign: "center",
        marginBottom: "5px",
        fontSize: '18px !important',
        fontWeight: '500 !important',
    },
    fieldName: {
        display: 'inline-block',
        fontSize: '16px !important',
        fontWeight: '500 !important',
    },
    fieldValue: {
        display: 'inline-block',
        color: "#757575",
        paddingLeft: '3px',
        fontSize: '16px !important',
        fontWeight: '500 !important',
    },
    fieldBox: {
        display: "flex",
        justifyContent: "space-evenlly",
        marginTop: "1px"
    },
    measureType: {
        textAlign: "center",
        margin: "-10px 0 6px 0 !important",
        fontSize: "10px !important",
    },
    priceQuanFieldName: {
        fontSize: '16px !important',
        fontWeight: '600 !important',
    },
    priceQuanFieldValue: {
        color: "#757575",
        paddingLeft: '3px',
        fontSize: '16px !important',
        fontWeight: '500 !important',
    },
});

const ProductDetail = ({ ...props }) => {


    // const dispatch = useDispatch();
    // const idState = useSelector(state => state.reducer.selectedCustomerID);
    // useEffect(() => {
    //     const getSelectedCustomers = async (id) => {
    //         const myRequest = new Request('http://localhost:9000/selectedCustomer', {
    //             method: 'GET',
    //             headers: { id },
    //             mode: 'cors',
    //             cache: 'default',
    //         });
    //         fetchSelectedCustomers(myRequest).then(data => dispatch(getSelectedCustomer(data)));
    //     }
    //     getSelectedCustomers(idState);
    // }, [])
    // const customerSelectedState = useSelector(state => state.reducer.selectedCustomer);
    // console.log(customerSelectedState)

    const classes = useStyle();

    const [dialogOpen, setDialogOpen] = useState(false);

    const renderSwitch = (param) => {
        switch (param) {
            case 0:
                return "Walbusch-Hemd";
            case 1:
                return "Lieblingshemd-Maße";
            case 2:
                return "Meine Körpermaße";
            case 3:
                return "Maß-Stammkunde";
            default:
                return "Maß-Stammkunde";
        }
    }

    const handleDelete = () => {
        setDialogOpen(true);
      };
    
      const handleConfirmDelete = () => {
        setDialogOpen(false);
      };
    
      const handleDialogClose = () => {
        setDialogOpen(false);
      };
    
    return (
        <Box>
            {/* <Card outlined sx={{ border: "1px solid grey", boxShadow: "0px 0px 5px grey", padding: '20px' }}> */}
            <Card outlined sx={{ border: 'none', padding: '10px' }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={props.data.order.imageUrls[0].img1}
                    alt="green iguana"
                />
                <CardContent sx={{ marginBottom: '-20px' }} >
                    <Typography gutterBottom variant="body2" className={classes.subHeading}>
                        Anpassung
                    </Typography>
                    {
                        props.data.proCustschema.map((field) => {
                            var value = props.data.order[field.id]

                            return (
                                <Box className={classes.fieldBox}>
                                    <Typography variant='body2' className={classes.fieldName}>
                                        {field.title + ":"}
                                    </Typography>
                                    <Typography variant='body2' className={classes.fieldValue}>
                                        {value}
                                    </Typography>
                                </Box>
                            )
                        })
                    }
                    <Typography gutterBottom variant="body2" className={classes.subHeading} sx={{ marginTop: "10px" }}>
                        Körpermaße
                    </Typography>

                    <Typography gutterBottom variant="body2" className={classes.measureType}>
                        {"Type" + ": " + renderSwitch(props.data.order["measurementtype"])}
                    </Typography>
                    {
                        props.data.proMeaSchema.map((field) => {
                            var value = props.data.order[field.id]
                            return (
                                <Box className={classes.fieldBox}>
                                    <Typography variant='body2' className={classes.fieldName}>
                                        {field.title + ":"}
                                    </Typography>
                                    <Typography variant='body2' className={classes.fieldValue}>
                                        {value}
                                    </Typography>
                                </Box>
                            )
                        })
                    }

                    <Box sx={{ float: 'right', marginTop: "5px" }}>
                        <Box className={classes.fieldBox}>
                            <Typography variant='body2' className={classes.priceQuanFieldName}>
                                {"Produktpreis" + ":"}
                            </Typography>
                            <Typography variant='body2' className={classes.priceQuanFieldValue}>
                                {"€" + props.data.order["produktpreis"]}
                            </Typography>
                        </Box>
                        <Box className={classes.fieldBox}>
                            <Typography variant='body2' className={classes.priceQuanFieldName}>
                                {"Menge" + ":"}
                            </Typography>
                            <Typography variant='body2' className={classes.priceQuanFieldValue}>
                                {props.data.order["menge"]}
                            </Typography>
                        </Box>
                    </Box>


                </CardContent>
            </Card>
            <Dialog
                open={dialogOpen}
                onClose={handleDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Update Order Status</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this user?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose} color="primary" autoFocus>
                        Cancel
                    </Button>
                    <Button onClick={handleConfirmDelete} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>

        </Box>
    );
}

export default ProductDetail;
