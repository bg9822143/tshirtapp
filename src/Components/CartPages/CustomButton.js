import React from "react";
import { btnstyles } from "./Button.style";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
const CustomButton = (props) => {
  return (
    <div>
      <Button
        className={props.classes.btnColor}
        variant="contained"
        fullWidth
        type="submit"
        onClick={()=>props.onClick()}
      >
        Checkout
      </Button>
    </div>
  );
};

export default withStyles(btnstyles)(CustomButton);