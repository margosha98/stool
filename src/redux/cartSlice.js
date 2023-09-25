import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  itemsCount: 0,
  itemsCost: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const findedItem = (state.items.find((el) => el.id === action.payload.id))
      if (findedItem) {
        findedItem.count +=1
      }
      else {
        state.items.push({...action.payload, count: 1} )
      }
      state.itemsCost = state.items.reduce((prev, current) => prev + current.count*current.price, 0)
      state.itemsCount = state.items.reduce((prev, cur) => prev + cur.count, 0)
    },
    decrementItem: (state, action) => {
      state.sort = action.payload;
    },
    deleteItem: (state, action) => {
      state.items.filter((item) => item.id!==action.payload)
    },
    clearCart: (state, action) => {
      state.items = []
      state.itemsCount = 0
      state.itemsCost = 0
    },
  },
});

export const { addItem, setSortType } = cartSlice.actions;

export default cartSlice.reducer;
