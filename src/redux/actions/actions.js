import {
  ADD_TO_CART,
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
  SELECT_MEASUREMENTS
} from "../constants";

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

const userInfo = (_userInfo) => ({
  type: SET_USER_INFORMATION,
  payload: { _userInfo },
});

const parentVariantsGet = (_data) => ({
  type: PARENT_VARIANTS_GET,
  payload: _data,
});

const measurementVariantData = (_data) => ({
  type: MEASUREMENT_VARIANT_DATA,
  payload: _data,
});

const dashboardCustomers = (_data) => ({
  type: DASHBOARD_CUSTOMERS_GET,
  payload: _data,
});

const customerSelectedID = (_id) => ({
  type: SELECTED_CUSTOMER_ID,
  payload: _id,
});

const getSelectedCustomer = (_data) => ({
  type: GET_SELECTED_CUSTOMER,
  payload: _data,
});
const purchasedItem = (_data) => ({
  type: PURCHASE_ITEM,
  payload: _data,
});

const addToCart = (_data) => ({
  type: ADD_TO_CART,
  payload: _data
})

const measurementSelection = (_data) => ({
  type: SELECT_MEASUREMENTS,
  payload: _data
})

export {
  setSelectedVariant,
  showMeasurement,
  updateVariants,
  updateConfigurator,
  userInfo,
  parentVariantsGet,
  measurementVariantData,
  dashboardCustomers,
  customerSelectedID,
  getSelectedCustomer,
  purchasedItem,
  addToCart,
  measurementSelection
};
