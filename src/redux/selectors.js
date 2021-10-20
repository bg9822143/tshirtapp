export const selectCurrentVariant = (state) => {
  const { variants, selectedVariantIndex } = state.reducer;
  return variants[selectedVariantIndex];
};

export const selectConfigurator = (state) => state.reducer.configuratorItem;

export const selectVariantIndex = (state) => state.reducer.selectedVariantIndex;

export const selectVariants = (state) => state.reducer.variants;

export const selectMeasurement = (state) => state.reducer.measurement;
