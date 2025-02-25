import { cakeActions } from '../cake/cakeSlice'

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  numOfIcecreams: 10
}

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: state => {
      state.numOfIcecreams--
    },
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(cakeActions.ordered, state => {
      state.numOfIcecreams--
    })
  }
  // extraReducers: {
  //   ['cake/ordered']: state => {
  //     state.numOfIcecreams--
  //   }
  // }
})

export default icecreamSlice.reducer
export const icecreamActions = icecreamSlice.actions
