import React, { useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import { styles } from "./Variant.style";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedVariant } from "../../redux/actions/actions";
import Box from "@material-ui/core/Box";
import { selectVariantIndex, selectVariants } from "../../redux/selectors";
import { getVariants } from "../../redux/actions/thunkActions";

const Variant = ({ classes }) => {
  const dispatch = useDispatch();
  const variants = useSelector(selectVariants);
  const activeIndex = useSelector(selectVariantIndex);

  useEffect(() => {
    document.addEventListener("click", (_ev) => {
      dispatch(setSelectedVariant(-1));
    });
    dispatch(getVariants());
  }, []);

  return (
    <Box
      display="flex"
      displayContent="row"
      flexWrap="wrap"
      justifyContent="space-evenly"
      width="100%"
    >
      {variants.map((item, i) => (
        <Box
          key={i}
          onClick={(ev) => {
            // getVariantData(item.id);
            dispatch(setSelectedVariant(i));
            ev.stopPropagation();
          }}
          sx={{ marginBottom: "8px" }}
        >
          <Box className={classes.variantPicture}>
            {activeIndex === i ? (
              <img src={item.activeImg} />
            ) : (
              <img
                src={item.inactiveImg}
                className={classes.variantimgActive}
              />
            )}
          </Box>
          <Box>{item.title}</Box>
        </Box>
      ))}
    </Box>
  );
};

export default withStyles(styles)(Variant);
