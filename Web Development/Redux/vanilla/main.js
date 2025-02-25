import {
  createSlice,
  configureStore,
  bindActionCreators,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import { logger } from "redux-logger";
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    numOfCackes: 10,
    numOfIce: 10,
  },
  reducers: {
    incremented: (state) => {
      state.numOfCackes += 1;
    },
    decremented: (state) => {
      state.numOfCackes -= 1;
    },
    restock: (state, action) => {
      state.numOfCackes += action.payload;
    },
  },
});
const rootReducer = combineReducers({
  counter: counterSlice.reducer,
});
const store = configureStore({
  reducer: counterSlice.reducer,
  middleware: () => [logger],
});
const { incremented, decremented, restock } = counterSlice.actions;
const unsubscribe = store.subscribe(() =>
  console.log("pdate state ", store.getState())
);
const actions = bindActionCreators(
  { incremented, decremented, restock },
  store.dispatch
);
actions.incremented();
unsubscribe();
