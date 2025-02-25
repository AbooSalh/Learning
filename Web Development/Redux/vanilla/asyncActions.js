import { createSlice, configureStore, applyMiddleware } from "@reduxjs/toolkit";
import axios from "axios";
import { thunk } from "redux-thunk";
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    loading: false,
    users: [],
    error: "",
  },
  reducers: {
    fetch_user_requested: (state) => {
      state.loading = true;
    },
    fetch_user_success: (state, action) => {
      state.loading = false;
      state.error = "";
      state.users = action.payload;
    },
    fetch_user_failed: (state) => {
      state.loading = false;
      state.users = [];
      state.error = "Failed to fetch users";
    },
  },
});
const store = configureStore({
  reducer: counterSlice.reducer,
  middleware: () => [thunk],
});

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(counterSlice.actions.fetch_user_requested());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data.map((user) => {
          return user.id;
        });
        dispatch(counterSlice.actions.fetch_user_success(users));
      })
      .catch((err) => {
        dispatch(counterSlice.actions.fetch_user_failed(err.message));
      });
  };
};
 store.subscribe(() =>
  console.log(store.getState())
);
store.dispatch(fetchUsers())