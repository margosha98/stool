import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: '',
  sort: { name: 'популярности', type: 'rating' },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSortType: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { setCategory, setSortType } = filterSlice.actions;

export default filterSlice.reducer;
