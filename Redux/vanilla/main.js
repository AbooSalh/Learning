import { createSlice, configureStore } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 10,
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});
const store = configureStore({
  reducer: counterSlice.reducer,
});
const { incremented, decremented } = counterSlice.actions;
console.log("inital state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("pdate state ", store.getState())
);
store.dispatch(incremented());
console.log("inital state", store.getState());
unsubscribe();
