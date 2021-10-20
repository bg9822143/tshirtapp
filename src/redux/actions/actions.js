import { SET_SELECTED_VARIANT, SHOW_MEASUREMENT, UPDATE_CONFIGURATOR, UPDATE_VARIANTS } from "../constants";

const setSelectedVariant = (i) => ({
  type: SET_SELECTED_VARIANT,
  payload: i,
});

const showMeasurement = (_showid) => ({
  type: SHOW_MEASUREMENT,
  payload: _showid,
});

const updateVariants = (variants) => ({
  type: UPDATE_VARIANTS,
  payload: variants,
});

const updateConfigurator = (classification, config) => ({
  type: UPDATE_CONFIGURATOR,
  payload: { classification, config },
});

export {
  setSelectedVariant,
  showMeasurement,
  updateVariants,
  updateConfigurator,
};
