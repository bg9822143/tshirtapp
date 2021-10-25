import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const OrderDetailCard = () => {
    return (
        <Card outlined sx={{ border: "1px solid grey", boxShadow: "0px 0px 5px grey", padding: '20px' }}>
            <CardMedia
                component="img"
                height="200"
                image="https://konfigurator.walbusch.de/savedconfigurations/XR026A_s.png"
                alt="green iguana"
            />
            <CardContent sx={{ marginBottom: '-20px' }} >
                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center" }}>
                    Customization
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-evenlly", marginTop: "15px" }}>
                    <Typography variant='h6' sx={{ fontSize: '16px' }}>
                        Stoff:
                    </Typography>
                    <Typography variant='h6' sx={{ fontSize: '16px', color: "#757575", paddingLeft: '2px' }}>
                        default
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-evenlly", marginTop: "15px" }}>
                    <Typography variant='h6' sx={{ fontSize: '16px' }}>
                        Passform:
                    </Typography>
                    <Typography variant='h6' sx={{ fontSize: '16px', color: "#757575", paddingLeft: '2px' }}>
                        default
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-evenlly", marginTop: "15px" }}>
                    <Typography variant='h6' sx={{ fontSize: '16px' }}>
                        Armellange:
                    </Typography>
                    <Typography variant='h6' sx={{ fontSize: '16px', color: "#757575", paddingLeft: '2px' }}>
                        default
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-evenlly", marginTop: "15px" }}>
                    <Typography variant='h6' sx={{ fontSize: '16px' }}>
                        Knopfleiste:
                    </Typography>
                    <Typography variant='h6' sx={{ fontSize: '16px', color: "#757575", paddingLeft: '2px' }}>
                        default
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-evenlly", marginTop: "15px" }}>
                    <Typography variant='h6' sx={{ fontSize: '16px' }}>
                        Brusttasche:
                    </Typography>
                    <Typography variant='h6' sx={{ fontSize: '16px', color: "#757575", paddingLeft: '2px' }}>
                        default
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-evenlly", marginTop: "15px" }}>
                    <Typography variant='h6' sx={{ fontSize: '16px' }}>
                        Manschette:
                    </Typography>
                    <Typography variant='h6' sx={{ fontSize: '16px', color: "#757575", paddingLeft: '2px' }}>
                        default
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-evenlly", marginTop: "15px" }}>
                    <Typography variant='h6' sx={{ fontSize: '16px' }}>
                        Monogramm:
                    </Typography>
                    <Typography variant='h6' sx={{ fontSize: '16px', color: "#757575", paddingLeft: '2px' }}>
                        default
                    </Typography>
                </Box>

            </CardContent>
        </Card>
    );
}

export default OrderDetailCard;