import {
  SET_SELECTED_VARIANT,
  SHOW_MEASUREMENT,
  UPDATE_CONFIGURATOR,
  UPDATE_VARIANTS,
} from "../redux/constants";
// import defaultConfig from "./../data/default-configurator.json";

const initialState = {
  variants: [],
  selectedVariantIndex: -1,
  measurement: -1,
  configuratorItem: {
    stoff: "8136",
    kragen: "kent",
    passform: "comfort",
    schnitt: "langarm",
    knopfleiste: "eingeschlagen",
    brusttasche: "ohne_tasche",
    manschette: "1_knopf",
    monogramm: "kein_monogramm",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_VARIANTS:
      return { ...state, variants: action.payload };
    case SET_SELECTED_VARIANT:
      return { ...state, selectedVariantIndex: action.payload };
    case SHOW_MEASUREMENT:
      return { ...state, measurement: action.payload };
    case UPDATE_CONFIGURATOR:
      const { classification, config } = action.payload;
      return {
        ...state,
        configuratorItem: {
          ...state.configuratorItem,
          [classification]: config,
          //   itemarticlelist: {
          //     ...state.configuratorItem.itemarticlelist,
          //     [classification]: config,
          //   },
        },
      };
    default:
      return state;
  }
};

export default reducer;
