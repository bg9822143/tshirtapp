import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { withStyles } from '@material-ui/core';
import { customRadioStyle } from './CustomRadio.style';
import Checkbox from '@mui/material/Checkbox';

const CheckBox = (props) => {
    return (
        <FormControl component="fieldset" className={props.classes.marginHeight}>
          <FormControlLabel control={<Checkbox defaultChecked />} label={props.labelText} /> 
        </FormControl>

    )
}
export default withStyles(customRadioStyle)(CheckBox);