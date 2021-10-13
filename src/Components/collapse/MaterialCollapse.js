import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { withStyles } from '@material-ui/styles';
import { styles } from './MaterialCollapse.style';
import Design1 from '../../assets/designImg1.png';
import Design2 from '../../assets/designImg2.png';
import Design3 from '../../assets/designImg3.png';
import Design4 from '../../assets/designImg4.png';
import { __PRIVATE__ } from 'styled-components';
function MaterialCollapse() {
  const [open, setOpen] = React.useState(true);
  const handleClick = (_ev) => {
    setOpen(!open);
    _ev.stopPropagation()
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 680, bgcolor: 'background.paper', }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={(e)=>handleClick(e)}>

        <ListItemText primary="Filter"  sx={{
                borderBottom:'1px solid black'
              }}/>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Box sx={{
            width: '100%',
            height: '100%',
          }}>
            <Box sx={{
              width: '100%',
              height: '100%',
              textAlign: 'left',
            }}>
              <Typography variant='h6'>
                Farben
              </Typography>
              <Box sx={{
                width: '90%',
                height: '100%',
                textAlign: 'left',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',

                margin: '10px'
              }}>
                <Box sx={{
                  width: '7%',
                  height: '30px',
                  border: '1px solid black',
                  textAlign: 'left',
                  backgroundColor: 'white',
                  color: 'white'
                }}>
                </Box>
                <Box sx={{
                  width: '7%',
                  height: '30px',
                  border: '1px solid black',
                  textAlign: 'left',
                  backgroundColor: '#fae7ba'
                }}>
                </Box>
                <Box sx={{
                  width: '7%',
                  height: '30px',
                  border: '1px solid black',
                  textAlign: 'left',
                  backgroundColor: '#3b74cd'

                }}>

                </Box>
                <Box sx={{
                  width: '7%',
                  height: '30px',
                  border: '1px solid black',
                  textAlign: 'left',
                  backgroundColor: 'gray'
                }}>

                </Box>
                <Box sx={{
                  width: '7%',
                  height: '30px',
                  border: '1px solid black',
                  textAlign: 'left',
                  backgroundColor: 'black'

                }}>

                </Box>
                <Box sx={{
                  width: '7%',
                  height: '30px',
                  border: '1px solid black',
                  textAlign: 'left',
                  backgroundColor: 'red'
                }}>

                </Box>
                <Box sx={{
                  width: '7%',
                  height: '30px',
                  border: '1px solid black',
                  textAlign: 'left',
                  backgroundColor: '#eb80aa'

                }}>

                </Box>
                <Box sx={{
                  width: '7%',
                  height: '30px',
                  border: '1px solid black',
                  textAlign: 'left',
                  backgroundColor: '#dda0dd'
                }}>

                </Box>
                <Box sx={{
                  width: '7%',
                  height: '30px',
                  border: '1px solid black',
                  textAlign: 'left',
                  backgroundColor: 'green'
                }}>

                </Box>
                <Box sx={{
                  width: '7%',
                  height: '30px',
                  border: '1px solid black',
                  textAlign: 'left',
                  backgroundColor: '#8b5a2b'

                }}>

                </Box>
                <Box sx={{
                  width: '7%',
                  height: '30px',
                  border: '1px solid black',
                  textAlign: 'left',
                  backgroundColor: 'yellow'
                }}>

                </Box>
              </Box>
            </Box>
            <Box sx={{
              width: '100%',
              height: '60px',
              marginBottom: '15px',
              textAlign: 'left',
            }}>
              <Typography variant='h6' sx={{
                borderBottom:'1px solid black'
              }}>
                Design
              </Typography>
              <Box sx={{
                height: '100%',
                textAlign: 'left',
                marginTop: '10px',
                marginLeft: '2px',
                display: 'flex'
              }}>
                <Box sx={{
                  width: '5%',
                  height: '30px',
                  border: '1px solid black',
                  textAlign: 'left',
                  marginLeft: '5px',
                }}>
                  <img src={Design1} width='100%' height="100%" />
                </Box>
                <Box sx={{
                  width: '5%',
                  height: '30px',
                  border: '1px solid black',
                  textAlign: 'left',
                  marginLeft: '5px',
                }}>
                  <img src={Design2} width='100%' height="100%" />
                </Box>
                <Box sx={{
                  width: '5%',
                  height: '30px',
                  border: '1px solid black',
                  textAlign: 'left',
                  marginLeft: '5px',
                }}>
                  <img src={Design3} width='100%' height="100%" />
                </Box>
                <Box sx={{
                  width: '5%',
                  height: '30px',
                  border: '1px solid black',
                  textAlign: 'left',
                  marginLeft: '5px',
                }}>
                  <img src={Design4} width='100%' height="100%" />
                </Box>
              </Box>
            </Box>
          </Box>
        </List>
      </Collapse>
    </List>
  );
}

export default withStyles(styles)(MaterialCollapse);