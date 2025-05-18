import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FiltersState {
  priceRange: [number, number];
  applied: boolean; // добавляем флаг
}

const initialState: FiltersState = {
  priceRange: [0, 2379],
  applied: false,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setPriceRange(state, action: PayloadAction<[number, number]>) {
      state.priceRange = action.payload;
      state.applied = false;  // при изменении фильтра сбрасываем applied
    },
    applyFilters(state) {
      state.applied = true;
    },
    resetFilters(state) {
      state.priceRange = [0, 2379];  // начальное значение
      state.applied = false;         // убираем признак активного фильтра
    }
  }
});

export const { setPriceRange, applyFilters, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
