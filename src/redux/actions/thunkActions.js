import { fetchVariants } from "../../api/apiUtils";
import { selectCurrentVariant } from "../selectors";
import { updateConfigurator, updateVariants } from "./actions";

export function getVariants() {
  return (dispatch) => {
    return fetchVariants()
      .then((res) => {
        dispatch(updateVariants(res.variants));
        return res.variants;
      });
  };
}

export function getReplacementOption(value) {
  return (dispatch, getState) => {
    const state = getState();
    const { id } = selectCurrentVariant(state);
    dispatch(updateConfigurator(id, value));
    // return fetchReplacementOptions(id, value)
    //   .then((res) => {
    //     dispatch(updateConfigurator(id, res));
    //     return res.option;
    //   });
  };
}
