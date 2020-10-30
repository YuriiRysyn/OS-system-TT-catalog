import { configureStore, createSlice } from '@reduxjs/toolkit';
import mockedGoods from '../api/goods.json';

const initialState = {
  userRole: 'user',
  goods: mockedGoods,
};

const slice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    setState: (state, { payload }) => {
      state.userRole = payload.userRole;
      state.goods = payload.goods;
    },

    setUser: (state, { payload: { userRole } }) => {
      state.userRole = userRole;
    },

    addGood: (state, { payload }) => {
      const id =
        state.goods.length === 0
          ? 1
          : state.goods.reduce(
              (accum, currentGood) => (accum > currentGood.id ? accum : currentGood.id),
              0,
            ) + 1;
      state.goods.push({ ...payload, id });
    },

    deleteGood: (state, { payload: { goodId } }) => {
      state.goods = state.goods.filter((good) => good.id !== goodId);
    },

    deleteGoods: (state) => {
      state.goods = [];
    },
  },
});

export const storeActions = slice.actions;

export const store = configureStore({
  reducer: slice.reducer,
});
