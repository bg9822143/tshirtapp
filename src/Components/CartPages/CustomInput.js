import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core';
import { styles } from './CartPagesContainer.style';
const CustomInput = ({ classes, ...props }) => {

  return (
    <div>
      <TextField
        id="standard-basic"
        label={props.textlabel}
        onChange={props.onChange}
        error={props.error}
        value={props.value}
        helperText={props.helperText}
        name={props.name}
        onBlur={props.onBlur}
        type={props.type}
        className={classes.inputWidth}
        InputLabelProps={{
            style:{
              fontSize:'14px'
            }
        }}
        InputProps={{
          style: {
            fontSize: '14px'
          }
        }} 
        disabled={props.disabled}
        />
    </div>
  )
}

export default withStyles(styles)(CustomInput);
