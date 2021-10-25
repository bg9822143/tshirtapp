import {
  DASHBOARD_CUSTOMERS_GET,
  GET_SELECTED_CUSTOMER,
  MEASUREMENT_VARIANT_DATA,
  PARENT_VARIANTS_GET,
  PURCHASE_ITEM,
  SELECTED_CUSTOMER_ID,
  SET_SELECTED_VARIANT,
  SET_USER_INFORMATION,
  SHOW_MEASUREMENT,
  UPDATE_CONFIGURATOR,
  UPDATE_VARIANTS,
  ADD_TO_CART,
  SELECT_MEASUREMENTS
} from "../constants";
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
  itemPurchased: 0,
  userInfo: [],
  parentVariants: [],
  measurementVariantData: [],
  dashboardCustomers: [],
  selectedCustomerID: '',
  selectedCustomer: [],
  purchasedItem: [],
  addToCart: '',
  measurementValues: [
  ]
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
    case SET_USER_INFORMATION:
      return { ...state, userInfo: [action.payload] }
    case PARENT_VARIANTS_GET:
      return { ...state, parentVariants: action.payload }
    case MEASUREMENT_VARIANT_DATA:
      return { ...state, measurementVariantData: action.payload }
    case DASHBOARD_CUSTOMERS_GET:
      return { ...state, dashboardCustomers: action.payload }
    case SELECTED_CUSTOMER_ID:
      return { ...state, selectedCustomerID: action.payload }
    case GET_SELECTED_CUSTOMER:
      return { ...state, selectedCustomer: [action.payload] }
    case PURCHASE_ITEM:
      return { ...state, purchasedItem: [...state.purchasedItem, action.payload] }
    case ADD_TO_CART:
      return { ...state, addToCart: action.payload }
    case SELECT_MEASUREMENTS:
      return { ...state, measurementValues: [action.payload] }
    default:
      return state;
  }
};

export default reducer;
