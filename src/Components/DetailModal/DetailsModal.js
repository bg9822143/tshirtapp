import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import TestImage from '../../assets/testImg.jpg';
import TestImage1 from '../../assets/testImg1.png';
import TestImage2 from '../../assets/testImg2.png';
import TestImage3 from '../../assets/testImg3.png';
import InfoIcon from '@mui/icons-material/Info';
import Link from '@mui/material/Link';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function DetailsModal() {
    const [detailModalOpen, setdetailModalOpen] = React.useState(false);
    const handleOpen = (_ev) => { setdetailModalOpen(true); _ev.stopPropagation(); }
    const handleClose = (_ev) => { setdetailModalOpen(false); }

    return (
        <div>
            <Link href="#" color="inherit" onClick={(e) => handleOpen(e)} sx={{
                display: 'flex',
                justifyContent:'left'
            }}>
                <InfoIcon /> {'Details'}
            </Link>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={detailModalOpen}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={detailModalOpen}>
                    <Box sx={style}>
                        <Box sx={{
                            textAlign: 'right',
                        }}>
                            <CloseIcon onClick={() => handleClose()} />
                        </Box>
                        <Box sx={{
                            marginTop: '10px',
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <Box sx={{
                                marginTop: '10px',
                                width: '100%',
                                height: '100%'
                            }}>
                                <img src={TestImage} />
                            </Box>
                            <Box sx={{
                                marginTop: '10px',
                                width: '100%',
                            }}>
                                <Typography variant='h4'>
                                    Hemdenpopeline – Uni Weiß
                                </Typography>
                                <Typography variant='h5'>
                                    100 % Baumwolle, 125 g/qm , bügelfrei, trocknergeeignet
                                </Typography>
                                <Typography variant='h6'>
                                    € 110,00
                                </Typography>
                                <Typography variant='p'>   Bei dieser Hemdenpopeline garantiert reine, hautsympathische Baumwolle hohen Tragekomfort und leichte Pflege. Der Stoff ist atmungsaktiv und klimatisierend. Mit seiner gleichmäßigen, glatten Oberfläche und dem typischen zarten Glanz ist der Popeline der perfekte Stoff für ein gepflegtes Maßhemd. Dank »Extraglatt« Ausrüstung sind Hemden aus diesem Stoff bügelfrei.</Typography>
                                <Box sx={{
                                    marginTop: '10px',
                                    display: 'flex',
                                    justifyContent: 'space-evenly'
                                }}>
                                    <Box sx={{
                                        marginTop: '10px',
                                    }}>
                                        <Typography variant='h6'>
                                            Gewicht
                                        </Typography>
                                        <Box sx={{
                                            marginTop: '10px',
                                            display: 'flex',
                                            justifyContent: 'space-evenly'
                                        }}>
                                            <img src={TestImage1} />
                                        </Box>
                                        <Typography>
                                            125 g/qm
                                        </Typography>
                                    </Box>
                                    <Box sx={{
                                        marginTop: '10px',
                                    }}>
                                        <Typography variant='h6'>
                                            Garn
                                        </Typography>
                                        <Box sx={{
                                            marginTop: '10px',
                                            display: 'flex',
                                            justifyContent: 'space-evenly'
                                        }}>
                                            <img src={TestImage2} />
                                        </Box>
                                        <Typography>
                                            100/2
                                        </Typography>
                                    </Box>
                                    <Box sx={{
                                        marginTop: '10px',
                                    }}>
                                        <Typography variant='h6'>
                                            Webart
                                        </Typography>
                                        <Box sx={{
                                            marginTop: '10px',
                                            display: 'flex',
                                            justifyContent: 'space-evenly'
                                        }}>
                                            <img src={TestImage3} />
                                        </Box>
                                        <Typography>
                                            Leinwand
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>

                        </Box>
                    </Box>

                </Fade>
            </Modal>
        </div>
    );
}
